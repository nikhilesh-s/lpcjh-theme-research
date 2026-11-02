const C = { indigo: "#25235C", iris: "#4948ED", lavender: "#A29CF4", coral: "#FF755B", ivory: "#F3EDE3", ink: "#191919", citrine: "#F2D84A", vermilion: "#E44F3F", cobalt: "#3873D9", paper: "#F5F0E5" };

export function HeroIB({ className = "" }: { className?: string }) {
  const NX = 302, NY = 517;
  return (
    <svg className={`hero-svg ${className}`} viewBox="0 0 600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="600" height="900" fill={C.indigo} />
      <g className="ib-arcs" fill="none" stroke={C.lavender} strokeWidth="1" opacity="0.35">
        {[100, 150, 205, 265, 330, 400, 480].map((r) => <circle key={r} cx={NX} cy={NY} r={r} />)}
      </g>
      <polygon className="ib-b" points="170,0 600,0 600,900 400,900" fill={C.iris} />
      <polygon className="ib-a" points="0,0 440,0 200,900 0,900" fill={C.indigo} />
      <polygon className="ib-gap" points={`${NX},${NY} 400,900 200,900`} fill={C.ivory} />
      <polygon className="ib-lens" points={`170,0 440,0 ${NX},${NY}`} fill={C.lavender} />
      <circle className="ib-nexus" cx={NX} cy={NY} r="74" fill={C.coral} />
    </svg>
  );
}

export function HeroFR({ className = "" }: { className?: string }) {
  const xs = Array.from({ length: 11 }, (_, i) => i * 60), ys = Array.from({ length: 16 }, (_, i) => i * 60);
  return (
    <svg className={`hero-svg ${className}`} viewBox="0 0 600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="600" height="900" fill={C.paper} />
      <g stroke={C.ink} opacity="0.13">
        {xs.map((x) => <line key={x} x1={x} y1="0" x2={x} y2="900" />)}
        {ys.map((y) => <line key={y} x1="0" y1={y} x2="600" y2={y} />)}
      </g>
      <rect className="fr-b1" x="60" y="120" width="300" height="240" fill={C.cobalt} />
      <rect className="fr-b2" x="360" y="240" width="240" height="120" fill={C.citrine} />
      <rect className="fr-b3" x="60" y="480" width="120" height="120" fill={C.vermilion} />
      <rect className="fr-b4" x="180" y="540" width="420" height="180" fill={C.ink} />
      <g className="fr-b5"><path d="M420 120 a60 60 0 0 0 0 120Z" fill={C.cobalt} /><path d="M420 132 a60 60 0 0 1 0 120Z" fill={C.citrine} /></g>
      <rect className="fr-b6" x="60" y="780" width="60" height="60" fill={C.citrine} />
    </svg>
  );
}
