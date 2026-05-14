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

        <div className="flex flex-col items-center md:items-end gap-2">
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
