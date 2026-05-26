---
name: messinia-guide-design
description: Use this skill to generate well-branded interfaces and assets for Messinia Guide (working title — *Outdoor Guide Tycoon*), a text-driven outdoor-activities tycoon set in the Peloponnese. The brand voice is literary, second-person, Mediterranean-dusk; the visual language is warm sand on deep teal with a topographic backdrop, Fraunces/Spectral/Spline-Sans-Mono typography, and zero emoji. Use this for production code, prototypes, marketing pages, slides, or any other artifact that needs to look and read like part of this world.
user-invocable: true
---

# Messinia Guide — Design Skill

Read `README.md` first — it carries the full art direction, content fundamentals, visual foundations, and iconography. Then explore as needed.

## Manifest

- `README.md` — context, voice, palette, type, components, iconography. **Start here.**
- `colors_and_type.css` — drop-in CSS with all design tokens and semantic classes.
- `fonts/` — Google Fonts notes (Fraunces / Spectral / Spline Sans Mono). No substitutions in play.
- `assets/` — topo backdrop SVG, wordmark, weather glow-dot placeholders.
- `preview/` — 23 small cards (Colors / Type / Spacing / Components / Brand) covering every token and component.
- `ui_kits/game/` — React recreation of the in-game UI (mobile, 640px). Components: Chrome, Choices, Screens, App.
- `ui_kits/marketing/` — Single-file marketing landing page.
- `aegean-guide.html` — Original single-file game (vanilla JS). The ground truth.
- `aegean-guide-CLAUDE.md` — Engineering bible.
- `aegean-guide-PIXEL-ART.md` — Locked spec for future pixel sprites. Read before drawing any new "icon."
- `aegean-guide-original-README.md` — Original repo README.

## How to use

### If you're making a throwaway prototype, mock, deck, or marketing page

1. Copy `colors_and_type.css` and the `assets/` folder into your output directory.
2. Drop `<link rel="stylesheet" href="colors_and_type.css">` into your HTML head.
3. Use the components in `ui_kits/game/` or `ui_kits/marketing/` as direct references. Copy whole components if you need to.
4. Write copy in the **voice** described in `README.md` → CONTENT FUNDAMENTALS. Second person, literary, no emoji, only the sanctioned dingbats.
5. Surface the topo backdrop (`assets/topo-backdrop.svg`) at fixed full-viewport `opacity: 0.06`. Every full-bleed surface needs it.
6. Save as standalone HTML and show it to the user.

### If you're working on the real game

- Stay in `aegean-guide.html`. Read `aegean-guide-CLAUDE.md` § 6–7 for the conventions and gotchas. Bump `SAVE_KEY` when changing state shape.
- Don't add CSS variables outside the locked palette. Re-shade within the ramp.
- All UI dingbats from the sanctioned set only (`▸ ▶ ✓ ✦ ▦ ☼ ❧ ⌂ ✕ ≡ · —`). Emoji are forbidden.
- After any cash/rep/etc. change on a sub-screen, call `renderHUD()`.
- Day advances go through `advanceDay()` only.

### When asked to design something new without further guidance

Ask the user:

1. **What surface?** (in-game screen, marketing page, devlog, slide, social card, pixel sprite, other)
2. **Phase / context?** (Phase 1 solo guide / Phase 2 team management / Phase 3 future water+air activities)
3. **Tone?** (default = contemplative literary; never arcade)
4. **Do they want variations?** (offer 2–3 atomic options)

Then act as an expert designer in the brand. Default output format is HTML.

## Don't

- Don't invent new colours.
- Don't use Inter, Roboto, system fonts, or modern UI tropes (purple gradients, glassmorphism beyond what's already here, rainbow accents).
- Don't draw stand-in icons (Lucide / Heroicons / emoji). Use the placeholder pattern (`background: var(--panel2); border: 1px dashed var(--edge); caption: "(sprite forthcoming)"`).
- Don't recreate UIs from screenshots alone — `aegean-guide.html` is the source of truth.
