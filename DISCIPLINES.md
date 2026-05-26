# DISCIPLINES.md — worked content, one activity at a time

Build-ready content slices for each Phase 1 discipline, structured to mirror the existing
`index.html` data arrays (`ROUTES`, `TRAILHEAD`, `EVENTS`, `ITEM_COST`/`ITEM_LIFETIME`,
`CERTS`) so they're close to drop-in. **Sea kayaking is the worked pattern**; the others copy
its shape.

> v1, 2026-05-25. In-voice text is close to final but tunable. Numbers and route facts marked
> `[ASSUMED]` await Fotis's yes/no.

---

## THE OUTDOOR SHOP (shared across disciplines)

Where you kit out — the deepened `openShop`. Everything is one of three **kinds** and three
**quality tiers**, in a **shared** catalogue plus each discipline's own section (below).

**Item kinds**
- *Consumable* — used up per trip (water, snacks, sunscreen); restocked.
- *Durable* — wears over many trips, then breaks; the tier/lifetime model.
- *Fleet* — a per-client durable that **caps capacity** (kayaks, bikes, wetsuits, harnesses).

**Quality tiers** (existing `TIER_MULT`): **basic** (×0.5 cost, ×0.5 life — cheap, short),
**standard** (×1/×1), **pro** (×2.5 cost, ×4 life — dear; lasts and performs). Fleet items take
tiers too (a battered sit-on-top vs a proper touring kayak; a standard bike vs a long-range
e-bike).

**Shared essentials** (any discipline):

| Item | Kind | Role |
|---|---|---|
| Water | consumable | hydration; heat outcomes |
| Trail food / snacks | consumable | energy, morale, the nervous-client settler |
| Sunscreen | consumable | exposed & hot trips |
| Insect repellent | consumable | river & forest |
| First-aid kit | durable | injuries, every discipline |
| Headlamp | durable | late finishes, dark slots |
| Map & compass / GPS | durable | navigation; mist |
| Dry bag | durable | keep kit & phone dry |
| Sun hat & buff | durable | heat/sun comfort |
| Sunglasses | durable | glare on water and snow |
| Blister & tape kit | consumable | foot and hand care |
| Group shelter (bothy bag) | durable | emergency weather refuge |
| Thermos / flask | durable | a hot drink — morale & comfort |
| Whistle / signalling | durable | safety |

**Comfort & delight** (no safety effect, but lift satisfaction → tips, reviews, social — the
payoff for the empathy/storytelling guide traits, §14):

| Item | Kind | Role |
|---|---|---|
| Premium local snacks / picnic | consumable | the lunch they remember |
| Mountain-tea / coffee flask | consumable | the warm gesture at the top |
| Action camera (GoPro) | durable | client photos → reviews & the direct channel (§7.3) |
| Branded buffs / merch | durable | a keepsake and free marketing |
| Field binoculars | durable | powers the wildlife wonder beats |

**Hiking gear** (the floor discipline's own kit, beyond the shared essentials):

| Item | Kind | Role |
|---|---|---|
| Boots (yours) | durable | the foundation |
| Trekking poles | durable | long/steep descents; lent to the wobbly |
| Rain shell | durable | the weather-turn |
| Insulation layer | durable | alpine & shoulder-season |
| Gaiters | durable | scree, mud, snow |
| Microspikes | durable | early/late-season alpine ice |
| Daypack upgrade | durable | carry the group's spare kit |
| Helmet | fleet | scrambly diff-3 ground |

**How the shop grows.** New sections unlock as you learn disciplines/certs; higher reputation or
an infra **wholesale account / pro-shop deal** trims prices; the **loan (§15)** funds the big
fleet purchases a season's cash can't.

---

## CONDITIONS — the extended weather palette

The base game runs five weather types (Clear, Hot, Windy, Drizzle/mist, Storm). These extra
conditions deepen the forecast and drive the discipline events below. Many are *intensities* or
*flavours* of the base five and can be implemented as flags on them.

| Condition | What it is | Who it bites |
|---|---|---|
| **Heatwave** | Hot taken to a dangerous extreme; a multi-day bake | exposed hiking & cycling worst; cancels midday; a comfort disaster for families/tourists (§16) |
| **Cold snap** | early/late-season chill; cold water | canyoning, rafting, any water — hypothermia without wetsuits |
| **Glassy calm** | a windless, mirror morning — a *positive* condition | a gift for SUP & kayak; run the exposed/sunrise lines you usually can't |
| **Swell** | big sea even with little wind | kayak & SUP launches and landings; surf at the put-in |
| **Sea fog** | low offshore visibility; can roll in fast | kayak & SUP navigation; stay on the VHF and the shore |
| **Sahara haze (sirocco)** | hot southerly + red dust, sticky air, eerie light | saps hard efforts everywhere; an odd, beautiful wonder-beat |
| **Gale** | wind beyond "windy" — genuinely dangerous | all water off; exposed ridges & coast roads off; trees down |

These let the forecast card tell a richer story — a glassy dawn worth racing for, a heatwave you
can see building — and unlock the events in each slice.

---

## SEA KAYAKING — the pattern slice

`activity: 'seakayak'`. The defining constraint is **wind** (the meltemi), and the defining
twist is **the fleet**: unlike hiking, you can only take as many clients as you own boats for
(see Design notes).

### Gear line

Two kinds. *Safety/outcome* items behave like the current owned-kit model (they swing event
odds and preparedness). *Fleet* items are durable **capacity** — they cap group size.

| Item | Kind | Role | `[ASSUMED]` cost (std) |
|---|---|---|---|
| PFD (lifejacket) | safety | mandatory; capsize outcomes | 35 |
| Paddle (yours) | safety | a split paddle ends a trip | 40 |
| Spray-skirt | safety | rough water, cold; touring only | 30 |
| Dry bag | safety | keeps first-aid/phone/VHF dry | 20 |
| Bilge pump / sponge | safety | recover from a capsize | 15 |
| Tow-line | safety | rescue a tired/blown-out paddler | 25 |
| VHF / whistle | safety | the offshore-wind lifeline | 40 |
| First-aid (dry-bagged) | safety | injuries, jellyfish, sun | 70 |
| **Client kayak** | **fleet** | one per client; caps group size | **220** |
| **Client paddle + PFD set** | **fleet** | one per client | **70** |
| Spare split paddle | safety | a split paddle ends a trip — unless you brought a spare | 40 |
| Paddle leash | safety | keeps the paddle with the boat | 12 |
| Cag / wetsuit (yours) | safety | cold & shoulder-season immersion | 60 |
| Compass / deck chart | safety | offshore navigation in the mist | 25 |
| Kayak trolley | durable | hauling boats to the water | 50 |
| Touring kayaks (pro fleet) | fleet | upgrade from sit-on-tops for capable groups & exposed routes | 380 |

`recommended(route, weather)` for seakayak returns the safety items that matter for that route
and sea state (always PFD + paddle; add spray-skirt/tow-line/VHF as exposure rises).

### Routes (`activity: 'seakayak'`)

`[ASSUMED]` difficulties, pay, and that these are the right signature spots.

| Route | diff | base pay | tags | note |
|---|---|---|---|---|
| **Voidokilia Bay & the lagoon** | 1 | 60 | coast, calm, scenic | the gentle classic; turtles, birds, glass water |
| **Navarino Bay & the wreck** | 2 | 120 | coast, exposed, historical | Sphacteria, sea caves, a sunken hull below you |
| **Pylos to the Methoni sea caves** | 2 | 125 | coast, caves, long | cliffs, caves, the Venetian castle from the water |
| **The Proti island crossing** | 3 | 190 | open-water, exposed, remote | off Marathopoli; an open crossing — wind is everything |
| **Kardamyli coast & sea caves** | 2 | 130 | coast, caves, remote | Mani; clear deep water, caves, the old stone town above |
| **Cape Tainaron lighthouse** | 3 | 205 | open-water, exposed, remote, historical | the southern tip — the ancient gate to the underworld; serious, committing water |
| **Epidavros sunken city** | 2 | 140 | coast, historical, snorkel | paddle and snorkel over a drowned Roman villa in the Argolic Gulf (a reach beyond the home patch) |
| **Gialova lagoon & the Divari** | 1 | 65 | calm, eco, family | flamingos and herons on Greece's birdwatching jewel; flat, sheltered, made for nervous beginners |
| **Finikounda bays & islets** | 2 | 115 | coast, islets, scenic | hopping between turquoise coves and little islands off the south coast |
| **Koroni castle from the sea** | 2 | 130 | coast, historical | the Venetian fortress looming above, fishing boats below, a town that ignores the centuries |
| **Sapientza & Schiza crossing** | 3 | 200 | open-water, remote, exposed | the Messinian Oinousses off Methoni — a committing crossing to wild, empty islands |

Storms cancel diff-2/3 outright; the open-water routes (Proti, Cape Tainaron) need the
**Advanced Sea Kayak Leader Award** (§ cert) and a calm forecast.

### Weather rule

- **Windy (meltemi):** the killer. Downgrades or cancels exposed routes; the open crossing is
  off. The whole discipline lives or dies on this.
- **Storm:** everything is off.
- **Hot/clear:** good paddling — but sun and dehydration on the water are sneaky (water + sun
  protection matter).
- **Mist:** offshore navigation/visibility risk; the VHF and staying close to shore matter.
- **Choppy:** sea kayaking's instance of the general **client-comfort mechanic**
  (`PHASE-ARCHITECTURE §16`) — not dangerous, just *uncomfortable*: families and tourists get
  queasy and reviews dip; thrill-seekers enjoy it. Read the room — turn a family back to the
  lagoon, let the climbers play.

### Put-in situations (`TRAILHEAD`, `activity:'seakayak'`)

In-voice, with delta sketches in the existing `{need, label, hint, run→{line, rep, energy,
risk, payMul, tips}}` shape.

- **"I can swim, basically"** — *as you hand out spray-skirts, one of the group mentions, with a
  laugh, that they're "not really a water person."*
  - *(need: tow-line)* Pair them to you on a short leash and keep it gentle — *"You clip them
    close and pick the sheltered line. Quietly handled."* `rep +5`
  - Run a proper wet-exit drill in the shallows first — *"Ten minutes in waist-deep water and
    the panic drains out of them."* `energy -5, risk -`
  - Wave it off, they'll be fine — *"You shrug and launch. They are not, it turns out, fine."*
    `risk +0.18`
- **The wind is already up** — *whitecaps are forming across the bay before you've even
  launched.*
  - Drop to the sheltered lagoon line — *"You bin the crossing for the calm water inside the
    bay. Less drama, everyone dry."* `payMul 0.8`
  - *(need: VHF)* Check the marine forecast and pick a window — *"You raise the port, get the
    window, and time the launch like a professional."* `rep +4`
  - Launch anyway — *"You point at the horizon and go. The horizon, it turns out, has opinions."*
    `risk +0.2`
- **Nowhere dry for the phones** — *six phones, two passports, and a look of dawning horror as
  they realise the kayak is, fundamentally, wet.*
  - *(need: dry bag)* Stow it all in the dry bag — *"Everything vanishes into the dry bag.
    Crisis, and a wet passport, averted."* `rep +4`
  - Leave valuables locked in the van — *"A trek back to the van, a late launch, but dry
    documents."* `energy -4`
- **Too many bodies, not enough boats** **[fleet beat]** — *eight turned up. You brought six
  kayaks.*
  - Run two waves yourself — *"You take six, land them, come back for the rest. Knackering, but
    nobody's turned away."* `energy -12`
  - Turn the extras away with a refund — *"Two go home disappointed and a little out of pocket
    on your side."* `cash -, rep -2`
  - *(only if fleet ≥ group)* — no problem; you brought enough boats. `rep +2`
- **Cotton kills** — *one of them has turned up in jeans and a cotton hoodie for a half-day on
  open water.*
  - Lend spare layers from the kit bag — *"You dig out a spare top and a windproof. Warm, dry,
    and faintly embarrassed."* `rep +3`
  - Send them to change — *"A trudge back to the car, a late launch, but at least they won't
    hypothermia on you."* `energy -4`
  - Launch as-is — *"You shrug and push off. By the first cave they are shivering and the mood
    has gone with the warmth."* `rep -4, risk +0.1`
- **The GoPro auteur** — *one client has a phone on a selfie stick and intends to film the
  entire trip one-handed.*
  - Have them stow it for the open stretches — *"You promise a photo break and they reluctantly
    pocket the rig. Paddle now, post later."* `rep +3`
  - Let them film — *"They paddle in lazy circles, narrating. The group's patience drains faster
    than the battery."* `rep -2, risk +0.06`
- **Green before the green water** — *one of the party has gone pale at the sight of the swell,
  on the slipway, on dry land.*
  - *(need: snacks)* Ginger, the sheltered line, and a calm word — *"A biscuit, a promise to
    stay close to shore, and their colour returns. Kindly done."* `rep +5`
  - Suggest they sit this one out — *"You gently stand them down. Disappointing, but no one wants
    them green over the side."* `payMul 0.92, rep +2`

### On-water events (`EVENTS`, `activity:'seakayak'`)

- **The capsize** — *a wobble, a yelp, and suddenly there's a head in the water and an upturned
  hull.*
  - *(better with PFD + tow-line; medic/calm)* — `chance(...)`: success → *"You're alongside
    before they've finished gasping, hull righted, paddler back aboard, dignity mostly intact."*
    `rep +6` · fail → *"The rescue is slower and colder than it should be; everyone's rattled."*
    `rep -4, energy -12`
- **The offshore wind** *(the scary one; when windy/mist)* — *the gap between you and the shore
  is widening, and it isn't the shore that's moving.*
  - Raft up and tow the weakest back — *(need: tow-line; navigator/captain perk helps)*
    success → *"You raft the group, clip the tow, and grind everyone back to the lee. Textbook."*
    `rep +7` · fail → *"You claw back to shelter eventually, soaked and white-knuckled."*
    `rep -9, cash -40, energy -14`
  - Push on to the cave before it builds — `chance(low)` big reward or a real scare.
- **The cave, and the seal** *(the wonder beat)* — *you slip into the sea cave and the noise
  drops to a hush — and there, on a ledge, a monk seal watches you with frank disapproval.*
  - Hold the group silent and let it land — *"Phones down, for once. Nobody breathes. This is
    the photo they won't get and the memory they'll keep."* `rep +7, tips +25 (tourist +)`
- **The straggler** — *one paddler is forty metres back and shrinking.*
  - Drop back and shepherd — `energy -6, rep +3` · or push the pace — `rep -3, risk +`.
- **Gear at sea** — *a paddle splits / the skeg jams / a spray-skirt blows.* Field-fix vs cut
  the route short (mirror the existing `gear` event, water-flavoured).
- **Dolphins** *(the wonder beat)* — *a pod falls in alongside, riding the bows, and a whole
  boatload of adults forgets, completely, how to paddle.*
  - Stop and drift with them — *"You raft up and let it happen. Nobody will stop talking about
    this for a year."* `rep +7, tips +20 (any group)`
- **Jellyfish at the swim stop** — *the snorkel spot you promised is, today, a slow purple
  galaxy of bells.*
  - Move the swim around the headland — *(local knowledge)* — *"You shift the stop two coves on,
    to clear water. Smoothly done."* `rep +4, energy -3`
  - *(need: first-aid)* Brave it and treat the odd sting — *"A couple of yelps, a dab of
    treatment, and everyone lives. Just."* `risk +0.08, rep -2`
- **The wake** — *a speedboat carves past far too close and the swell hits the group broadside.*
  - *(PFD; calm/captain perk helps)* — `chance(...)`: success → *"You call the brace, they take
    it on the beam, and the boats stay upright. Textbook."* `rep +5` · fail → *"One goes over.
    A quick recovery, but the group's nerves are shot for an hour."* `rep -4, energy -8`
- **The squall** *(the water weather event; when wind/mist/storm builds)* — *a line of dark,
  wind-torn water is racing across the bay toward you. Minutes, not hours.*
  - Raft up and run for the lee shore — *"You cluster the group, set a hard ferry-angle, and
    claw into the shelter of the point as it hits. Wet, fast, safe."* `payMul 0.8, rep +4`
  - Sprint for the planned landing — `chance(...)`: beat it for a thrilling finish, or get
    caught in the open. `rep +8 / rep -10, cash -40, energy -14`
- **Glassy dawn** *(condition: glassy calm)* — *the bay is a sheet of mercury — the rare morning
  to run the exposed line you usually can't.*
  - Seize it — *"You point at the open water and go; the group gets the trip of their lives."*
    `rep +6, tips +20`
  - Play it safe out of habit — *"You stick to the lagoon. Lovely, and a little forgettable, on
    a day that offered more."* `payMul 0.85`
- **Sea fog** *(condition: sea fog)* — *the shore dissolves into grey and the group draws quiet
  and close.*
  - *(need: VHF / compass)* Shepherd in on a bearing — *"You take a heading and bring them out
    of the murk dead on the beach. Quietly masterful."* `rep +6`
  - Feel your way along the coast — *"A tense, disoriented hour clawing back to land."*
    `rep -5, energy -10`
- **Swell at the landing** *(condition: swell)* — *the beach you planned is now a dumping
  shore-break.*
  - Pick a sheltered alternate — *(local knowledge)* `rep +4`
  - Commit to the surf — *"A comedic pile-up of capsizes and laughter; nobody hurt, dignity
    widely lost."* `risk +0.12`

### Cert ladder — the **Paddle UK** sea-kayak scheme

Real scheme (Paddle UK, formerly British Canoeing). Three rungs, each an off-season programme
(weeks + cost), each unlocking harder water:

| Award | Unlocks | Improves |
|---|---|---|
| **Sea Kayak Award** | the gate to guiding at all; sheltered water (Voidokilia, calm Epidavros) | basic competence, client confidence |
| **Sea Kayak Leader Award** | leading groups in moderate/exposed conditions — Navarino wreck, Methoni caves, Kardamyli | capsize & rescue outcomes, group control |
| **Advanced Sea Kayak Leader Award** | open-water / committing routes — the Proti crossing, Cape Tainaron; rougher seas | the offshore-wind and tow outcomes most of all |

Gate: open-water routes are unavailable without the Advanced award; you can't lead groups at
all on exposed water without at least the Leader Award.

### Design notes

- **The fleet = capacity, even solo.** Hiking caps group size by nobody (clients bring
  themselves); kayaking caps it by **boats owned**. So even in Phase 1, buying client kayaks is
  a capital decision that both gates your earning ceiling and creates the "too many bodies"
  beat. This is the seed of the Phase 2 equipment-as-capacity lever (`PHASE-ARCHITECTURE §7.2`)
  appearing early for water/cycling/rafting disciplines.
- **Wind is the discipline's whole personality.** Where hiking fears the storm and the heat,
  kayaking fears the *wind* — and the forecast card should make a windy week visibly painful
  for a kayak guide, pushing them to diversify disciplines (the growth loop, §7).
- **Higher barrier, higher ceiling.** The fleet makes sea kayaking expensive to start and
  well-paid once running — the economic shape flagged in `PHASE-1 §8`.
- **You probably can't afford the fleet outright — so you borrow.** Six client kayaks at
  ~€220 is well past a €200 starting purse, which is exactly why the **starting loan** exists
  (`PHASE-ARCHITECTURE §15`): take on debt to buy the seats that let a gear-heavy discipline
  begin at all. Who you borrow from is a character choice with teeth.

---

## CANYONING — the second slice

`activity: 'canyon'`. The defining danger is the **flash flood** (a storm anywhere upstream,
even out of sight); the defining feel is cold water, technical rappels, and deep shaded gorges.
Like kayaking it carries a **fleet** (wetsuits + harnesses per client) and so the same
capacity cap and loan logic.

### Gear line

| Item | Kind | Role | `[ASSUMED]` cost (std) |
|---|---|---|---|
| Wetsuit (yours) | safety | cold-water protection; long immersion | 60 |
| Canyoning harness | safety | every rappel | 45 |
| Helmet | safety | rockfall, knocks in tight slots | 30 |
| Rope | safety | the lifeline; rappels | 80 |
| Descender / belay device | safety | controlled descents | 25 |
| Throw-line | safety | swift-water rescue | 30 |
| Canyon bag (dry) | safety | first-aid, food, phone kept dry | 25 |
| First-aid (dry-bagged) | safety | injuries, cold, knocks | 70 |
| **Client wetsuit** | **fleet** | one per client; caps group size | **70** |
| **Client harness + helmet set** | **fleet** | one per client | **60** |
| Spare rope | safety | long or technical descents; a cut rope is a trap | 80 |
| Canyoning shoes (yours) | safety | grip on polished, wet rock | 50 |
| Cowstails / lanyards | safety | clipping in on exposed anchors | 30 |
| Rescue pulley kit | safety | hauls and releasable systems | 45 |
| Neoprene socks & gloves | comfort | the cold that ends trips early | 25 |
| Dry suit (yours) | safety | shoulder-season / glacial water | 120 |

`recommended(route, weather)` for canyon always returns rope + harness + helmet + wetsuit; adds
the throw-line as water/grade rises.

### Routes (`activity: 'canyon'`)

`[ASSUMED]` difficulties, pay, and that these are the right canyons.

| Route | diff | base pay | tags | note |
|---|---|---|---|---|
| **Polylimnio waterfalls** | 1 | 70 | river, waterfalls, forest | the gentle, gorgeous intro — emerald pools, small jumps, no rope yet |
| **Neda Gorge & waterfalls** | 2 | 120 | river, gorge, remote | the goddess's river; swims, slides, the cave waterfall |
| **Vyros Gorge** | 2 | 115 | gorge, remote, forest | Mani; stone bridges and deep, cold shade under Taygetos |
| **Lousios Gorge** | 2 | 130 | river, gorge, historical | Arcadia; monasteries glued to the cliffs far overhead |
| **Ridomo Gorge** | 3 | 180 | technical, remote, abseil | Mani; big committing rappels and serious water — cert + nerve |

Any **storm risk cancels** the technical canyons outright (flash-flood danger); Ridomo needs the
**Advanced Canyon Leader (ICOpro L3)** cert (§ cert).

### Weather rule

- **Storm — the flash flood.** The discipline's signature terror: a storm *upstream*, even one
  you can't see, can send a wall of brown water down a dry-looking slot in minutes. High and
  committing canyons are **off** at any storm risk. (This is `CATASTROPHES.md`: "The canyon
  turns the colour of tea.")
- **Drizzle / mist:** rising water and slick rock — caution, lower grades only.
- **Hot / clear:** ideal — the cold water is the reward; just watch dehydration on the approach.
- **Cold snap / shoulder months:** water temperature bites; without good wetsuits, hypothermia.
- **Comfort (§16):** cold water + families/tourists = a shivering, miserable mismatch; the big
  jumps thrill the thrill-seekers and terrify the nervous. Read the room.

### Put-in situations (`TRAILHEAD`, `activity:'canyon'`)

- **A smudge on the horizon** *(the flash-flood decision, at the trailhead)* — *the forecast
  said clear, but there's grey building over the peaks behind the gorge.*
  - Drop to a low, open, easy-exit canyon — *"You bin the deep slot for a route you can climb
    out of. Boring, alive."* `payMul 0.8, rep +3`
  - Wait an hour and watch the water — *"You sit on the lip and read the river. Patience as
    professionalism."* `energy -4`
  - Commit to the descent — *"You drop in under a darkening sky. Bold. Possibly the last bold
    thing you do."* `risk +0.22`
- **"I can't really swim"** — *announced cheerfully at the lip of a canyon that is, fundamentally,
  a river.*
  - *(need: throw-line)* Keep them on the line through the pools — *"You short-rope them through
    every swim. Slow, safe, attentive."* `rep +5, energy -6`
  - Turn them back at the road — *"Kindly but firmly, you stand them down. The right call."*
    `payMul 0.92, rep +2`
- **The first big jump** — *a client has frozen at the edge of a six-metre leap, the group
  backing up behind them.*
  - *(need: snacks / empathy)* Coax, breathe, offer the climb-down — *"No shame in the chicken
    exit; you talk them down the rocks and the day rolls on warm."* `rep +5`
  - Let the pressure build — *"You wait it out, awkwardly. They jump, eventually, furious and
    shaken."* `rep -3`
- **Nobody warned them it'd be cold** **[fleet/comfort beat]** — *summer outside, but the gorge
  is a fridge, and half the group is in swim shorts and goosebumps.*
  - Hand out spare wetsuits *(fleet)* — *"Everyone zips into neoprene; the shivering stops, the
    fun starts."* `rep +4`
  - Push a brisk pace to keep warm — *"You keep them moving and the blood up. It mostly works."*
    `energy -8, risk +0.06`

### In-canyon events (`EVENTS`, `activity:'canyon'`)

- **The water rises** *(the flash flood; when storm/mist)* — *the pool you just swam is suddenly
  pushing, and the noise upstream has changed.*
  - *(cert + skill; calm)* — `chance(...)`: success → *"You read it early, drive everyone up to
    a high ledge, and watch the canyon roar through where you'd have been. Nobody breathes."*
    `rep +8` · fail → *"You get out, but barely, scattered and frightened, gear lost downstream."*
    `rep -12, cash -60, energy -16`
- **The stuck rappel** — *the rope's jammed below the lip and a client is dangling, spinning,
  fifteen metres up.*
  - *(cert; rope skill)* talk-and-fix → success `rep +6` / a slow, frightening recovery
    `rep -5, energy -12`.
- **The hidden chamber** *(the wonder beat)* — *you swim through a curtain of falling water into
  a chamber lit blue from below, and the whole group goes silent.*
  - Hold it — *"Nobody speaks. A kingfisher cuts the light. This is the one they'll describe
    badly to everyone they love for years."* `rep +7, tips +20`
- **The cold creeps in** — *a client has gone quiet and grey-lipped; the gorge has been taking
  heat from them for an hour.*
  - *(wetsuit helps; medic)* warm them, feed them, push for the sun — handle it `rep +4,
    energy -6` / a near-miss with hypothermia `rep -6, cash -30`.
- **Slick rock** — *someone goes down hard on a polished boulder; an ankle, maybe a wrist.*
  Mirror the hiking `ankle` event, cold-and-wet-flavoured (first-aid / medic / cert swing it).
- **Gear on the rope** — *a harness buckle or the descender fouls mid-descent.* Field-fix vs
  lower-and-abort.
- **Cold snap in the gorge** *(condition: cold snap)* — *the water is colder than the calendar
  promised and lips are going blue.*
  - *(wetsuit + pace; hot drink)* Keep them moving and warm — `rep +4, energy -6`
  - Push on regardless — a hypothermia near-miss `rep -6, cash -30`
- **Rockfall in the slot** — *a clatter echoes from above and a fist of stone bounces past.*
  - *(helmets earn their keep)* No harm done `rep +2` / a graze and a real fright
    `rep -4, risk +0.06`
- **The dry-season scramble** *(low water / drought; comfort)* — *the canyon's bones are showing:
  more downclimb than swim, and the "great waterfall" is a trickle.*
  - *(storytelling)* Sell the geology and the cool quiet — `rep +3, tips +10`
  - Let it disappoint — *a flat, faintly mis-sold day* `rep -3`

### Cert

Three rungs, **ICOpro** (International Canyoning Organization for professionals), off-season:

| Award | Unlocks | Improves |
|---|---|---|
| **Canyon Guide (L1)** | the gate; gentle canyons (Polylimnio) | basic competence, client confidence |
| **Canyon Leader (L2)** | standard gorges with water (Neda, Vyros, Lousios) | rope work, group control, cold management |
| **Advanced Canyon Leader / Instructor (L3)** | technical / abseil canyons (Ridomo) | **flash-flood judgement** and rescue, most of all |

Gate: committing canyons need L3; you can't lead exposed water without at least L2.

### Design notes

- **The flash flood is the discipline's heartbeat.** Where kayaking fears the wind and hiking
  the storm-on-the-ridge, canyoning fears the storm *you can't see* — upstream, over the peaks.
  That invisible danger is the whole tension and the signature catastrophe.
- **Cold + the comfort mechanic (§16).** A canyon is a fridge; families and tourists feel it,
  thrill-seekers don't. Wetsuit coverage and pace are the levers.
- **Fleet = capacity + the loan, again.** Wetsuits and harnesses per client cap group size and
  cost real money up front, so canyoning leans on the starting loan (§15) just like kayaking.
- **Pattern confirmed.** Canyoning reused the kayak template wholesale (gear line, fleet,
  routes, weather rule, put-in/in-route events, cert, notes) — evidence the slice format scales.
  The remaining core disciplines (rafting, cycling) and niche ones (SUP, climbing) follow it.

---

## RAFTING — core slice

`activity: 'raft'`. The twist: it's a **team in one boat**, so the *fleet unit is the whole
raft* (one raft ≈ 6–8 paddlers + you), and the *weather* that matters most is **river flow**.

### Gear line

| Item | Kind | Role | `[ASSUMED]` cost |
|---|---|---|---|
| **Raft** | **fleet** | the boat; one crew per raft (caps group in whole boats) | **900** |
| Client paddle | fleet | one per paddler | 25 |
| Client PFD | fleet | one per paddler | 35 |
| Client helmet | fleet | one per paddler | 30 |
| Client wetsuit | fleet | cold spring water | 70 |
| Throw-line (yours) | safety | swimmer rescue — the key tool | 30 |
| Pump + repair kit | safety | a raft can deflate; patch a tear | 40 |
| First-aid + your kit | safety | injuries, your PFD/helmet/paddle | 130 |
| Spare paddles | safety | a lost paddle mid-rapid | 25 |
| Flip line | safety | re-righting a flipped raft | 20 |
| Bailing bucket | safety | a swamped boat in high water | 10 |
| Dry box | durable | first-aid & kit, lashed in | 35 |
| Client booties & splash cags | fleet | cold spring water | 45 |
| Safety kayak (guide boat) | fleet | swimmer pickup on harder water (pro) | 350 |
| Second raft | fleet | doubles capacity — a real expansion | 900 |

### Routes (`activity: 'raft'` — Arcadia/north-Peloponnese rivers; a reach beyond the home patch)

| Route | diff | base | tags | note |
|---|---|---|---|---|
| **Alfeios River** | 1 | 100 | river, scenic, family | Olympia's river — wide, gentle, forgiving; the family classic |
| **Lousios River** | 2 | 130 | river, gorge, historical | lively spring water under cliff-clinging monasteries |
| **Ladonas River** | 2 | 125 | river, dam-fed, reliable | **dam-released flow** — holds up even in a dry summer |
| **Neda run** | 1 | 80 | river, remote | Messinia's own — playful in spring, a boat-scrape in August |

### Weather & flow rule

- **Flow level is the variable, not just the sky.** Snowmelt + rain = high, lively, harder
  grade; a dry summer or **drought** = thin and scrapey (a let-down — `CATASTROPHES`: "The
  drought"). The **dam-fed Ladonas** is your drought insurance.
- **Heavy rain upstream = high-water danger** — pushes the grade up or cancels (graded sibling
  of the canyon flash flood).
- **Comfort (§16):** grade × client — grade-2 suits families; thrill-seekers want grade 3+; a
  thin drought run bores everyone.

### Events (selected, in the existing shape)

- **The river's up** *(put-in)* — *overnight rain has it pushing brown and quick.* Run the
  gentler section (`payMul 0.8, rep +3`) / wait and read it (`energy -4`) / commit to the big
  water (`risk +0.2`).
- **The dead-weight paddler** *(put-in)* — *one of the crew folds his arms and announces he's
  "just here for the ride," unbalancing the boat.* Coax and re-seat (`rep +4`) / let it slide
  (`risk +0.08, rep -2`).
- **The flip** *(in-route)* — *a drop catches the boat wrong and the whole crew is suddenly in
  the river.* `(cert + throw-line; calm)` → round them up cleanly (`rep +6`) / a long, cold,
  scattered swim (`rep -10, cash -40, energy -14`).
- **Swimmer downstream** — *one paddler bounces out in a rapid and is moving fast.* `(throw-line)`
  clean rescue (`rep +6`) / a real fright (`rep -5, energy -8`).
- **The otter** *(wonder)* — *the gorge opens, the water stills, and an otter slips off a rock
  ahead of the boat.* `rep +6, tips +18`.
- **The dam release** *(opportunity)* — *word comes that Ladonas is releasing — real water, on a
  day the other rivers are bones.* Race to the put-in (`rep +5, payMul +`) / miss the window and
  run a thin, scrapey section instead.
- **Wrapped raft** *(hazard)* — *the boat pins broadside on a midstream rock and the whole river
  piles onto it.* `(cert; crew drill)` a clean unwrap (`rep +6`) / a long, cold, frightening
  extraction (`rep -8, energy -14`).
- **The jump pool** *(wonder)* — *a deep green pool, a warm rock to leap from, and the entire
  crew begs for "just ten more minutes."* Give it to them — `rep +6, tips +18, energy +3`.

### Cert

Three rungs, **IRF** (International Rafting Federation):

| Award | Unlocks | Improves |
|---|---|---|
| **Raft Guide (L1)** | the gate; gentle / family runs (Alfeios) | basic competence |
| **Trip Leader (L2)** | standard grade-2 rivers (Lousios, Ladonas) | flip & swimmer-rescue outcomes |
| **Raft Instructor (L3)** | high-water / harder rivers | reading flow, rescue leadership |

### Design notes

- **Fleet in whole boats.** Capacity jumps in raft-sized steps (~6–8), and a raft is a big
  capital item → the loan (§15) again. Owning a second raft is a real expansion decision.
- **Flow is its weather.** Drought is rafting's slow catastrophe; high water its acute one.
- **Team-in-one-boat** gives rafting a crew-cohesion flavour no other discipline has.

---

## CYCLING / E-BIKE — core slice

`activity: 'cycle'`. The most **tourist-accessible** discipline (e-bikes flatten the fitness
gap), with two unique layers: **mechanicals** and **e-bike battery range**.

### Gear line

| Item | Kind | Role | `[ASSUMED]` cost |
|---|---|---|---|
| **Client e-bike** | **fleet** | one per client; needs charging; premium appeal | **600** |
| **Client bike (std)** | **fleet** | the cheaper tier | **250** |
| Client helmet | fleet | one per client | 30 |
| Repair kit + spares | safety | punctures, chains, the roadside fix | 40 |
| Pump + multitool | safety | — | 20 |
| First-aid + your bike/kit | safety | road rash, falls; your own machine | 470 |
| Spare tubes & tyres | consumable | the inevitable puncture | 12 |
| Spare e-bike battery | durable | extends range — answers the flat-battery hazard | 250 |
| Van / bike rack | durable | shuttle bikes to the start | 120 |
| Gloves & hi-vis | fleet | comfort & road safety | 18 |
| Kids' bikes / tag-alongs | fleet | the family market | 180 |
| GPS computer & route files | durable | navigation; self-guided options | 90 |
| Long-range e-bikes (pro fleet) | fleet | premium machines for big days & hotel clients | 850 |

### Routes (`activity: 'cycle'`)

| Route | diff | base | tags | note |
|---|---|---|---|---|
| **Olive-grove gravel lanes** | 1 | 70 | backcountry, family | silver groves to a long taverna lunch |
| **Voidokilia & Gialova loop** | 1 | 75 | coast, eco, family | flat, stunning, birdlife — the e-bike crowd-pleaser |
| **Ancient Messene back-lanes** | 2 | 110 | historical, backcountry | ruins, shade, and a hill or two |
| **Mani coast road** | 2 | 120 | coast, long, exposed | tower villages and sea drops; wind- and heat-exposed |
| **Taygetos foothill climb** | 3 | 165 | mountain, hard, long | a proper climb into the chestnut forests — fit groups only |

### Weather rule

- **Heat — the enemy.** Midday summer on exposed tarmac is brutal: start early or it's a comfort
  disaster for families/tourists (§16).
- **Rain** = slick roads and falls; **wind** on the exposed coast saps and unnerves.
- **Battery range (e-bike)** is a planning layer in its own right — a flat battery far from base
  is a self-inflicted catastrophe.

### Events (selected)

- **The fitness gap** *(put-in)* — *two are clearly racers; two haven't ridden since childhood.*
  Split the pace (`energy -6, rep +3`) / put the slow pair on e-bikes (`rep +4`) / one group
  suffers all day (`rep -3`).
- **The puncture** *(in-route; need: repair kit)* — quick fix and rolling (`rep +3`) / a long
  roadside faff with the wrong valve (`rep -3, energy -5`).
- **Flat battery, far out** *(in-route; e-bike)* — *someone burned the assist on the climbs;
  now it's a 22-kilo bike and a long way home.* shuttle/tow (`energy -10`) / a grim grind
  (`rep -4, energy -8`).
- **The viewpoint** *(wonder)* — *you crest a rise and the whole gulf is laid out, then a long
  freewheel down into a village square.* `rep +6, tips +15`.
- **Heatwave on the climb** *(condition: heatwave)* — *halfway up the Taygetos foothills at
  forty degrees, a rider has gone silent and grey.* `(water/shade; early start helps)` ease off
  and cool them (`rep +4, energy -6`) / push the schedule into heat exhaustion (`rep -8,
  cash -40`).
- **The dog pack** *(comedy/hazard)* — *three village dogs erupt from a gateway and give joyful,
  terrifying chase.* `(calm)` group up and ride it out (`rep +3`) / a scattering of panicked
  pedalling and one ditched bike (`rep -3, risk +0.06`).
- **Chain snaps, far out** *(mechanical, beyond a puncture)* — *a crack, and a rider freewheels
  to a silent stop twenty kilometres from anywhere.* `(repair kit/skill)` a roadside fix
  (`rep +4`) / a long shuttle and a dented day (`rep -3, energy -8`).

### Cert

Three rungs, **IMBA** (International Mountain Bicycling Association):

| Award | Unlocks | Improves |
|---|---|---|
| **Trail Cycle Leader (L1)** | the gate; easy lanes & coast loops (olive groves, Gialova) | group control on the road |
| **Mountain Bike Leader (L2)** | longer / exposed routes (Mani coast, Messene lanes) | descent & mechanical outcomes |
| **Advanced MTB Guide (L3)** | technical / backcountry climbs (Taygetos foothills) | hard terrain, navigation |

### Design notes

- **Bike fleet = capacity + the loan**, with e-bikes a higher-cost/higher-appeal tier worth the
  premium for tourist and hotel channels.
- **Battery range** is a unique planning/hazard layer no other discipline has.
- Most accessible discipline → the natural pairing with cruise and hotel partners (§12).

---

## SUP — niche slice

`activity: 'sup'`. Cheap-ish, gorgeous, beginner- and tourist-friendly — but with the **narrowest
weather window** of all: a standing paddler is a sail, so *any* wind is the enemy.

### Gear line

| Item | Kind | Role | `[ASSUMED]` cost |
|---|---|---|---|
| **Client board** | **fleet** | one per client | **350** |
| Client paddle | fleet | — | 25 |
| Client leash | fleet | keeps the board with the rider | 15 |
| Client PFD | fleet | — | 35 |
| Your board, VHF/whistle, dry bag, first-aid | safety | the offshore-drift lifeline | ~120 |
| SUP pump | durable | inflatables; a deflated board is a swim | 25 |
| Spare fin & repair patch | consumable | the fin you'll lose | 15 |
| Anchor | durable | holds station for SUP-yoga | 20 |
| Rashguard / wetsuit | fleet | sun & shoulder-season | 40 |
| Waterproof speaker | comfort | the SUP-yoga product's soundtrack | 60 |
| Touring boards (pro fleet) | fleet | upgrade from all-rounders for the bay crossing | 480 |

### Routes (`activity: 'sup'`)

| Route | diff | base | tags | note |
|---|---|---|---|---|
| **Gialova lagoon sunrise** | 1 | 70 | calm, eco, sunrise | glassy dawn water and flamingos — the signature product |
| **Voidokilia bay** | 1 | 65 | calm, family | the postcard: sheltered, shallow, forgiving |
| **Kalamata waterfront** | 1 | 60 | urban, calm, sunset | easy city-beach paddle with the after-work crowd |
| **Navarino bay crossing** | 2 | 110 | open, exposed | longer and wind-exposed — only on a glass-calm read |

### Weather rule

- **Wind = everything, more than kayaking.** Even a light breeze drifts beginners offshore;
  any chop cancels or downgrades. The gentle tours live on **glassy morning water**.
- Heat fine (you're in the water half the time); sun exposure high.
- **Comfort (§16):** families/tourists are blissful in calm and frightened in chop — the whole
  product is the calm.

### Events (selected)

- **The wobble** *(put-in)* — *a nervous beginner cannot, will not, stand up.* Coach from
  knees first (`rep +4, energy -3`) / launch them anyway (`rep -2, risk +`).
- **Serenity, interrupted** *(put-in; a SUP-yoga booking)* — *they want flat water and calm; a
  fishing boat's wake has other ideas.* reposition to the lee (`rep +4`) / press on bobbing
  (`rep -2`).
- **Blown offshore** *(in-route)* — *the breeze freshened and a beginner is drifting seaward,
  paddling backwards in a panic.* `(leash/tow; VHF)` quick corral (`rep +5`) / a genuine scare
  (`rep -8, energy -10`).
- **Dawn stillness** *(wonder)* — *the sun lifts over the lagoon, the water is a mirror, and
  nobody says a word.* `rep +7, tips +20`.
- **Glassy sunrise delivers** *(condition: glassy calm)* — *pink sky, mercury water, a heron
  lifting off the reeds — the signature tour is everything the photo promised.* Hold the moment
  — `rep +7, tips +20`.
- **The gust** *(wind builds)* — *a breeze springs up and the standing group starts sliding,
  helplessly, toward open water.* `(leash/tow; VHF)` corral them downwind of you (`rep +5`) / a
  genuine drifting scare (`rep -8, energy -10`).
- **The ferry wake** *(swell / wake)* — *the Pylos boat throws a wall of wash across the calm and
  beginners topple like dominoes.* `(coach the brace)` most stay up (`rep +4`) / a mass dunking
  — *which, with the right group, is the best laugh of the day* (`thrill: rep +3 / family:
  rep -3`).

### Cert

Three rungs, **Paddle UK** SUP scheme:

| Award | Unlocks | Improves |
|---|---|---|
| **SUP Award (L1)** | the gate; flat sheltered water (Gialova, Voidokilia, Kalamata) | balance coaching, beginner confidence |
| **SUP Leader (L2)** | livelier sheltered water, bigger groups | wind handling, group control |
| **Advanced / Coastal SUP Leader (L3)** | open / exposed water (the Navarino crossing) | offshore-drift rescue, sea state |

### Design notes

- **Niche by weather:** a poor *sole* discipline (too many wind-killed days), but a superb
  **add-on to kayaking** — shared launch spots, overlapping clients, cheap boards.
- Its signature **products** (sunrise tour, SUP-yoga) point straight ahead to Phase 3
  productization (§7.3).

---

## CLIMBING — niche slice

`activity: 'climb'`. The vertical one. The core skill isn't kit, it's **fear management**;
the home truth is that the Peloponnese holds **Leonidio**, a world-class destination.

### Gear line

| Item | Kind | Role | `[ASSUMED]` cost |
|---|---|---|---|
| Rope | safety | the lifeline | 80 |
| Quickdraws / rack | safety | protection | 120 |
| Belay device + your harness/helmet/shoes | safety | — | 90 |
| **Client harness** | **fleet** | one per client | **45** |
| **Client helmet** | **fleet** | one per client | **30** |
| **Client shoes (size range)** | **fleet** | one pair per client | **60** |
| First-aid | safety | falls, knocks, rockfall | 70 |
| Spare rope | safety | multi-pitch & abseils | 80 |
| Chalk & chalk bags | consumable | grip; client confidence | 12 |
| Slings & spare carabiners | safety | anchors & extensions | 40 |
| Crash pad | fleet | unlocks a bouldering product | 120 |
| Belay glasses | comfort | a long day spent looking up | 40 |
| Approach shoes (yours) | durable | the scramble to the base | 70 |
| Trad rack (pro) | safety | multi-pitch trad on Taygetos | 250 |

### Routes (`activity: 'climb'`)

| Route | diff | base | tags | note |
|---|---|---|---|---|
| **Kalamata sea-view crag** | 1 | 80 | crag, single-pitch, scenic | bolted sport routes above the gulf — beginner-friendly |
| **Mani sea crags** | 2 | 130 | crag, coast, exposed | tufa and limestone above the blue |
| **Leonidio (Red Rock)** | 2 | 150 | crag, destination, long | world-famous sport climbing on red limestone domes |
| **Taygetos multi-pitch** | 3 | 190 | alpine, multi-pitch, exposed | a real mountain route — exposure, route-finding, commitment |

### Weather rule

- **Heat** greases the holds and saps the will — the rock goes "off"; **storm** is lightning
  danger on an exposed crag (cancel); **cool and dry** is perfect. The discipline favours the
  **shoulder months** (per the activities table) — a useful hedge against the summer heat that
  punishes the others.
- **Comfort/fear (§16):** thrill-seekers love the exposure; families and the nervous need gentle
  single-pitch and patience.

### Events (selected)

- **"I climb at the gym"** *(put-in)* — *confidence that may or may not survive its first
  meeting with real rock.* Start them gentle to calibrate (`rep +3`) / take them at their word
  (`risk +0.1`).
- **Shoe-size chaos** *(put-in)* — *the rental shoes never fit the foot that wants them.* a
  patient sort-out (`energy -3`) / a cramped, grumpy climber (`rep -2`).
- **Frozen on the wall** *(in-route)* — *a client has locked up ten metres up, refusing to go up
  or come down.* `(empathy)` talk them through, breath by breath (`rep +6, energy -4`) / a
  tense, morale-sapping lower-off (`rep -3`).
- **Rockfall** *(in-route)* — *a loose block lets go above the belay.* `(helmet earns its keep)`
  no harm done (`rep +2`) / a scare and a graze (`rep -4, risk +`).
- **The send** *(wonder/triumph)* — *the most nervous one tops out their first route and bursts
  into tears of pure joy.* `rep +8, tips +25`.
- **The rock's too hot** *(condition: heatwave)* — *midday sun has the holds greasy and the crag
  is an oven.* Move to the shaded sector or wait for the afternoon (`rep +3`) / push and slither
  off baking holds (`rep -4, risk +0.1`).
- **Storm on the crag** *(condition: storm / gale)* — *thunder is building and you are on exposed
  rock hung with metal gear.* Bail fast and low (`payMul 0.6, rep +5`) / gamble one more route —
  `chance(low)` triumph, or terror (`rep -12, cash -50`).
- **Stuck at the crux** *(in-route)* — *a client is pumped out and physically cannot make the
  move, hanging and fading on the rope.* `(empathy)` lower and switch to an easier line
  (`rep +5`) / let them flail to failure (`rep -4, morale -`).

### Cert

Three rungs, **UIAA / Mountain Training**:

| Award | Unlocks | Improves |
|---|---|---|
| **Single-Pitch Award (L1)** | the gate; bolted single-pitch crags (Kalamata, Leonidio sport) | belay & safety, client confidence |
| **Rock Climbing Instructor (L2)** | exposed sport crags (Mani) | rope management, fear handling |
| **Multi-Pitch / Mountaineering Instructor (L3)** | multi-pitch & alpine (Taygetos) | stuck-gear and rescue outcomes |

### Design notes

- **Niche/specialist:** gear-light per client (harness/helmet/shoes) but a real rope/rack
  capital cost; **fear management is the core skill**, so the **empathy** guide trait (§14) pays
  more here than anywhere.
- **Leonidio is a destination draw** — a magnet for serious clients and a natural anchor for a
  multi-day product later (Phase 5).
- **Shoulder-season strength** makes climbing a calendar hedge against the summer-heat
  disciplines — another reason to diversify (`PHASE-1 §7`).

---

## HIKING — weather & extra events

Hiking already ships in `index.html` (its `EVENTS` / `TRAILHEAD` arrays); this adds weather
reads and events in the same shape, for parity with the other disciplines.

### Weather rule

- **Heat / heatwave:** exposed traverses and long days are the danger — start early, carry
  water, shade-hop. A comfort disaster for families on open ground (§16).
- **Storm / gale:** lightning on ridges and summits — the high routes come off; trees down in
  the forest.
- **Mist:** navigation and slick footing (the existing `nav` event).
- **Cold snap / alpine snow:** early- and late-season ice on the high routes — microspikes and
  layers.
- **Sahara haze (sirocco):** sticky, sapping air and an eerie orange light — saps hard efforts,
  but the strange beauty is a wonder beat.

### Extra events

- **The lightning ridge** *(storm / gale)* — *the hair on your arms lifts and the trekking poles
  begin, softly, to hum on the exposed crest.* Drop off the ridge at once (`rep +5`) / push for
  the summit — `chance(low)` a story, or a genuine emergency (`rep -12, cash -50, energy -14`).
- **Heatwave on the open traverse** *(condition: heatwave)* — *no shade for an hour and a client
  has gone quiet and red.* `(water/shade)` slow and shade-hop (`rep +4, energy -6`) / press the
  pace into heat exhaustion (`rep -8, cash -40`).
- **The shepherd's warning** *(local colour / omen)* — *an old shepherd plants himself in the
  path, studies the sky, and tells you, flatly, "not today."* Heed the mountain's oldest
  forecaster (`rep +3`, and you dodge a later weather hit) / wave it off — *"You smile and walk
  on. He watches you go, shaking his head. He is, of course, right."* (`risk +0.15`)
- **Tortoise traffic jam** *(comedy / wonder)* — *the whole group has stopped to watch two
  tortoises conduct, with enormous dignity, the slowest argument in nature.* Let it happen —
  `rep +4, tips +12`.
