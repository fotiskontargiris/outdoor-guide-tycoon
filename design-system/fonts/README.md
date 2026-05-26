# Fonts

The game and design system use three families, all from Google Fonts. No local font files are bundled — the CSS imports them via `fonts.googleapis.com`:

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..700&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&family=Spline+Sans+Mono:wght@400;500;600&display=swap');
```

| Family | Role | License | Source |
|---|---|---|---|
| **Fraunces** | Display & headlines (incl. wordmark italic) | OFL | <https://fonts.google.com/specimen/Fraunces> |
| **Spectral** | Body / narrative prose | OFL | <https://fonts.google.com/specimen/Spectral> |
| **Spline Sans Mono** | Instruments / labels / stats | OFL | <https://fonts.google.com/specimen/Spline+Sans+Mono> |

## Substitution flag

**No font substitution was needed** — the original game already used Google Fonts via `<link>`, and all three families are available there. Nothing has been swapped to a "nearest match."

If you ever need to ship offline:

1. Use the [google-webfonts-helper](https://gwfh.mranftl.com/fonts) to download the woff2 files for each family.
2. Drop them in this folder.
3. Replace the `@import` in `colors_and_type.css` with `@font-face` blocks pointing at `./fonts/<family>.woff2`.

## Fallback stacks (already in `colors_and_type.css`)

```css
--font-display: 'Fraunces', 'Times New Roman', Georgia, serif;
--font-body:    'Spectral', Georgia, serif;
--font-mono:    'Spline Sans Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
```

If Google Fonts is blocked, the page will degrade to Georgia / system mono and still read the right way — calm, literary, with monospaced instruments — though the italic gold "Guide" wordmark loses some of its character.
