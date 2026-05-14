"use client";

import Link from "next/link";
import { useLanguage } from "./language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-12 px-6 sm:px-8 border-t border-[var(--border)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[var(--fg)]">Gaston Vigabriel</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--fg-muted)]">
              {t("hero.eyebrow")}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <a
            href="https://viga-suite.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-[var(--surface-1)] border border-[var(--border)] rounded-full hover:border-[var(--warm)] transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--warm)]">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
            <span className="text-xs font-bold text-[var(--fg)]">Viga Suite</span>
          </a>
          <p className="text-xs text-[var(--fg-muted)]">
            © {new Date().getFullYear()} — {t("footer.rights")}
          </p>
        </div>
      </div>
      
      {/* Subtle decorative background text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-[var(--fg)] opacity-[0.02] select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter">
        Viga Studio
      </div>
    </footer>
  );
}
