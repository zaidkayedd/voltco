"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Get a Quote" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6%] py-5 bg-ink/85 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight">
        <span className="w-2.5 h-2.5 rounded-full bg-amber shadow-[0_0_12px_#FF8A1E]" />
        VOLT&nbsp;&amp;&nbsp;CO.
      </Link>

      <nav className="hidden md:flex items-center gap-9">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-off/70 hover:text-off text-sm transition-colors">
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <a href="tel:+19805551234" className="bg-amber text-ink px-5 py-2.5 rounded-sm font-semibold text-sm hover:-translate-y-0.5 transition-transform inline-block">
          (980) 555-1234
        </a>
      </div>

      <button
        className="md:hidden text-off"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          {open ? <path d="M6 6L18 18M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ink border-b border-white/10 flex flex-col px-[6%] py-6 gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-off/80 text-base">
              {l.label}
            </Link>
          ))}
          <a href="tel:+19805551234" className="bg-amber text-ink px-5 py-3 rounded-sm font-semibold text-sm text-center">
            Call (980) 555-1234
          </a>
        </div>
      )}
    </header>
  );
}
