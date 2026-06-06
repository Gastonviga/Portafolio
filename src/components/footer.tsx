"use client";

import Link from "next/link";
import { useLanguage } from "./language-context";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gast%C3%B3n-vigabriel-281626318/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/Gastonviga",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export function Footer() {
  const { t } = useLanguage();

  const NAV_LINKS = [
    { label: t("footer.nav.inicio"), href: "/#inicio" },
    { label: t("footer.nav.trayectoria"), href: "/#acerca" },
    { label: t("footer.nav.proyectos"), href: "/proyectos" },
    { label: t("footer.nav.servicios"), href: "/#servicios" },
  ];

  return (
    <footer className="relative border-t border-[var(--border)] overflow-hidden">

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto z-10 px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="16" cy="18" rx="9" ry="11" fill="#1a1a2e" />
                <ellipse cx="16" cy="19.5" rx="5.5" ry="7.5" fill="#f5f0e8" />
                <ellipse cx="16" cy="8" rx="7" ry="6.5" fill="#1a1a2e" />
                <ellipse cx="16" cy="8.5" rx="4.5" ry="4" fill="#f5f0e8" />
                <circle cx="13.8" cy="7" r="1.2" fill="#1a1a2e" />
                <circle cx="18.2" cy="7" r="1.2" fill="#1a1a2e" />
                <path d="M14.5 10 L16 12 L17.5 10 Z" fill="#E8A849" />
                <ellipse cx="7.5" cy="18" rx="2.5" ry="5" fill="#1a1a2e" transform="rotate(-10 7.5 18)" />
                <ellipse cx="24.5" cy="18" rx="2.5" ry="5" fill="#1a1a2e" transform="rotate(10 24.5 18)" />
                <ellipse cx="13" cy="29" rx="3" ry="1.2" fill="#E8A849" />
                <ellipse cx="19" cy="29" rx="3" ry="1.2" fill="#E8A849" />
              </svg>
              <span className="text-base font-bold text-[var(--fg)]">Gaston Vigabriel</span>
            </div>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-[220px]">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--warm)] transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
              <a
                href="https://viga-suite.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viga Suite"
                className="p-2 rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--warm)] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--fg-muted)]">{t("footer.nav_title")}</h3>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] hover:translate-x-1 transition-all duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--fg-muted)]">{t("footer.contact_title")}</h3>
            <div className="space-y-3">
              <a
                href="mailto:gastonvigabriel7@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[var(--fg-muted)] hover:text-[var(--warm)] transition-colors duration-200 group w-fit"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                gastonvigabriel7@gmail.com
              </a>
              <a
                href="https://wa.me/5491171488045?text=Hola!%20Te%20escribo%20desde%20tu%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[var(--fg-muted)] hover:text-[#25D366] transition-colors duration-200 w-fit"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                (+54) 11 7148-8045
              </a>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[var(--fg-muted)]">{t("footer.available")}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-[var(--border)] px-6 sm:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--fg-muted)]">
            © {new Date().getFullYear()} Gaston Vigabriel — {t("footer.rights")}
          </p>
          <p className="text-xs text-[var(--fg-muted)]/50">
            {t("footer.built_with")}
          </p>
        </div>
      </div>

      {/* Faded background text */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[12vw] font-black text-[var(--fg)] opacity-[0.018] select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter">
        Viga Studio
      </div>
    </footer>
  );
}
