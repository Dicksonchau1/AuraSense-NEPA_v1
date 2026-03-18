# NEPA Coding Agent Instructions

This file is authoritative context for all AI coding agents (Copilot, Codex, Claude) operating in this repository. Read it fully before generating any code, PR, or file change.

---

## 1. Project identity

This repository is **NEPA — Neuromorphic Edge Perception Architecture**, a deterministic, CPU-native inspection runtime targeting infrastructure facades (MBIS, bridges, runways). The public brand is `www.aurasensehk.com`. The core engine is the **SFSVC** (Spike-based Facade Surface Vision Codec).

**Do not** refer to this project as "AuraSense drone AI" or use neuromorphic retina / drone swarm language in any user-facing copy. The correct framing is: deterministic edge runtime, CPU-only, offline-capable, SDK-distributable.

---

## 2. Repository layout rules

```
/                        ← static HTML site (served from docs/ via GitHub Pages)
docs/                    ← GitHub Pages artifact root (canonical deploy source)
shadow_model/            ← shadow anomaly layer: C++ headers + Python scripts
  shadow_proto_io.hpp
  shadow_avx2.hpp
  shadow_stdp.hpp
  shadow_replay_verify.py
  shadow_consolidate.py
  bundle_schema/
.github/
  workflows/pages.yml    ← ONLY workflow deploying to Pages (from docs/ path)
  copilot-instructions.md ← this file
```

**GitHub Pages rule:** The single canonical deploy workflow is `.github/workflows/pages.yml`, which uploads `./docs` as the artifact. Never create `static.yml` or any second workflow targeting the same `concurrency: group: "pages"`. If `static.yml` exists, it must be removed.

**Branch naming:** `feat/<topic>`, `fix/<topic>`, `algo/<topic>`, `docs/<topic>`. Never mix brand, deploy, and algorithm changes in a single PR.

---

## 3. Shadow anomaly layer — locked specification

All code touching the shadow model must conform to the following. No deviation without explicit human approval in the PR description.

### 3.1 Core parameters (immutable)
| Parameter | Value |
|---|---|
| Embedding dim D | **256** |
| Metric | **cosine** (dot product on L2-normalized vectors) |
| Prototypes per context K | **8** |
| Context key format | `defect_type#grade#zone_bucket` (ASCII, `#`-delimited) |
| zone_bucket derivation | `SHA256(zone_id)[0:2]` hex string (256 deterministic buckets) |
| Float format | IEEE-754 float32, little-endian |

### 3.2 File format signatures
- `prototypes.bin` header magic: `SHDWPROT` (8 bytes ASCII at offset 0)
- `adaptation.bin` header magic: `SHDWDELT` (8 bytes ASCII at offset 0)
- Header sizes: `ProtoFileHeader` = **64 bytes** (static_assert enforced), `DeltaFileHeader` = **32 bytes**
- Context records sorted lexicographically by `context_key` in both files
- Padding rule: after `key_bytes[key_len]`, pad to 4-byte alignment

### 3.3 Online STDP update rule
Anomaly score: `a = 1 - cosine_similarity`. Gated learning rate:
- `a <= 0.20` → `η = η0 = 0.010` (normal drift, full learning)
- `0.20 < a < 0.60` → `η = η0 * (0.60 - a) / (0.60 - 0.20)` (linear taper)
- `a >= 0.60` → `η = 0` (true anomaly, do not update)

Delta update: `δ_k ← (1 - 0.0005) * δ_k + η * (x - normalize(p_base + δ_k))`
Clamp invariant: `||δ_k||₂ <= 0.25` always enforced after every update.
Checkpoint: persist `adaptation.bin` every **512 events**.

### 3.4 Anomaly thresholds
| Threshold | Value | Meaning |
|---|---|---|
| `emit_anomaly_score` | 0.35 | Emit advisory event |
| `high_anomaly_score` | 0.55 | Severity = high |
| `adapt_low_anomaly_score` | 0.20 | Full learning floor |
| `adapt_high_anomaly_score` | 0.60 | Learning gate ceiling |

### 3.5 AVX2 dot-product constraint
The cosine similarity inner loop for D=256 **must** use `_mm256_fmadd_ps` with minimum 4-way unrolling. Both `x` and prototype vectors must be `alignas(32)`. No scalar fallback in the hot path — use a compile-time `#ifdef __AVX2__` guard with a scalar fallback only for non-AVX2 targets.

### 3.6 Audit chain
Every `shadow_anomaly_event` written to `shadow_audit.log` must include:
- `prev_entry_hash`: SHA-256 of canonical JSON of the previous entry (null for entry 0)
- `entry_hash`: SHA-256 of canonical JSON of this entry with `entry_hash` field set to `""`
- Canonical JSON = lexicographic key sort, no extra whitespace, `json.dumps(sort_keys=True, separators=(',',':'))`

The verifier `shadow_model/shadow_replay_verify.py` must pass on every session log before consolidation is permitted.

---

## 4. TD critic + STDP hybrid architecture

NEPA uses a two-layer neuromorphic learning system:

1. **STDP map layer** (on-chip / neuromorphic core): recurrent SNN with neurons indexed by `(zone × risk_mode)` tuples. STDP with asymmetric temporal windows builds a successor-representation-like weight matrix `W ≈ M(s,s')`. Theta-phase modulation compresses zone-transition sequences into STDP plasticity windows (~10–20ms burst).

2. **TD critic** (off-chip CPU sidecar): tabular TD(λ) over discretized facade states. Computes `δ_t = r_t + γV(s_{t+1}) - V(s_t)`. The reward function is: `r_t = α·coverage(s_t) - β·risk(s_t) - γ_time·Δt`.

3. **Three-factor modulation interface**: synapses hold eligibility traces `e_ij` (decay τ_e = 5–30s). At zone-transition boundaries, `Δw_ij ∝ δ_t · e_ij` is applied. Positive TD error boosts potentiation on active transitions; negative TD error suppresses or drives depression.

**Interface between layers:** Two channels only:
- Inbound to critic: sparse spike event stream (zone-transition events)
- Outbound from critic: scalar `δ_t` + occasional weight adjustment commands over SPI/UART

Do not embed TD arithmetic inside the neuromorphic core in the first implementation pass.

---

## 5. C++ codebase constraints (SFSVC engine)

- **Target standard:** C++17 minimum.
- **Latency SLA:** P95 < 0.5ms, P99 < 0.8ms per frame at 125+ FPS on 720p.
- **No dynamic allocation in hot path.** All buffers pre-allocated. No `std::vector` resize, no `new`/`delete` inside the frame processing loop.
- **Lock-free queues only** in the RT core: use `boost::lockfree::spsc_queue` or equivalent. No `std::mutex` in the critical path.
- **SIMD:** AVX2 mandatory for frame differencing (8–12× speedup over scalar). Use `__attribute__((target("avx2")))` or CMake target properties.
- **ODR discipline:** headers declare, `.cpp` files define. No inline implementations duplicated across both.
- `types.h` is the single source of truth for `UplinkPayload`, `ControlDecision`, `CrackStats`, `DetectionScheduler`. Add fields there; never redeclare in `.cpp`.

---

## 6. Python SDK constraints

- Public API surface: `SpikeCodec`, `CrackDetector`, `VideoProcessor` from `aurasense_sfsvc/`.
- `CrackDetector` must use the OpenCV CV pipeline (bilateral filter + CLAHE + Canny + morphological line kernels + IoU temporal tracking). **Never use seeded random generation** to simulate crack detections.
- Benchmark target: 0.45ms median, 2.52ms P95 per frame (Python SDK). Production C++ target: <0.5ms P95.
- Docker: multi-stage build. Services: `streamlit` (port 8501), `sdk`, `dev`.

---

## 7. Governance and bundle promotion

- Shadow bundle versions follow semver: `0.1.0`, `0.1.1`, etc.
- `bundle_hash_hex` = SHA-256 of `canonical(bundle.json with bundle_hash_hex="") + raw_bytes(prototypes.bin)`.
- Bundle promotion (new base version) requires: human approval + signed/attested release tag. No agent may self-promote a bundle.
- Consolidation script `shadow_consolidate.py` aggregates session deltas with weighted mean, clamps, renormalizes, and emits the candidate bundle. A human then reviews and tags.

---

## 8. What agents must NOT do

- Do not create a second GitHub Pages workflow. One workflow (`pages.yml` from `docs/`) only.
- Do not mix brand copy changes with algorithm or deployment changes in a single PR.
- Do not use `random.Random` or any seeded synthetic data for detection simulation.
- Do not add `std::mutex` or heap allocation to the SFSVC RT core frame path.
- Do not change `emit_anomaly_score`, `high_anomaly_score`, `delta_norm_max`, or `K` without a bundle version bump and human sign-off.
- Do not promote a shadow bundle version autonomously.
- Do not commit binary files > 1MB to `main` (use Git LFS or external storage for `*.bin`, `*.mp4`, `*.png` > 1MB).
