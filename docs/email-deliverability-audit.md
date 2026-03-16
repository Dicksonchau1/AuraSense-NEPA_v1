# AuraSense Email Deliverability Audit — aurasensehk.com

**Audit Date:** 2026-03-16  
**DNS Provider:** GoDaddy  
**Mail Provider:** Google Workspace  
**Secondary SMTP:** Amazon SES (include:amazonses.com in SPF)  
**Audited By:** Live MXToolbox checks (MX, SPF, DKIM, DMARC, Blacklist)

---

## Live DNS Audit Results (MXToolbox, 2026-03-15)

### MX Records — PASS

| Pref | Hostname | IP | TTL |
|------|----------|----|-----|
| 1 | smtp.google.com | 142.251.179.26 (Google LLC) | 60 min |
| 1 | smtp.google.com | 2607:f8b0:4004:c1f::1b (IPv6) | 60 min |

**Status:** Valid. Google Workspace MX confirmed. Both IPv4 and IPv6 present.

---

### SPF Record — PASS (with advisory)

**Current record:**
```
v=spf1 include:_spf.google.com include:amazonses.com ~all
```

| Check | Status |
|-------|--------|
| SPF Record Published | PASS |
| Single SPF Record | PASS |
| No deprecated records | PASS |
| Syntax valid | PASS |
| Lookup count OK (<10) | PASS |
| No recursive loops | PASS |
| No duplicate includes | PASS |
| DMARC Policy Enforcement | WARN (see DMARC section) |

**Advisory:** `~all` (SoftFail) means unauthorized senders are marked but not rejected. Once DMARC enforcement is raised to `quarantine` or `reject`, consider hardening to `-all`.

**Advisory:** `include:amazonses.com` is present — only keep this if you are actively sending via Amazon SES. If you are not using SES, remove it to reduce attack surface.

---

### DKIM — PASS

**Selector:** `google._domainkey.aurasensehk.com`  
**Key type:** RSA 2048-bit (strong)  
**Record:** Published and valid

| Check | Status |
|-------|--------|
| DKIM Record Published | PASS |
| DKIM Syntax Check | PASS |
| Public Key Present | PASS |

**No issues.** DKIM is correctly configured for Google Workspace with a 2048-bit key.

---

### DMARC Record — EXISTS but ENFORCEMENT WEAK

**Current record:**
```
v=DMARC1; p=none; rua=mailto:dmarc@aurasensehk.com; ruf=mailto:dmarc@aurasensehk.com; fo=1; sp=none; adkim=r; aspf=r
```

| Tag | Value | Notes |
|-----|-------|-------|
| p | none | Monitor only — no enforcement |
| rua | dmarc@aurasensehk.com | Aggregate reports enabled ✓ |
| ruf | dmarc@aurasensehk.com | Forensic reports enabled ✓ |
| fo | 1 | Report on any failure ✓ |
| sp | none | Subdomains also unenforced |
| adkim | r | Relaxed DKIM alignment |
| aspf | r | Relaxed SPF alignment |

**Issue:** `p=none` means receivers do NOT quarantine or reject spoofed mail — they only send you reports. This is the primary reason why bad actors can spoof aurasensehk.com and why your outbound reputation is lower than it should be.

**Required fix:** Upgrade DMARC policy in stages (see Remediation Plan below).

---

### Blacklist Check — CLEAN

**Domain:** aurasensehk.com (resolves to 185.199.108.153)  
**Result: Listed 0 times across 70 blacklists**

Including: Spamhaus DBL, Spamhaus ZEN, Barracuda, SpamCop, SURBL, Abusix, IBM DNS, SORBS, and 62 others — **all PASS.**

**Domain reputation is clean.** The 15-email bounce issue is NOT caused by blacklisting.

---

## Root Cause Analysis — Why 15/15 Emails Bounced

Given that:
- MX is correct (Google Workspace)
- SPF is valid and published
- DKIM is valid and published
- Domain is not blacklisted

The bounces are almost certainly caused by **one or more of the following**:

1. **DMARC p=none with relaxed alignment** — doesn't block delivery but signals immaturity to receivers. Some aggressive filters (Microsoft 365, Proofpoint) still downgrade or reject based on this.

2. **List quality** — Recipients may have invalid or non-existent email addresses. "User unknown" 550 bounces indicate the problem is the target addresses, not your domain.

3. **New domain sending cold outreach** — aurasensehk.com has no sending history. ISPs weight sending reputation heavily. Cold outreach from a new domain to unverified lists is frequently junked or bounced.

4. **Amazon SES include in SPF** — If you are not actually using SES, this include is anomalous and some aggressive filters flag this as a configuration mismatch signal.

5. **DMARC alignment mode is relaxed** — `adkim=r; aspf=r` is acceptable but combined with `p=none` provides zero protection. Receivers using DMARC enforcement may not trust this domain.

---

## Remediation Plan

### Step 1 — Fix DMARC enforcement (GoDaddy DNS)

Update `_dmarc.aurasensehk.com` TXT record:

**Phase 1 (now) — Already done, keep monitoring:**
```
v=DMARC1; p=none; rua=mailto:dmarc@aurasensehk.com; ruf=mailto:dmarc@aurasensehk.com; fo=1; sp=none; adkim=r; aspf=r
```
Check your `dmarc@aurasensehk.com` inbox for reports. Once you confirm only Google Workspace is sending:

**Phase 2 (after 1-2 weeks of clean reports):**
```
v=DMARC1; p=quarantine; pct=50; rua=mailto:dmarc@aurasensehk.com; ruf=mailto:dmarc@aurasensehk.com; fo=1; sp=quarantine; adkim=r; aspf=r
```

**Phase 3 (full enforcement — target within 1 month):**
```
v=DMARC1; p=reject; rua=mailto:dmarc@aurasensehk.com; ruf=mailto:dmarc@aurasensehk.com; fo=1; sp=reject; adkim=r; aspf=r
```

---

### Step 2 — Clean up SPF

If you are NOT using Amazon SES, remove it:
```
v=spf1 include:_spf.google.com ~all
```
If you ARE using Amazon SES (transactional emails, CRM), keep the current record.

Once DMARC is at reject, optionally harden:
```
v=spf1 include:_spf.google.com -all
```

---

### Step 3 — Verify DKIM is active in Google Workspace Admin

1. Go to [admin.google.com](https://admin.google.com)
2. Apps → Google Workspace → Gmail → Authenticate email
3. Confirm DKIM signing status shows **Active** for aurasensehk.com
4. The selector should be `google` (confirmed present in DNS)

If it shows Inactive, click "Start authentication" and wait 24h for full activation.

---

### Step 4 — Email list hygiene before next send

- Run all target addresses through an email verification service (ZeroBounce, NeverBounce, or Bouncer) before sending
- Only send to **Valid** status addresses
- Treat **Accept-All / Catch-All** with caution — limit to 5-10 per day initially
- Discard all **Invalid / Unknown** addresses permanently

---

### Step 5 — Sending warm-up protocol

| Week | Daily Volume | Condition |
|------|-------------|----------|
| 1 | 10–20 | Only verified contacts, no cold lists |
| 2 | 30–40 | Bounce rate <3%, zero spam complaints |
| 3 | 50–75 | Consistent inboxing confirmed |
| 4+ | 100+ | DMARC upgraded to quarantine |

- Send from `dickson@aurasensehk.com` or similar personal address — avoid `info@` / `noreply@`
- Vary message content; avoid identical blasts
- Space follow-ups: +4 days, +7 days, then stop

---

### Step 6 — Ongoing monitoring

| Frequency | Action |
|-----------|--------|
| Weekly | Check blacklists at mxtoolbox.com/blacklists |
| Weekly | Review DMARC aggregate reports at dmarc@aurasensehk.com |
| After any bounce spike | Re-run MX/SPF/DKIM/DMARC checks immediately |
| Monthly | Re-validate sending list quality |

---

## Current DNS Record Summary

| Record | Host | Value | Status |
|--------|------|-------|--------|
| MX | @ | smtp.google.com (priority 1) | PASS |
| TXT/SPF | @ | v=spf1 include:_spf.google.com include:amazonses.com ~all | PASS |
| TXT/DKIM | google._domainkey | v=DKIM1; k=rsa; p=[2048-bit key] | PASS |
| TXT/DMARC | _dmarc | v=DMARC1; p=none; rua=... | WARN — upgrade to quarantine/reject |

---

## Safe-to-Send Decision

| Condition | Status |
|-----------|--------|
| MX valid | YES |
| SPF valid | YES |
| DKIM valid | YES |
| DMARC enforced | NO — p=none |
| Blacklisted | NO |
| List verified | UNKNOWN — verify before sending |
| Domain warmed up | NO |

**Safe to resume cold outreach at scale: NO**  
**Safe to send diagnostic/warm tests to verified inboxes: YES**  
**ETA to safe cold outreach: ~2–4 weeks after DMARC upgrade + list hygiene**

---

*Audit generated: 2026-03-16 | Tools: MXToolbox SuperTool | Provider stack: Google Workspace + GoDaddy DNS*
