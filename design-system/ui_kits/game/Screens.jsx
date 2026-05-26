// Screen components — each is one game state.

const TitleScreen = ({ hasSave, onContinue, onNew }) => (
  <Scene>
    <div className="end" style={{ paddingTop: 4 }}>
      <div className="day-tag" style={{ color: 'var(--gold)' }}>A guiding life</div>
      <h2>Begin a season</h2>
      <p style={{ fontStyle: 'italic', color: 'var(--ink-dim)', marginBottom: 16 }}>
        Begin as one guide on the trails of Messinia and build the finest outdoor company in the Peloponnese.
      </p>
      <Choices>
        <Opt mark="▸" title="Continue" sub={hasSave ? 'Resume — Day 4, building your name' : 'No saved season yet'} disabled={!hasSave} onClick={onContinue} />
        <Opt mark="✦" title="New game" sub="Build a new guide and start fresh" onClick={onNew} />
      </Choices>
    </div>
  </Scene>
);

const ProfileScreen = ({ name, bg, kit, onName, onBg, onKit, onBegin }) => {
  const BACKGROUNDS = [
    { id: 'medic',     name: 'Mountain-rescue medic', perk: 'Injuries on the trail almost always end well.' },
    { id: 'charmer',   name: 'Village charmer',        perk: 'You earn extra reputation and bigger tips.' },
    { id: 'outfitter', name: 'Seasoned outfitter',     perk: 'Start with a 6-slot pack and €150 extra.' },
    { id: 'navigator', name: 'Born of the mountains',  perk: 'You read weather and lost paths far better.' },
  ];
  const ITEMS = { water: 'Water', firstaid: 'First-aid kit', map: 'Map &amp; compass', sunscreen: 'Sun cream', poles: 'Trekking poles', shell: 'Rain shell' };
  const ITEM_ORDER = ['water', 'firstaid', 'map', 'sunscreen', 'poles', 'shell'];
  return (
    <Scene>
      <DayTag>Before you begin</DayTag>
      <h2>Build your guide</h2>
      <p>Who are you, and what do you set out with? You begin with little — just grit and the kit you can afford.</p>
      <div className="lab" style={{ marginBottom: 6 }}>Your name</div>
      <input
        value={name}
        onChange={(e) => onName(e.target.value)}
        maxLength={18}
        placeholder="e.g. Alexios"
        style={{ width: '100%', marginBottom: 16, padding: '12px 14px', borderRadius: 11, border: '1px solid var(--edge)', background: 'rgba(0,0,0,.18)', color: 'var(--ink)', fontFamily: 'var(--font-display)', fontSize: 18, outline: 'none' }}
      />
      <div className="lab" style={{ marginBottom: 8 }}>Your background</div>
      <Choices>
        {BACKGROUNDS.map(b => (
          <Opt key={b.id} mark={bg === b.id ? '✓' : '·'} primary={bg === b.id} title={b.name} sub={b.perk} onClick={() => onBg(b.id)} />
        ))}
      </Choices>
      <div className="lab" style={{ marginTop: 18, marginBottom: 8 }}>
        Starting kit — pick up to 3 ({kit.length}/3)
      </div>
      <Choices>
        {ITEM_ORDER.map(id => {
          const on = kit.includes(id), full = kit.length >= 3 && !on;
          return <Opt key={id} mark={on ? '✓' : '+'} primary={on} disabled={full} title={<span dangerouslySetInnerHTML={{__html: ITEMS[id]}}/>} onClick={() => onKit(id)} />;
        })}
      </Choices>
      <ActionBar button="Begin your first season" onClick={onBegin} />
    </Scene>
  );
};

const MorningScreen = ({ day, weather, bookings, onShop, onCert, onRest, onPack }) => (
  <Scene>
    <DayTag>Day {day} · Morning</DayTag>
    <WeatherTitle name={weather.name} note={weather.note} />
    <h2>The day's work</h2>
    <p>Three groups are looking for a guide today. Pick the trip you'd take yourself, or use the morning for the shop, a cert, or rest.</p>
    <Choices>
      {bookings.map((b, i) => (
        <button key={i} className="opt" onClick={onPack}>
          <span className="mark">▸</span>
          <Booking {...b} />
        </button>
      ))}
      <Opt mark="◇" title="Visit the shop" sub="Buy gear that pays for itself out there" onClick={onShop} />
      <Opt mark="✦" title="Enroll in a cert" sub="A day in the classroom — a lifetime on the trail" onClick={onCert} />
      <Opt mark="☾" title="Rest the day" sub="A day off the trail. The body recovers." onClick={onRest} />
    </Choices>
  </Scene>
);

const TrailheadScreen = ({ day, route, onChoice }) => (
  <Scene>
    <DayTag>Day {day} · A trailhead near Voidokilia</DayTag>
    <h2>Someone forgot water</h2>
    <p>As the group gathers, you realise two of them have brought nothing to drink — and the day ahead is dry.</p>
    <Choices>
      <Opt mark="✓" primary title="Share spare water from your pack" sub="You packed for this" onClick={() => onChoice('share')} />
      <Opt mark="·" title="Send them to the kiosk first" sub="A late start" onClick={() => onChoice('kiosk')} />
      <Opt mark="·" title="Set off and ration as you go" sub="Risky in the heat" onClick={() => onChoice('risk')} />
    </Choices>
    <div className="actionbar"><div className="lab">{route}</div></div>
  </Scene>
);

const ResultScreen = ({ day, route, fee, tip, repDelta, line, reviews, onNext }) => (
  <Scene>
    <DayTag>Day {day} · Trip complete</DayTag>
    <h2>{route}</h2>
    <p className="prose" style={{ fontStyle: 'italic', color: 'var(--ink-dim)' }}>{line}</p>
    <div className="ledger" style={{ margin: '6px 0 14px' }}>
      <div className="row"><span className="l">Fee</span><span className="v pos">+€{fee}</span></div>
      <div className="row"><span className="l">Tips</span><span className="v pos">+€{tip}</span></div>
      <div className="row"><span className="l">Reputation</span><span className={"v " + (repDelta >= 0 ? 'pos' : 'neg')}>{repDelta >= 0 ? '+' : ''}{repDelta}</span></div>
    </div>
    {reviews.map((r, i) => <Review key={i} {...r} />)}
    <ActionBar button="Bring on the next day" gloss={`Day ${day + 1}`} onClick={onNext} />
  </Scene>
);

const AssignScreen = ({ day, weather, you, guides, bookings, onMenu }) => (
  <Scene>
    <DayTag>Day {day} · Assign your team</DayTag>
    <WeatherTitle name={weather.name} note={weather.note} />
    <h2>Lead them well</h2>
    <p>Four bookings on the slate. Decide who runs what — and what they take with them.</p>
    <div className="team">
      <Mate isYou name={you.name} spec={you.spec} task={you.task} idle={!you.task} energy={you.energy} />
      {guides.map(g => (
        <Mate key={g.id} name={g.name} spec={g.spec} task={g.task} idle={!g.task} skill={g.skill} morale={g.morale} fatigue={g.fatigue} />
      ))}
    </div>
    <div className="lab" style={{ marginTop: 8, marginBottom: 8 }}>Today's bookings</div>
    {bookings.map((b, i) => (
      <div key={i} className="mate" style={{ marginBottom: 8 }}>
        <div className="who">
          <Booking {...b} />
        </div>
        <button className="assign">Assign</button>
      </div>
    ))}
    <ActionBar label="When everyone is set" button="Run the day" onClick={onMenu} />
  </Scene>
);

Object.assign(window, { TitleScreen, ProfileScreen, MorningScreen, TrailheadScreen, ResultScreen, AssignScreen });
