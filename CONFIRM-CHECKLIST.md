# CONFIRM-CHECKLIST — settle the assumptions before building

Every `[ASSUMED]`/`[CONFIRM]` in the design docs, gathered with a **proposed default**.

> **STATUS — RESOLVED 2026-05-26.** Fotis accepted **all defaults**, and the one open pick is
> settled: **A7 cycling org = IMBA**. Sections B–I stand exactly as the defaults shown below.
> The `[ASSUMED]` tags still scattered in the other docs now mean *confirmed first-pass values*
> — correct to build from, and still tunable in the dedicated balance pass.

**🛠 = was Milestone-1-blocking** (now settled).

---

## A. Certification schemes (real-world) — ✅ *resolved 2026-05-26*

**Every ladder has at least three levels** (L1 gate → L2 lead → L3 the committing routes).
- **A1** Sea kayak — **Paddle UK**: Sea Kayak Award → Leader → Advanced Leader. ✅
- **A2** Hiking — **HATEOA / UIMLA**: Hiking Guide → Mountain Leader (rep-gated) → International Mountain Leader. ✅
- **A3** Wilderness First Aid — HATEOA, cross-cutting. ✅
- **A4** Canyoning — **ICOpro**: Canyon Guide → Canyon Leader → Advanced Canyon Leader / Instructor. ✅
- **A5** Rafting — **IRF**: Raft Guide → Trip Leader → Raft Instructor. ✅
- **A6** Climbing — **UIAA / Mountain Training**: Single-Pitch Award → Rock Climbing Instructor → Multi-Pitch / Mountaineering Instructor. ✅
- **A7** Cycling/e-bike — **IMBA**: Trail Cycle Leader → Mountain Bike Leader → Advanced MTB Guide. ✅
- **A8** SUP — **Paddle UK**: SUP Award → SUP Leader → Advanced / Coastal SUP Leader. ✅

## B. Activity seasons & roles

- **B1** Core disciplines = hiking, canyoning, rafting, sea kayak, cycling. ✅ *confirmed*
- **B2** Niche = SUP, climbing. ✅ *confirmed*
- **B3** Canyoning, rafting, sea kayak all run **April–October**. ✅ *confirmed*
- **B4** Hiking — spring + autumn peak, summer high-altitude only. *default (assumed)*
- **B5** Cycling — spring–autumn (early/late in summer heat). *default (assumed)*
- **B6** SUP — late spring–early autumn, calm mornings. *default (assumed)*
- **B7** Climbing — spring + autumn; summer alpine only. *default (assumed)*

## C. Economy — starting position & pay

- **C1 🛠** Starting cash **€200** (+ outfitter €150, captain €200). *default (existing)*
- **C2 🛠** Start reputation **50**; Phase-1 goal **70**. *default (existing)*
- **C3** Route base pay ≈ **€60 (d1) / €130 (d2) / €200 (d3)**. *default (assumed)*
- **C4** Client multipliers — family ×1.0, tourist ×1.05, thrill ×1.15, corporate ×1.55. *default (existing)*
- **C5** Energy drain ≈ **20 / 28 / 36** by difficulty (+ weather); rest **+55**. *default (existing)*
- **C6 🛠** Fleet disciplines earn **per head** (revenue scales with group size, capped by fleet); hiking/climbing flat-ish. *default: yes*

## D. Fleet & loan numbers

- **D1 🛠** Fleet unit costs (std tier): kayak **€220**, raft **€900**, e-bike **€600** / std bike **€250**, client wetsuit **€70**, harness+helmet **€60**, SUP board **€350**. *default (assumed)*
- **D2 🛠** Loan — **Bank** €3k, ~10%/season, needs a cert or rep ≥ 55. *default*
- **D3 🛠** Loan — **Friend** €1.5k, 0%, default = lose the friendship + morale hit. *default*
- **D4 🛠** Loan — **Messier money** €5k, ~25%/season (or a weekly skim), default → escalating menace/catastrophe. *default*
- **D5** How dark should the dark option get? *default: threatening "visits" and gear sabotage, never anything graphic.*
- **D6** Can a "friend" lender later become a guide or partner? *default: yes — a nice long thread. Confirm.*

## E. The hire trigger (Phase 1 → 2)

- **E1** Trigger = repeatedly turning bookings away **and** rep ≥ 70 **and** cash ≥ €1,500 (a prerequisite, not the goal). *default*
- **E2** "Repeatedly" = about **5–8 turned-away bookings in a season**. *default — set the number?*

## F. Partnerships economics (§12) — *Phase 3+, not M1*

- **F1** Concierge/hotel cut ≈ **10–20%** (sometimes a personal kickback, sometimes the house). *default*
- **F2** Commission ladder: **direct ~0% < partnerships ~10–20% < OTAs ~20–30%**. *default — are the OTA/partner %s right?*
- **F3** Marquee-resort requirements: high liability insurance, accredited guides, clean/branded vehicles, multilingual, sustainability creds. *default — anything missing or wrong?*
- **F4** Fam trips and "preferred supplier" exclusivity are real levers. *default: yes*

## G. Sustainability (§13) — *Phase 3+, not M1*

- **G1** Which real scheme to reference — **Travelife / Green Key / a GSTC-recognised standard**? *pick one*
- **G2** Model it as a **performance rating *and* an earned certification** (the gap = greenwashing). *default: both*

## H. Guide labour market (§14) — *Phase 2+, not M1*

- **H1** Sources: raw locals, foreign seasonal pros, loyal returners, **+ FB/Instagram ads + friend-of-a-friend**. ✅ *confirmed*
- **H2** Pay = seasonal salary or day rate **+ tips**. *default — rough numbers?*
- **H3** A lot of the market is **grey/cash** vs fully contracted (ΕΦΚΑ). *default: yes, a real honest-vs-cheap choice. Confirm.*
- **H4** The deepest retention lever is **a stake/partnership** (→ legacy ending). *default: yes*

## I. Comfort grid (§16) — conditions × client type

- **I1** Families & tourists are sensitive to **choppy water, heat, cold, long/strenuous**; thrill-seekers tolerate them. *default*
- **I2** **Gentle conditions bore thrill-seekers** (the reverse mismatch). *default: yes*
- **I3** Corporate groups — sensitive to discomfort, reward smooth logistics over thrills. *default (assumed) — confirm?*

---

### How this gets used
Once you answer, I (or Claude Code) fold the confirmations back into the docs — replacing the
`[ASSUMED]`/`[CONFIRM]` tags with settled values — so the build works from facts, not guesses.
Nothing here blocks starting Milestone 1 except the **🛠** items, and those all have sensible
defaults you can simply accept.
