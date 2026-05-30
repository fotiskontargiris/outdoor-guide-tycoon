# The Kitchen — Game Intro & Character Creation

*The opening scene, now live in `index.html`. It doubles as character creation: the player
sets a name, picks the favourite dish, and chooses which fallen hero they are (the catastrophe
reveal = the `background` pick). After the pitch, they step out into the panigíri, where the
practical picks (discipline / kit / loan) live. This doc is the script of record — it matches
the text in the game. Per-hero stats live in `HEROES.md`. Voice: second person, present tense,
terse, warm, comic. No emojis.*

**Flow:** `renderKitchen` → `renderKitchenDish` → `renderKitchenHero` → `renderKitchenReveal`
→ `renderKitchenPitch` → `renderSetup` → `beginNewGame` → `initGame`.

---

## Beat 0 — Cold open + name  (`renderKitchen`)

> **Kalamata · your mother's kitchen**
> ## You're home
>
> The bus smelled of diesel and someone's gardenia. Now you are at the kitchen table you sat
> at when you were seven, and twelve, and seventeen and swearing you would never come back. The
> oilcloth has the same lemons on it. Something is browning in the oven, and the good plates —
> the ones for guests — are out, which is how you know she has decided you are a guest now. Or,
> worse, a patient.
>
> "Sit, sit," she says, though you are already sitting. "You've gotten thin. What did they do to
> you out there." It is not a question. Nothing she says tonight will be a question.
>
> *What does she call you?*  → [name input] → **Sit down**

---

## Beat 1 — The favourite dish  (`renderKitchenDish`)

> **She has made your favourite**
> ## Dinner
>
> She sets it down before you have agreed to anything. Your favourite — and she will not hear
> that you have a different favourite now, that people change. Tonight you are the child who
> loved this, so this is what love looks like: steaming, and far too much of it.
>
> *She will make it again all season, "since you are clearly not eating properly out there."*

Four choices. Each gives a small **start bonus**, a smaller **yearly** blessing she repeats
every spring (shown in pre-season), and the recurring line she says when she does:

| Dish | Start | Each spring | Mum, every spring |
|---|---|---|---|
| **Gemistá** — stuffed peppers & tomatoes | +5 reputation | +2 rep | "She has filled a tin with gemistá for the road. 'You are not eating properly out there, I can see it.'" |
| **Pastítsio** — three slabs, because two would be an insult | +8 kit condition | +5 gear | "There is pastítsio in the cooler bag, three days of it. 'Eat. You have gotten thin again.'" |
| **Bakaliáros & skordaliá** — fried cod, opinionated garlic dip | +€25 | +€12 | "She presses a foil parcel of bakaliáros into your hands, and a note into your pocket. 'For the bus. Don't argue.'" |
| **Youvétsi** — Sunday lamb & orzo, on a Tuesday | +€15, +3 rep | +€8, +1 rep | "She has made youvétsi, the Sunday dish, on a weekday — which means she is worried about you again. 'Just take it.'" |

---

## Beat 2 — The catastrophe = the hero  (`renderKitchenHero` → `renderKitchenReveal`)

> **"And the thing out there?"**
> ## What happened
>
> She lets you eat three bites. Then the wooden spoon comes up and waves at the entire shape of
> your life. "And the… the thing. Out there. It's finished?" You could lie. You don't.
>
> *Who you were* → pick one of the ten. The reveal shows mum's denial + your truth, then the
> `▸` model line, then **Go on, then** (or go back and re-choose).

The ten reveals (the `cat` line shown on selection — full stats in `HEROES.md`):

1. **The almost-doctor ♂** — "Three years of medical school," she tells the icon over the door, not you. "Three years." You don't correct her to four sittings of the same anatomy exam. You were always good with people in pain — it was only the test that proved it you could never pass.
2. **The Mykonos chef ♂** — "The restaurant was in a magazine," she informs the wooden spoon. "A magazine." You leave out the rent, the head waiter, the stolen password. You came home with a tattoo of a sea bream and the one gift that survived it: you can make strangers feel fed and looked after.
3. **The army washout ♀** — She still keeps the selection photo on the dresser — the one where you are all mud and certainty. You don't mention the final day, the single cut that came. You tell her instead that you can read a sky like a sentence.
4. **The deckhand ♀** — "My captain," she says, which you never quite were. Years of salt and other people's cargo, and a stomach that has finally had enough of the open sea. But water still reads to you like family.
5. **The influencer ♀** — She never understood what you did out there, only that it involved numbers, and that the numbers went away. Still — you can make any ordinary afternoon look like the best day of a stranger's life.
6. **The startup engineer ♂** — "A company. In Germany." She says Germany the way other people say the moon. You built something elegant for eleven users — a figure she kept refreshing to confirm. Now you will build it for goats.
7. **The philologist ♀** — Four languages, and a man named Babis who got the post. You can hand a German a poem and give a Frenchman back his own childhood — for which, it turns out, the Greek state keeps no permanent position.
8. **The Fasaia ♀** — She has braced herself for the words "energy" and "alignment," and she is bearing them like weather. Goa rearranged you. The bank account did not approve.
9. **The Alani ♂** — She tells the neighbours you have "many friends." This is true. Some of them you owe. You know every back door in the prefecture and the price of everything behind them.
10. **The Greek Villager ♂** — This one she cannot spin, because the whole village watched it go — the flock, the olive grove, the kafeneío where the beach bar stands now. The most local man alive, reduced to selling his own backyard to strangers.

---

## Beat 3 — The pitch  (`renderKitchenPitch`)

> **The pitch**
> ## "You know what you should do"
>
> She lets you finish. She crosses herself, once, towards the icon over the door. And then — as
> if the thought has only this second floated down to her, as if she has not been steering
> toward it since the arrivals hall — she says it.
>
> "You know what you should do." You know exactly what she is about to say. "Tourism. Look
> around you — is there anywhere more beautiful in this world? The foreigners come with their
> money and their little walking sticks and they pay — they pay, **yie mou / kóri mou** — to see
> what we see for free, every day of our lives. And you have the languages. Take them up the
> mountain. Show them Polylímnio. Show them the sea."
>
> She is already clearing your plate, though you have not finished. "Kostas's boy does it, up in
> Stoúpa. He bought a car." A pause; the knife goes in clean. "Tomorrow you begin. I've told
> Kyría Voúla you're in tourism now."
>
> *It is decided. It was always decided.* → **Step outside**

The diminutive flexes off the chosen hero's gender: **♂ → *yie mou*, ♀ → *kóri mou***.

---

## Beat 4 — Step out into the Pascha feast + setup  (`renderSetupIntro` → `renderSetup` → `renderSetupKit`)

> **The first night of the season**
>
> Outside, the village is full — everyone home for Pascha. Behind every gate a lamb is on the
> spit, and you can smell the bread your aunt has been baking since dawn. As the evening comes
> in a clarinet finds its note down the lane; people who haven't seen each other since last
> Easter are kissing each other on both cheeks and saying *Christós Anésti*. By Tuesday the
> foreigners will begin to arrive. Tomorrow, the season opens. **[hero send-off, below.]**
>
> Then two phases over the panigíri-night image: **Phase 1** — *"But first — what will you
> guide?"* (discipline · loan if fleet) → **Continue**. **Phase 2** — *"And what goes in the
> bag?"* (kit, up to 3) → **Into it, then**.

The per-hero send-off line that follows "Tomorrow, the season opens.":

1. **almost-doctor** — Kyría Voúla finds you within ninety seconds, her blood-pressure diary already open.
2. **chef** — You taste the Easter lamb from across the square and silently, helplessly, rebalance the salt.
3. **army washout** — You clock three exits and the one unattended gas bottle. Old habits.
4. **deckhand** — Someone mentions the sea and you are nine sentences into a storm off Yemen before you notice.
5. **influencer** — You film the clarinet player. He has more presence than your last three sponsors combined.
6. **startup engineer** — You find yourself estimating the throughput of the souvláki line. It could be doubled.
7. **philologist** — You correct a tourist's Greek, gently, and they hug you.
8. **Fasaia** — Your uncle presses the first tsípouro into your hand with a hearty *Christós Anésti*. Breathe, you think. It is nine o'clock. By two in the morning your inner peace will be in open war with a brass section.
9. **Alani** — Three people wave at you across the square. Two of them you owe. You wave back at all three.
10. **Greek Villager** — You know the clarinet player. And his father. And the debt his father owed yours.

---

## Implementation notes (as built)

- Entry points: title "New game" and the end-game "Play again" both call `renderKitchen()`;
  `doContinue()` falls back to it when there's no save.
- The hero choice sets `pickedBg`; `initGame` stores `you.spec = bg.name` and
  `you.perk = bg.tag` — the `tag` maps each hero onto the engine's existing `perkIs(...)`
  hooks (medic / charmer / navigator / captain / animator / shepherd), plus new tags
  `fasaia` (wired into the group-calm event) and `engineer` / `alani` (start-grant models).
- Start-grants in `initGame`: doctor → first-aid kit; chef → snacks; engineer → 6-slot pack +
  map & kit; Alani → +€150; Villager → +€100. Deeper models (Alani's cheap-but-dodgy shop,
  Villager's local discounts, engineer's compounding gear, influencer's volatile reviews)
  remain TODO — the engine doesn't have those systems yet.
- Dish: `S.dish` stores the choice; the start bonus applies in `initGame`, the `yearly` bonus
  in `enterSpring`, and the `cb` line shows in `renderPreSeason` (March).
- `SAVE_KEY` is `aegean_save_v9`; `doContinue()` defaults `S.dish` for older saves.
- Gendered diminutive uses `paidí mou` nowhere now — each hero is a fixed gender, so it's always
  the specific *yie mou* / *kóri mou*.
