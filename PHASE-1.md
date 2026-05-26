# PHASE-1.md — the solo guide, deepened

The build spec for **Phase 1**, expanding `PHASE-ARCHITECTURE.md §7.1` into something Claude
Code can implement. It **evolves the existing `index.html`** (which already ships a strong
hiking-only Phase 1) rather than replacing it.

> **Status.** v1 draft, 2026-05-25. Sections 1–5 are drafted substantively; 6–10 are first-pass
> and marked *to deepen next*. `[ASSUMED]` = my guess, awaiting Fotis's yes/no.

---

## 1. What Phase 1 is — and what's already built

Phase 1 is the **floor**: you *are* the guide, and everything later phases automate starts
here as something you do with your own hands. The trail has to be made genuinely lovable,
because it is the collateral for every later ache (§3.1, §5).

**Already in `index.html`** (hiking-only): forecast → choose trip → pack (tiered personal
ownership) → trailhead situation → 1–2 trail events → trip complete (reviews + fee/tip +
preparedness verdict) → shop / certs / rest → the season cycle. The voice, the economy, and the
day loop are solid.

**Deepening Phase 1 means adding:**
1. **Discipline choice + per-discipline content** — the game is no longer hiking-only.
2. **A discipline-aware cert ladder.**
3. **Season-to-season growth** toward "master multiple activities."
4. **The four-movement year** (pre-season roster/setup + post-season wind-down, §9).
5. **Seeds of the people and voice** that later phases pay off (storytelling, empathy — §14).

---

## 2. The Phase 1 fantasy and arc

You begin broke, tired, and learning on the job; you end a guide who knows their patch and can
run several disciplines with quiet competence. Money is tight — every euro of gear is a real
decision — and the mountains and sea are the reward.

**Across 2–3 seasons:**
- *Season 1* — survive, learn your starting discipline, build a name on a handful of routes.
- *Season 2* — add a second discipline (learned over winter), earn certs, push reputation,
  start being *asked for* by name.
- *By the Phase-1→2 trigger* — you're good enough that demand exceeds one pair of legs. That's
  not a victory screen; it's the quiet problem that makes you hire (§9).

---

## 3. The starting choice (character creation)

Three picks. The current game already has **background** and **starting kit**; we add
**discipline**.

- **Starting discipline (new).** One of the seven (`PHASE-ARCHITECTURE §7.1`). It sets your
  opening gear shop, the routes you can run, your trailhead/trail events, and your first cert
  path. **Core** disciplines (hiking, canyoning, rafting, sea kayaking, cycling) are gentler
  starts; **niche** ones (SUP, climbing) are harder, narrower openings for players who want a
  challenge. *[ASSUMED]* hiking remains the recommended default for a first playthrough.
- **Background (existing, comic).** medic, charmer, outfitter, navigator, shepherd, captain,
  goatherd, animator, chef, busker — each tints outcomes, tips, or economy. *[ASSUMED]* some
  backgrounds pair naturally with disciplines (captain → sea kayaking; goatherd → alpine
  hiking) and could give a small same-discipline bonus.
- **Starting kit.** A few discipline-appropriate items within an opening budget.

*[ASSUMED]* starting cash €200 (+ background bonuses), start rep 50, as today.

---

## 4. The deepened core day loop

The existing loop stays; each step gains a **discipline dimension**:

- **Forecast** (built) — weather now bites differently per discipline: **meltemi/wind** kills
  sea kayak & SUP; a **storm** over a gorge is a **flash-flood** danger for canyoning/rafting,
  not just an off-the-ridge danger for hiking; **heat** punishes exposed hikes and cycling.
- **Choose the day's trip** — from the disciplines you currently offer, with the route list
  filtered by discipline × cert × weather. (Today `ROUTES` is hiking-only; see §5.)
- **Pack** (built, tiered) — discipline-specific gear lines; `recommended(route, weather)`
  becomes discipline-and-weather aware (a wetsuit matters for canyoning, a spray-skirt for
  kayaking, poles for a long hike).
- **Trailhead** (built) — discipline-specific meet-the-group beats: the kayaker with no idea
  how to wet-exit; the canyoner who "can swim, basically"; the cyclist whose brakes sing.
- **Trail events** (built) — discipline hazards (capsize, flash flood, a jammed rappel, a
  mechanical mid-climb) alongside the shared ones (weather, injury, a wonder-of-the-trail beat).
- **Trip complete** (built) — reviews, fee + tip, preparedness verdict. Storytelling and
  empathy (future guide skills, §14) are foreshadowed here as the things that lift a good trip
  into a five-star, big-tip one.

---

## 5. The discipline system (the big new content)

Each discipline is a content bundle. *Gear lists and seasons are `[ASSUMED]` — see the
activities table in `PHASE-ARCHITECTURE §7.1` and confirm.*

**Data change:** `ROUTES` entries gain an **`activity` type** (or a list — a place like the
**Neda gorge** can host *hiking, rafting, and canyoning*, each a different trip with different
kit and weather sensitivity). The gear shop, `recommended()`, trailhead/trail event pools, and
cert gating all branch on the active discipline. *The full shop system (item kinds, quality
tiers, shared essentials, comfort & delight) and every per-discipline gear catalogue live in
`DISCIPLINES.md`.*

| Discipline | Core gear line | Signature hazards | Weather sensitivity | Deepening cert |
|---|---|---|---|---|
| **Hiking** | boots, poles, map, water, snacks, shell, first-aid | turned ankle, lost path, heat, exposure | heat, storm, mist | Mountain Leader (alpine) |
| **Canyoning** | wetsuit, harness, rope, helmet, descender, dry bag | **flash flood**, stuck rappel, cold water | storm = danger; heat = fine | Canyon & Gorge Leader |
| **Rafting** | raft, paddles, PFDs, helmets, wetsuits, throw-bag | capsize, swimmer loose, strainer | storm/flow level | Water-safety *[ASSUMED]* |
| **Sea kayaking** | kayak, paddle, PFD, spray-skirt, dry bag, pump | capsize, offshore wind, sea state | **meltemi/wind**, sea state | Water-safety *[ASSUMED]* |
| **SUP** (niche) | board, paddle, leash, PFD | fall, wind drift, cold | wind, any chop | Water-safety *[ASSUMED]* |
| **Cycling / e-bike** | bikes/e-bikes, helmets, repair kit, spares | mechanical, fall, traffic, heat | heat, rain | *[ASSUMED]* |
| **Climbing** (niche) | rope, harness, helmet, quickdraws, belay device, shoes | fall, rockfall, stuck gear | heat (rock temp), storm | Climbing leader *[ASSUMED]* |

**Vertical-slice recommendation:** build **one** new discipline end-to-end first (sea kayaking
is a good candidate — distinct gear, a clean signature hazard, and it proves the
weather-branching), then clone the pattern to the rest. **The worked sea-kayaking slice is in
`DISCIPLINES.md`** — gear line, routes, the meltemi rule, in-voice put-in/on-water events, and
the cert.

**Fleet = capacity, surfaced early.** Building the slice exposed a wrinkle: water (and cycling,
rafting) disciplines cap group size by **equipment owned** — you can only take as many clients
as you have boats. So even a *solo* kayak guide makes a capital decision that gates their
earning ceiling, and the "too many bodies, not enough boats" situation is born in Phase 1. This
is the Phase 2 equipment-as-capacity lever (§7.2 in the architecture) showing up early for
gear-heavy disciplines — worth designing consistently across both phases.

---

## 6. The cert ladder (discipline-aware)

Certs build client trust, **gate routes and disciplines**, and improve event odds — all earned
off-season (weeks off the winter budget + cash). Two cross-cutting items plus a **three-level
ladder per discipline**. Certs are also *how you add a new discipline over winter* (§7): the L1
award is the gate to guiding that discipline at all.

**Cross-cutting** (HATEOA — the Greek scheme):
- **Basic Guide accreditation** — overall legitimacy and client trust.
- **Wilderness First Aid** — improves injury outcomes in *every* discipline.

**Per-discipline ladders — every discipline has at least three levels** (L1 = gate, guide
sheltered/easy ground · L2 = lead standard/exposed routes · L3 = the hardest, committing routes):

| Discipline | Scheme | L1 (gate) | L2 (lead) | L3 (the hard routes) |
|---|---|---|---|---|
| Hiking | HATEOA / UIMLA | Hiking Guide | Mountain Leader *(rep-gated)* | International Mountain Leader (UIMLA) |
| Canyoning | **ICOpro** | Canyon Guide | Canyon Leader | Advanced Canyon Leader / Instructor |
| Sea kayaking | **Paddle UK** | Sea Kayak Award | Sea Kayak Leader Award | Advanced Sea Kayak Leader Award |
| SUP | **Paddle UK** | SUP Award | SUP Leader (sheltered) | Advanced / Coastal SUP Leader |
| Rafting | **IRF** | Raft Guide | Trip Leader | Raft Instructor |
| Climbing | UIAA / Mountain Training | Single-Pitch Award | Rock Climbing Instructor | Multi-Pitch / Mountaineering Instructor |
| Cycling / e-bike | **IMBA** | Trail Cycle Leader | Mountain Bike Leader | Advanced MTB Guide |

**Gating by level.** The **L3** award unlocks each discipline's committing routes — kayak's
open-water crossings (Proti, Tainaron, Sapientza), canyoning's technical descents (Ridomo),
climbing's multi-pitch (Taygetos), the alpine summits, the high-water rivers. **L2** unlocks the
standard exposed routes; **L1** lets you run the gentle ones and is the entry gate to the
discipline.

**Mechanics.** Each rung is an off-season programme (weeks + cash); higher rungs may also gate on
**reputation** (Mountain Leader already does). The existing `CERTS` array and `hasCert()` gating
extend cleanly to three rungs per discipline. All schemes are settled: HATEOA/UIMLA (hiking),
ICOpro (canyoning), Paddle UK (kayak + SUP), IRF (rafting), UIAA/Mountain Training (climbing),
**IMBA** (cycling).

## 7. Season-to-season growth & the four-movement year

This is the spine that turns Phase 1 from a single summer into a *career*. The
four-movement year (`PHASE-ARCHITECTURE §9`) applies even to a solo guide, though the shoulder
months are light until guides arrive in Phase 2.

**The four movements, in Phase 1:**
1. **Pre-season (~March, light).** Confirm your gear, decide which disciplines you'll *offer*
   this year (you can only offer ones you hold the entry cert for — §6), set your prices. If you
   took a loan (§ above), the season's repayment is now looming.
2. **Summer (Apr–Oct).** The day loop — guide, build the name, survive the weather and the
   catastrophes.
3. **Post-season (~Nov, light).** The season report (the existing `renderSeasonReport`): tally
   fees/tips, settle the loan instalment, bank reputation, rest. A quiet reckoning of how the
   year went.
4. **Winter (~22 weeks).** The growth engine. Spend weeks (and cash) on: **certs** (climb a
   discipline's ladder, or earn Wilderness First Aid); **learning a new discipline** — take its
   entry award and buy starter kit, and next season you can *offer it*; and **infra** (the
   pickup, eventually a website, a van). Spring arrives when you commit.

**What carries over** between seasons: cash, reputation, owned gear (with accumulated wear),
certs, infra, and any debt. Energy refreshes; a fresh season's weather rolls. Reputation is the
compounding asset — a strong season brings **returning clients and word of mouth** that make the
next one easier; a catastrophe-hit season (a bad accident, a ruined route) sets you back and you
claw the reputation back the slow way.

**The intended arc** (≈2–3 seasons):
- *Season 1* — one discipline, learn the craft, survive, build a name on a handful of routes.
- *Winter 1* — first certs; perhaps learn a **second discipline** (this is literally how
  "master multiple activities" happens) — which also *hedges the weather*: a kayak guide who
  learns hiking has something to run when the meltemi blows.
- *Season 2* — offer two disciplines, climb the cert ladders, reputation rises, you start being
  asked for by name.
- *Toward the trigger* — demand exceeds one pair of legs (§9). You can't be everywhere. That's
  the cue to hire, and the first faint taste of the trail receding.

**Weather-hedging as a growth motive.** Because each discipline has a different weather enemy
(meltemi for kayak, flash-flood storms for canyon, heat for exposed hikes), holding *several*
disciplines means a bad-weather day for one is a workable day for another. Diversifying isn't
just "more content" — it's how a solo guide stops losing whole days to the forecast. That's a
clean, self-motivating reason to keep learning.

## 8. Phase 1 economy & balance

> First-pass numbers, all `[ASSUMED]` — the dials for a later balance pass. Builds on the
> existing engine (fee = `round(base × payMul)`, client multipliers, energy drain by difficulty).

**The starting position.** Cash €200 (+ background bonuses — outfitter +€150, captain +€200);
reputation 50; energy 100. Phase 1 goal: rep 70. You begin with one discipline and a little kit.

**How a trip pays.** A trip's **fee** = `route.base × clientMultiplier × payMul` (the existing
model); **tips** come from going above and beyond (the wonder beats, comfort, storytelling). Two
new levers fall out of the deepened design:

- **Per-head revenue for fleet disciplines.** Kayak / raft / cycle / SUP / canyon earn **per
  client**, so revenue scales with group size — and group size is **capped by your fleet**. More
  boats = a higher per-trip ceiling. Hiking (and climbing's rope work) is closer to a flat
  per-trip fee with group size set by client type: low-capital, but a lower ceiling.
- **Comfort & reviews** (§16 and the shop's comfort tier) nudge tips and the star average, which
  compounds into reputation and future bookings.

**The discipline economic shapes** — the meaningful early choice:

| Discipline | Entry cost | Per-trip ceiling | Shape |
|---|---|---|---|
| Hiking | low (consumables + boots/poles) | modest, flat-ish | cheap to start, steady, low ceiling — the safe opener |
| Canyoning | medium (wetsuit/harness fleet + rope) | good | mid barrier, strong fees, heat-proof |
| Sea kayaking | high (boat fleet) | high (per head) | big barrier (loan), high ceiling, wind-fragile |
| Rafting | high (raft + kit) | high (per boatload) | capital in whole boats; flow-dependent |
| Cycling | high (bike/e-bike fleet) | high (per head) | big barrier, tourist-friendly, e-bikes premium |
| SUP | low–medium (boards) | modest | cheap-ish, niche, narrow weather window — an add-on |
| Climbing | medium (rope/rack) | modest, specialist | gear-light per head, niche, premium per client |

**Costs against you.** Gear (shop one-off + wear/replacement), consumables per trip, **loan
repayments** (§15, at the post-season wind-down), and energy (rest days earn nothing). Weather
and catastrophes are the variance.

**First-pass dials** (`[ASSUMED]`):
- Starting cash €200; background bonuses €0–200.
- Route base pay ≈ €60 (d1) → €130 (d2) → €200 (d3), per the route tables.
- Client multipliers (existing): family ×1.0, tourist ×1.05, thrill ×1.15, corporate ×1.55.
- Fleet unit costs (std tier): kayak €220, raft €900, e-bike €600 / std bike €250, client
  wetsuit €70, client harness+helmet €60, SUP board €350.
- Loan: ~€1–3k to bootstrap a fleet (§15).
- Energy: drain ≈ 20 / 28 / 36 by difficulty (+ weather `drain`); rest +55.

**Balance intent.** A **hiking start** should be survivable on €200 with no loan; a **fleet
discipline** should *require* the loan and a season or two to pay it back — so the opener you
choose is also a choice of how much early risk you take on. Diversifying into a cheap second
discipline both hedges weather (§7) and smooths income across the season.

### Financing — the starting loan

A €200 purse can't buy a kayak fleet (~€220 a boat), so Phase 1 is where the **loan** is born:
a small sum (~€1–3k) to bootstrap a gear-heavy discipline's fleet, and **who you borrow from —
the bank, a friend, or messier money — is your first character-defining money choice.** The full
reusable system (sources, terms, repayment, what happens when you default) lives in
`PHASE-ARCHITECTURE §15`; every later phase inherits it for bigger expansions. Phase 1 is just
where it starts, at the small end of the scale.

## 9. The Phase 1 → Phase 2 trigger

Today the code hires Maria at `cash ≥ 1500 && rep ≥ 70`. We keep a measurable gate but **reframe
its meaning and its surface**: the trigger is **demand outgrowing one person**, felt as a human
moment, not a number ticking over.

**The signals (mechanical):**
- **Turned-away bookings.** As reputation and the season build, more bookings arrive than one
  guide can run. The refused ones are **visible** — a running count of lost trips (and lost
  euros) you can watch slipping past.
- **Exhaustion.** Running flat-out drags energy to a chronic low; the rest days you need cost
  you bookings you can't afford to refuse. The squeeze is real.
- **A capacity wall.** On your best discipline you're selling out the fleet and *still* turning
  groups away.

**The trigger.** When demand has clearly and repeatedly exceeded you — e.g. *N turned-away
bookings in a season* **and** rep ≥ 70 **and** enough cash to carry a wage (the old €1,500 now a
*prerequisite*, not the goal) — the game offers the hire as a **scene**, not a popup: *you turned
a family away at the trailhead today — the third this week — and stood watching them go. You can
keep doing this, or you can stop being the only one.*

**The choice.** Hiring your first guide (Maria) **begins Phase 2**. It's a real upgrade — two
trips can suddenly run at once — and it's the **first taste of the trail receding** (§5): some
mornings now you assign instead of walk. The game never calls that bad; it just lets you feel,
faintly, the first day you don't lace your own boots.

**[ASSUMED]** the exact thresholds. The design rule that matters: the player should reach the
trigger because they're *succeeding too well to keep up*, and should feel the hire as **relief
shadowed by a small loss** — not as a score they unlocked.

## 10. Build order & open questions

1. Add `activity` type to `ROUTES`; branch gear shop / `recommended()` / event pools on it.
2. Build **sea kayaking** as a full vertical slice (gear, routes, trailhead + trail events,
   weather branching) to prove the pattern.
3. Clone the pattern to the other core disciplines; add niche ones last.
4. Layer the discipline-aware cert ladder (§6) and the winter "learn a discipline" flow (§7).
5. Balance pass (§8); then reframe the Phase 1→2 trigger (§9).

**Open / needs Fotis:** the per-discipline gear lists and rough costs; the real cert mappings
(§6); confirmed seasons (`§7.1` table); whether the Phase-1→2 trigger goes demand-based.
