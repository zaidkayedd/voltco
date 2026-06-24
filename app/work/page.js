import Link from "next/link";

const jobs = [
  { tag: "JOB · MYERS PARK", title: "200A Service Upgrade", desc: "1940s home, original 60A fuse panel replaced with a modern 200A breaker panel. Permitted, inspected, passed first try.", specs: "2 days · Panel + grounding" },
  { tag: "JOB · DILWORTH", title: "Whole-Home Rewire", desc: "Removed remaining knob-and-tube wiring across 3 bedrooms and a kitchen remodel tie-in.", specs: "6 days · Full rewire" },
  { tag: "JOB · BALLANTYNE", title: "Dual EV Charger Setup", desc: "Two Level 2 chargers on a shared circuit with smart load management to avoid a panel upgrade.", specs: "1 day · EV install" },
  { tag: "JOB · SOUTHEND", title: "Retail Lighting Build-Out", desc: "New track lighting and circuit separation for a boutique retail tenant fit-out.", specs: "3 days · Commercial" },
  { tag: "JOB · NODA", title: "Standby Generator Hookup", desc: "Transfer switch and dedicated circuit wiring for a 22kW standby generator.", specs: "1 day · Generator" },
  { tag: "JOB · PLAZA MIDWOOD", title: "Code Correction for Sale", desc: "Pre-listing inspection turned up 4 code violations from a prior renovation — all corrected before closing.", specs: "2 days · Inspection + repair" },
];

export default function Work() {
  return (
    <main>
      <section className="px-[6%] pt-36 pb-16 max-w-3xl">
        <span className="font-mono text-xs text-amber uppercase tracking-widest mb-5 block">Recent Jobs</span>
        <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
          Work that holds up<br />after the inspector leaves.
        </h1>
        <p className="text-off/70 text-lg leading-relaxed max-w-xl">
          A sample of recent projects across Charlotte — real jobs, real timelines.
        </p>
      </section>

      <section className="px-[6%] pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {jobs.map((j) => (
            <div key={j.tag} className="border border-white/10 rounded-md p-7 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-amber/40 hover:-translate-y-1 transition-all">
              <div className="font-mono text-amber text-xs mb-4">{j.tag}</div>
              <h3 className="font-display text-xl font-semibold mb-3">{j.title}</h3>
              <p className="text-sm text-off/65 leading-relaxed mb-4">{j.desc}</p>
              <div className="font-mono text-[0.7rem] text-off/40 pt-3 border-t border-white/10">{j.specs}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-off text-ink px-[6%] py-24 text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-5 max-w-xl mx-auto">
          Want work like this at your place?
        </h2>
        <p className="text-ink/65 max-w-md mx-auto mb-9">
          Tell us the job and we'll give you a straight estimate — usually within a day.
        </p>
        <Link href="/contact" className="bg-ink text-off px-8 py-4 rounded-sm font-semibold text-sm inline-block hover:-translate-y-0.5 transition-transform">
          Request Free Estimate
        </Link>
      </section>
    </main>
  );
}
