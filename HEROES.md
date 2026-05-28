# HEROES.md — The Ten Fallen Heroes (locked)

The ten character profiles chosen in the kitchen scene (see `INTRO-KITCHEN.md`). Each is a
fixed person with a fixed gender, so mum's diminutive is set per hero (no gender toggle).
Each maps to a `background` id in `initGame(name, background, items)` and carries a distinct
mechanical model.

Diminutive: **♂ → *yie mou / yióka mou*** ("my son"), **♀ → *kóri mou / korítsi mou*** ("my daughter").

Visual direction is open — the pixel‑art rollout has been retired. The character signifiers
that anchor the heroes live on in `INTRO-KITCHEN.md` (panigíri send‑offs)
and the per‑hero reveals.

---

### ① The almost-doctor — ♂ *(yie mou)* — `medic`
Three years of medical school in Ioannina, undone by an anatomy exam he sat four times.
**Model:** medical crises and frightened/older clients are safe in his hands; but he
over-diagnoses, scrubbing a risky day a braver guide would run. *Cautious-but-trusted.*

### ② The Mykonos chef — ♂ *(yie mou)* — `chef`
A restaurant in the magazines for one summer; then the rent tripled and the head waiter took
the Instagram password. **Model:** feed the group and the tips and reviews follow; mind the
provisions or they eat the margin. *Generous-but-leaky.*

### ③ The army washout — ♀ *(kóri mou)* — `soldier`
Special-forces selection, cut on the final day. **Model:** thrives in storms and the diff-3
alpine others cancel, unlocking premium bad-weather pay; but her intensity frightens gentle
groups, so they tip low. *High-risk, high-reward.*

### ④ The deckhand — ♀ *(kóri mou)* — `sailor`
Years on cargo ships and caïques, now seasick of the open sea. **Model:** coast and river
routes are safer and richer in her hands, and she carries a head start into Phase 3 water
activities; the dry high alpine is her weak spot. *Sea-leaning.*

### ⑤ The influencer — ♀ *(kóri mou)* — `influencer`
Two hundred thousand followers, zero euros; brand deals and the algorithm died the same week.
**Model:** reputation climbs fast and good trips spawn extra reviews and booking momentum; but
she chases the shot over the schedule, and a bad day goes viral too. *Volatile fame.*

### ⑥ The startup engineer — ♂ *(yie mou)* — `engineer`
Built something clever in Berlin; the runway ran out at eleven users. **Model:** gear lasts,
repairs cost less, and off-season infrastructure projects are cheaper and pay more — a slow
start that snowballs; but no people skills early, so tips lag until reputation builds.
*Compounding systems.*

### ⑦ The philologist — ♀ *(kóri mou)* — `scholar`
Four languages, no permanent post, lost the exam lottery to a man named Babis. **Model:**
foreign clients understood perfectly, unlocking premium international groups and the tips that
come with being understood; but she over-explains and the cultural lecture eats the day.
*Languages as currency.*

### ⑧ The Fasaia — ♀ *(kóri mou)* — `fasaia`
Goa, a 200-hour yoga teacher training, home glowing and broke, speaking of "energy" and
"alignment" — until the August *panigíri* tests the inner peace for real. **Model:** stays
calm when the day doesn't (crises de-escalate, the group keeps its cool, rest restores more);
but her serenity is slow to push for the upsell or the hard route. *Composure.*

### ⑨ The Alani — ♂ *(yie mou)* — `alani`
Half the *kafeneío* greets him by name; the other half he owes. A colourful past, possibly a
colourful present. **Model:** knows a guy — cheap gear, easy deals, the village opens doors;
but the merchandise is sometimes of uncertain provenance, a small recurring reputation risk.
*Cheap-and-connected, slightly dodgy.*

### ⑩ The Greek Villager — ♂ *(yie mou)* — `villager`
Ran the family flock and olive grove until a subsidy cut, a bad frost, and a beach bar where
the *kafeneío* used to be finished it off. **Model:** every route cheaper and safer, every
village deal and supply through a cousin at a discount, the *panigíri* circuit as free
marketing; but no foreign instinct and no languages, so international tips and reviews suffer
until he learns hospitality (the inverse of the philologist). *Grounded local.*

---

## Implementation notes
- `background` ids above extend today's `BACKGROUNDS` (all ten are wired). Each id stores its
  `perk`/`spec` (the model) and a `gender` field (`'m'|'f'`) so mum's diminutives pick correctly.
- Visual representation is currently text-only. If a future art direction lands, the per-hero
  reveal lines and panigíri send-offs in `INTRO-KITCHEN.md` are the anchors to design from.
