"use client";

const MARQUEE_TEXT = "Ema · Desarrollador Web · Inteligencia Artificial · Full Stack · Penguin Labs · ";

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/gast%C3%B3n-vigabriel-281626318/" },
  { name: "GitHub", href: "https://github.com/Gastonviga" },
];

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Acerca", href: "#acerca" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-6 sm:px-8 overflow-hidden">
      {/* Marquee band */}
      <div className="border-t border-b border-[var(--border)] py-5 mb-16 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tight text-[var(--fg)]/[0.04] mx-4 shrink-0 select-none"
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 sm:gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo pingüino">
                <ellipse cx="16" cy="18" rx="9" ry="11" fill="#1a1a2e" />
                <ellipse cx="16" cy="19.5" rx="5.5" ry="7.5" fill="#f5f0e8" />
                <ellipse cx="16" cy="8" rx="7" ry="6.5" fill="#1a1a2e" />
                <ellipse cx="16" cy="8.5" rx="4.5" ry="4" fill="#f5f0e8" />
                <circle cx="13.8" cy="7" r="1.2" fill="#1a1a2e" />
                <circle cx="14.1" cy="6.7" r="0.4" fill="white" />
                <circle cx="18.2" cy="7" r="1.2" fill="#1a1a2e" />
                <circle cx="18.5" cy="6.7" r="0.4" fill="white" />
                <path d="M14.5 10 L16 12 L17.5 10 Z" fill="#E8A849" />
                <ellipse cx="7.5" cy="18" rx="2.5" ry="5" fill="#1a1a2e" transform="rotate(-10 7.5 18)" />
                <ellipse cx="24.5" cy="18" rx="2.5" ry="5" fill="#1a1a2e" transform="rotate(10 24.5 18)" />
                <ellipse cx="13" cy="29" rx="3" ry="1.2" fill="#E8A849" />
                <ellipse cx="19" cy="29" rx="3" ry="1.2" fill="#E8A849" />
              </svg>
              <span className="text-lg font-bold text-[var(--fg)]">Ema</span>
            </div>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-xs">
              Desarrollador Web y estudiante de Inteligencia Artificial.
              Creando soluciones innovadoras con código.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold text-[var(--fg-muted)] mb-5 tracking-[0.2em] uppercase">
              Navegación
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] font-semibold text-[var(--fg-muted)] mb-5 tracking-[0.2em] uppercase">
              Conectar
            </h4>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--fg-muted)] hover:text-[var(--warm)] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[var(--fg-muted)]/50 tracking-wide">
            © {new Date().getFullYear()} Penguin Labs
          </p>
          <p className="text-[11px] text-[var(--fg-muted)]/50 tracking-wide">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
