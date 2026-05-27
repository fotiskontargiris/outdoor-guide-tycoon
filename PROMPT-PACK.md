# PROMPT-PACK.md — Midjourney prompts, copy‑paste ready

Every prompt below is a **single continuous string** you can paste straight into Midjourney
— style anchor, palette, references, and parameters all baked in. No placeholder blocks, no
manual assembly. Pair‑read with `ART-DIRECTION.md` (the doctrine these encode) and
`ASSET-MANIFEST.md` (the list of what to make and where each file lands).

> **The whole game is style consistency.** Pilot trio first (§4). Once `pilot-01-hero-alani`
> looks right, capture its image URL and add `--sref <url>` to every subsequent prompt — the
> reference image is what keeps 43 assets feeling like the same game. The model is allowed
> to vary the subject; it is not allowed to vary the surface.

---

## 1. Workflow

1. **Pilot trio (§4)** — generate the three pilots with the prompts below, in order.
2. **Wall test** — put them side by side. If they feel like the same game, lock the style.
   If not, tweak the prompt root (§3) and re‑roll *before* moving on.
3. **Style reference lock (§5)** — upload the approved `pilot-01-hero-alani` to a public URL
   (Discord pin works) and append `--sref <url>` to every subsequent prompt.
4. **Batch by tier** — Tier A (cover/opening) → Tier B (heroes, all 10 in one session)
   → Tier E (places, all 10 in one session) → Tier F (set pieces) → Tier G (chrome) →
   Tier C/D (glyphs — see §10, MJ is not the ideal tool for these).
5. **Within a batch**: keep `--seed` constant across the batch for surface uniformity. Use a
   fresh seed for each new batch.
6. **Generation log** — record engine version + seed + prompt hash + date for every shipped
   asset (template at §12). When the model improves and you want to re‑generate, you can.

---

## 2. Parameter cheat sheet

Every prompt ends with the same parameter block (varied only by aspect ratio + accent).

| Param | Value used here | Why |
|---|---|---|
| `--ar` | `5:4` heroes · `8:5` places · `16:10` scenes · `1:1` glyphs · `3:4` chrome | Per‑tier aspect locked in `ASSET-MANIFEST.md §10` |
| `--style raw` | always | Reduces MJ's house aesthetic; gives the editorial illustration room to land |
| `--s 150` | always | Mid‑stylize — prompt‑faithful but allows enough interpretation for the gouache surface |
| `--chaos 0` | implicit (default) | Maximum consistency across re‑rolls |
| `--v 7` | always | Use whatever the current MJ version is (v7 as of writing); keep it constant for the whole pack |
| `--no …` | one canonical negative list (§3) | Blocks the most likely failure modes |
| `--sref <url>` | **add after pilot‑01 locks** | The single biggest consistency lever — same surface across all 43 assets |
| `--cref <url>` | **for heroes only**, after one hero face locks | Keeps hero faces consistent across cards |
| `--seed <N>` | one per batch | Surface uniformity within heroes / within places / etc. |

---

## 3. The locked negative list

This `--no` block appears at the end of every prompt unchanged. Do not paraphrase.

```
--no emoji, drop shadow, glow, gradient, sparkle, motion blur, lens flare, bokeh, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, santorini, whitewash, blue dome, infinity pool, tuscan villa, lavender field, decorative ornament, evil eye, smiling sun, weather face, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border
```

---

## 4. The pilot trio — DO THESE FIRST

Each block below is one prompt. Copy the **entire** content of the code fence, paste into
Midjourney, hit enter. If you re‑roll, keep the prompt identical and use the `🎲` re‑roll
button — do not edit between rolls.

### `pilot-01-hero-alani` — comic default register · noon‑gold accent
Save to: `assets/heroes/hero-09-alani.png`

```
A Greek man in his early thirties leaning back against the seat of a cheap two-stroke moped parked outside a village kafeneio in Messinia Greece, faded olive button-down shirt with sleeves rolled to the elbow, worn leather wristband on his right wrist, jeans and dusty boots, an unlit cigarette tucked behind his right ear, half a knowing smirk, eyes glancing off-frame to the left as if greeting someone, the kafeneio doorway in deep Ionian shadow behind him with a hand-painted Greek sign above, late afternoon light, terracotta dust on the road, mid-shot waist-up, single figure composed off-axis, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figure and hairline on background structures, flat lighting with a single warm sun direction, shadows are single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold catching the moped tank chrome and the sign lettering, no gradients no glow no drop shadow no airbrush, hand-made and opinionated, in the style of Edward Bawden travel posters, Hugo Pratt Mediterranean comics, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 5:4 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, motion blur, lens flare, bokeh, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, santorini, whitewash, blue dome, infinity pool, tuscan villa, lavender field, decorative ornament, evil eye, smiling sun, weather face, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border
```

### `pilot-02-place-voidokilia` — place silhouette · noon‑gold accent
Save to: `assets/places/place-voidokilia.png`

```
Voidokilia Bay in Messinia Greece, the perfect crescent dune seen from the Pylos fort side at mid-afternoon, the crescent of pale bone-cream sand curving left to right across the lower third of the frame, deep Ionian sea blue filling the bay, sun-bleached olive sage scrub on the dunes, the inland Gialova lagoon visible behind the dune ridge with three small flamingo silhouettes at distance, far right the silhouette of a Venetian fortress on a low promontory, two human-scale figures walking the dune edge mid-frame for scale, mainland Messinia mainland Greece not Cyclades not Santorini, no whitewashed buildings no blue domes, the horizon very slightly sloped right-to-left implying a light meltemi wind off the gulf, mid-distance landscape composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, no outlines on the landscape masses which read as color blocks only, confident hairline on the fortress and the figures, flat lighting with a single warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold catching the fortress wall and one figure's hat, hand-made and opinionated, in the style of Edward Bawden travel posters, Hugo Pratt Mediterranean comics, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 8:5 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, motion blur, lens flare, bokeh, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, santorini, whitewash, blue dome, infinity pool, tuscan villa, lavender field, decorative ornament, evil eye, smiling sun, weather face, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border
```

### `pilot-03-scene-hilux-dawn` — pathos still · rain‑grey accent · NO FIGURES
Save to: `assets/scenes/scene-hilux-dawn.png`

```
A battered dark-olive Toyota Hilux pickup truck alone in a rural Kalamata village yard at first light, side-on slightly off-centre as the only object in the frame, a working farm vehicle with dust on the headlights and a steel roof rack overhead, a small dent on the rear bumper, an aftermarket tow bar, pale bone-cream pre-dawn sky filling the upper two thirds of the frame, terracotta dust on the dirt yard filling the lower third, a low stone wall behind in rain-grey shadow, absolutely no people no animals no birds no movement, complete stillness, the truck alone, quiet pathos beat, cinematic mid-shot wide composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework on the truck only with confident 2px lines, no outlines on sky or ground which read as flat color blocks, flat lighting with the soft single warm sun direction of dawn, slightly desaturated palette, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of rain grey in the stone wall and the truck's underside shadow, hand-made and opinionated, in the style of Edward Bawden travel posters, Hugo Pratt Mediterranean comics, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 16:10 --style raw --s 150 --v 7 --no people, figures, person, human, animal, bird, motion, emoji, drop shadow, glow, gradient, sparkle, motion blur, lens flare, bokeh, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, santorini, whitewash, blue dome, decorative ornament, evil eye, smiling sun, weather face, glossy plastic, text, watermark, signature, frame, border
```

---

## 5. Style reference image lock (do this after pilot‑01 approval)

1. Approve `pilot-01-hero-alani`. Upscale (`U1`–`U4`).
2. Right‑click the upscaled image in Discord → **Copy Link**. (Or, in the MJ web app, open
   the image and copy the public URL.)
3. From this point forward, append to **every** prompt below:
   `--sref <url-you-just-copied>`
4. Optional for hero portraits only — also append `--cref <url>` of the same image to keep
   faces consistent across the 10 heroes.

The `--sref` lock is the single biggest consistency lever. Without it, MJ will drift toward
its training average across batches.

---

## 6. Tier A — cover & opening (3)

### `scene-kitchen` — opening scene · oleander‑pink accent
Save to: `assets/scenes/scene-kitchen.png`

```
A working-class Greek mother's kitchen in Kalamata, the oilcloth table set with the good plates painted with cheerful yellow lemons, a worn wooden spoon resting on a small saucer, the soft warm glow of an oven mid-bake at the back of the room, the mother visible only from behind at the counter showing apron strings and grey hair pinned up and weathered hands working dough, an open door to a small sun-drenched courtyard at the back, the late afternoon Mediterranean light spilling across the floor in warm bands, four good plates set out, no figures facing the camera, intimate warm domestic atmosphere, cinematic mid-shot wide composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figure and objects, flat lighting with a single warm sun direction, shadows are single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of oleander pink in the painted lemons on the oilcloth and the apron ties, hand-made and opinionated, in the style of Edward Bawden travel posters, Hugo Pratt Mediterranean comics, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 16:10 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, motion blur, lens flare, bokeh, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, santorini, whitewash, blue dome, decorative ornament, evil eye, glossy plastic, text, watermark, signature, frame, border, woman facing camera
```

### `title-cover` — cover plate background only (composite type in Figma/Affinity)
Save to: `assets/title/title-cover.png` (background layer; type added separately)

> **Note**: MJ is unreliable with text. Generate the *background* below — a terracotta
> Messinian rooftile horizon strip on a bone sky — and composite the wordmark *Outdoor
> Guide Life* serif + *or no Life* italic noon‑gold in Figma / Affinity Designer / Pixelmator.

```
A simple Mediterranean horizon scene with no people no buildings except a single low strip of terracotta-tiled village rooftops occupying the bottom fifth of the frame in soft silhouette, the upper four-fifths a pale bone-cream pre-dawn sky with one band of warmer terracotta-tinged cloud near the horizon, the lower right corner shows a single thin cypress silhouette, a quiet establishing shot for a book cover, absolutely no figures no text no logo no detail in the sky, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework only on the rooftop silhouette and cypress, the sky a flat color block, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, hand-made and opinionated, in the style of Edward Bawden travel posters and Greek folk woodcuts by A. Tassos --ar 16:10 --style raw --s 100 --v 7 --no people, figures, text, watermark, signature, emoji, drop shadow, glow, gradient, sparkle, anime, photorealistic, 3d render, vector, flat design, santorini, whitewash, blue dome, decorative ornament, frame, border
```

### `title-wordmark` — SKIP in MJ
Use Affinity Designer / Figma / Illustrator. Two lines: *Outdoor Guide Life* in a serif
(Fraunces or Spectral) in ink `#1B1B1F`; *or no Life* italic in noon gold `#E0A951`
slightly off‑axis below. Export as SVG to `assets/title/title-wordmark.svg`.

---

## 7. Tier B — heroes (10)

Generate as one batch with a single `--seed`. Append `--sref <pilot-01-url>` (and optionally
`--cref <pilot-01-url>`) to every prompt below. Each portrait is **5:4 vertical waist‑up**.

### `hero-01-medic` — The almost‑doctor (♂) · rain‑grey accent
Save to: `assets/heroes/hero-01-medic.png`

```
A Greek man in his early thirties, the almost-doctor, holding a small green canvas medic kit with white cross taped at one corner, his right thumb running along a kit strap checking and re-checking, wearing a worn faded outdoor button-down and trekking trousers, kind concerned eyes glancing down at the kit, short dark hair, mid-shot waist-up, single figure off-axis on a bone-cream background with a hint of cloud and a hospital corridor's quiet light, gentle cautious posture, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figure, flat lighting with a single warm sun direction, shadows as single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of rain grey in the medic kit's webbing and the corridor shadow, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 5:4 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, scrubs, hospital uniform
```

### `hero-02-chef` — The Mykonos chef (♂) · noon‑gold accent
Save to: `assets/heroes/hero-02-chef.png`

```
A Greek man in his early thirties, the Mykonos chef, passing a foil-wrapped parcel of food forward to someone off-frame with both hands, a sea bream fish tattoo on his right forearm, a weathered chef's apron tied loose over a faded t-shirt, slight half-smile not quite hungry himself, dark hair pushed back, mid-shot waist-up, single figure off-axis on a bone-cream background with a hint of taverna kitchen warmth behind, generous welcoming gesture, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figure, flat lighting with a single warm sun direction, shadows as single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold catching the foil parcel and the apron stitching, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 5:4 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, chef hat, toque
```

### `hero-03-soldier` — The army washout (♀) · rain‑grey accent
Save to: `assets/heroes/hero-03-soldier.png`

```
A Greek woman in her early thirties, the army washout, holding a windworn topographic map with curled edges in both hands but looking off-frame upward reading the sky like a sentence, short pragmatic dark hair, a technical olive softshell jacket, alert calm posture with the wind in her clothes, mid-shot waist-up, single figure off-axis on a bone-cream sky with bruise-coloured weather forming in the upper right corner, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figure, flat lighting with a single warm sun direction, shadows as single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of rain grey in the gathering storm and the map's creases, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 5:4 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, military uniform, camouflage, weapon
```

### `hero-04-sailor` — The deckhand (♀) · noon‑gold accent
Save to: `assets/heroes/hero-04-sailor.png`

```
A Greek woman in her early thirties, the deckhand, coiling a thick wet bow line in calloused hands, one hand resting on the bow of a sit-on-top sea kayak beached on flat rocks, a dry bag at her feet, eyeing a calm bay off-frame to her right, salt-bleached t-shirt and rolled cargo shorts, hair tied back, sun-tanned forearms, mid-shot waist-up, single figure off-axis on a bone-cream background with the calm deep Ionian sea visible behind, working unhurried posture, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figure and the kayak hull, flat lighting with a single warm sun direction, shadows as single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold catching the wet rope and the kayak deck rigging, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 5:4 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border
```

### `hero-05-influencer` — The influencer (♀) · oleander‑pink accent
Save to: `assets/heroes/hero-05-influencer.png`

```
A Greek woman in her late twenties, the influencer, half a step ahead of an unseen group framing a shot with her phone on a small handheld tripod gimbal, a folded ring light clipped to her small pack, a light breeze in her hair, golden afternoon light, the trail visible a step behind her, focused expression chasing the shot, fashionable but practical outdoor clothing, mid-shot waist-up, single figure off-axis on a bone-cream background with a hint of golden coast behind, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figure, flat lighting with a single warm sun direction, shadows as single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of oleander pink in her scarf and the phone case, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 5:4 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, selfie pose
```

### `hero-06-engineer` — The startup engineer (♂) · noon‑gold accent
Save to: `assets/heroes/hero-06-engineer.png`

```
A Greek man in his early thirties, the startup engineer, holding a small clipboard with careful pencil notes, a Leatherman multi-tool clipped to his belt, simple wire-frame glasses, focused counting expression as if mentally calculating throughput, a casual button-down rolled to the forearms, dark hair, the corner of a taverna in the background, mid-shot waist-up, single figure off-axis on a bone-cream background, methodical careful posture, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figure, flat lighting with a single warm sun direction, shadows as single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold catching the multi-tool casing and the clipboard clip, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 5:4 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, laptop, hoodie
```

### `hero-07-scholar` — The philologist (♀) · cypress‑green accent
Save to: `assets/heroes/hero-07-scholar.png`

```
A Greek woman in her early thirties, the philologist, mid-sentence with a slim leather notebook open in one hand showing handwritten lines in four different scripts, the other hand making a gentle didactic gesture, a small group of unseen listeners implied just out of frame leaning in, library-warm afternoon light, simple linen dress, hair tied with a ribbon, intelligent warm expression, mid-shot waist-up, single figure off-axis on a bone-cream background with a hint of book spines behind, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figure and the notebook, flat lighting with a single warm sun direction, shadows as single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of cypress green-black in her hair ribbon and the book spines, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 5:4 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, glasses chain, owl
```

### `hero-08-fasaia` — The Fasaia (♀) · oleander‑pink accent
Save to: `assets/heroes/hero-08-fasaia.png`

```
A Greek woman in her late twenties, the Fasaia returned from Goa, breath drawn in with eyes half-closed and a small composed half-smile, a hand-woven shawl scarf over her shoulders in earthy patterns, beaded jewelry at her wrists, the warm blurred strung-bulb lights of a distant August panigiri village festival behind her at far depth, hair loose and full, calm centred posture, mid-shot waist-up, single figure off-axis on a bone-cream background, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figure, flat lighting with a single warm sun direction, shadows as single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of oleander pink in the scarf pattern and the festival lights, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 5:4 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, halo, aura, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, lotus pose, yoga mat
```

### `hero-09-alani` — covered by pilot‑01 above.

### `hero-10-villager` — The Greek Villager (♂) · cypress‑green accent
Save to: `assets/heroes/hero-10-villager.png`

```
A Greek man in his mid forties, the village man who lost the family land, one hand resting flat on a fieldstone wall that used to be his, a worn olive-pruning curved blade slung at his belt, a younger cousin half-visible in the frame behind him also working the wall, an old olive grove fading inland under afternoon light, sun-darkened weathered face, square stoic posture, simple work shirt and old trousers, mid-shot waist-up, single foreground figure off-axis on a bone-cream sky background, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figures and the wall, flat lighting with a single warm sun direction, shadows as single blocks of a darker neighbor color never pure black, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of cypress green-black in the distant grove and the blade's handle, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 5:4 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, traditional costume, fustanella
```

---

## 8. Tier E — places (10)

Batch with one `--seed`. Append `--sref <pilot-01-url>` to every prompt. Each is **8:5
landscape**. The locked compositions come from `ART-DIRECTION.md §6B`.

### `place-kalamata` — Kalamata harbour · noon‑gold accent
Save to: `assets/places/place-kalamata.png`

```
The stone quay harbour of Kalamata in southern Greece at golden afternoon, a curved line of small waterfront cafes with chairs out on the pavement, a single working caïque Greek fishing boat tied up against the quay, the distant inland silhouette of the Taygetos mountain range fading purple-blue in the far background, two small human-scale figures walking the quay mid-frame, a kafeneio table with two coffee glasses in the near right corner, mainland Messinia mainland Greece not Cyclades not Santorini, mid-distance landscape composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, no outlines on landscape masses which read as color blocks, confident hairline on the boat and figures, flat lighting with a single warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold catching the boat's mast and the cafe tablecloths, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 8:5 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, photorealistic, 3d render, octane, hdr, vector, flat design, santorini, whitewash, blue dome, infinity pool, decorative ornament, evil eye, glossy plastic, text, watermark, signature, frame, border, cruise ship, yacht
```

### `place-polylimnio` — Polylimnio waterfalls · cypress‑green accent
Save to: `assets/places/place-polylimnio.png`

```
The Polylimnio tiered waterfall pools in Messinia Greece, multiple stacked emerald pools cascading down slick green stone in deep forested shade, viewed from mid-slope above one of the lower pools, dense fig and plane tree canopy above, one single human-scale figure swimming in the lowest pool for scale, dappled forest light, cool water atmosphere, mid-distance landscape composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, no outlines on water or rock masses which read as color blocks, confident hairline on the figure and tree trunks, flat lighting with a single warm sun direction filtering through canopy, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of cypress green-black in the deep forest shadows and the pool depths, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 8:5 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, photorealistic, 3d render, octane, hdr, vector, flat design, santorini, whitewash, blue dome, decorative ornament, evil eye, glossy plastic, text, watermark, signature, frame, border, tropical, jungle, exotic flowers
```

### `place-voidokilia` — covered by pilot‑02 above.

### `place-pylos-methoni` — Pylos / Methóni Venetian fortress · noon‑gold accent
Save to: `assets/places/place-pylos-methoni.png`

```
The Venetian fortress of Methoni in Messinia Greece seen from sea level, a low promontory of weathered stone walls and a single square tower projecting into the deep Ionian, a small mainland Greek fishing harbour at the foot of the fortress with two or three caiques tied up, the bay opening wide to the right, late afternoon warm light, two small figures fishing from the harbour mole for scale, mainland Greece not Cyclades not Santorini no whitewashed buildings no blue domes, mid-distance landscape composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, no outlines on landscape masses which read as color blocks, confident hairline on the fortress walls and figures, flat lighting with a single warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold catching the fortress wall and the boat masts, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 8:5 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, photorealistic, 3d render, octane, hdr, vector, flat design, santorini, whitewash, blue dome, infinity pool, decorative ornament, evil eye, glossy plastic, text, watermark, signature, frame, border
```

### `place-mavromati` — Ancient Messene at Mavromáti · noon‑gold accent
Save to: `assets/places/place-mavromati.png`

```
The archaeological site of Ancient Messene at Mavromati village in the Peloponnese Greece, broken Greek classical columns and tumbled stone blocks at low golden-hour afternoon light, the village spring at the edge of the site with a stone basin, one small human-scale figure standing among the columns for scale, ancient olive trees framing the scene, open countryside opening toward distant mountains, the deep timelessness of a Greek archaeological site, mid-distance landscape composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, no outlines on landscape masses which read as color blocks, confident hairline on columns and figure, flat lighting with a single warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold catching the column tops at golden hour, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 8:5 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, photorealistic, 3d render, octane, hdr, vector, flat design, santorini, whitewash, decorative ornament, evil eye, glossy plastic, text, watermark, signature, frame, border, fantasy ruins, dramatic clouds
```

### `place-neda` — Neda gorge · cypress‑green accent
Save to: `assets/places/place-neda.png`

```
The Neda gorge in the Peloponnese Greece, narrow ribs of cold grey limestone closing in to form a deep slot canyon, a single emerald pool at the canyon floor below, a hairline human figure traversing the high rim for scale, deep cool blue-green shade with one shaft of warm light reaching the pool, mossy wet rock walls, the sound of water implied, vertical and narrow composition, mid-distance landscape, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, no outlines on rock masses which read as color blocks, confident hairline on the figure, flat lighting with a single shaft of warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of cypress green-black in the deepest canyon shadows and the moss, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 8:5 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, photorealistic, 3d render, octane, hdr, vector, flat design, decorative ornament, evil eye, glossy plastic, text, watermark, signature, frame, border, american southwest, antelope canyon
```

### `place-lousios` — Lousios gorge with monastery · cypress‑green accent
Save to: `assets/places/place-lousios.png`

```
The Lousios gorge in Arcadia Greece, a forested gorge with a small medieval Byzantine Orthodox monastery clinging to a ledge midway up the cliff face, a wooden suspension bridge crossing the gorge at the bottom over a green river, two small human-scale figures crossing the bridge for scale, dense fir and chestnut canopy on both sides, the deep cool shadow of the gorge below, the monastery painted white-and-red with a small dome roof, mid-distance landscape composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, no outlines on landscape masses which read as color blocks, confident hairline on the monastery and bridge and figures, flat lighting with a single warm sun direction reaching the upper canopy, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of cypress green-black in the gorge shadows and the forest, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 8:5 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, photorealistic, 3d render, octane, hdr, vector, flat design, decorative ornament, evil eye, glossy plastic, text, watermark, signature, frame, border, tropical, fantasy castle
```

### `place-taygetos` — Taygetos alpine ridge · noon‑gold accent
Save to: `assets/places/place-taygetos.png`

```
The alpine summit ridge of Mount Taygetos in the Peloponnese Greece in mid-summer with streaks of unmelted snow in the north-facing couloirs, the tiny stone cell-chapel of Profitis Ilias silhouetted on the highest peak, a single human-scale figure standing on the ridge below the summit for scale, cold thin clear high-altitude light, the Peloponnese opening below in fading olive and sea blue toward the horizon, austere alpine atmosphere, mid-distance landscape composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, no outlines on landscape masses which read as color blocks, confident hairline on the chapel and figure, flat lighting with a single warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold catching the chapel walls at altitude, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 8:5 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, photorealistic, 3d render, octane, hdr, vector, flat design, decorative ornament, evil eye, glossy plastic, text, watermark, signature, frame, border, alps, swiss
```

### `place-mani` — Mani peninsula tower houses · rain‑grey accent
Save to: `assets/places/place-mani.png`

```
The Mani peninsula in the southern Peloponnese Greece, a cluster of austere slate-grey stone tower houses (the famous Maniote pyrgoi defensive towers) rising vertically up a barren rocky hillside, salt-scoured prickly scrub and aloe in the foreground, an empty unpaved road bending south toward distant Cape Tainaron, no trees no greenery, hard austere afternoon light, the sea barely visible far right as a thin blue band, one single human-scale figure walking the road for scale, the wind in the scrub implied by a sloped horizon, mid-distance landscape composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, no outlines on landscape masses which read as color blocks, confident hairline on the tower silhouettes and figure, flat lighting with a single hard warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of rain grey in the tower stone and the road, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 8:5 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, photorealistic, 3d render, octane, hdr, vector, flat design, santorini, whitewash, blue dome, decorative ornament, evil eye, glossy plastic, text, watermark, signature, frame, border, lush vegetation, tropical
```

### `place-kardamyli` — Kardamyli stone harbour · noon‑gold accent
Save to: `assets/places/place-kardamyli.png`

```
The small stone fishing harbour of Kardamyli on the Messinian Mani coast Greece, ancient plane trees shading a stone-paved waterfront, a stone-built quay with one or two caiques tied up, the old cobbled mule path turning uphill behind the village toward the Taygetos foothills, two figures sharing afternoon coffee at a cafe table under the plane trees, warm late golden light, mainland Greece not Cyclades not Santorini, mid-distance landscape composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, no outlines on landscape masses which read as color blocks, confident hairline on the boats trees and figures, flat lighting with a single warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold catching the boat masts and the cafe lanterns, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 8:5 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, photorealistic, 3d render, octane, hdr, vector, flat design, santorini, whitewash, blue dome, decorative ornament, evil eye, glossy plastic, text, watermark, signature, frame, border
```

---

## 9. Tier F — set pieces (4)

### `scene-hilux-dawn` — covered by pilot‑03 above.

### `scene-panigiri` — August village festival · noon‑gold accent · parody‑lift density
Save to: `assets/scenes/scene-panigiri.png`

```
A Greek village panigiri summer festival at full swing in the village square at evening, a long communal table laden with shared bottles of tsipouro and ouzo and plates of food, strung bulb lights overhead criss-crossing the square, a small wooden stage in the back with a three-piece band mid-song with bouzouki violin and laouto, the village dancers in a half-circle hand-in-hand mid-step, an old man pouring for a stranger, a small child running between legs, three or four villagers in their seventies seated at the table, an unlit church lantern at the side, the silhouette of terracotta-tiled village rooftops behind, max comic density the crowd is the protagonist, joyful warm chaos, cinematic wide composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on figures and instruments, flat lighting from the bulb lights and a single warm sun direction at sunset, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of noon gold throughout the bulb lights and the brass instruments, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 16:10 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, electric guitar, modern instruments
```

### `scene-radio-crisis` — Phase 2 management beat · rain‑grey accent
Save to: `assets/scenes/scene-radio-crisis.png`

```
A Greek woman guide on a high mountain trail in the Peloponnese mid-shot, holding a black plastic two-way handheld radio handset to her ear with one hand, her other hand pointing off to the bruise-coloured weather closing in behind her in the upper third of the frame, a small group of four clients twenty meters behind her on the trail waiting and looking up at her, her face calm but reading the sky, a technical jacket and a small pack, single protagonist figure off-axis with the storm and the clients as supporting cast, decision moment, cinematic mid-shot wide composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figures and the radio, flat lighting with diffuse pre-storm warm sun, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of rain grey in the gathering storm clouds, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 16:10 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, lightning, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, smartphone, modern phone
```

### `scene-first-hire` — phase transition pathos · oleander‑pink accent
Save to: `assets/scenes/scene-first-hire.png`

```
Two figures standing side by side at the doorstep of an old Kalamata family stone house at first light, the protagonist and a new young woman hire named Maria, both holding small ceramic mugs of coffee, both looking off into the next day to the right of frame, the kitchen door behind them ajar with the silhouette of an older woman the protagonist's mother glimpsed inside still working at the stove with the warm orange oven glow behind her, the soft pale dawn light catching the door frame and the worn flagstone step, two figures in shared quiet companionship pathos beat, no faces visible to camera both looking away, cinematic mid-shot wide composition, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework, confident 2px lines on the figures and door frame, flat lighting with the soft single warm sun direction of dawn, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of oleander pink in the dawn sky and the mug rim, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 16:10 --style raw --s 150 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, mascot, cute, photorealistic, 3d render, octane, hdr, vector, flat design, corporate memphis, decorative ornament, evil eye, six fingers, fused limbs, melted face, glossy plastic, text, watermark, signature, frame, border, hugging, faces to camera
```

---

## 10. Tier C / D — glyphs (7 disciplines + 6 weather)

**Honest caveat**: Midjourney generates raster images and is not ideal for the diagrammatic
single‑colour SVG glyphs the manifest calls for. Three paths:

1. **Best**: hand‑draw the 13 glyphs in Figma or Affinity Designer using the woodcut style.
   Faster than MJ for icons; vector‑native; exports clean SVG.
2. **Hybrid**: use MJ to generate a *reference* rendering, then trace into SVG in Figma.
3. **MJ‑only**: prompt as a "vintage brass plaque etched icon" and accept raster PNG output.
   Use at small size (32px display) where the rasterisation won't show.

If going path 3, use this prompt template — change only the `{ICON SUBJECT}`:

```
A vintage etched brass plaque icon of {ICON SUBJECT}, single warm-near-black ink line on warm limestone bone cream background, single confident woodcut-style line weight throughout, diagrammatic and reduced, no text no label no border, centred composition, hand-drawn and opinionated, in the style of A. Tassos Greek folk woodcuts and mid-century European travel pictogram, no shading no gradient no fill --ar 1:1 --style raw --s 50 --v 7 --no text, label, frame, border, color, multiple icons, photorealistic, 3d, gradient, shadow, glow, watermark, signature
```

Substitute `{ICON SUBJECT}`:
| ID | Subject |
|---|---|
| `glyph-discipline-hike` | a single hiking boot in profile resting on a contour line |
| `glyph-discipline-seakayak` | a kayak paddle blade with a single water drop falling |
| `glyph-discipline-canyon` | a coiled climbing rope with a figure-eight knot at the centre |
| `glyph-discipline-raft` | a rafting oar with a single water curl at the blade |
| `glyph-discipline-cycle` | a bicycle pedal crank in side profile |
| `glyph-discipline-sup` | a stand-up paddleboard edge with a T-grip paddle above |
| `glyph-discipline-climb` | a spring-loaded climbing cam clipped to a karabiner |
| `glyph-weather-clear` | a simple rayed sun disc with eight straight rays |
| `glyph-weather-hot` | a heavier sun with three short horizontal heat waves beneath |
| `glyph-weather-wind` | a single bent blade of grass on a sloped ground line, a small flag pulled tight |
| `glyph-weather-mist` | three horizontal bands suggesting a low cloud ceiling over a ridge silhouette |
| `glyph-weather-storm` | a stylised storm cloud with a single zigzag bolt, restrained not cartoonish |
| `glyph-weather-unstable` | half a sun on the left side and half a cloud on the right side, vertically split composition |

**Recommendation**: do glyphs in Figma. Twenty minutes of vector work beats forty rolls of
MJ for diagrammatic icons.

---

## 11. Tier G — chrome (3)

### `chrome-logbook`
Save to: `assets/chrome/chrome-logbook.png`

```
A linen-bound notebook slightly open lying flat on an old wooden taverna table, the day's handwritten entry visible in dark serif ink, a fountain pen resting beside it, three-quarter slightly top-down view, soft warm late-afternoon window light from upper left, bone-cream linen of the notebook fabric, no other objects in frame, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework on the notebook and pen, confident 2px lines, flat lighting with a single warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration, and Greek folk woodcuts by A. Tassos --ar 4:3 --style raw --s 100 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, photorealistic, 3d render, octane, hdr, vector, flat design, decorative ornament, evil eye, glossy plastic, watermark, signature, frame, border, readable handwriting, legible text
```

### `chrome-certificate`
Save to: `assets/chrome/chrome-certificate.png`

```
An official Greek HATEOA Hellenic Outdoor Trainers and Educators Association hiking guide certificate document on cream paper, a red rubber wax-style stamp in the lower right corner, signed in serif ink on the signature line, simple official border in ink, three-quarter slightly top-down view on a plain bone-cream background, deadpan official look, simulated illegible serif text body, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework on the certificate edges and stamp, confident 2px lines, flat lighting with a single warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of terra red in the stamp, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration --ar 4:3 --style raw --s 100 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, photorealistic, 3d render, octane, hdr, vector, flat design, decorative ornament, evil eye, glossy plastic, watermark, signature, frame, border, readable text, legible text, modern fonts
```

### `chrome-loan-papers`
Save to: `assets/chrome/chrome-loan-papers.png`

```
Three different financial documents laid out side by side on a wooden table top-down, left a formal bank loan form on white paper with a red rubber stamp, centre a handwritten note on torn lined yellow notepaper from a friend, right a small printed receipt-style document on cheap brown paper from a less-official lender with no header, three financing sources made physical, top-down slightly three-quarter view, soft window light from upper left, plain wooden background, simulated illegible text on all three, editorial Mediterranean illustration, matte gouache style with opaque chalky surface, woodcut ink linework on the paper edges and stamps, confident 2px lines, flat lighting with a single warm sun direction, limited five-color palette of warm terracotta clay, sun-bleached olive sage, deep Ionian sea blue, warm limestone bone cream, warm near-black ink, plus one accent of terra red on the bank stamp, hand-made and opinionated, in the style of Edward Bawden, Hugo Pratt, mid-century New Yorker editorial illustration --ar 4:3 --style raw --s 100 --v 7 --no emoji, drop shadow, glow, gradient, sparkle, anime, chibi, photorealistic, 3d render, octane, hdr, vector, flat design, decorative ornament, evil eye, glossy plastic, watermark, signature, frame, border, readable handwriting, legible text, modern logos
```

---

## 12. Generation log

Record each shipped asset so you can re‑generate cleanly when the model improves. Suggested
location: append a small table at the bottom of `ASSET-MANIFEST.md` once production starts.

```
| asset id              | engine    | seed       | sref url                  | date       | notes |
|-----------------------|-----------|------------|---------------------------|------------|-------|
| pilot-01-hero-alani   | MJ v7     | 3847291    | (pilot-01 itself)         | 2026-05-28 | locked the style |
| pilot-02-place-voidokilia | MJ v7 | 3847291    | https://cdn.midj/...alani | 2026-05-28 | sref locked from pilot-01 |
| pilot-03-scene-hilux-dawn | MJ v7 | 3847291    | https://cdn.midj/...alani | 2026-05-28 | no figures held |
```

---

## 13. Quick troubleshooting

| Problem | Fix |
|---|---|
| Drift toward "Mediterranean stock photography" | Drop `--s` to 100; reinforce "editorial illustration" earlier in prompt |
| Faces look mascot/cute | Push the Pratt + Bawden + Tassos references earlier; add "adult proportions not cute" |
| Outlines on landscape (should be none) | Be explicit: "landscape masses read as color blocks only, no outlines on hills sea or sky" |
| Six+ colours leaking in | Trim accent description to one specific object only; reinforce "limited five-color palette" |
| Santorini whitewash leaking | Add the place name (Messinia / Mani / Kardamyli) twice in the subject line; keep `santorini, whitewash, blue dome` in `--no` |
| Text appearing in image (signs, captions) | Add `--no text, label` more aggressively; for signs say "an indecipherable hand-painted shape" |
| Hilux scene gets people anyway | Strengthen "absolutely no people no animals" in subject AND `--no people, figures, person, human, animal, bird` |
| Hero faces inconsistent across batch | After hero‑01 locks, add `--cref <hero-01-url>` to the other 9 hero prompts |

---

## Cross‑references

- `ART-DIRECTION.md` — the doctrine these prompts encode.
- `ASSET-MANIFEST.md` — the list of what to make, where each file lives, and (now) the
  generation log appendix.
- `LANGUAGE.md` — the voice the picture sits beside.
- `assets/` — file destinations (per‑tier subfolders).
- `index.html` — `imgFor(id)` auto‑detects shipped assets; add `id → path` to `ASSETS` map
  in the script section as each file lands.
