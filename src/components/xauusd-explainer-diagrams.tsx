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
    <article className="panel rounded-[2rem] p-6 sm:p-7">
      <p className="metric-label">{subtitle}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white sm:text-[1.75rem]">{title}</h3>
      <div className="mt-6">{children}</div>
    </article>
  );
}

function FlowBlock({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-[1.6rem] border ${accent} bg-white/[0.03] p-5`}>
      <p className="text-base font-semibold text-white">{title}</p>
      <div className="mt-3 space-y-2 text-sm leading-7 text-slate-300">{children}</div>
    </div>
  );
}

function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-[1.3rem] border border-white/8 bg-slate-950/55 px-4 py-3 text-xs leading-6 text-slate-400">
      {children}
    </div>
  );
}

function DownArrow({ tone = "amber" }: { tone?: "amber" | "rose" | "emerald" }) {
  const toneClass =
    tone === "rose"
      ? "text-rose-300"
      : tone === "emerald"
        ? "text-emerald-300"
        : "text-amber-300";

  return (
    <div className={`flex justify-center text-2xl leading-none ${toneClass}`} aria-hidden="true">
      v
    </div>
  );
}

function InsightList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] px-4 py-3 text-sm leading-7 text-slate-300"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export function GoldUsdRelationshipDiagram() {
  return (
    <DiagramCard title="XAUUSD = Nilai Emas x Kekuatan Dolar" subtitle="Konsep Dasar">
      <div className="grid gap-4 md:grid-cols-[1fr,auto,1fr,auto,1fr] md:items-center">
        <FlowBlock title="Sisi emas" accent="border-amber-300/20">
          <p>Safe haven saat fear naik.</p>
          <p>Respons terhadap real yield.</p>
          <p>Cadangan nilai saat ketidakpastian membesar.</p>
        </FlowBlock>

        <div className="hidden text-center text-3xl text-slate-500 md:block">+</div>

        <FlowBlock title="Sisi dolar" accent="border-sky-300/20">
          <p>Kekuatan USD global.</p>
          <p>Ekspektasi suku bunga dan The Fed.</p>
          <p>Arus dana ke aset dolar.</p>
        </FlowBlock>

        <div className="hidden text-center text-3xl text-slate-500 md:block">=</div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 md:min-h-[188px]">
          <p className="text-base font-semibold text-white">Hasil di chart</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <p>
              XAUUSD menggabungkan <span className="text-white">permintaan emas</span> dan
              <span className="text-white"> valuasi dolar</span>.
            </p>
            <p>
              Karena itu harga bisa naik walau emas tidak terlalu kuat, asalkan USD sedang
              melemah.
            </p>
          </div>
        </div>
      </div>

      <SourceNote>
        LBMA menjelaskan spot gold berdiri di atas pasar OTC global, sedangkan World Gold Council
        dan riset akademik menekankan bahwa harga emas perlu dibaca bersama USD dan real rates.
      </SourceNote>
    </DiagramCard>
  );
}

export function GoldMarketStructureDiagram() {
  return (
    <DiagramCard title="Di Mana Harga Emas Dibentuk" subtitle="Market Plumbing">
      <div className="grid gap-4 md:grid-cols-3">
        <FlowBlock title="LBMA / OTC London" accent="border-violet-300/20">
          <p>Pusat perdagangan bullion OTC yang besar dan dominan.</p>
          <p>Di sinilah aliran transaksi fisik dan unallocated account sangat penting.</p>
        </FlowBlock>
        <FlowBlock title="COMEX Futures" accent="border-cyan-300/20">
          <p>Kontrak futures memberi price discovery yang transparan dan likuid.</p>
          <p>Breakout besar sering dipercepat saat order futures aktif.</p>
        </FlowBlock>
        <FlowBlock title="Makro Global" accent="border-emerald-300/20">
          <p>USD, yield, inflasi, sentimen risiko, dan arus dana ETF memberi dorongan konteks.</p>
          <p>Chart adalah jejak akhir dari semua tekanan itu.</p>
        </FlowBlock>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-[1fr,auto,1fr,auto,1fr] md:items-center">
        <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.02] px-4 py-4 text-sm leading-7 text-slate-300">
          aliran bullion
        </div>
        <DownArrow tone="emerald" />
        <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.02] px-4 py-4 text-sm leading-7 text-slate-300">
          auction dan price discovery
        </div>
        <DownArrow tone="emerald" />
        <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.02] px-4 py-4 text-sm leading-7 text-slate-300">
          tercermin di naked chart
        </div>
      </div>

      <SourceNote>
        LBMA menyebut London OTC sebagai referensi utama market bullion, sementara CME
        menjelaskan futures sebagai tempat price discovery berlangsung secara terbuka.
      </SourceNote>
    </DiagramCard>
  );
}

export function WhyUpDiagram() {
  return (
    <DiagramCard title="Kenapa XAUUSD Bisa Naik" subtitle="Bullish Drivers">
      <div className="grid gap-4 md:grid-cols-3">
        <FlowBlock title="Fear / safe haven" accent="border-amber-300/22">
          <p>Krisis, perang, stress pasar, atau ketidakpastian kebijakan.</p>
          <p>Saat rasa aman dicari, emas sering ikut diburu.</p>
        </FlowBlock>
        <FlowBlock title="Real yield turun" accent="border-amber-300/22">
          <p>Opportunity cost memegang emas menurun.</p>
          <p>Emas jadi relatif lebih menarik dibanding aset ber-yield riil tinggi.</p>
        </FlowBlock>
        <FlowBlock title="USD melemah" accent="border-amber-300/22">
          <p>Dolar turun membuat emas lebih ringan dibeli oleh peserta global.</p>
          <p>Tekanan naik di XAUUSD bisa muncul walau tanpa berita emas khusus.</p>
        </FlowBlock>
      </div>

      <DownArrow />

      <div className="rounded-[1.7rem] border border-emerald-300/18 bg-emerald-400/[0.08] p-5">
        <p className="text-lg font-semibold text-white">Efek akhirnya</p>
        <p className="mt-2 text-sm leading-7 text-emerald-100/90">
          Permintaan emas naik, atau nilai USD melemah, lalu chart mulai menunjukkan higher low,
          breakout yang accepted, atau reclaim di atas level penting.
        </p>
      </div>

      <SourceNote>
        World Gold Council berkali-kali menekankan hubungan emas dengan ketidakpastian makro,
        real rates, dan dolar. Itu sebabnya sinyal bullish yang kuat biasanya datang dari gabungan
        makro dan reaksi price action.
      </SourceNote>
    </DiagramCard>
  );
}

export function WhyDownDiagram() {
  return (
    <DiagramCard title="Kenapa XAUUSD Bisa Turun" subtitle="Bearish Drivers">
      <div className="grid gap-4 md:grid-cols-3">
        <FlowBlock title="Real yield naik" accent="border-rose-300/22">
          <p>Biaya peluang memegang emas meningkat.</p>
          <p>Dana sering pindah ke aset yang memberi imbal hasil riil lebih baik.</p>
        </FlowBlock>
        <FlowBlock title="USD menguat" accent="border-rose-300/22">
          <p>Arus dana masuk ke dolar bisa menekan XAUUSD.</p>
          <p>Sering terlihat setelah data ekonomi AS kuat atau ekspektasi hawkish naik.</p>
        </FlowBlock>
        <FlowBlock title="Risk-on" accent="border-rose-300/22">
          <p>Saat pasar tenang dan aset berisiko diminati, safe haven biasanya redup.</p>
          <p>Emas bisa kehilangan bid walau tidak ada panic selling besar.</p>
        </FlowBlock>
      </div>

      <DownArrow tone="rose" />

      <div className="rounded-[1.7rem] border border-rose-300/18 bg-rose-400/[0.08] p-5">
        <p className="text-lg font-semibold text-white">Efek akhirnya</p>
        <p className="mt-2 text-sm leading-7 text-rose-100/90">
          Emas terasa kurang menarik, dolar terlalu dominan, lalu chart mulai gagal mencetak higher
          high, menembus support, atau accepted di bawah area penting.
        </p>
      </div>

      <SourceNote>
        Menurut World Gold Council dan riset Oxford, real U.S. rates dan dolar adalah dua tekanan
        yang paling sering membuat emas kehilangan tenaga.
      </SourceNote>
    </DiagramCard>
  );
}

export function NakedChartTrendDiagram() {
  return (
    <DiagramCard title="Cara Baca Naked Chart Paling Dasar" subtitle="Trend dan Structure">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.6rem] border border-emerald-300/15 bg-emerald-400/[0.04] p-4">
          <svg viewBox="0 0 320 210" className="w-full">
            <line x1="24" y1="176" x2="300" y2="176" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <polyline
              points="28,155 74,116 116,134 164,84 206,104 260,56"
              fill="none"
              stroke="#6ee7b7"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="74" cy="116" r="5" fill="#6ee7b7" />
            <circle cx="164" cy="84" r="5" fill="#6ee7b7" />
            <text x="62" y="103" fill="#bbf7d0" fontSize="13">HH</text>
            <text x="152" y="71" fill="#bbf7d0" fontSize="13">HH</text>
            <text x="111" y="150" fill="#bbf7d0" fontSize="13">HL</text>
            <text x="198" y="119" fill="#bbf7d0" fontSize="13">HL</text>
          </svg>
          <p className="mt-4 text-base font-semibold text-white">Bullish structure</p>
          <InsightList
            items={[
              "Higher high + higher low berarti buyer masih bisa mendorong harga lebih tinggi.",
              "Pullback sehat biasanya berhenti di area demand atau level breakout sebelumnya.",
              "Bias bullish rusak saat higher low penting ditembus dan gagal direbut lagi.",
            ]}
          />
        </div>

        <div className="rounded-[1.6rem] border border-rose-300/15 bg-rose-400/[0.04] p-4">
          <svg viewBox="0 0 320 210" className="w-full">
            <line x1="24" y1="176" x2="300" y2="176" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <polyline
              points="30,68 80,106 126,86 176,138 224,117 280,168"
              fill="none"
              stroke="#fda4af"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="80" cy="106" r="5" fill="#fda4af" />
            <circle cx="176" cy="138" r="5" fill="#fda4af" />
            <text x="70" y="94" fill="#fecdd3" fontSize="13">LH</text>
            <text x="166" y="126" fill="#fecdd3" fontSize="13">LH</text>
            <text x="120" y="82" fill="#fecdd3" fontSize="13">LL</text>
            <text x="218" y="113" fill="#fecdd3" fontSize="13">LL</text>
          </svg>
          <p className="mt-4 text-base font-semibold text-white">Bearish structure</p>
          <InsightList
            items={[
              "Lower high + lower low berarti seller masih menguasai auction.",
              "Retest yang lemah di resistance sering menjadi area continuation turun.",
              "Bias bearish melemah saat lower high besar ditembus dan harga accepted di atasnya.",
            ]}
          />
        </div>
      </div>

      <SourceNote>
        CME menjelaskan harga dibentuk melalui auction. Di chart, auction itu paling mudah terlihat
        lewat struktur high-low, bukan lewat indikator yang menumpuk.
      </SourceNote>
    </DiagramCard>
  );
}

export function SweepReclaimDiagram() {
  return (
    <DiagramCard title="Sweep, Reclaim, Lalu Konfirmasi" subtitle="Liquidity Logic">
      <div className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div className="rounded-[1.6rem] border border-sky-300/15 bg-sky-400/[0.04] p-4">
          <svg viewBox="0 0 420 240" className="w-full">
            <line x1="44" y1="84" x2="374" y2="84" stroke="#93c5fd" strokeDasharray="8 8" strokeWidth="2" />
            <text x="209" y="66" fill="#bae6fd" fontSize="14" textAnchor="middle">
              equal lows / liquidity pool
            </text>
            <polyline
              points="46,112 96,103 144,99 190,96 238,94 286,92 318,84 336,150 362,80 392,64"
              fill="none"
              stroke="#f8fafc"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="336" y1="84" x2="336" y2="150" stroke="#fb7185" strokeWidth="3" />
            <text x="346" y="154" fill="#fecdd3" fontSize="13">sweep</text>
            <text x="366" y="76" fill="#bbf7d0" fontSize="13">reclaim</text>
          </svg>
        </div>

        <div className="space-y-3">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">1</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Harga mendekati area low yang sama. Itu sering menjadi kolam stop dan likuiditas.
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">2</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Sweep terjadi saat harga menusuk area itu untuk mengambil likuiditas, tetapi belum
              tentu langsung bullish.
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">3</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Yang lebih penting adalah reclaim dan acceptance. Kalau harga cepat kembali ke atas
              area lama, seller bisa terjebak dan buyer punya alasan lebih kuat.
            </p>
          </div>
        </div>
      </div>

      <SourceNote>
        Ini adalah cara membaca respons auction setelah likuiditas diambil. Fokusnya bukan pada
        wick semata, tetapi pada apakah harga diterima kembali di area lama atau justru gagal
        kembali.
      </SourceNote>
    </DiagramCard>
  );
}
