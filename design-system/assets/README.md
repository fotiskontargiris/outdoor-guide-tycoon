# Assets

Brand artwork used across the design system. All vector or palette‑locked.

| File | What |
|---|---|
| `topo-backdrop.svg` | The faint topographic contour backdrop. Use as a fixed full‑viewport layer at `opacity: 0.06`. The single most identifying visual mark of the brand. |
| `wordmark.svg` | The full lockup — kicker + `Messinia <em>Guide</em>` + tagline. Drop in directly to a marketing surface. |
| `weather/` | Coloured glow‑dot placeholders for the five weather states. Pure CSS reproductions are inline in `colors_and_type.css`; the SVG files exist for use in pages that can't easily emit inline HTML. |

## Pixel sprite roadmap

These are *placeholders*. The locked plan in `aegean-guide-PIXEL-ART.md` calls for hand‑pixelled 16×16, 24×24, 32×32, and 48×48 sprites on the locked palette. Until those exist:

- **Weather** → use the coloured dot pattern from `weather/`.
- **Items, gear, certs, clients, portraits, route banners** → leave placeholder blocks (`background: var(--panel2); border: 1px dashed var(--edge)`) with a caption like `(sprite forthcoming)`. The game already does this and it reads as intentional.

**Do not generate stand‑in icons** in Lucide / Heroicons / Phosphor / emoji — they will visually clash with the eventual pixel rollout. See `README.md` § ICONOGRAPHY for the rationale.
