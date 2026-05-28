# DESK-HUB.md — the diegetic home base

The architectural doctrine for the game's home‑base screens. The desk metaphor
(`ART‑DIRECTION.md §1`) becomes **literal**: the player's room IS the user interface.
Every action — picking a trip, packing, checking weather, resting, opening the shop —
is performed by interacting with a physical object in the scene, not by tapping a
button on a UI panel.

Reads as a point‑and‑click adventure (Myst, Broken Sword, *Dredge*, *Strange
Horticulture*). Felt that way; not implemented that way before.

Replaces the abstract `renderMorning` button‑driven home base
for Phase 1; same pattern extends to every later phase.

---

## 1. The premise

Every existing button → swap for an object you can touch in the room.

> **The room is the menu. The objects are the actions.**

| Was (button‑driven) | Is (diegetic) |
|---|---|
| "Pick a trip from the list" | Tap the phone (notifications on screen) |
| "Open shop" | Tap the catalogue on the desk corner |
| "Logbook" | Tap the spiral notebook |
| "Rest" | Tap the bed |
| "Hire" (Phase 2) | Tap a face on the corkboard |
| "Cert school" (winter) | Tap a framed cert on the wall |
| "Forecast" | Look out the window |

The button‑driven model treated the world as illustration and the game as
spreadsheet. The diegetic model collapses them: **you act on the world by reaching
into it.** This is also what makes the ink‑and‑watercolor register (`ART‑DIRECTION.md §4`)
work — every painted object earns its place by being something you do something with.

---

## 2. Three scene types

The whole game maps to three:

### A. Hub view *(this doc)*
The room. Fixed camera, ~9 clickable hotspots, the player's life laid out on a
surface. Persistent for an entire game phase. **One base scene + many overlay
objects** (§5).

### B. Detail view
Zoom into one object the player tapped. A backpack interior, a phone screen, an
open notebook page, an opened catalogue. Existing screens (shop, logbook, cert
school) become detail views accessed FROM the hub.

### C. Field view
Out of the room — at a trailhead, on the trail, at the panigíri. The existing
place‑silhouette + trailhead‑event scenes already cover this. Unchanged.

Navigation: **hub → tap object → detail view → back button → hub.** The bedroom is
home; everything else is somewhere you go.

---

## 3. Phase evolution of the room

The desk metaphor was always about a room that changes as the player's life
changes. Now it's a literal succession of rooms.

### Phase 1 — The childhood bedroom *(Kalamata, mum's house)*
School desk by a wide window onto Kalamata harbour with Taygetos behind. A single
bed in the corner. A panigíri poster on the wall, a corkboard with old school
trophies and family photos, the carbon-dated remnants of a teenage time-capsule.
A door to the hallway; mum's voice carries through occasionally from downstairs.
The atmosphere: *I'm thirty-one and I'm back in my old room.*

### Phase 2 — The working desk *(small office or garage in Kalamata)*
The teenage room is gone (you've moved out — bittersweet beat). A bigger desk
in a small workspace; a wall of gear shelves; several guide radios on chargers
(Maria + Nikos + ...); a route board with route cards pinned. A window onto a
yard with the Hilux visible. Mum's voice no longer carries — *you live alone
now.* Atmosphere: workshop, getting it together.

### Phase 3 — The company office *(proper rented office in town)*
Multiple desks (you + Maria as ops manager). A computer with the booking
platform open. A filing cabinet. A wall of printed reviews. A branded company
stamp. A wall calendar with the company name on it. A window onto the town
from a higher floor. Atmosphere: real business, paperwork, real responsibility.

### Phase 4+ — The regional operations board
A wall-sized map of the Peloponnese with pins per base. Framed manager portraits.
A crisis-notes board. Strategic atmosphere — feels like a war room. A different
window, a wider view, less personal. Atmosphere: institutional. *You built the
machine; you're not sure if it built you back.*

Each room is a **fresh painting** (new base asset), but most overlay objects
(phone, notebook, etc.) carry across with minor re-illustration. Phase
transitions are major narrative beats — closing one door, opening another.

---

## 4. Phase 1 hotspot inventory

Nine interactive objects in the bedroom hub. Each has: an ID, an on-screen
position, a state(s), a tap action (usually opens a detail view).

| # | ID | Object | Position | States | Tap action |
|---|---|---|---|---|---|
| 1 | `phone` | Old phone with booking notifications | desk, near-centre | `dark` / `lit-1` / `lit-many` | Open phone screen — today's bookings |
| 2 | `notebook` | Spiral notebook (logbook) | desk, right | `closed` (sits) / `open` (zoomed-in detail) | Open logbook view |
| 3 | `backpack` | Outdoor pack | floor, left, leaning on chair | `empty` / `partly-packed` / `full` | Open backpack — pack for trip |
| 4 | `window` | Wide window onto Kalamata harbour + Taygetos | back wall, dominant | by season (spring/summer/autumn/winter) + `with-hilux` after purchase | Open 5-day forecast |
| 5 | `catalogue` | Outdoor shop flyer / catalogue | desk corner | `present` (clickable) / `tagged` (recent purchase, sticky note) | Open the shop |
| 6 | `wallet` | Worn leather wallet with coins / cash | desk corner | `thin` (broke) / `thick` (cash) | Open ledger / money view |
| 7 | `corkboard` | Cork pinboard with photos & pins | wall, side | `empty` (Phase 1 start) / `with-Maria` (Phase 2+) / cumulative per hired guide | Open team / clients view |
| 8 | `bed` | Single bed in the corner | corner, left | (always present, no overlays) | Rest — restore energy, advance day |
| 9 | `door` | Bedroom door, slightly ajar | side wall | (always present) | Confirm-leave → main menu |

Plus pure **ambient** (not clickable, just life):
- A geranium / basil plant on the windowsill (changes by season)
- A mug of cold coffee
- A panigíri poster from August 2017 still pinned
- A Mistras print on the wall

Plus the **off-frame mum voice**: a speech bubble drifting in from the left edge
of the frame (kitchen is down the hall), pointing left, italic. Triggers on
day-start (random), on first trip-of-the-day, on certain events. Follows
`LANGUAGE.md §3` rules for mum.

---

## 5. Asset architecture — base + overlays

Painting the WHOLE bedroom as one image per state would mean dozens of
near-duplicate paintings. Instead: **one base + a stack of transparent object
overlays**, composited at runtime.

### Base scene
- One single ink-and-watercolor painting of the Phase 1 bedroom (~1920×864, 20:9)
- Contains: walls, floor, ceiling, window frame + view (default summer), desk
  furniture itself, chair, bed, door, mirror, ambient stuff (plant, mug, poster)
- Does NOT contain: phone, notebook, backpack, catalogue, wallet (these are
  overlays — they need to swap by state)
- Filename: `bedroom-p1-base.webp`

### Object overlays
Transparent-background PNGs, each containing ONE object in ONE state. Painted
in the same ink-and-watercolor register as the base, with the same line weight
and wash discipline so they sit on the base without looking pasted on.

```
bedroom-p1-phone-dark.webp        (phone face-down or unlit)
bedroom-p1-phone-lit.webp         (phone face-up, screen glowing, notifications)
bedroom-p1-notebook.webp          (closed spiral notebook + pencil)
bedroom-p1-backpack-empty.webp    (pack leaning against chair, deflated)
bedroom-p1-backpack-packed.webp   (pack standing up, strapped, ready)
bedroom-p1-catalogue.webp         (folded outdoor-shop flyer)
bedroom-p1-wallet-thin.webp       (wallet open, a few coins)
bedroom-p1-wallet-thick.webp      (wallet thicker, a folded note visible)
bedroom-p1-corkboard.webp         (Phase 1 starting state — old photos)
```

Window seasonal variants (overlay the default window view):
```
bedroom-p1-window-spring.webp     (oleander pink in the verge)
bedroom-p1-window-summer.webp     (noon-gold harbour) — this is the base default
bedroom-p1-window-autumn.webp     (cypress green-black, late vines)
bedroom-p1-window-winter.webp     (rain grey, wet harbour)
bedroom-p1-window-hilux.webp      (Hilux parked in foreground — composites onto any season)
```

**Total Phase 1 hub asset count**: 1 base + ~13 overlays = 14 assets.

Same pattern for Phase 2/3/4: one base each, ~10-15 overlays each.

---

## 6. Hub → Detail navigation

Tap a hotspot:
1. Hotspot pulses brighter for 200ms (tap feedback)
2. **Crossfade 1.2s** (same as story→scene, `f0e7d02`) — bedroom hub fades out
   while the detail view fades in
3. Detail view fills the screen — full scene-full or a custom layout per object
4. **Back button** top-left (paired with the hamburger top-right) returns to hub
5. Crossfade back (1.2s)

Detail-view mapping:
| Hotspot | Detail view (most are existing scenes) |
|---|---|
| `phone` | New scene — phone screen layout with the day's bookings as cards |
| `notebook` | Existing `renderLog()` — the logbook screen |
| `backpack` | New scene — backpack interior with slot grid + owned items |
| `window` | Existing `renderForecast()` — 5-day forecast |
| `catalogue` | Existing `openShop()` — outdoor shop |
| `wallet` | New scene — ledger + financial summary |
| `corkboard` | Existing `openHire()` (Phase 2) / new clients view |
| `bed` | New small scene — *"Sleep until tomorrow?"* + Rest action |
| `door` | Confirmation dialog → existing `goMenu()` |

---

## 7. UX rules

### Discoverability (the central UX question)

**Subtle pulsing glow on every interactive object** by default. Very low
amplitude — `opacity: 0.3 ↔ 0.5` on a soft warm halo behind each object, ~2s
cycle. Players see it without it being intrusive.

**A `?` button top-left** (mirror of the hamburger top-right). Hold or tap-toggle
to enter **highlight-all mode**: every hotspot gets a strong glow + a small
floating label ("Phone", "Backpack", etc.) for one breath, then fades back to
default. Tap the `?` again to dismiss.

**First-time hint** (one-shot): on the very first bedroom-hub view of a new game,
ONE object pulses noticeably (the phone, with its first booking notification)
plus a small italic line: *"Tap the things around you."* — fades after 5 seconds
or first tap.

### Mum's off-frame voice

Mum doesn't appear in the bedroom (she's downstairs in the kitchen). Her voice
arrives as a **left-edge speech bubble** — bone fill, ink border, italic, tail
pointing off-screen left. Triggers:
- Start of certain days (random ~15% chance)
- First booking of the week
- After certain milestones (first cert, first hire, Hilux purchase, …)

Content follows `LANGUAGE.md §3` rules — short, sideways, never face-on. *"paidí
mou! you forgot your bottle again."* / *"have you eaten? there's gemistá in the
fridge."* / *"Kostas's boy was in the paper today."*

### Window seasonality + Hilux

Window view changes by **season** (4 variants). Day-cycle (dawn/noon/dusk)
deferred — overkill for the first ship. The HILUX appears in the window after
purchase (`scene-hilux-dawn` was the locked pathos beat for the purchase moment;
in the bedroom hub, the truck is visible in the harbour-side parking through
the window from then on).

### Mobile touch + safe zones

Hotspots are positioned within the 16:9 safe zone (per `ART-DIRECTION §4`) so
they survive every device aspect. Minimum hotspot size: 60×60 px for thumb
reliability. The `?` and `≡` chrome buttons stay fixed at the screen corners
regardless of overlay state.

---

## 8. State management

The room reflects state. Pseudocode shape:

```js
function renderBedroomHub() {
  const overlays = [];
  // base
  let html = `<img class="hub-base" src="${ASSETS['bedroom-p1-base']}">`;
  // phone — state depends on bookings
  const phoneState = S.bookings?.length > 0 ? 'lit' : 'dark';
  overlays.push({id:'phone', asset:`bedroom-p1-phone-${phoneState}`, x:42, y:38, action:'openPhone()'});
  // backpack — state depends on packing
  const packState = S.loadout?.length === 0 ? 'empty' : 'packed';
  overlays.push({id:'backpack', asset:`bedroom-p1-backpack-${packState}`, x:8, y:65, action:'openBackpack()'});
  // wallet — state depends on cash
  const walletState = S.cash < 200 ? 'thin' : 'thick';
  overlays.push({id:'wallet', asset:`bedroom-p1-wallet-${walletState}`, x:55, y:42, action:'openWallet()'});
  // window — by season + hilux if owned
  const win = `bedroom-p1-window-${seasonName(S)}`;
  overlays.push({id:'window-view', asset:win, x:0, y:0, action:null});
  if (S.has?.hilux) overlays.push({id:'window-hilux', asset:'bedroom-p1-window-hilux', x:0, y:0, action:null});
  // notebook, catalogue, corkboard, etc.
  // render each overlay as <button class="hub-obj" style="left:Nx; top:Ny;"><img src="..."></button>
  for (const o of overlays) html += renderHotspot(o);
  setScene(html);
}
```

Hotspot CSS (sketch):

```css
.hub-obj {
  position: absolute;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  filter: drop-shadow(0 0 6px rgba(232, 168, 81, 0.0));
  transition: filter 0.2s;
  animation: hubPulse 2s ease-in-out infinite;
}
.hub-obj:hover, .hub-obj:focus {
  filter: drop-shadow(0 0 12px rgba(232, 168, 81, 0.7));
}
@keyframes hubPulse {
  0%, 100% { filter: drop-shadow(0 0 6px rgba(232, 168, 81, 0.2)); }
  50%      { filter: drop-shadow(0 0 8px rgba(232, 168, 81, 0.45)); }
}
body.hub-highlight-all .hub-obj {
  filter: drop-shadow(0 0 14px rgba(232, 168, 81, 0.85));
}
body.hub-highlight-all .hub-obj::after {
  content: attr(data-label);
  /* small floating label per object */
}
```

---

## 9. Locked decisions

These are answered. Treat as canonical; don't reopen without flagging.

1. **Discoverability** — pulsing glow on every hotspot, plus a `?` toggle for
   highlight-all mode. First-time hint shows once per new game. See §7.
2. **Hub vs traditional UI coexistence** — utility screens (shop, cert school,
   logbook) stay as their own scene views, ENTERED FROM the hub by clicking the
   right object. Mixing diegesis with chrome-paneled detail screens is the
   standard adventure-game pattern. See §6.
3. **Mum's off-frame voice** — yes, periodic speech bubbles from the left edge
   pointing off-screen. Triggers per §7. Mum disappears at Phase 2 when you move
   out — that absence is itself a beat.
4. **Window time-of-day** — season only for first ship (4 variants). Day-cycle
   deferred. Hilux appears in the window view after purchase.
5. **Phase transition** — leaving the childhood bedroom for the working desk at
   Phase 2 is a deliberate narrative beat. Closing the door of the old room is
   the pathos moment of the transition.
6. **First-load** — kitchen flow stays (Beats 0–4). `renderSetup` (panigíri /
   discipline / loan / kit) stays as the one-time setup beat. The bedroom hub
   becomes the home base for Phase 1 days AFTER `renderSetup` — replacing the
   current button-driven `renderMorning()`.

---

## 10. Open questions

Things to settle BEFORE final commit but not blocking the first asset ship:

- **Save/quit ergonomics** — the door is the menu entry. Should the door also
  show "Continue from yesterday?" when returning from a saved game? (Probably.)
- **Mum's frequency** — too often becomes nagging; too rare and the recurring
  presence is lost. Tuning question; ship at ~15% per day-start and adjust.
- **Backpack-as-state-of-pack** — the painted state needs to LOOK like it
  reflects the current loadout (empty vs packed) without needing N variants
  per item combo. The two-state version (empty / packed) is the pragmatic
  default. A richer "packed with VISIBLE items poking out" version is a stretch.
- **Should the catalogue have arrivals**? — e.g. when new items are added to the
  shop, the catalogue gets a sticky note. Defer; ship the basic catalogue first.

---

## 11. Implementation roadmap

| Stage | What | Where |
|---|---|---|
| 1 | Lock the doctrine | This doc (DESK-HUB.md) ✓ |
| 2 | Manifest entry | `ASSET-MANIFEST.md` Tier L |
| 3 | Prompt pack | `PROMPT-PACK.md` §14 (Phase 1 hub) + §15 (Phases 2-4 briefs) + §16 (detail views) |
| 4 | Asset: base scene | `assets/hub/bedroom-p1-base.webp` |
| 5 | Asset: phone, notebook, backpack overlays | ~3 transparent PNGs |
| 6 | Asset: catalogue, wallet, corkboard overlays | ~3 more |
| 7 | Asset: window seasonal variants | 4 variants |
| 8 | Asset: hilux window addition | 1 transparent overlay |
| 9 | Code: `renderBedroomHub()` function | `index.html` — replaces `renderMorning` for Phase 1 |
| 10 | Code: hotspot CSS + pulse animation | `index.html` styles |
| 11 | Code: `?` highlight-all mode | `index.html` JS + CSS |
| 12 | Code: first-time hint | `index.html` JS, one-shot |
| 13 | Code: detail view for `backpack` (new) | `index.html` |
| 14 | Code: detail view for `phone` (refactor of booking pick) | `index.html` |
| 15 | Code: detail view for `wallet` (new) | `index.html` |
| 16 | Code: hub→detail crossfade glue | reuse existing crossfade pattern |
| 17 | Playtest + iterate | Fotis tests, we tune |

Stages 1-3 are this commit. Stages 4-8 are Fotis-side asset generation (ChatGPT
with the new §14 hub prompts + the approved base scene as reference). Stages 9-16
are subsequent code commits after the base scene exists.

---

## Cross-references

- `ART-DIRECTION.md` — the visual register (ink-and-watercolor travel, §4) and
  the desk-metaphor doctrine (§1-§3) that this implements.
- `LANGUAGE.md` — mum's voice rules (§3), the slacker meta-voice for any UI text.
- `ASSET-MANIFEST.md` — Tier L holds the hub assets (added in this commit).
- `PROMPT-PACK.md` — §14 Phase 1 hub prompts (base + overlays), §15 Phase 2-4 briefs,
  §16 detail-view assets (backpack / clients / reports).
- `index.html` — `renderMorning()` to be replaced by `renderBedroomHub()` in a
  later commit, after the base scene lands.
