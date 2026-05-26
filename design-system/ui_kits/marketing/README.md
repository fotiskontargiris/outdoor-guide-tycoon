# UI Kit · Marketing (Messinia Guide)

A single-file landing page in the same voice and palette as the game. No build step.

## Sections

1. **Nav** — kicker + wordmark, three quiet text links, one outlined CTA.
2. **Hero** — kicker, italic-gold headline, narrow lede, primary `.go` button + secondary `▸` link. Right column is a recreated mini in-game screen showing a stormy morning — the strongest possible "this is what the game looks like" proof.
3. **The pillars** — the three art-direction principles (Peloponnese / instrument vs. prose / contemplative) as three cards.
4. **Routes** — three sample routes (d1, d2, d3) coloured by difficulty.
5. **Quote** — a logbook excerpt set against a `2px solid var(--terra)` rule. The single ornamental element on the page.
6. **Footer** — credit, repo link, dingbat-light mono navigation.

## Faithfulness rules

- The page uses **only** the design system's tokens, fonts, and components.
- The topo SVG sits at `position: fixed; opacity: 0.06` exactly as in-game.
- All headlines use the `Messinia <em>Guide</em>` italic-gold pattern at least once.
- No emoji. No stock photography. No invented icons.

## When to use this kit

- Pitch decks and one-pagers for the game itself.
- A real marketing site, once the prototype graduates.
- A devlog template — the section blocks compose cleanly.

If you need to extend the page, the safest moves are: (a) add another **`.mk-section`** with the same lab/h2/body-lede pattern, (b) add another card to the `.pillars` or `.routes` grid. Do not introduce new colours or shadows.
