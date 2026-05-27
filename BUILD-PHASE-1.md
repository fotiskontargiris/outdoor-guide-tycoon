# BUILD-PHASE-1.md — implementation brief for Claude Code

This is the **handoff** from design to build. The design is complete and lives in the docs
below; this brief tells a coding agent *what to build first, in what order, and what not to
break*. Work in the repo with `claude`; the live game is the single-file `index.html`.

---

## 0. The one-paragraph goal

Evolve the existing hiking-only Phase 1 in `index.html` into the **discipline-based** Phase 1
described in `PHASE-1.md` — without rewriting the game. The current day loop, save system, and
voice are good and stay. We *layer* a discipline dimension on top, prove it with **one vertical
slice (sea kayaking)**, then clone the pattern to the other disciplines. Keep it a single,
dependency-free HTML file that runs as a Claude.ai artifact and on a phone.

---

## 1. Read order (do this before touching code)

1. `CLAUDE.md` — engine, architecture, conventions, and §7 gotchas. **Non-negotiable.**
2. `PHASE-ARCHITECTURE.md` — the *why*: thesis, tone, the cost model, the reusable systems
   (§15 financing, §16 comfort). Skim for intent; you build to this spirit.
3. `PHASE-1.md` — the *what* for this phase, end to end (§1–10). Your spec.
4. `DISCIPLINES.md` — the *content*: the outdoor-shop system, the extended weather palette, and
   the worked slice per discipline (gear, routes, weather rules, events, certs).
5. `design-system/README.md` + `design-system/colors_and_type.css` — the *look*. The palette
   already matches `index.html`; use the tokens, the type roles, the dingbats, and the voice.
   `design-system/ui_kits/game/` is a component reference; `design-system/preview/` shows each
   token/component.
6. `CATASTROPHES.md` — flavour for the events you'll wire in over time (later milestones).

A note on numbers: figures in the docs are **first-pass `[ASSUMED]`** and several certs/schemes
are `[CONFIRM]`. Build the *systems* faithfully; treat the numbers as tunable defaults and leave
them easy to change. Don't sink time into balance yet — there's a dedicated pass later.

---

## 2. How to build (method)

- **Evolve, don't rewrite.** Extend the existing `ROUTES`, `TRAILHEAD`, `EVENTS`, `WEATHER`,
  `ITEM_COST`/`ITEM_LIFETIME`, `CERTS`, `openShop`, `recommended()`, `startDay`, `renderMorning`,
  `finishPlayerTrip`, `initGame`, `doContinue`. Don't start a new file.
- **Single file, no deps.** Vanilla HTML/CSS/JS, Google Fonts via `<link>` only.
- **Test every change** with the harness (`CLAUDE.md §2`): `node scripts/harness.mjs`,
  `node scripts/trace.mjs`, `node scripts/winter-test.mjs`. Several real bugs only surface here.
- **Layer, don't replace** (`PHASE-ARCHITECTURE §3.1`): the hiking loop must keep working at
  every step; you're adding alongside it.
- **Migrate saves, don't break them.** Bump `SAVE_KEY` when `S` changes shape and add defensive
  defaults + migration in `doContinue()` (as was done for the gear-tier change).

---

## 3. Milestone 1 — the sea-kayaking vertical slice (build this first)

The goal is *one* fully playable non-hiking discipline, proving the pattern. From `DISCIPLINES.md`
→ "SEA KAYAKING" and `PHASE-1.md §3–5`:

1. **Add `activity` to routes.** Give every `ROUTES` entry an `activity` (default `'hike'`).
   Add the sea-kayak routes (`activity:'seakayak'`): Voidokilia & the lagoon, Navarino Bay & the
   wreck, the Methoni sea caves, the Proti crossing, Kardamyli, Cape Tainaron, Epidavros,
   Gialova, Finikounda, Koroni, Sapientza/Schiza.
2. **Discipline state.** Add the player's **offered disciplines** to `S` (start with the chosen
   one). Filter the day's bookings/route choices by offered discipline × cert × weather.
3. **Gear line + the fleet.** Add the sea-kayak items to the shop (safety kit) and a **fleet**
   concept: `S.fleet` (or per-item counts) of client kayaks/PFD sets that **caps group size**.
   Implement the §16-adjacent rule: `served ≤ boats owned`.
4. **Branch the loop on `activity`.** `recommended()`, the shop section, the `TRAILHEAD` pool,
   and the `EVENTS` pool select by the active route's `activity`. Wire the kayak put-in beats
   ("I can swim, basically", wind-up, nowhere-dry, too-many-bodies) and on-water events
   (capsize, offshore wind, the cave-and-seal, the squall, glassy dawn, sea fog).
5. **Weather sensitivity.** Make **wind/meltemi** the kayak killer (downgrade/cancel exposed
   routes; open crossings need calm + the Advanced cert). Add the comfort read (§16): choppy =
   uncomfortable for families/tourists, fine for thrill.
6. **The cert gate.** Add the Paddle UK ladder (Sea Kayak Award → Leader → Advanced Leader);
   gate open-water routes on the Advanced award.

**Definition of done (M1):** a player can choose sea kayaking, buy/loan a fleet, run a kayak
day end-to-end with discipline-correct gear/events/weather, and the harness + a kayak trace pass
clean. The hiking game is untouched and still passes.

---

## 4. Later milestones (after M1 proves the pattern)

- **M2 — character creation:** the discipline pick at profile setup (alongside the existing
  comic backgrounds + starting kit), per `PHASE-1 §3`.
- **M3 — clone disciplines:** canyon → raft → cycle, then SUP → climb, each from its slice in
  `DISCIPLINES.md`. Reuse the M1 branching.
- **M4 — the cert ladder** across disciplines (`PHASE-1 §6`).
- **M5 — financing (§15)** and the **shop system** depth (`DISCIPLINES.md` → THE OUTDOOR SHOP):
  item kinds, quality tiers, comfort & delight, the loan to bootstrap a fleet.
- **M6 — the four-movement year** (`PHASE-1 §7` / `PHASE-ARCHITECTURE §9`): the pre-season
  setup month and post-season wind-down around the existing summer/winter, and the winter
  "learn a new discipline" flow.
- **M7 — the demand-based hire trigger** (`PHASE-1 §9`): turned-away bookings + exhaustion,
  surfaced as a scene, leading into Phase 2.

---

## 5. The look (design-system usage)

- Reuse the **locked palette** and type roles — they already live in `index.html` and are
  formalised in `design-system/colors_and_type.css` and `design-system/README.md`. Don't invent
  colours; re-shade within the ramp.
- **Instruments vs. prose:** Spline Sans Mono (uppercase, wide-tracked) for stats/labels/marks;
  Fraunces for headers/weather/names/`.go`; Spectral for narrative and `.opt` choices.
- **Voice** (`design-system/README.md` → CONTENT FUNDAMENTALS): second person, literary, past
  tense for resolved actions, `€` prefix, `−` minus for negatives, curly quotes, **no emoji**,
  only the sanctioned dingbats (`▸ ▶ ✓ ✦ ▦ ☼ ❧ ⌂ ✕ ≡ · —`).
- **No stand-in icons.** Weather is the glow-dot placeholder. Don't add Lucide/Heroicons/emoji.
- Every full-bleed surface keeps the **topo backdrop** at `opacity: 0.06`.

---

## 6. Guardrails (don't regress — from `CLAUDE.md §7`)

1. **Two-backend storage** (`window.storage` artifact path + `localStorage` browser path) — keep
   both guarded.
2. **Dynamic text must be functions**, never bare template literals in data arrays.
3. **Never put `</script>` inside a JS string.**
4. **Call `renderHUD()`** after any cash/rep/stat change on a sub-screen.
5. **Advance days only via `advanceDay()`.**
6. **Watch apostrophes/quotes** inside single-quoted JS strings in template literals.
7. **Bump `SAVE_KEY`** and migrate in `doContinue()` whenever `S` changes shape.

And from the design: **layer, don't replace**; the climb is **seductive, never punished**;
**comedy default, pathos rationed**; Greek specificity always.

---

## 7. What success looks like for this handoff

A player opens the game, chooses **sea kayaking**, takes a small loan for a fleet, and lives a
believable kayak day in Navarino Bay — wind, a capsize, a seal in a cave — in the same warm,
literary, dusk-lit voice as the hiking game, with the harness green. From there, every other
discipline is a copy of a proven pattern.
