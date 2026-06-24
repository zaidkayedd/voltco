"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="px-[6%] pt-36 pb-20">
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="font-mono text-xs text-amber uppercase tracking-widest mb-5 block">Get Started</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">
            Tell us what's going on.<br />We'll quote it straight.
          </h1>
          <p className="text-off/65 text-lg">
            Fill out the form or call us directly — we respond within one business day, no obligation.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-off rounded-lg border border-white/10 p-9 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-ink font-display text-2xl font-semibold mb-3">Got it — thank you.</div>
              <p className="text-ink/60">We'll call you back within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <input
                type="text"
                placeholder="Name"
                required
                className="border border-ink/10 rounded-sm px-4 py-3.5 text-sm bg-[#FBFAF7] text-ink focus:outline-2 focus:outline-amber focus:outline-offset-1"
              />
              <input
                type="tel"
                placeholder="Phone number"
                required
                className="border border-ink/10 rounded-sm px-4 py-3.5 text-sm bg-[#FBFAF7] text-ink focus:outline-2 focus:outline-amber focus:outline-offset-1"
              />
              <textarea
                rows={3}
                placeholder="What do you need done?"
                className="border border-ink/10 rounded-sm px-4 py-3.5 text-sm bg-[#FBFAF7] text-ink focus:outline-2 focus:outline-amber focus:outline-offset-1"
              />
              <button
                type="submit"
                className="bg-ink text-off py-3.5 rounded-sm font-semibold text-sm mt-1.5 hover:opacity-85 transition-opacity"
              >
                Request Free Estimate
              </button>
              <span className="text-xs text-ink/50 text-left">
                We respond within one business day. No obligation.
              </span>
            </form>
          )}
        </div>

        <div className="max-w-lg mx-auto mt-10 flex justify-center gap-10 text-center flex-wrap">
          <div>
            <div className="font-mono text-amber text-lg mb-1">(980) 555-1234</div>
            <div className="text-xs text-off/50 uppercase tracking-wide">Call or text</div>
          </div>
          <div>
            <div className="font-mono text-amber text-lg mb-1">info@voltandco-demo.com</div>
            <div className="text-xs text-off/50 uppercase tracking-wide">Email</div>
          </div>
        </div>
      </section>
    </main>
  );
}
