// Choice & option-list primitives — the core interactive vocabulary.

const Opt = ({ mark = '·', primary, disabled, title, sub, onClick }) => (
  <button
    className={"opt" + (primary ? ' primary' : '') + (disabled ? ' disabled' : '')}
    onClick={disabled ? undefined : onClick}
    style={disabled ? { opacity: .4, pointerEvents: 'none', filter: 'grayscale(.5)' } : undefined}
  >
    <span className="mark">{mark}</span>
    <span className="b-main">
      {title}
      {sub && <span className="b-sub">{sub}</span>}
    </span>
  </button>
);

const Choices = ({ children }) => <div className="choices">{children}</div>;

const WeatherTitle = ({ name, note }) => (
  <div className="weather">{name}<small>{note}</small></div>
);

const Booking = ({ route, diff, client, group, pay, tags }) => (
  <div className="booking">
    <div className={"route d" + diff}>{route}</div>
    <div className="meta">{client} · {group} pax</div>
    <div className="tags">
      {(tags || []).map(t => <span key={t}>{t}</span>)}
      <span className="pay">€{pay} fee</span>
    </div>
  </div>
);

const Mate = ({ name, spec, task, idle, skill, morale, fatigue, energy, isYou, onAssign }) => (
  <div className="mate">
    <div className="who">
      <div className="nm">{isYou ? `You · ${name}` : name}</div>
      <div className="spec">{spec}</div>
      <div className={"task" + (idle ? ' idle' : '')}>{task || 'Idle'}</div>
      {(skill != null || energy != null) && (
        <div className="gauges">
          {isYou
            ? <Gauge label="Energy" value={energy} color="var(--sea)" />
            : <>
                <Gauge label="Skill" value={skill} color="var(--gold)" />
                <Gauge label="Morale" value={morale} color="var(--sage)" />
                <Gauge label="Fatigue" value={fatigue} color="var(--terra)" />
              </>}
        </div>
      )}
    </div>
    <button className="assign" onClick={onAssign}>{idle ? 'Assign' : 'Reassign'}</button>
  </div>
);

const Gauge = ({ label, value, color }) => (
  <div className="g">
    <div className="gl">{label}</div>
    <div className="bar"><i style={{ width: Math.max(0, Math.min(100, value)) + '%', background: color }} /></div>
  </div>
);

const Review = ({ name, source, stars, text }) => (
  <div className="res">
    <div className="line" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em', color: 'var(--ink-faint)' }}>
      {name} <span style={{ color: 'var(--gold)' }}>— {source} · {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</span>
    </div>
    <div style={{ fontStyle: 'italic', fontSize: 14.5, color: 'var(--ink)', marginTop: 4 }}>"{text}"</div>
  </div>
);

const Drawer = ({ open, onClose, children }) => (
  <div className={"drawer" + (open ? ' open' : '')} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="sheet">
      <div className="grip" />
      <div className="sh">Menu</div>
      {children}
    </div>
  </div>
);

Object.assign(window, { Opt, Choices, WeatherTitle, Booking, Mate, Gauge, Review, Drawer });
