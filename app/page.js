import Link from "next/link";

const breakers = [
  { code: "CKT-01 · PANEL", title: "Panel Upgrades", desc: "100A to 200A service upgrades for older homes that can't keep up with modern loads." },
  { code: "CKT-02 · REWIRE", title: "Full & Partial Rewiring", desc: "Knob-and-tube and aluminum wiring replacement, room by room or whole-house." },
  { code: "CKT-03 · EV", title: "EV Charger Install", desc: "Level 2 charger installation, permitted and inspected, usually same-week." },
];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex flex-col justify-center px-[6%] pt-36 pb-20">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-amber uppercase tracking-widest mb-7">
            <span className="w-1.5 h-1.5 bg-amber inline-block blink" />
            Licensed &amp; Insured · Charlotte, NC
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.03] tracking-tight mb-6">
            Wiring done right<br />the <span className="text-amber">first</span> time.
          </h1>
          <p className="text-lg text-off/70 max-w-lg mb-10 leading-relaxed">
            Residential and light-commercial electrical work for homeowners who'd rather call once than call twice. Panel upgrades, rewiring, EV chargers, and everything in between.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/contact" className="bg-amber text-ink px-7 py-4 rounded-sm font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(255,138,30,0.5)] transition-all inline-block">
              Request a Free Estimate
            </Link>
            <a href="tel:+19805551234" className="border border-white/10 text-off/85 px-7 py-4 rounded-sm text-sm hover:border-white/30 hover:text-off transition-colors inline-block">
              Call (980) 555-1234
            </a>
          </div>

          <div className="flex gap-9 flex-wrap mt-16 pt-8 border-t border-white/10 max-w-xl">
            <div>
              <div className="font-mono text-2xl text-amber font-medium">23</div>
              <div className="text-xs text-off/55 uppercase tracking-wide mt-1">Years in the trade</div>
            </div>
            <div>
              <div className="font-mono text-2xl text-amber font-medium">NC-EC4471</div>
              <div className="text-xs text-off/55 uppercase tracking-wide mt-1">License Number</div>
            </div>
            <div>
              <div className="font-mono text-2xl text-amber font-medium">4.9</div>
              <div className="text-xs text-off/55 uppercase tracking-wide mt-1">Average rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off text-ink px-[6%] py-28">
        <div className="max-w-xl mb-14">
          <span className="font-mono text-xs text-amber-dim uppercase tracking-widest mb-4 block">What we handle</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">One panel.<br />Every circuit covered.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {breakers.map((b) => (
            <div key={b.code} className="bg-off hover:bg-off-dim p-8 transition-colors">
              <div className="w-9 h-14 rounded bg-ink relative mb-6">
                <span className="absolute left-1/2 top-2 w-3.5 h-5 bg-amber rounded-sm -translate-x-1/2" />
              </div>
              <div className="font-mono text-xs text-amber-dim mb-2.5 tracking-wide">{b.code}</div>
              <h3 className="font-display text-lg font-semibold mb-2.5">{b.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/services" className="text-amber-dim font-medium text-sm border-b border-amber-dim/40 hover:border-amber-dim pb-0.5 transition-colors">
            See all services →
          </Link>
        </div>
      </section>

      <section className="bg-ink px-[6%] py-24 text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-5 max-w-xl mx-auto">
          Got something sparking, tripping, or just old?
        </h2>
        <p className="text-off/65 max-w-md mx-auto mb-9">
          Tell us what's going on and we'll quote it straight — no upsell, no guesswork.
        </p>
        <Link href="/contact" className="bg-amber text-ink px-8 py-4 rounded-sm font-semibold text-sm inline-block hover:-translate-y-0.5 transition-transform">
          Request Free Estimate
        </Link>
      </section>
    </main>
  );
}
