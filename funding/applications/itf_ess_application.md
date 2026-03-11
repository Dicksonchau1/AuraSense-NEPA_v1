---
# AuraSense Limited — ITF Enterprise Support Scheme Application
**Programme:** Innovation & Technology Fund — Enterprise Support Scheme
**Funding:** Up to HK$10,000,000 (1:1 company matching)
**Portal:** itcfas.itf.gov.hk
**Duration:** 24 months
**Date:** March 2026

---

## Section 1 — Project Title

"Development of a Neuromorphic Spike-based Facade Scanning Vision Codec (SFSVC) for Autonomous MBIS-Compliant Building Inspection in Hong Kong"

---

## Section 2 — Project Summary

AuraSense Limited proposes the development and commercialisation of the Spike-based Facade Scanning Vision Codec (SFSVC), a globally novel neuromorphic artificial intelligence system designed to automate Hong Kong's Mandatory Building Inspection Scheme (MBIS) facade inspection process. The project's technical scope encompasses the iterative development of the STDP v3 adaptive learning algorithm, FPGA-based hardware acceleration to achieve sub-2ms inference latency, and the implementation of a multi-spectral sensor fusion model combining LiDAR, thermal, and RGB data.

The innovation lies in the categorical shift from conventional, power-intensive convolutional neural networks to a sparse, event-driven neuromorphic architecture. This approach enables real-time, edge-native defect detection with a 10–50× reduction in power consumption compared to cloud-GPU alternatives. SFSVC is the only system purpose-built for the Hong Kong regulatory environment, producing defect classifications natively aligned with MBIS risk bands (IA/P1/P2/ADV). The project will integrate these capabilities into an autonomous drone platform, culminate in three commercial pilots with local Registered Inspector (RI) firms, and establish a longitudinal dataset of Hong Kong's unique building facade typologies. This project directly addresses the public safety risks associated with facade failures while advancing Hong Kong's leadership in the global deep-tech landscape.

---

## Section 3 — Technical Feasibility Report

### 3.1 Current TRL Assessment

SFSVC is currently at Technology Readiness Level (TRL) 6–7. The core neuromorphic engine, including the 8-lane parallel processing pipeline and the basic spike-based temporal codec, has been implemented in C++ and validated in laboratory environments using synthetic and semi-structured building facade datasets. The enterprise platform, including the RI dashboard and MBIS-compliant report generation module, is fully functional. The system currently achieves a 3.8ms P95 latency on edge-equivalent hardware and 87% crack detection accuracy on lab-controlled defect samples.

### 3.2 Technical Gaps to TRL 8

To reach TRL 8 (system complete and qualified) and prepare for full-scale commercial deployment, five critical technical gaps must be bridged:

**a) STDP v3 Algorithm Accuracy:** Transitioning from lab-controlled defect samples to real-world Hong Kong building facades requires an STDP algorithm that can generalise across diverse materials (mosaic tiles, exposed aggregate, aluminium curtain walls) and varying lighting conditions. Target: >92% crack detection accuracy.

**b) FPGA Acceleration:** While current C++/AVX2 optimisations achieve sub-4ms latency, scaling to concurrent 8-lane multi-spectral processing on low-power edge devices requires offloading core spike-codec operations to FPGA hardware. Target: sub-2ms P95 latency.

**c) Multi-spectral Fusion Model:** Integrating LiDAR depth data and thermal anomaly signatures with RGB imagery is essential for differentiating between surface dirt and structural cracks, and for detecting subsurface delamination.

**d) Autonomous Drone Integration:** Developing a robust flight control layer that enables waypoint navigation and stable hover at fixed standoff distances from building facades, specifically within Hong Kong's high-density urban canyons.

**e) BD/MBIS Certification Pathway:** Establishing a formal validation framework with Registered Inspectors to ensure SFSVC outputs meet the legal evidentiary requirements for MBIS compliance.

### 3.3 Technical Approach for Each Gap

- **STDP v3:** We will implement a multi-layer spike-based neural network with lateral inhibition and dopamine-modulated plasticity to improve feature discrimination in complex backgrounds. Training will utilize a newly collected local dataset of 10,000+ annotated HK building facade tiles.
- **FPGA:** We will implement the spike-based convolutional kernels and temporal differencing logic in RTL (VHDL/Verilog) on Xilinx Zynq UltraScale+ MPSOC hardware, utilizing high-bandwidth memory (HBM) for low-latency weight access.
- **Fusion:** We will develop a lightweight residually-connected fusion network that projects LiDAR point clouds and thermal maps into the RGB coordinate frame, using attention-based weighting to prioritize sensors based on environmental confidence levels.
- **Drone:** We will utilize an onboard NVIDIA Orin Nano or equivalent edge module interfaced with a CAAS-compliant flight controller, using the SFSVC 'looming lane' for real-time obstacle avoidance and positioning.
- **Certification:** We will convene a panel of 5 Registered Inspectors to conduct double-blind validation of SFSVC-generated reports against manual rope-access benchmarks on 3 commercial pilot buildings.

### 3.4 Why HK-based R&D is Essential

Hong Kong's built environment is unique. The city's building stock is characterized by specific construction materials (such as mosaic tiles and exposed aggregate) and extreme vertical density that creates complex lighting, shadow, and GPS-denied conditions. An AI system trained on international building datasets cannot reliably detect defects in the HK context. Furthermore, the MBIS regulatory framework is unique to Hong Kong; alignment with its specific risk-banding and reporting requirements requires iterative testing and feedback from HK-based Registered Inspectors and the Buildings Department.

### 3.5 Expected Technical Outputs

The project will deliver: (1) The SFSVC STDP v3 production-grade defect detection engine; (2) An FPGA-accelerated edge compute module for real-time neuromorphic processing; (3) An autonomous drone flight control package for facade scanning; (4) A proprietary dataset of Hong Kong building facade defects; and (5) A validated MBIS-compliant automated reporting platform.

---

## Section 4 — R&D Project Proposal

### Phase 1 (M1–M12): Core Engine R&D

The first 12 months will focus on fundamental algorithm advancement and hardware acceleration.
- **STDP v3 Development:** We will execute three major iterations of the STDP learning rule, benchmarking each against the collected HK building dataset. We will focus on improving the signal-to-noise ratio in low-contrast crack detection scenarios.
- **FPGA Prototyping:** We will select and procure Xilinx Zynq development boards and begin porting the C++ spike codec to RTL. By M9, we expect to demonstrate the first FPGA-accelerated 8-lane inference pass.
- **Dataset Collection:** We will scan 5 representative HK buildings (various ages and typologies) to create an initial training and validation dataset. Each building will be scanned at 4 elevations with paired RGB, thermal, and LiDAR data.
- **Multi-spectral Fusion v1:** We will implement the first version of the fusion model and evaluate its performance in reducing false positives (e.g., differentiating between shadows and cracks).

### Phase 2 (M13–M24): Integration + Commercial Trial

The second year will focus on system integration, autonomous flight, and commercial validation.
- **Drone Integration:** We will integrate the edge compute module and multi-spectral sensors onto the drone platform and conduct autonomous flight trials in a controlled environment (CAD sandbox).
- **MBIS Compliance Validation:** We will engage our RI panel to review the reports generated during the pilots, comparing them against the ground truth established by manual inspection.
- **Commercial Pilots:** We will execute 3 paid commercial pilots on buildings managed by our partner RI firms. These pilots will serve as the final validation of the system's operational readiness.
- **Platform Scaling:** We will stress-test the enterprise dashboard's ability to handle data from 50 concurrent building inspections, preparing for full SaaS launch.

---

## Section 5 — Budget Breakdown (HK$10,000,000 over 24 months)

AuraSense Limited will provide HK$5,000,000 in matching funds, for a total project budget of HK$10,000,000.

| Item | Month Range | Amount (HK$) |
|---|---|---|
| Personnel: Founder/CTO (24 months) | M1–M24 | 1,440,000 |
| Personnel: Neuromorphic Engineer ×2 (20 months) | M5–M24 | 2,400,000 |
| Personnel: BD Manager ×1 (12 months) | M13–M24 | 720,000 |
| Personnel: Part-time RA ×1 (24 months) | M1–M24 | 480,000 |
| Hardware: FPGA dev boards ×4 | M1–M3 | 320,000 |
| Hardware: Drone fleet ×3 + sensors | M1–M6 | 680,000 |
| Hardware: Edge compute modules ×10 | M6–M12 | 400,000 |
| Hardware: LiDAR + thermal cameras ×6 | M3–M9 | 400,000 |
| R&D: Cloud compute (GPU, 24 months) | M1–M24 | 360,000 |
| R&D: Materials + consumables | M1–M24 | 200,000 |
| IP: PCT prosecution + HK national phase | M1–M12 | 300,000 |
| Pilots: 3 commercial trials (subsidised) | M13–M24 | 560,000 |
| Overhead (capped at 15%) | | 1,340,000 |
| **TOTAL** | | **10,000,000** |

---

## Section 6 — KPIs

| KPI | M12 Target | M24 Target |
|---|---|---|
| Detection Accuracy (Crack) | 89% | 92%+ |
| P95 Latency (FPGA) | 3.5ms (simulated) | <2ms (hardware) |
| Dataset size (Annotated tiles) | 25,000 | 100,000+ |
| Buildings scanned (Total) | 5 | 20+ |
| RI firms onboarded (SaaS) | 1 | 3 |
| Commercial pilots completed | 0 | 3 |
| Patent filings | 1 (PCT) | 2 (1 granted/pending) |
| BD Meetings Held | 12 | 40 |

---

## Section 7 — HK R&D Relevance

This project is deeply rooted in the Hong Kong context. The necessity of a local building dataset, the alignment with the specific MBIS regulatory framework, and the development of talent in neuromorphic engineering all serve to strengthen Hong Kong's innovation ecosystem. The intellectual property created will be owned and retained in Hong Kong, and the resulting technology has immediate export potential to other high-density global cities, positioning Hong Kong as a hub for deep-tech building safety solutions.

---

## Section 8 — IP Ownership Statement

AuraSense Limited retains 100% ownership of all intellectual property generated during this project. A PCT patent application was filed in March 2026. There are no third-party IP encumbrances. AuraSense is willing to discuss licensing opportunities for public sector use with relevant government departments, such as the Buildings Department and the Housing Authority.
