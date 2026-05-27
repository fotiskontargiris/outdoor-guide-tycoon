# UI Kit · In-game (Messinia Guide)

A visually faithful React recreation of the in-game UI from `aegean-guide.html`. Mobile-first, single-column, 640px max-width. The visuals are lifted from the source file; the implementation is a thin set of React components meant to be sliced apart and reused for new screens.

## Files

| File | What |
|---|---|
| `index.html` | Click-through entry point. Boots Chrome + Choices + Screens + App. |
| `Chrome.jsx` | `<Topo>`, `<Wrap>`, `<Appbar>`, `<HUD>`, `<Stat>`, `<Goal>`, `<Scene>`, `<FCard>`, `<ActionBar>`, `<DayTag>`. The persistent chrome around any scene. |
| `Choices.jsx` | `<Opt>`, `<Choices>`, `<WeatherTitle>`, `<Booking>`, `<Mate>`, `<Gauge>`, `<Review>`, `<Drawer>`. The reusable content primitives. |
| `Screens.jsx` | `<TitleScreen>`, `<ProfileScreen>`, `<MorningScreen>`, `<TrailheadScreen>`, `<ResultScreen>`, `<AssignScreen>`. One per game state. |
| `App.jsx` | State machine + demo data. Wires the screens together. |

## Click-through

Open `index.html`. You will see the title screen — *A guiding life · Begin a season*. From there:

1. **New game** → Profile builder (name, background, starting kit).
2. **Begin your first season** → Morning of Day 4 (with three bookings, the forecast card).
3. Tap any booking → **Trailhead event** ("Someone forgot water").
4. Pick a choice → **Trip result** with reviews and a ledger.
5. **Bring on the next day** → loops back to Morning, day advanced.
6. The bottom footer has a *jump to phase II · assign team* shortcut so you can see the team-management surface without grinding through Phase 1.

The `≡` icon in the appbar opens the bottom-sheet drawer (Summary / Forecast / Logbook / Main menu / Close).

## What's faithful

- Palette and fonts come straight from `../../colors_and_type.css`.
- Layout proportions, gaps, radii, hover/press states match the source.
- The `rise` and `slidein` keyframes are inherited.
- The forecast card glow dots use the same `box-shadow: 0 0 8px <col>` recipe.

## What's simplified

- Game logic is not real — bookings are static and trip results are canned.
- Saving / `window.storage` is omitted.
- The shop, certs, hiring, depot, and crisis-radio flows are stubbed (`alert()` placeholders).
- Visual representations for weather, items, and portraits remain the placeholder glow dots from the source build.

## Adding a new screen

1. Add a new `<XScreen>` to `Screens.jsx` using `<Scene>`, `<DayTag>`, `<Choices>`, `<Opt>`, etc.
2. Wire a route into `App.jsx`'s `switch (screen)` block.
3. If it needs a new persistent element (HUD slot, new card type), put the primitive in `Chrome.jsx` or `Choices.jsx` first so it stays reusable.
