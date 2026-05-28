# CLAUDE.md — Messinia Guide (Outdoor Activities Tycoon)

Project context for continuing development in Claude Code. Read this first, then read `index.html`.

---

## 1. What this is

A text-driven **outdoor-activities tycoon game**, set in the **Peloponnese (Messinia and its neighbours)**. You start as a solo hiking guide with almost nothing and grow into the region's leading outdoor company. It is one self-contained HTML file (`index.html`) — vanilla HTML/CSS/JS, no build step, no dependencies except Google Fonts via `<link>`. It is designed to be played on a phone and to run as a Claude.ai artifact.

**Tone & aesthetic:** an "Aegean/Mediterranean dusk field-journal" look — warm sand text on deep teal, a faint topographic-contour SVG backdrop, a serif narrative voice (Fraunces / Spectral) paired with a monospace "instruments" font (Spline Sans Mono) for stats. Second-person, literary, concise prose. No emojis (dingbat symbols like ▸ ▶ ✓ ☾ are fine).

**Layout doctrine (locked 2026-05-28):** **landscape only**, **fixed viewport**, **no page scroll ever**. One design, no portrait fallback — touch devices in portrait get a "Sideways, please" rotate-overlay until they rotate. The body and `.wrap` lock to `100dvh`; top chrome (appbar + HUD + goal + forecast) is `flex:none` anchored at top; `#scene` is `flex:1` and fills the remaining viewport. Two-col scenes (kitchen, trailhead, hire, panigíri, Hilux, title): image fixed in the left column, only the right `.col-panel` scrolls internally. Utility screens (shop, cert school, logbook): the scene area itself scrolls internally. The scene image is the *steady* visual anchor; only content panels scroll.

**The design arc:** the player shifts from *doing* the work (Phase 1, hands-on guiding) to *leading people who do it* (Phase 2, managing guides). That shift is the emotional core; keep it central in any new feature.

---

## 2. How to run and test (IMPORTANT — this method caught every real bug)

There is no framework. Tests live in `scripts/`:

```
node scripts/harness.mjs [N=300]   # syntax-check + N random playthroughs
node scripts/trace.mjs              # single playthrough with verbose end-state
node scripts/winter-test.mjs        # forces a game to end of summer to verify the off-season flow
```

`scripts/harness.mjs` does it all:
1. Reads `index.html`, regex-extracts the inline `<script>`, writes to `scripts/.core.js`.
2. `node --check` on the extracted file. MUST pass.
3. Stubs a fake DOM: `document.getElementById` returns a `fakeEl()` (settable `innerHTML`, a `style` object, `value`, `offsetWidth`, and a `classList` stub backed by a `Set`).
4. Stubs `setTimeout` and a fake `window.storage` (async `get`/`set`/`delete`; `get` throws on a missing key).
5. Loads the script via **indirect eval** after two substitutions so globals are reachable from the harness scope: `src.replace('boot();','').replace('let S, gCounter=0;','var S; var gCounter=0;')` then `(0,eval)(src)`.
6. Drives the game by regex-parsing `onclick="..."` out of `els.scene.innerHTML` and `(0,eval)`-ing the calls. Biases toward **(a) `class="primary"` buttons** (a cautious-player proxy) and **(b) progression verbs** (`runDay`, `processNext`, `setOff`, `resolve*`, `advanceDay`, `enterSpring`, `enrollCertSchool`, …).
7. Calls `initGame('Name','medic',['water'])` directly to start a game (bypasses title/profile UI).
8. Reports: avg steps, % reaching Phase 2 / winter / Year 2, end-kind split (bankrupt / ruined / won / unknown), exceptions.

**Scope gotcha for the harness:** top-level `const` tables (`ROUTES`, `WEATHER`, `ITEM_COST`, `CON`, `DUR`, `GEAR`, `CERTS`, `INFRA`, …) are **not** reachable by bare name from the harness module scope. But `var S` and every `function` declaration **are** global. So in tests: reference `S`, call functions (`allocateGear`, `recommended`, `buyItem`, `enrollCertSchool`, …), and inspect `S.*` for assertions — never reference the const tables directly.

**Note on reach-Phase-2 %:** the harness uses `seasonDay`-bounded games and won't reach winter naturally inside its 600-step budget (would need ~1500+ steps for one 214-day summer). `scripts/winter-test.mjs` is the authoritative test for the off-season → spring flow. Use the harness for regression-on-exceptions and rough Phase 2 reach %; use `winter-test` for the season transitions.

Always run both checks before handing a build back. Several bugs only surface this way (see §7).

---

## 3. Architecture

**Single global state object `S`** (created in `initGame`). Fields:
`phase` (1|2), `year` (1+, increments each spring), `season` (`'summer'|'winter'`), `seasonDay` (1–214 in summer; off in winter), `day` (cumulative day counter for `note()` & legacy), `cash`, `rep` (0–100), `energy` (0–100, the player), `gear` (0–100, equipment condition), `packSize` (4/6/8), `loadout` (item ids packed for the current trip), `owned` (item ids the player owns — Phase 1), `depot` (`{itemId: count}` — Phase 2 company stock), `certs` (cert ids), `infra` (off-season project ids the player has built), `weather` (current, = `forecast[0]`), `forecast` (array of upcoming weather), `bookings`, `history` (logbook entries `{d, t}`), `stats` (`{earned, fees, tips, wagesPaid, retainersPaid, tripsYou, tripsGuides, hires, bestRep, yearsCompleted}`), `yearStats` (`{fees, tips, wages, retainers, certs, infra, tripsYou, tripsGuides, bestRep, worstRep, startCash, openingRep}` — reset each spring), `winterWeeksUsed` (0–22), `bestRepEverThisYear`, `you` (`{id:'you', name, isYou:true, skill, morale, wage:0, spec, perk, task}`), `guides[]`, `queue`, `dayReports[]`, `trip` (active trip working object).

**Season cycle:** April 1 → October 31 is `SUMMER_DAYS=214` days of normal play. `advanceDay()` increments `seasonDay`; when it exceeds 214, fires `enterOffSeason()` → `renderSeasonReport()` → `renderOffSeason()`. Winter is a single planning screen with `WINTER_WEEKS=22` to spend on cert school (each cert has `weeks` and `cost`) and infra projects (`INFRA` array). `enterSpring()` increments `year`, resets `seasonDay=1`, refreshes weather & energy, and starts the next summer. The player is **expected to run a 15-year+ career**; current win condition is still €5000+rep70+3-guides ("ready for Phase III") but should evolve once Phase 3 ships.

**Rendering:** everything draws into `#scene` via `setScene(html)` (which also clears the `#fcast` forecast card and replays a CSS rise animation). The persistent chrome lives outside `#scene`:
- `.appbar` — title + a `≡` menu button (`toggleMenu`).
- `#hud` — the stat strip; `renderHUD()` fills it and `#goal`, and shows the menu button. **Call `renderHUD()` after any cash/stat change on a sub-screen** (a missed call is what made shop purchases look free — see §7).
- `#goal` — the current objective line.
- `#fcast` — the **forecast card** (its own square); `paintForecast()` fills it; `setScene` clears it, so the day screens repaint it after rendering.
- `#scene` — the interactive content.
- `#drawer`/`#sheet` — the slide-up menu (Season summary, 5-day forecast, Logbook, Main menu).

**Day screens:** `renderMorning()` (Phase 1) and `renderAssign()` (Phase 2), dispatched by `renderCurrent()`. `startDay()` rolls the day (sets weather from `forecast[0]`, generates bookings, resets tasks), renders, and autosaves. `advanceDay()` increments the day, shifts the forecast, and calls `startDay()`. **Every day-advance must go through `advanceDay()`** so the forecast stays in sync.

**Style:** options the player chooses use `.opt` / `.opt.primary`. The single confirm action is visually separated in an `.actionbar` with a solid `.go` button. Keep that distinction (choices vs. the one action).

---

## 4. Game systems (current)

**Core loop (Phase 1):** see the forecast → pick a trip (or shop / certify / rest) → **pack** from owned gear → **meet the group** (a trailhead situation) → walk the **trail** (1–2 event decisions) → **trip complete** (reviews + fee/tip + preparedness verdict) → next day.

**Phase 1 → Phase 2 trigger:** `cash >= 1500 && rep >= 70` → `enterPhase2()` (hires Maria, seeds the depot from owned gear).
**Phase 2 goal:** `cash >= 5000 && rep >= 70 && guides.length >= 3` → win.
**Lose:** `cash < 0` (bankrupt) or `rep <= 10` (ruined). Checked in `checkEnd()`.

**Weather & forecast:** `WEATHER` (5 types: Clear, Hot, Windy, Drizzle/mist, Storm) each with `risk`, `drain`, and flags (`heat`/`wind`/`mist`/`storm`), plus `short`/`col`/`note` for display. `forecast` is a real `FORECAST_DAYS=5` window that **drives** the weather (not random per-day) so the player can plan; storms cancel hard (diff-3) routes.

**Routes (`ROUTES`, Peloponnese):** Polylimnio waterfalls (d1, river/forest), Voidokilia & Navarino dunes (d1, coast/exposed), Ancient Messene & Mavromati (d2, exposed/long), Neda Gorge & waterfalls (d2, river/remote), Menalon Trail — Lousios Gorge (d3, forest/remote/long), Taygetos summit (d3, alpine/exposed/hard). `base` pay 55–205. Tags drive gear recommendations and conditions text.

**Clients (`CLIENTS`):** family, tourist, thrill, corporate — different group sizes, pay multipliers, and event reactions.

**Gear — two models:**
- *Phase 1 (personal ownership) — tiered with lifetime:* you **own** items via `S.owned = { id: {tier, trips} }` where `tier` is `'basic'|'standard'|'pro'` and `trips` is how many trips it survives before breaking. Buy in the **shop** (`openShop` → `buyItem(id, tier)`); buying any tier replaces and refills with a fresh full lifetime. `ITEM_LIFETIME[id]` is the standard-tier baseline; `TIER_MULT` scales cost (×0.5/×1/×2.5) and life (×0.5/×1/×4). Helpers: `itemCost(id,tier)`, `itemLifetime(id,tier)`, `ownedTier(id)`, `ownedTrips(id)`, `ownsItem(id)`, `freshOwned(id,tier)`. `finishPlayerTrip()` decrements `trips` on every packed item; at 0 the item breaks, is removed from `S.owned`, and the player is told. Packing only offers items with `ownedTrips(id) > 0`. `recommended(route, weather)` returns the items that matter; `prepScore()`/preparedness drives reputation & tips at trip end.
- *Phase 2 (company depot) — tier-blind for now:* `S.depot` is a flat `{itemId: count}` of `CON` consumables (water, snacks, sunscreen, repellent — used up per trip) and `DUR` durables (firstaid, poles, map, shell, lamp — reusable, limit concurrent trips). `allocateGear(trips)` distributes kit across the day's trips; coverage modifies guide outcomes. Stock via `openDepot`/`buyGear` (`GEAR` unit costs). Tiered depot is a known TODO — when added, expect `S.depot` to become `{id: {basic, standard, pro}}` and `allocateGear` to consume best-quality-first.

**Certifications (`CERTS`, "HATEOA"):** Basic Hiking Guide (€120, 2 weeks) → unlocks the rest; Wilderness First Aid (€180, 3 weeks) improves injuries; Canyon & Gorge Leader (€160, 3 weeks) boosts river/forest routes; Mountain Leader (€300, 4 weeks, needs rep ≥ 60 — measured against the player's *peak* rep that year) **unlocks diff-3 routes**. Each course is a HATEOA **off-season** programme run November–March: `enrollCertSchool(id)` deducts cash + `weeks` from `WINTER_WEEKS=22` and adds the cert. Mid-summer the `openCerts()` screen is read-only — players see what's available and plan for winter. `hasCert(id)` gates routes and modifies event odds.

**Infrastructure (`INFRA`, off-season projects):** Each project has `id`, `name`, `cost`, `weeks`, `effect`. v1 ships with one placeholder (`pickup` — battered pickup truck, €1800, 3 weeks, +€10 to fees on every trip the player guides) so the pattern exists. Real Messinia-specific projects fill in later from Fotis's domain knowledge — likely candidates: base/office lease in Kalamata, proper website, hotel partner deals, 4×4 or minibus, second location for Taygetos access, equipment workshop, insurance upgrade, off-season marketing.

**Backgrounds (`BACKGROUNDS`, chosen at profile):** medic (injuries go well), charmer (`charm()` boosts rep & tips), outfitter (starts with 6-slot pack, +€150, extra owned items), navigator (better weather/nav outcomes).

**Pay split:** every trip yields a **fee** (`round(pay * payMul)`) and a **tip** (from going above and beyond), shown separately and tallied separately in `stats.fees` / `stats.tips`. Accumulated season tips are the "great job" signal.

**Reviews:** `makeReviews(score, tips, n)` + `reviewsHTML()` produce star-rated client reviews (Google / TripAdvisor / GetYourGuide / Booking.com) at trip end, tiered by trip quality (`tierFor`). Player trips show 2; guide trips show 1.

**Phase 2 management:** assign each person (you + guides) to a trip / rest / training; `runDay()` → `processNext()` queue. Guides auto-resolve (`autoResolve`, skill + gear coverage) or **radio in a crisis** (`RADIO` events) for your management decision. Daily **wages**, **morale** (quit at 0), **fatigue**, training, and hiring (`openHire`). The player still personally guides via the same packing/trailhead/event flow.

**Save/continue:** `window.storage` (async, artifact-only; guarded by `typeof window!=='undefined' && window.storage`). Autosaves at the start of each day under `SAVE_KEY` (currently `aegean_save_v6` — bumped when gear tiers landed; v5 bumped for the season schema). Title screen offers Continue / New game; `doContinue()` applies defensive defaults AND migrates the legacy array-form `S.owned` (v5 and earlier) to the new `{id:{tier,trips}}` object form.

**Content arrays:** `EVENTS` (trail events), `TRAILHEAD` (meet-the-group), `RADIO` (delegated crises). Each entry has `when(b,w)` eligibility and `choices` with `run(b,S)` returning deltas (`rep`, `cash`, `energy`, `gear`, `payMul`, `tips`, `morale`, `line`/`lines`).

---

## 5. Key tunable numbers (the balance surface)

- Pack: 4 (start) → 6 (€250) → 8 (€600, rep ≥ 65).
- `ITEM_COST` (own, Phase 1, standard tier): water 25, snacks 20, sunscreen 25, repellent 25, firstaid 70, poles 55, map 40, shell 60, lamp 35. **Basic ×0.5, Pro ×2.5.**
- `ITEM_LIFETIME` (trips at standard tier before wear-out/consumption): water 4, snacks 4, sunscreen 8, repellent 8, firstaid 25, poles 50, map 80, shell 30, lamp 40. **Basic ×0.5, Pro ×4.**
- `GEAR` (depot unit, Phase 2): water 4, snacks 4, sunscreen 6, repellent 6, firstaid 45, poles 35, map 25, shell 30, lamp 20 (with `batch` sizes).
- Certs: 120 / 180 / 160 / 300; Mountain Leader needs rep ≥ 60.
- Starting cash €200 (+€150 outfitter); start rep 50; goal rep 70.
- Energy drain per trip ≈ 20/28/36 by difficulty (+weather `drain`); rest +55.
- Phase-1 goal €1500 & rep 70; Phase-2 goal €5000, rep 70, 3 guides.

Balance is a **first pass** — these are the dials to turn for a balance feature.

---

## 6. Conventions

- Plain functions in one `<script>`; no modules. Keep it dependency-free and single-file.
- Theme via CSS variables (`--ink`, `--terra`, `--gold`, `--sea`, `--olive`, `--danger`, `--panel`…). Reuse them; don't hardcode colours.
- Prose is terse, second-person, literary. No emojis.
- After mutating cash/rep/etc. on a sub-screen, call `renderHUD()` (and re-render the sub-screen).
- Bump `SAVE_KEY` whenever the `S` schema changes, and add a defensive default in `doContinue()`.

---

## 7. Gotchas that have already bitten (do not regress)

1. **Two‑backend storage.** Claude.ai artifacts only expose `window.storage` (async; throws on missing key); `localStorage`/`sessionStorage` can fail there. Plain phone/desktop browsers don't have `window.storage` but do have `localStorage`. The save layer (`saveGame`/`loadSave`/`clearSave`/`hasStorage`) uses `hasArtifactStorage()` → `window.storage` first, falling back to `hasLocalStorage()` → `localStorage`. Same `SAVE_KEY`, same JSON payload; only the backend differs. When you change the save layer, keep both paths working and keep them guarded so a throwing backend doesn't crash the page.
2. **Lazy evaluation of dynamic text.** Any string in a data array that interpolates a *runtime* value (e.g. a guide's name) **must be a function**, not a bare template literal — bare ones evaluate at script load and throw `ReferenceError`. Example: `RADIO` choice labels are `(g) => \`Trust ${g.name}...\``, rendered via `typeof c.label === 'function' ? c.label(g,b) : c.label`.
3. **Never put `</script>` inside a JS string** — the HTML parser would truncate the script. (`node --check` on the extracted file won't catch this; grep for it.)
4. **HUD must refresh after stat changes** on sub-screens (shop/depot/certs) or values look stale ("my money didn't go down").
5. **Day advance only via `advanceDay()`** so the forecast window shifts correctly.
6. **Apostrophes/quotes inside single-quoted JS strings** inside template literals will break parsing (e.g. "today's" broke a build once). Reword or escape.
7. Stale browser cache after edits — a hard refresh / new tab is sometimes needed; not a code bug.

---

## 8. Roadmap / what's next

- **Phase 3 — water & air activities** (the big one). Kayaking, SUP, sailing, snorkelling in Navarino Bay; paragliding off Taygetos. Implies new activity categories beyond hiking, specialist gear lines, guide skill specialisations, possibly new certs (water safety), and seasonality. The Peloponnese setting was chosen precisely because these cluster geographically.
- **Balance pass** across the Phase 1 economy (shop prices, cert fees/gates, reputation curve, tip frequency, wage pressure in Phase 2).
- **Polish:** low-stock warning before committing a Phase 2 day; a season-end summary; optional sound; difficulty settings; richer logbook.

---

## 9. Files

**The game & engine**
- `index.html` — the entire game (the live, ground-truth build).
- `CLAUDE.md` — this document (engine, conventions, gotchas).
- `scripts/` — the test harness (`harness.mjs`, `trace.mjs`, `winter-test.mjs`).
- `LANGUAGE.md` — the canonical voice doctrine (tone, register, Greek diction, typography,
  locked decisions, worked examples). Read before writing any in-game copy.
- `ART-DIRECTION.md` — the canonical visual doctrine (style, palette, composition, subject
  inventory, locked decisions, worked references). The visual sibling of `LANGUAGE.md`.
  Read before producing any asset (illustration, icon, glyph, title plate, screen mockup).

**The design (read before building Phase 1 — written 2026-05)**
- `OUTLINE.md` — the six-phase map (the skeleton).
- `PHASE-ARCHITECTURE.md` — the master theory: thesis ("or no Life"), tone, the four
  through-lines, the seductive-not-punishing cost model, endings, the six phases, the
  four-movement year, and the reusable systems — financing/debt (§15) and client comfort (§16).
- `PHASE-1.md` — the complete, buildable Phase 1 (solo guide) spec: character creation, the
  deepened day loop, the discipline system, the cert ladder, season-to-season growth, economy
  & balance, and the demand-based hire trigger.
- `DISCIPLINES.md` — the full gear/shop catalogue + worked content for all 7 disciplines
  (hiking, sea kayak, canyon, raft, cycle, SUP, climb): gear lines, routes, weather rules,
  in-voice events, certs; plus the outdoor-shop system and the extended weather palette.
- `CATASTROPHES.md` — the catastrophe-heartbeat seedbank (tiered, in-voice).
- `BUILD-PHASE-1.md` — the implementation brief: read order, first vertical slice, guardrails.

**The look**
- `ART-DIRECTION.md` — the canonical visual doctrine. **Style register reset 2026-05-28
  to "ink‑and‑watercolor travel"** (Moleskine‑sketchbook / Mediterranean travel‑guidebook
  energy — wet translucent washes, loose hand‑drawn ink line, paper‑white showing through).
  Replaces the earlier "editorial gouache + woodcut bones" register; the 43 assets shipped
  under it remain in‑game and work, with a re‑generation pass queued. The **"changing
  guide's desk"** metaphor (what we draw + five locked UI surfaces: Desk · Route card ·
  Backpack · People card · Day report; the desk evolves across phases P1 kitchen → P4
  regional board) and the **speech‑bubble flow** pattern (persistent scene image with
  overlaid character bubbles, narrator italic below, choices below that; see §12) are
  unchanged. Palette (terra · olive · sea · bone · ink + one seasonal accent) is now
  expressed as wet washes. Pair‑read with `LANGUAGE.md`.
- `DESK-HUB.md` — **the diegetic UI doctrine** (locked 2026-05-28). The home base for each
  game phase is a ROOM you tap (Phase 1: childhood bedroom in mum's house, school desk by a
  wide window onto Kalamáta harbour + Taygetos). ~9 clickable objects per hub (phone /
  notebook / backpack / window / catalogue / wallet / corkboard / bed / door); each tap →
  detail view. Asset architecture is **one base scene + many transparent object overlays**
  composited at runtime, so state changes (booking notifications, packed vs empty pack,
  cash level, etc.) just swap overlays — no new base painting needed. Phase 2/3/4 each
  get their own evolved room. Replaces `renderMorning`'s button-driven menu for Phase 1
  (code change deferred until base scene ships). Pair with `ART-DIRECTION.md` (look) and
  `ASSET-MANIFEST.md` (Tier L: hub base + 13 overlays).
- `ASSET-MANIFEST.md` — the bridge from doctrine to production. Every asset with a stable id,
  filename, subject, composition hook, and status. Tiered A–G; pilot trio defined to prove
  the style across all three registers before scaling. Source of truth for what to make next,
  what to call it, and where the file lives.
- `PROMPT-PACK.md` — **ChatGPT‑specific** (GPT‑Image / DALL·E surface), copy‑paste ready.
  Fotis tested Midjourney and preferred ChatGPT's output, so the pack is now ChatGPT‑native:
  no `--` parameters, aspect ratio in natural language, negative list as explicit "do not
  include" sentences, locked style‑anchor paragraph at the top of every prompt. 30 ready‑to‑
  paste prompts (pilot trio + 10 heroes + 10 places + Tier A opening + Tier F set pieces),
  glyph template with caveat (Figma still recommended for icons), Tier G chrome. The
  consistency lever is the **in‑conversation reference image lock**: save pilot‑01 locally,
  attach it to every new batch chat, send the §5 style‑lock preface, then send prompts in
  sequence — ChatGPT keeps the style anchored across the whole conversation. Includes a
  generation log template + troubleshooting table.
- `assets/` — illustration & glyph home (heroes / places / disciplines / weather / title /
  scenes / chrome). Folder skeleton exists; production has not started. SVG for glyphs, PNG
  for illustrated. See `assets/README.md` for the folder map and `ASSET-MANIFEST.md` for the
  asset list.

**Art loader (in `index.html`).** A small `ASSETS` map + `imgFor(id, opts)` helper renders an
`<img>` (with `.art / .art-hero / .art-place / .art-scene` CSS sizing) or a graceful empty
string when the id isn't shipped yet. `HERO_ASSET` maps background id → hero asset id;
`placeAssetFor(routeName)` maps route → place silhouette via regex patterns. Three pilot
slots are wired live: hero portrait in `renderKitchenReveal`, place silhouette in
`startTrailhead`, the Hilux pathos still in `renderVehicleScene` for `id==='pickup'`. As
each asset ships, add its `id → path` to `ASSETS`; nothing else changes.
- Palette tokens already in `index.html` (`--ink`, `--terra`, `--gold`, `--sea`, `--olive`,
  `--danger`, `--panel`…) match the ART-DIRECTION palette and remain the source of truth for
  in‑game colour. When adding a hue, add it to ART-DIRECTION.md first and the CSS variables
  second.
- The former `design-system/` directory (pixel‑art‑era handoff with React UI kits and a
  reference snapshot of an older `aegean-guide.html`) has been retired. The root `index.html`
  is the live game; ART-DIRECTION.md is the bible.

Run `claude` in this folder; it will read this file. When you make changes, re-run the extract +
`node --check` and the headless simulation (`scripts/harness.mjs`, `scripts/winter-test.mjs`)
before considering them done. For Phase 1 work, start from `BUILD-PHASE-1.md`.
