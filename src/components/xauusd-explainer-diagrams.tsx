function DiagramCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <article className="panel rounded-[2rem] p-6">
      <p className="metric-label">{subtitle}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-5">{children}</div>
    </article>
  );
}

export function GoldUsdRelationshipDiagram() {
  return (
    <DiagramCard
      title="XAUUSD = Emas + Dolar"
      subtitle="Konsep Dasar"
    >
      <svg viewBox="0 0 520 220" className="w-full">
        <rect x="20" y="48" width="140" height="120" rx="28" fill="rgba(242,193,78,0.14)" stroke="rgba(242,193,78,0.35)" />
        <text x="90" y="88" fill="#f8fafc" fontSize="18" textAnchor="middle">Nilai Emas</text>
        <text x="90" y="115" fill="#f8df8a" fontSize="16" textAnchor="middle">permintaan safe haven</text>
        <text x="90" y="138" fill="#f8df8a" fontSize="16" textAnchor="middle">yield riil</text>

        <text x="190" y="112" fill="#9fb0c0" fontSize="40">+</text>

        <rect x="230" y="48" width="140" height="120" rx="28" fill="rgba(90,200,250,0.12)" stroke="rgba(90,200,250,0.35)" />
        <text x="300" y="88" fill="#f8fafc" fontSize="18" textAnchor="middle">Nilai USD</text>
        <text x="300" y="115" fill="#b8e7ff" fontSize="16" textAnchor="middle">kekuatan dolar</text>
        <text x="300" y="138" fill="#b8e7ff" fontSize="16" textAnchor="middle">ekspektasi The Fed</text>

        <text x="398" y="112" fill="#9fb0c0" fontSize="40">=</text>

        <rect x="420" y="28" width="80" height="160" rx="30" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
        <text x="460" y="92" fill="#f8fafc" fontSize="22" fontWeight="700" textAnchor="middle">XAUUSD</text>
        <text x="460" y="122" fill="#9fb0c0" fontSize="14" textAnchor="middle">harga emas</text>
        <text x="460" y="142" fill="#9fb0c0" fontSize="14" textAnchor="middle">dalam dolar</text>
      </svg>
    </DiagramCard>
  );
}

export function WhyUpDiagram() {
  return (
    <DiagramCard title="Kenapa XAUUSD Bisa Naik" subtitle="Bullish Drivers">
      <svg viewBox="0 0 520 250" className="w-full">
        <defs>
          <marker id="arrow-up" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L10,3 L0,6 Z" fill="#f8df8a" />
          </marker>
        </defs>
        {[
          { x: 20, label1: "Takut risiko", label2: "krisis / perang" },
          { x: 190, label1: "Real yield", label2: "turun" },
          { x: 360, label1: "USD", label2: "melemah" },
        ].map((item) => (
          <g key={item.x}>
            <rect x={item.x} y="24" width="140" height="78" rx="24" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
            <text x={item.x + 70} y="58" fill="#f8fafc" fontSize="18" textAnchor="middle">{item.label1}</text>
            <text x={item.x + 70} y="82" fill="#f8df8a" fontSize="15" textAnchor="middle">{item.label2}</text>
            <line x1={item.x + 70} y1="110" x2={item.x + 70} y2="145" stroke="#f8df8a" strokeWidth="3" markerEnd="url(#arrow-up)" />
          </g>
        ))}
        <rect x="90" y="162" width="340" height="62" rx="28" fill="rgba(34,197,94,0.12)" stroke="rgba(110,231,183,0.35)" />
        <text x="260" y="198" fill="#f8fafc" fontSize="21" textAnchor="middle">permintaan emas naik atau USD melemah</text>
        <text x="260" y="222" fill="#bbf7d0" fontSize="16" textAnchor="middle">XAUUSD cenderung terdorong naik</text>
      </svg>
    </DiagramCard>
  );
}

export function WhyDownDiagram() {
  return (
    <DiagramCard title="Kenapa XAUUSD Bisa Turun" subtitle="Bearish Drivers">
      <svg viewBox="0 0 520 250" className="w-full">
        <defs>
          <marker id="arrow-down" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L10,3 L0,6 Z" fill="#fecdd3" />
          </marker>
        </defs>
        {[
          { x: 20, label1: "Real yield", label2: "naik" },
          { x: 190, label1: "USD", label2: "menguat" },
          { x: 360, label1: "Risk on", label2: "safe haven sepi" },
        ].map((item) => (
          <g key={item.x}>
            <rect x={item.x} y="24" width="140" height="78" rx="24" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
            <text x={item.x + 70} y="58" fill="#f8fafc" fontSize="18" textAnchor="middle">{item.label1}</text>
            <text x={item.x + 70} y="82" fill="#fecdd3" fontSize="15" textAnchor="middle">{item.label2}</text>
            <line x1={item.x + 70} y1="145" x2={item.x + 70} y2="110" stroke="#fecdd3" strokeWidth="3" markerEnd="url(#arrow-down)" />
          </g>
        ))}
        <rect x="90" y="162" width="340" height="62" rx="28" fill="rgba(244,63,94,0.12)" stroke="rgba(251,146,160,0.35)" />
        <text x="260" y="198" fill="#f8fafc" fontSize="21" textAnchor="middle">emas kurang menarik atau dolar terlalu kuat</text>
        <text x="260" y="222" fill="#fecdd3" fontSize="16" textAnchor="middle">XAUUSD cenderung tertekan turun</text>
      </svg>
    </DiagramCard>
  );
}

export function NakedChartTrendDiagram() {
  return (
    <DiagramCard title="Cara Baca Naked Chart Paling Dasar" subtitle="Trend dan Structure">
      <svg viewBox="0 0 520 260" className="w-full">
        <line x1="30" y1="220" x2="240" y2="220" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <polyline
          points="40,200 80,160 120,178 160,130 200,148 235,100"
          fill="none"
          stroke="#6ee7b7"
          strokeWidth="4"
        />
        <circle cx="80" cy="160" r="5" fill="#6ee7b7" />
        <circle cx="160" cy="130" r="5" fill="#6ee7b7" />
        <text x="72" y="150" fill="#bbf7d0" fontSize="14">HH</text>
        <text x="150" y="120" fill="#bbf7d0" fontSize="14">HH</text>
        <text x="116" y="194" fill="#bbf7d0" fontSize="14">HL</text>
        <text x="195" y="164" fill="#bbf7d0" fontSize="14">HL</text>
        <text x="40" y="242" fill="#9fb0c0" fontSize="15">buyer dominan saat higher high + higher low</text>

        <line x1="280" y1="220" x2="490" y2="220" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <polyline
          points="290,70 330,110 370,92 410,145 450,127 485,185"
          fill="none"
          stroke="#fda4af"
          strokeWidth="4"
        />
        <circle cx="330" cy="110" r="5" fill="#fda4af" />
        <circle cx="410" cy="145" r="5" fill="#fda4af" />
        <text x="319" y="100" fill="#fecdd3" fontSize="14">LH</text>
        <text x="401" y="135" fill="#fecdd3" fontSize="14">LH</text>
        <text x="367" y="88" fill="#fecdd3" fontSize="14">LL</text>
        <text x="447" y="123" fill="#fecdd3" fontSize="14">LL</text>
        <text x="288" y="242" fill="#9fb0c0" fontSize="15">seller dominan saat lower high + lower low</text>
      </svg>
    </DiagramCard>
  );
}

export function SweepReclaimDiagram() {
  return (
    <DiagramCard title="Sweep Lalu Reclaim" subtitle="Liquidity Logic">
      <svg viewBox="0 0 520 250" className="w-full">
        <line x1="70" y1="92" x2="450" y2="92" stroke="#93c5fd" strokeDasharray="8 8" strokeWidth="2" />
        <text x="260" y="80" fill="#bae6fd" fontSize="15" textAnchor="middle">equal lows / liquidity pool</text>
        <polyline
          points="80,110 140,102 200,100 260,98 320,96 360,92 390,150 430,86 470,72"
          fill="none"
          stroke="#f8fafc"
          strokeWidth="4"
        />
        <line x1="390" y1="92" x2="390" y2="150" stroke="#fb7185" strokeWidth="3" />
        <text x="403" y="152" fill="#fecdd3" fontSize="14">sweep</text>
        <text x="434" y="82" fill="#bbf7d0" fontSize="14">reclaim</text>
        <rect x="92" y="180" width="336" height="42" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <text x="260" y="206" fill="#f8fafc" fontSize="16" textAnchor="middle">
          yang penting bukan wick-nya, tapi apakah harga accepted kembali di atas area lama
        </text>
      </svg>
    </DiagramCard>
  );
}
