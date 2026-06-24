import Link from "next/link";

const breakers = [
  { code: "CKT-01 · PANEL", title: "Panel Upgrades", desc: "100A to 200A service upgrades for older homes that can't keep up with modern loads. Full permit and inspection handled." },
  { code: "CKT-02 · REWIRE", title: "Full & Partial Rewiring", desc: "Knob-and-tube and aluminum wiring replacement, room by room or whole-house, with minimal disruption to finished walls." },
  { code: "CKT-03 · EV", title: "EV Charger Install", desc: "Level 2 charger installation, permitted and inspected, usually same-week. Load management available to avoid a panel upgrade." },
  { code: "CKT-04 · REPAIR", title: "Troubleshooting & Repair", desc: "Tripping breakers, flickering lights, dead outlets — diagnosed and fixed, not guessed at. Flat diagnostic fee, credited toward repair." },
  { code: "CKT-05 · LIGHT", title: "Lighting & Fixtures", desc: "Recessed lighting, ceiling fans, outdoor and landscape electrical, smart switches and dimmers." },
  { code: "CKT-06 · SAFETY", title: "Inspections & Code Compliance", desc: "Pre-sale inspections, insurance compliance reports, and code-correction work for older properties." },
  { code: "CKT-07 · GEN", title: "Generator Hookups", desc: "Transfer switch installation and wiring for portable and standby backup generators." },
  { code: "CKT-08 · COMMERCIAL", title: "Light Commercial", desc: "Tenant build-outs, retail lighting, and small commercial panel work for offices and storefronts." },
];

export default function Services() {
  return (
    <main>
      <section className="px-[6%] pt-36 pb-20 max-w-3xl">
        <span className="font-mono text-xs text-amber uppercase tracking-widest mb-5 block">Services</span>
        <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
          Every circuit, covered.
        </h1>
        <p className="text-off/70 text-lg leading-relaxed max-w-xl">
          From a single flickering switch to a full panel upgrade — if it runs on 120 or 240 volts in a home or small business, we handle it.
        </p>
      </section>

      <section className="bg-off text-ink px-[6%] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {breakers.map((b) => (
            <div key={b.code} className="bg-off hover:bg-off-dim p-7 transition-colors">
              <div className="w-8 h-12 rounded bg-ink relative mb-5">
                <span className="absolute left-1/2 top-2 w-3 h-4 bg-amber rounded-sm -translate-x-1/2" />
              </div>
              <div className="font-mono text-[0.68rem] text-amber-dim mb-2 tracking-wide">{b.code}</div>
              <h3 className="font-display text-base font-semibold mb-2">{b.title}</h3>
              <p className="text-[0.85rem] text-ink/65 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink px-[6%] py-24 text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-5 max-w-xl mx-auto">
          Not sure which one you need?
        </h2>
        <p className="text-off/65 max-w-md mx-auto mb-9">
          That's fine — tell us the symptom, we'll figure out the fix.
        </p>
        <Link href="/contact" className="bg-amber text-ink px-8 py-4 rounded-sm font-semibold text-sm inline-block hover:-translate-y-0.5 transition-transform">
          Get a Free Estimate
        </Link>
      </section>
    </main>
  );
}
