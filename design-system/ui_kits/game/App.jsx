// Top-level App — wires screens together as a click-through prototype.
// Mirrors the real game's state machine: Title → Profile → Morning → Trailhead → Result → next day,
// plus a one-tap jump to Phase 2 Assign for demo purposes.

const WEATHER = [
  { short: 'Clear', name: 'Clear skies',           col: 'var(--gold)',   note: 'The light is perfect and the air is still. A guide could not ask for more.' },
  { short: 'Hot',   name: 'Hot and dry',           col: 'var(--terra)',  note: 'The cicadas are screaming. The Messinian sun will test everyone today.' },
  { short: 'Windy', name: 'Gusty winds',           col: 'var(--sea)',    note: 'The wind is up off the gulf, snapping at the ridgelines.' },
  { short: 'Drizzle', name: 'Low cloud and drizzle', col: '#7fb6c8',     note: 'A soft grey ceiling sits over Taygetos. Footing will be slick.' },
  { short: 'Storm', name: 'A storm is gathering',  col: 'var(--danger)', note: 'The horizon has gone the colour of a bruise. The high routes are no place to be.' },
];

const SAMPLE_BOOKINGS = [
  { route: 'Polylimnio waterfalls',          diff: 1, client: 'a family with two young children',   group: 4, pay: 64,  tags: ['river', 'forest'] },
  { route: 'Voidokilia & Navarino dunes',    diff: 1, client: 'a coachload of cruise tourists',      group: 6, pay: 71,  tags: ['coast', 'exposed'] },
  { route: 'Ancient Messene & Mavromati',    diff: 2, client: 'two thrill-seeking climbers',         group: 2, pay: 118, tags: ['exposed', 'long'] },
];

const PHASE2_BOOKINGS = [
  { route: 'Polylimnio waterfalls',          diff: 1, client: 'a family with two young children',   group: 4, pay: 64,  tags: ['river', 'forest'] },
  { route: 'Neda Gorge & waterfalls',        diff: 2, client: 'a corporate team-building group',     group: 5, pay: 162, tags: ['river', 'remote'] },
  { route: 'Menalon Trail — Lousios Gorge',  diff: 3, client: 'two thrill-seeking climbers',         group: 2, pay: 198, tags: ['forest', 'remote', 'long'] },
  { route: 'Taygetos summit (Profitis Ilias)', diff: 3, client: 'a coachload of cruise tourists',    group: 6, pay: 286, tags: ['alpine', 'exposed', 'hard'] },
];

const REVIEWS = [
  { name: 'Eleni K.',     source: 'Google',       stars: 5, text: 'A perfectly run day from start to finish. We will go back to Messinia just for the trail.' },
  { name: 'Marco R.',     source: 'TripAdvisor',  stars: 4, text: 'Knew the gorge inside out. Even the kids kept up.' },
];

function App() {
  const [screen, setScreen] = React.useState('title');
  const [drawer, setDrawer] = React.useState(false);
  const [phase, setPhase] = React.useState(1);
  const [day, setDay] = React.useState(4);
  const [cash, setCash] = React.useState(1240);
  const [rep, setRep] = React.useState(68);
  const [energy, setEnergy] = React.useState(82);
  const [gear, setGear] = React.useState(92);
  const [packSize] = React.useState(6);

  const [name, setName] = React.useState('');
  const [bg, setBg] = React.useState('medic');
  const [kit, setKit] = React.useState(['water']);
  const toggleKit = (id) => setKit(k => k.includes(id) ? k.filter(x => x !== id) : (k.length < 3 ? [...k, id] : k));

  const today = WEATHER[0];
  const forecast = [
    { ...WEATHER[0], day },
    WEATHER[1], WEATHER[2], WEATHER[3], WEATHER[4],
  ];

  const you = { name: name || 'Alexios', spec: 'Mountain-rescue medic', task: phase === 2 ? 'Taygetos summit' : null, energy };
  const guides = [
    { id: 'g1', name: 'Maria',  spec: 'calm in foul weather',        task: 'Polylimnio waterfalls', skill: 62, morale: 78, fatigue: 22 },
    { id: 'g2', name: 'Nikos',  spec: 'sure-footed on scree',         task: null, skill: 55, morale: 80, fatigue: 10 },
    { id: 'g3', name: 'Thalia', spec: 'wonderful with families',     task: 'Neda Gorge', skill: 58, morale: 84, fatigue: 18 },
  ];

  let body;
  switch (screen) {
    case 'title':
      body = <TitleScreen hasSave onContinue={() => setScreen('morning')} onNew={() => setScreen('profile')} />;
      break;
    case 'profile':
      body = <ProfileScreen name={name} bg={bg} kit={kit} onName={setName} onBg={setBg} onKit={toggleKit} onBegin={() => setScreen('morning')} />;
      break;
    case 'morning':
      body = <MorningScreen day={day} weather={today} bookings={SAMPLE_BOOKINGS}
        onShop={() => alert('Shop — buy gear (placeholder)')}
        onCert={() => alert('Enroll in a cert (placeholder)')}
        onRest={() => alert('Rest a day (placeholder)')}
        onPack={() => setScreen('trailhead')} />;
      break;
    case 'trailhead':
      body = <TrailheadScreen day={day} route="Polylimnio waterfalls · d1" onChoice={() => setScreen('result')} />;
      break;
    case 'result':
      body = <ResultScreen day={day} route="Polylimnio waterfalls" fee={64} tip={18} repDelta={4}
        line="You ran the gorge cleanly — the children laughed at the cold pools and the parents thanked you twice."
        reviews={REVIEWS}
        onNext={() => { setDay(d => d + 1); setCash(c => c + 82); setRep(r => Math.min(100, r + 4)); setScreen('morning'); }} />;
      break;
    case 'assign':
      body = <AssignScreen day={day} weather={today} you={you} guides={guides} bookings={PHASE2_BOOKINGS} onMenu={() => setScreen('result')} />;
      break;
    default:
      body = <Scene><p>{screen}</p></Scene>;
  }

  const subtitle = phase === 2
    ? 'Phase II — you lead a team now.'
    : screen === 'title' ? 'Outdoor Activities Tycoon'
    : `Phase I — ${name || 'Alexios'}, a guide making a name in Messinia.`;

  const showChrome = screen !== 'title' && screen !== 'profile';

  return (
    <>
      <Topo />
      <Wrap>
        <Appbar subtitle={subtitle} showMenu={showChrome} onMenu={() => setDrawer(true)} />
        {showChrome && <HUD phase={phase} day={day} cash={cash} rep={rep} energy={energy} team={1 + guides.length} />}
        {showChrome && <Goal phase={phase} gear={gear} packSize={packSize} />}
        {showChrome && screen === 'morning' && <FCard today={today} forecast={forecast} onOpen={() => alert('Forecast detail (placeholder)')} />}
        {body}

        {/* mode toggle — for demo only */}
        <footer>
          <button onClick={() => { setPhase(p => p === 1 ? 2 : 1); setScreen(p => phase === 1 ? 'assign' : 'morning'); }}>
            jump to {phase === 1 ? 'phase II · assign team' : 'phase I · morning'}
          </button>
          {' · '}
          <button onClick={() => setScreen('title')}>main menu</button>
        </footer>
      </Wrap>
      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        <Choices>
          <Opt mark="▦" title="Season summary"  sub="Earnings, record and standing" onClick={() => setDrawer(false)} />
          <Opt mark="☼" title="5-day forecast"  sub="How the week ahead looks"      onClick={() => setDrawer(false)} />
          <Opt mark="❧" title="Logbook"         sub="Everything that has happened so far" onClick={() => setDrawer(false)} />
          <Opt mark="⌂" title="Main menu"       sub="Save and return to the title"  onClick={() => { setDrawer(false); setScreen('title'); }} />
          <Opt mark="✕" title="Close"           onClick={() => setDrawer(false)} />
        </Choices>
      </Drawer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
