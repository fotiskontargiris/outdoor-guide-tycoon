# PROMPT-PACK.md — locked AI prompts per asset

The production tooling for AI‑generated art. Pair‑read with `ART-DIRECTION.md` (the
doctrine these prompts encode) and `ASSET-MANIFEST.md` (the list of what to make, in what
order, with what filename). This file's job is to make sure 43 different prompts produce
43 assets that feel like the **same game**.

> **Consistency is the only hard problem.** Style anchor verbatim in every prompt; palette
> hex verbatim; once pilot‑01 is approved, *use it as a visual reference* for every
> subsequent prompt. The model is allowed to vary the subject; it is not allowed to vary
> the surface.

---

## 1. How prompts are structured here

Every prompt is the **same four blocks in the same order**:

```
[STYLE ANCHOR]   (§2 — verbatim, every time)
[PALETTE LOCK]   (§3 — verbatim, every time, season accent swapped per asset)
[COMPOSITION]    (§4 — per tier rules + per‑asset subject from ASSET-MANIFEST)
[NEGATIVE]       (§5 — verbatim, every time)
```

Engine‑specific syntax (Midjourney `--ar`, `--cref`, `--sref`; Sora aspect tags; Nano
Banana reference image upload; Reve aspect parameter) goes at the end. See §9.

---

## 2. The style anchor (verbatim — every prompt)

> *Editorial Mediterranean illustration. Matte gouache surface — opaque colour blocks,
> chalky paper texture, no gradients, no airbrush, no drop shadow, no glow. Disciplined
> woodcut line work in dark warm ink underneath the colour, ~2px on foreground figures,
> ~1.25px on mid‑ground structures, no outlines on landscape masses. Flat lighting with a
> single warm sun direction; shadows are a single block of a darker neighbour hue, never
> black. Limited palette only (see palette lock). Style reference: Edward Bawden travel
> posters, Hugo Pratt Mediterranean panels, mid‑century New Yorker editorial illustration,
> Greek folk woodcuts (A. Tassos). Hand‑made, opinionated, never neutral. The picture is
> illustrated — not photographed, not 3D rendered, not vector flat‑design.*

This paragraph goes into **every** prompt unmodified. Do not paraphrase. Do not shorten.
Drift starts when this drifts.

---

## 3. Palette lock (verbatim — every prompt)

> *Use only these hexes: terracotta clay `#C8633D`, sun‑bleached olive `#7E8A4B`, deep
> Ionian sea `#1F4A56`, warm limestone bone `#EEE5D2`, warm near‑black ink `#1B1B1F`, plus
> one seasonal accent: **[ACCENT]**. Five core hues do 85% of the work; the accent earns
> the eye in one shape. No pure white, no pure black. No sixth hue.*

Swap `[ACCENT]` per asset:

| Season / mood | Accent | Hex | Use for |
|---|---|---|---|
| Spring / opening / warmth | **Oleander pink** | `#D87596` | flowering verge, scarf, a tin lid |
| Summer / heat / triumph | **Noon gold** | `#E0A951` | sun on stone, paddle blade, harvest |
| Autumn / reflection | **Cypress green‑black** | `#2E3A2C` | late vines, wool jumper, cemetery cypress |
| Winter / damp / introspection | **Rain grey** | `#7A8088` | wet road, office window, soaked tarp |

When in doubt for character cards: **noon gold** (the summer baseline). For pathos
stills: **rain grey** (drops saturation a notch by default).

---

## 4. Composition rules per tier

These are paste‑in additions to the prompt, after the palette lock and before the subject.

### Tier B — Heroes (portraits, 5:4 vertical)
> *Mid‑shot waist‑up, single figure off‑axis, dominant in frame. Bone background, simple.
> The figure carries a specific physical signature object (see subject line) and is
> caught mid‑gesture, not posed. Gesture over expression — the smirk is in the posture.
> Slightly stylised but adult proportions; no chibi, no big head, no anime eyes. Reads at
> thumbnail.*

### Tier C / D — Glyphs (SVG‑style, 64×64)
> *Single‑colour icon, ink on bone, diagrammatic, no text. Drawn as if etched into a
> brass plate. Reads at 24px. Negative space inside the figure where the contour reads
> it. One stroke weight throughout.*

### Tier E — Place silhouettes (landscape, 8:5)
> *Mid‑distance landscape with one or two human‑scale figures off‑centre. The named place
> is recognisable by silhouette alone. Real Messinia / Mani / Arcadia — not generic
> Mediterranean, not Cyclades. The horizon does work (sloped for wind, high for pressure,
> low for room to breathe).*

### Tier F — Set pieces (1280×800)
> *Cinematic mid‑shot. Subject in §‑asset is the protagonist; everything else serves.
> For pathos stills (Hilux dawn, first hire): single shape or small group, drop
> saturation a notch, hold the frame. For parody‑lift (panigíri): max density, every
> figure doing a specific thing.*

### Tier G — Chrome (object flat‑lays, 800×600)
> *Top‑down or three‑quarter flat lay of a single object. Bone background. The object is
> real and specific (linen notebook, official certificate, bar‑receipt loan note) — not
> a UI panel. Slight paper texture allowed.*

---

## 5. Negative prompt (verbatim — every prompt)

> *No emoji. No drop shadows. No gradients. No glow. No bloom. No motion blur. No
> sparkles or particle effects. No anime, no chibi, no mascot, no cute. No
> photorealism, no 3D render, no octane, no HDR. No vector flat‑design, no corporate
> Memphis, no floating laptops. No Santorini whitewash, no blue domes, no infinity pool
> sea. No generic Mediterranean — no Tuscan villas, no Provençal lavender, no Croatian
> red roofs without context. No AI‑slop tells: no six fingers, no fused limbs, no glossy
> plastic surface, no melted faces, no random text strings. No decorative ornament —
> no floral borders, no evil‑eye motifs as filler. No outlined cute weather (smiling
> sun, sad rain cloud). No more than six hues. No pure white. No pure black.*

This block also goes in every prompt unchanged. Most engines accept it as a "do not
include" suffix; for those that need a separate negative‑prompt field, paste it there.

---

## 6. The pilot trio — full prompts ready to paste

Generate these three first. If they sit on a wall together and feel like the same game,
proceed to Tier A. If any one feels off — *fix the prompt before producing tier B+*.

### `pilot-01-hero-alani`
File target: `assets/heroes/hero-09-alani.png` · Aspect: 5:4 vertical · Accent: **noon gold**

```
[STYLE ANCHOR — §2 verbatim]

[PALETTE LOCK — §3 verbatim with ACCENT = noon gold #E0A951]

[COMPOSITION — Tier B heroes block — §4]

Subject: The Alani, a Greek man in his thirties, leaning back against the seat of a cheap
two-stroke moped parked outside a village kafeneío. He wears a faded olive shirt rolled at
the sleeves, a worn leather wristband on the right wrist, jeans and dusty boots. An
unlit cigarette is tucked behind his right ear. Half a smirk, eyes off-frame to the left
as if greeting someone. The kafeneío doorway is behind him in deep Ionian shadow; a hand-
painted sign hangs above. Late afternoon, terracotta dust on the road. The noon-gold
accent catches the moped's tank chrome and the sign's lettering. Five hues at work: terra
(road, sign), olive (shirt), sea (kafeneío shadow), bone (sky), ink (line and trim).

[NEGATIVE — §5 verbatim]
```

### `pilot-02-place-voidokilia`
File target: `assets/places/place-voidokilia.png` · Aspect: 8:5 landscape · Accent: **noon gold**

```
[STYLE ANCHOR — §2 verbatim]

[PALETTE LOCK — §3 verbatim with ACCENT = noon gold #E0A951]

[COMPOSITION — Tier E place silhouettes block — §4]

Subject: Voidokiliá Bay in Messinia, Greece — the perfect crescent dune seen from the
Pylos fort side, mid-afternoon. The crescent of pale bone-cream sand curves left to right
across the lower third. Sea token deep Ionian fills the bay; sun-bleached olive scrub on
the dunes; the inland Gialova lagoon visible behind the dune ridge with three small
flamingo silhouettes at distance. Far right, the silhouette of a Venetian fort on its
promontory. Two human-scale figures walking the dune edge mid-frame for scale, ink line
work. The horizon is slightly sloped right-to-left implying a light meltémi off the gulf.
Noon-gold accent catches the fort wall and one figure's hat. No whitewashed buildings, no
blue domes — this is mainland Messinia, not the Cyclades.

[NEGATIVE — §5 verbatim]
```

### `pilot-03-scene-hilux-dawn`
File target: `assets/scenes/scene-hilux-dawn.png` · Aspect: 16:10 landscape · Accent: **rain grey** (pathos register — drop a notch)

```
[STYLE ANCHOR — §2 verbatim]

[PALETTE LOCK — §3 verbatim with ACCENT = rain grey #7A8088]

[COMPOSITION — Tier F set pieces block — §4. PATHOS STILL — single shape, drop saturation
a notch, hold the frame. NO FIGURES.]

Subject: A battered dark-olive Toyota Hilux pickup truck, alone, parked in a Kalamata
village yard at first light. Side-on, slightly off-centre, the only object in the frame
that carries weight. The truck is real — a working farm vehicle with dust on the
headlights, a steel roof rack overhead, a small dent on the rear bumper, an aftermarket
tow bar. Bone-cream pre-dawn sky fills the upper two thirds, terracotta dust on the dirt
yard fills the lower third, a low stone wall behind in rain-grey shadow. No people. No
mother. No protagonist. The Hilux alone. Quiet. The accent rain-grey shows only in the
wall and the truck's underside shadow. This is the morning after Mum said "It runs. That
is enough."

[NEGATIVE — §5 verbatim. ALSO: no figures, no animals, no movement, no birds, no people.]
```

---

## 7. Per‑tier prompt templates (the rest of the manifest)

For Tier B+ assets after the pilot trio lands, drop the per‑asset subject from
`ASSET-MANIFEST.md` into this template:

```
[STYLE ANCHOR — §2 verbatim]

[PALETTE LOCK — §3 verbatim with ACCENT = <noon gold | oleander | cypress | rain grey>]

[COMPOSITION — pick the right tier block from §4]

Subject: <one paragraph from ASSET-MANIFEST.md §{tier} subject column, expanded with the
locked signature object and gesture for heroes, the locked composition for places, the
locked beat for scenes>

Style reference: use pilot-01-hero-alani as visual style reference (MJ --cref or
equivalent). Match the surface, the line weight, the palette discipline. Vary only the
subject.

[NEGATIVE — §5 verbatim]
```

For each engine, lock the **same seed** within a series (all heroes together; all places
together) so the surface stays uniform across batches.

---

## 8. Consistency tactics

The single biggest risk is style drift across 43 assets. Mitigations:

1. **Style reference image lock.** Once `pilot-01-hero-alani` is approved, upload it as
   the visual reference for every subsequent prompt (Midjourney `--cref` / `--sref`,
   Nano Banana reference image, Sora image conditioning). The reference image overrides
   the model's drift toward its training average.
2. **Same engine, same version, same prompt structure.** Switching engines mid‑manifest
   guarantees drift. Pick one for the run and stay there. Re‑generation later goes back to
   the same engine.
3. **Seed locking within series.** Heroes batch: same seed across all 10. Places batch:
   same seed across all 10. Different seeds across batches are fine — same seed within a
   batch is what keeps faces and surfaces consistent.
4. **Generation log.** For every shipped asset, record: engine + version, prompt (or hash
   of prompt), seed, reference image used, date. Lives at the bottom of `ASSET-MANIFEST.md`
   under each tier entry as `produced: { engine, seed, date }`. Means we can re‑generate
   the same asset later when the model improves.
5. **The wall test.** After every batch, lay the new assets next to the pilot trio. If
   they don't feel like the same game, fix the prompt, do not ship.
6. **Approval gate.** No asset moves to `shipped` until it passes the wall test against the
   pilot trio. The doctrine is the doctrine.

---

## 9. Engine notes

The prompt body (§2–5) is engine‑agnostic. These are the tags to append.

### Midjourney
- Aspect: `--ar 5:4` (heroes), `--ar 8:5` (places), `--ar 16:10` (scenes), `--ar 1:1` (glyphs)
- Style reference: `--sref <url>` for surface; `--cref <url>` for character consistency
- Stylize: `--s 100` (default; bump to 250 for hero portraits if needed for character)
- Model: `--v 6.1` or current — pick once, stay

### Sora (OpenAI image)
- Aspect controlled by image dimensions in the request
- Reference: upload via the image input; describe its role explicitly ("match the
  illustration style of the reference image; only change the subject")
- Style is anchored more by the prompt than by reference; double the style‑anchor weight

### Nano Banana / Reve / others
- Aspect: per‑engine syntax
- Reference image upload supported; use the same `pilot-01-hero-alani` as anchor
- If the engine has a "style strength" dial, lock it at the value used for pilot‑01 and
  never change it

### Universal
- Output format: PNG, 24‑bit, transparent background where the asset is figure‑on‑page,
  opaque rectangle where the asset is a full scene
- Source resolution: ≥ 2× target (heroes at 1024×1280 source, downsample to 512×640)
- Save with the filename from `ASSET-MANIFEST.md` exactly — `assets/heroes/hero-09-alani.png`

---

## 10. Workflow

1. Read `ART-DIRECTION.md` (look) + `LANGUAGE.md` (voice) + `ASSET-MANIFEST.md` (list).
2. Generate the **pilot trio** using the three full prompts in §6.
3. Sit them on a wall. If they feel like the same game, mark them `draft` in the
   manifest and proceed. If not, fix the style anchor or palette lock and re‑generate —
   *do not move on*.
4. Approve the trio. Mark `shipped`. Upload `pilot-01-hero-alani` as the visual
   reference image; record the engine + seed in the manifest.
5. Produce Tier A (cover + opening) next, in one batch, using `pilot-01` as reference.
6. Then Tier B (heroes) in one batch, same reference.
7. Then C, D, E, F, G in tier order.
8. After every batch: wall test against the pilot trio.
9. Update `ASSET-MANIFEST.md` status flags as each asset moves through
   `planned → briefed → draft → shipped`.

---

## Cross‑references

- `ART-DIRECTION.md` — the doctrine these prompts encode.
- `ASSET-MANIFEST.md` — the list of what to make and where it lives.
- `LANGUAGE.md` — the voice that gets to sit next to the picture (frame and line have to
  feel like the same game).
- `assets/` — file destinations.
- `index.html` — `imgFor(id)` helper auto‑detects shipped assets and graceful‑no‑ops when
  files are missing, so the game keeps working as the manifest fills in.
