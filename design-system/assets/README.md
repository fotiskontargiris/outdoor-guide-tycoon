# Assets

Brand artwork used across the design system. All vector or palette‑locked.

| File | What |
|---|---|
| `topo-backdrop.svg` | The faint topographic contour backdrop. Use as a fixed full‑viewport layer at `opacity: 0.06`. The single most identifying visual mark of the brand. |
| `wordmark.svg` | The full lockup — kicker + `Messinia <em>Guide</em>` + tagline. Drop in directly to a marketing surface. |

## Iconography placeholders

The shipped game uses coloured glow dots for weather and dashed sketch outlines for items
(see `colors_and_type.css` and the in‑game CSS). Treat these as the *current* visual language,
not as placeholders for a deferred art rollout.

If a future direction is picked for icons/sprites, replace the dot pattern there. Until then:

- **Do not generate stand‑in icons** in Lucide / Heroicons / Phosphor / emoji — they will
  visually clash with the contemplative literary tone. See `README.md` § ICONOGRAPHY for the
  rationale.
