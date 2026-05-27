# Messinia Guide — Design System

> *"A guiding life."* — title screen, `aegean-guide.html`

A design system for **Messinia Guide** (working title *Outdoor Guide Tycoon*), a text‑driven outdoor‑activities tycoon game set in the Peloponnese. You start as a solo hiking guide in Messinia, build a team, and grow into the region's leading outdoor company — eventually expanding into water and air activities in Navarino Bay and over Taygetos.

This folder is **the bible** for anyone designing screens, marketing, slides, or any other surface for the game. It collects the colour ramp, typography, voice, components, and the lived visual vocabulary in one place.

---

## Sources

Everything here was derived from the existing single‑file prototype. If you have access, browse the originals:

- **GitHub repo:** <https://github.com/fotiskontargiris/outdoor-guide-tycoon>
  - `aegean-guide.html` — the entire current game (vanilla HTML/CSS/JS, no build step). Copied locally to `aegean-guide.html`.
  - `CLAUDE.md` — project bible / engineering notes. Copied to `aegean-guide-CLAUDE.md`.
  - `README.md` — game README.

Readers with access can — and should — explore the repo to do a better job mocking or extending interfaces; the prototype is short, self‑contained, and the most reliable ground truth.

---

## Art direction (Games Art Director's note)

The pitch I'd put on a one‑pager and pin above every monitor:

> **An Aegean field journal that happens to be a tycoon game.** Warm Mediterranean dusk over a deep teal sea. Sand‑coloured ink on a faint topographic backdrop. A literary serif voice, instruments rendered in monospace. The player doesn't *play* a spreadsheet — they read a season of their own life as a guide, written in second person.

Three pillars that everything else has to serve:

1. **The Peloponnese is the protagonist.** Real places — Voidokilia, Taygetos, Polylimnio, Neda, Mavromati — anchor every screen. No generic "Mountain Route 3". Bring the geography forward; don't abstract it.
2. **The instrument vs. the prose.** Numbers, weather, stat strips and timestamps are in **Spline Sans Mono** with wide tracking — they read as *measured*. Narrative, decisions, place names and headers are in **Fraunces / Spectral** — they read as *written*. The contrast between the two voices is the entire UI rhythm; never blur it.
3. **Contemplative, not arcade.** No bright primaries, no neon, no juicing for its own sake. The player is meant to feel like they're sitting in a tavern at dusk, leafing through a logbook. Calm motion (`rise` fade‑up, 0.45–0.7s ease), warm sun‑flare gradient at the top, deep teal everywhere else.

If a design choice doesn't reinforce *Peloponnese*, *instruments vs. prose*, or *dusk calm*, it's wrong for this game.

Any future iconography or sprite work should inherit the same palette and light source — the eye is trained on these surfaces, so new visuals must sit on the panels without vibrating.

---

## Index

| File | What it is |
|---|---|
| `README.md` | This document — context, content + visual foundations, iconography, index. |
| `colors_and_type.css` | All colour & type design tokens (CSS custom properties) + semantic classes. Drop into any new file. |
| `SKILL.md` | Cross‑compatible skill manifest. The entry point if you're using this folder as a Claude Code skill. |
| `fonts/` | Google‑Fonts links and notes — Fraunces, Spectral, Spline Sans Mono. |
| `assets/` | Brand artifacts: hero topo backdrop, route placeholders, weather glyphs, logo lockups. |
| `preview/` | One small HTML card per token/specimen for the Design System tab. |
| `ui_kits/game/` | High‑fidelity recreation of the in‑game UI (HUD, scenes, menus, drawer, choices). |
| `ui_kits/marketing/` | A short marketing landing page in the same voice and palette. |
| `aegean-guide.html` | The original single‑file game (read‑only source of truth). |
| `aegean-guide-CLAUDE.md` | Engineering bible from the repo. |

---

## CONTENT FUNDAMENTALS — see `../LANGUAGE.md`

The voice / tone / Greek diction / typography & punctuation doctrine now lives in the
repo root file **`LANGUAGE.md`**. Read that before writing copy.

The short version (kept here only as a flag — not a substitute):

- **Comic‑heightened with an earned ache.** Comedy is the default register; pathos rationed,
  always earned. Parody is allowed on non‑pathos beats.
- **Second person, present tense for the world, past tense for resolved actions.** Literary,
  terse, complete sentences. No telegraphic UI fragments.
- **Greek specificity** is a comedy *and* a credibility engine — real places, real textures,
  real words (panigíri, kafeneío, gemistá, meltémi).
- **Typography**: sentence case in prose, ALL CAPS mono for instrument labels, em dashes
  not double hyphens, middle dots between metadata atoms, curly quotes, `€` prefix no space,
  Unicode minus for negatives. No emoji.
- **People** are named individuals with specs; clients are noun phrases ("a family with two
  young children"), never types.

---

## VISUAL FOUNDATIONS

### Palette

A single locked ramp drawn from a Mediterranean‑dusk plein‑air study. **Do not invent new hues.** Re‑shade within the ramp.

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0c252b` | Page background (deep dusk teal) |
| `--bg2` | `#081b20` | Deeper bottom of background gradient |
| `--panel` | `rgba(23,62,68,0.55)` | Cards / scene container (glassy teal over backdrop) |
| `--panel2` | `rgba(12,40,46,0.6)` | Inner / secondary panels (forecast, mate cards) |
| `--edge` | `rgba(220,196,150,0.16)` | Hairlines, borders (warm sand at low opacity) |
| `--ink` | `#ecdcc0` | Primary text (sand cream — the "paper") |
| `--ink-dim` | `#9fb0ad` | Secondary text (italic prose, meta) |
| `--ink-faint` | `#6f8884` | Labels, monospace UI text |
| `--terra` | `#d2754a` | Primary accent — kickers, prompts, primary button, hover borders |
| `--terra-bright` | `#e88a5c` | Action‑button highlight (`go` gradient top) |
| `--gold` | `#e3b863` | Value, money, success emphasis, sun |
| `--sea` | `#6fb0ad` | Cool accents — task lines, water, windy weather |
| `--olive` | `#aebd7e` | Vegetation, gear conditions, "Bought / Serviced" log entries |
| `--sage` | `#9cc07a` | Positive deltas, success reviews, low‑difficulty routes |
| `--danger` | `#e0664c` | Storms, bankrupt cash, complaints, lost reputation |

**Background composition (every screen):**
```css
background:
  radial-gradient(120% 80% at 50% -10%, rgba(210,117,74,0.18), transparent 55%),
  linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%);
background-attachment: fixed;
```
Plus a fixed‑position **topographic SVG backdrop** at `opacity: 0.06` (warm sand contour lines on the dusk teal). It is the single most identifying mark of the brand — never ship a marketing or in‑game screen without it.

### Typography

Three families, three jobs. Loaded via Google Fonts (see `fonts/README.md`).

| Family | Job | Where |
|---|---|---|
| **Fraunces** (serif, optical sizes 9–144, italic available) | *Display & headers.* Confident, slightly literary, with the italic carrying the kicker mood. | `h1`, `h2`, `.weather`, `.booking .route`, `.mate .nm`, big buttons (`.go`). |
| **Spectral** (serif) | *Body / narrative.* The novel typeface — used for prose, choice text, italic asides. | `body`, `.scene p`, `.opt`, `.weather small`. |
| **Spline Sans Mono** | *Instruments.* Monospace, wide letter‑spacing (`.10em–.30em`), uppercase. Stat labels, the kicker, day tags, choice marks, footer, "GOAL —" lines. | `.kicker`, `.stat .lab`, `.stat .val`, `.day-tag`, `.fcard .fh`, `.opt .mark`, footer. |

Cadence: a typical scene begins with a **kicker** (mono, terra, .3em tracking) → **headline** (Fraunces, often with one word in italic gold) → **prose** (Spectral, sand) → **choices** (Spectral with a small mono mark on the left) → an **actionbar** (single terra solid button in Fraunces). The mono never appears as a paragraph; the serif never appears as a label.

### Spacing & layout

- **Mobile‑first single column.** `max-width: 640px`, `margin: 0 auto`, `padding: 18px 16px 40px`. Wider screens stay 640 — letterboxed by the topo background.
- **Vertical rhythm:** `gap: 8px` between HUD stats; `gap: 10px` between choice buttons; `margin-bottom: 14px` between cards. The numbers are not arbitrary — preserve them.
- **Corner radius:** `--r: 14px` for the primary scene container; `12px` for choice buttons, stat cards; `13px` for the forecast card; `9–11px` for inline pills.
- **One radius, no mixing.** Never put a `4px` corner next to a `14px` corner.

### Shadows & elevation

There is **one shadow**, applied to the main scene panel:
```css
box-shadow: 0 18px 40px -28px rgba(0,0,0,0.9);
```
Plus a coloured glow on the primary action button:
```css
box-shadow: 0 10px 26px -12px var(--terra);
```
No other components carry shadows. Elevation is communicated by **glassy backdrop‑blur + thin warm‑sand border**, not stacking shadows.

### Borders

Hairline only. `1px solid var(--edge)` — i.e. warm sand at 16% opacity. On hover, the border swaps to `var(--terra)` (full‑opacity warm clay). That single colour swap is the entire interaction language for "this is alive."

### Backdrop & atmosphere

- The **topo SVG** sits at `position: fixed; inset: 0; z-index: 0; opacity: 0.06`. Bezier contour lines, stroked in `--gold` at 1.2px. It must extend full‑viewport and never be in motion.
- A **warm sunset radial** at the top of the page (terra at 0.18 → transparent at 55%) suggests dusk sky bleeding into sea.
- Cards use `backdrop-filter: blur(4–6px)` over both. Without the blur the topo lines bleed through and look noisy.

### Animation

Restraint is the rule.

- **`rise` (entry):** 0.45–0.7s ease, `opacity 0 → 1`, `translateY(12px) → 0`. Applied to the appbar, HUD, forecast card, scene container. Staggered by 0.05–0.08s.
- **`slidein` (logbook entries):** 0.4s ease, `opacity 0 + translateX(-6px) → 0`.
- **Button press:** `transform: scale(.95)` or `translateY(-1px) → translateY(0) scale(.995)`. Snappy, ~120ms.
- **Bar fills:** `transition: width .5s ease` — slow enough to read the change.
- **No bounces, no springs, no rotation, no parallax.** The game is contemplative; motion exists only to acknowledge a state change.

### Hover, press, disabled

- **Hover:** swap `border-color` to `var(--terra)`, lift `background` to `rgba(210,117,74,0.12)`. On primary buttons, `filter: brightness(1.06)` plus a 1px Y translate.
- **Press:** `transform: scale(0.95)` for icon buttons; `translateY(0) scale(0.995)` for choice buttons; `translateY(0) scale(0.99)` for the primary `go` button.
- **Disabled:** `opacity: .4; pointer-events: none; filter: grayscale(.5)`. Don't dim alone — the grayscale is what reads as *unavailable*.
- **Focus:** rely on the border colour swap; no separate focus ring (the game is phone‑first and never receives keyboard navigation).

### Transparency & blur

- The two `--panel` colours are **deliberately translucent** so the topo contour lines show through faintly. Never use solid teal fills on cards.
- `backdrop-filter: blur(3–6px)` on cards and the menu drawer. On the drawer overlay it's `blur(3px)` with a darker `rgba(6,16,18,0.62)` wash.
- Inputs use `background: rgba(0,0,0,0.18)` — a faint darker pool inside the panel.

### Buttons & inputs

Five flavours, mapped to clear roles.

1. **`.go` — primary action.** Fraunces 600 17px, terra gradient bg, dark ink colour (`#1a2b22`), full width, coloured shadow. **One per screen, only at the bottom of the actionbar.**
2. **`.opt` — choice.** Spectral 15.5px sand, faint two‑tone gradient bg, thin edge, monospace `.mark` on the left. The user clicks these all day.
3. **`.opt.primary` — chosen choice.** Same shape, with a terra‑tinted border and bg. Used for "currently selected" state in setup screens.
4. **`.iconbtn` — 44×44 icon.** Round‑square, faint panel bg, glyph in `font-size: 22px` (the `≡` menu button is the canonical example).
5. **`.assign` — secondary CTA.** Mono 11px, terra border on transparent bg, no fill. Used for in‑situ assignments inside `.mate` cards.

Inputs are a single field shape — full‑width, `rgba(0,0,0,0.18)` bg, `1px solid var(--edge)`, Fraunces 18px (so typed names match the headline voice).

### Cards

- **`.scene`** — the big one. Translucent panel, hairline edge, `--r` radius, the only shadow on the page, blur 6px.
- **`.fcard`** (forecast) — same anatomy, slightly tighter radius (13px), with a mono header row using a gold `b` and a terra "5‑day ▸" tag.
- **`.stat`** — HUD stat cell. 4‑column grid, mono labels and values, optional 4px progress bar in `bar > i`.
- **`.mate`** — a person card (you + guides). Inner `--panel2` fill, name in Fraunces, spec in italic Spectral, task line in mono `--sea`. The dominant pattern for "an entity that does things."
- **`.booking`** — a stacked text block, not a bordered card. Distinguishes data‑you‑pick (bookings) from data‑you‑embody (mates).

### Layout rules (fixed elements)

- The **topo SVG** is `position: fixed`. It never scrolls.
- The **menu drawer** is `position: fixed` bottom sheet, slides up `transform: translateY(100%) → 0`, `0.32s cubic-bezier(.2,.7,.1,1)`. Bordered top corners (20px), the only place this radius appears.
- Everything else lives inside the `.wrap` column and scrolls with the page.

### Brand stamps

- **Kicker:** `Outdoor Activities Tycoon` in mono terra, 10px, .3em tracking. Appears above the H1 wordmark on the title screen and at the top of all branded surfaces.
- **Wordmark:** `Messinia <em>Guide</em>` — Fraunces 600, with `Guide` set in *italic gold*. Always two words, never just *Guide* or *Messinia*. (See `assets/wordmark.svg`.)
- **Difficulty colours:** `.d1` sage / `.d2` gold / `.d3` terra‑bright. Used to colour route names by difficulty.

---

## ICONOGRAPHY

The current game uses **no icon font and no PNG icons.** Visual labelling happens through three channels, and the design system follows the same convention.

### 1. Spare Unicode dingbats (the *only* glyphs used as icons)

Pulled from the running game. The full sanctioned set:

| Glyph | Meaning | Where it appears |
|---|---|---|
| `▸` | "go to / continue / forward" | Continue button, "5‑day ▸" forecast tag |
| `▶` | Active marker / primary direction | Reserved for primary CTAs |
| `✓` | Selected / completed | Choice marks (kit selected, cert earned) |
| `✦` | New / fresh start | "New game" choice mark |
| `▦` | Summary / ledger | Season summary menu item |
| `☼` | Forecast / sun / weather | 5‑day forecast menu item |
| `❧` | Logbook / chronicle | Logbook menu item |
| `⌂` | Home / main menu | Main menu item |
| `✕` | Close / dismiss | Close menu, drawer dismiss |
| `≡` | Menu | The 44×44 icon button in the appbar |
| `·` | Default mark / separator | Unselected option marks, monospace separators |
| `—` | Em dash | Punctuation in headlines and meta |

**No emoji, ever.** Per the game's `CLAUDE.md`: *"No emojis (dingbat symbols like ▸ ▶ ✓ ☾ are fine)."*

### 2. Coloured chips & gradient dots (weather)

Weather is represented today by a coloured dot with a subtle box‑shadow glow:
```html
<div style="width:10px;height:10px;border-radius:50%;
            background:var(--gold);box-shadow:0 0 8px var(--gold)"></div>
```
In any new mock, use the dot pattern verbatim — the warm‑coloured glow on the deep‑teal panel is the look. There is no icon font or sprite roadmap to swap in; the dot **is** the visual language for weather right now.

### 3. The topo SVG

The single piece of brand artwork that everything sits on. Stored at `assets/topo-backdrop.svg`. Use it on every full‑bleed surface (in‑game, marketing, slides). It is *the* logo of the game, more than the wordmark is.

### Iconography stance

There is currently no icon system beyond the dingbats above and the weather dots. Earlier
plans for a hand‑pixelled sprite set have been retired; future art direction is open.

**Do not invent placeholder line icons** (Lucide, Heroicons, Phosphor, etc.) for in‑game
surfaces — they will clash with the contemplative literary tone the game has settled into.
If a slot needs a visual cue, use a coloured `--terra`/`--gold`/`--sea` dot or a sand‑cream
sketch outline — the game already does this and it reads as intentional.

### A note on substitution

If you absolutely must use a CDN icon set for a mock (e.g. a non‑game marketing surface),
**the closest match is Lucide's "outline" stroke set at `stroke-width: 1.5px` with stroke
colour `--ink`.** Flag the substitution clearly.

---

## Suggested reading order for new designers

1. Open `aegean-guide.html` in a browser. Play one in‑game day.
2. Open `preview/` in the Design System tab and skim the cards.
3. Read `aegean-guide-CLAUDE.md` §1–3 (what the game is, architecture).
4. Open `ui_kits/game/index.html` and `ui_kits/marketing/index.html` for high‑fidelity templates you can copy from.

When in doubt: **calm, warm, written, Peloponnese.**
