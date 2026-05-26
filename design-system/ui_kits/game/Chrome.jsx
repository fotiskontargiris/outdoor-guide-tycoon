// shared chrome — Topo backdrop, Wrap, Appbar, HUD, Goal, Scene, FCard
// Loaded via <script type="text/babel" src="Chrome.jsx"></script>

const Topo = () => (
  <svg className="topo" preserveAspectRatio="none" viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g fill="none" stroke="#e3b863" strokeWidth="1.2">
      <path d="M-20,120 C80,80 140,170 220,120 320,70 380,150 440,110"/>
      <path d="M-20,170 C80,130 140,220 220,170 320,120 380,200 440,160"/>
      <path d="M-20,220 C80,180 140,270 220,220 320,170 380,250 440,210"/>
      <path d="M-20,330 C90,300 150,380 230,340 330,300 380,360 440,330"/>
      <path d="M-20,380 C90,350 150,430 230,390 330,350 380,410 440,380"/>
      <path d="M-20,520 C70,560 160,470 240,520 330,560 390,490 440,520"/>
      <path d="M-20,570 C70,610 160,520 240,570 330,610 390,540 440,570"/>
      <path d="M-20,680 C80,640 150,720 240,680 330,640 380,700 440,670"/>
    </g>
  </svg>
);

const Wrap = ({ children }) => <div className="wrap">{children}</div>;

const Appbar = ({ subtitle, onMenu, showMenu }) => (
  <header className="appbar">
    <div className="brand">
      <div className="kicker">Outdoor Activities Tycoon</div>
      <h1>Messinia <em>Guide</em></h1>
      <div className="sub">{subtitle}</div>
    </div>
    {showMenu && (
      <button className="iconbtn" onClick={onMenu} aria-label="Menu">≡</button>
    )}
  </header>
);

const Stat = ({ label, value, color, bar }) => (
  <div className="stat">
    <span className="lab">{label}</span>
    <span className="val" style={{ color: color || 'var(--ink)' }}>{value}</span>
    {bar != null && (
      <div className="bar"><i style={{ width: Math.max(0, Math.min(100, bar[0])) + '%', background: bar[1] }} /></div>
    )}
  </div>
);

const HUD = ({ day, cash, rep, energy, team, phase }) => {
  const repC = rep >= 70 ? 'var(--sage)' : rep >= 35 ? 'var(--gold)' : 'var(--danger)';
  const enC = energy >= 45 ? 'var(--sea)' : energy >= 20 ? 'var(--gold)' : 'var(--danger)';
  return (
    <div className="hud">
      <Stat label="Day" value={day} />
      <Stat label="Cash" value={'€' + cash} color={cash >= 0 ? 'var(--gold)' : 'var(--danger)'} />
      <Stat label="Repute" value={rep} color={repC} bar={[rep, repC]} />
      {phase === 1
        ? <Stat label="Energy" value={energy} color={enC} bar={[energy, enC]} />
        : <Stat label="Team" value={team} />}
    </div>
  );
};

const Goal = ({ phase, gear, packSize }) => (
  <div className="goal">
    {phase === 1
      ? <>Goal — reach <b>€1500</b> &amp; <b>70 reputation</b> · gear <b style={{color:'var(--olive)'}}>{gear}%</b> · pack <b>{packSize}</b> slots</>
      : <>Goal — <b>€5000</b>, hold <b>70 reputation</b> &amp; a <b>team of 3</b> · gear <b style={{color:'var(--olive)'}}>{gear}%</b></>}
  </div>
);

const Scene = ({ children }) => <div className="scene">{children}</div>;

const FCard = ({ today, forecast, onOpen }) => (
  <div id="fcast">
    <div className="fcard" onClick={onOpen}>
      <div className="fh">
        <span>Forecast · <b>{today.short}</b> today</span>
        <span>5-day ▸</span>
      </div>
      <div className="frow">
        {forecast.map((w, i) => (
          <div key={i} className="wchip">
            <div className="wlab">{i === 0 ? 'Today' : 'D' + (forecast[0].day + i)}</div>
            <div className="wdot" style={{ background: w.col, boxShadow: `0 0 8px ${w.col}` }} />
            <div className="wshort" style={{ color: w.col }}>{w.short}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ActionBar = ({ label, button, onClick, gloss }) => (
  <div className="actionbar">
    {label && <div className="lab">{label}</div>}
    <button className="go" onClick={onClick}>{button}{gloss && <span className="gs"> · {gloss}</span>}</button>
  </div>
);

const DayTag = ({ children }) => <div className="day-tag">{children}</div>;

Object.assign(window, { Topo, Wrap, Appbar, Stat, HUD, Goal, Scene, FCard, ActionBar, DayTag });
