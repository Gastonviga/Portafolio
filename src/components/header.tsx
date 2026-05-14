"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./language-context";

interface NavItem {
  id: string;
  label: string;
  href?: string;
  isScroll?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Inicio", isScroll: true },
  { id: "acerca", label: "Acerca", isScroll: true },
  { id: "proyectos", label: "Proyectos", href: "/proyectos" },
  { id: "servicios", label: "Servicios", isScroll: true },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      const observerOptions = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      const sections = ["inicio", "acerca", "proyectos", "servicios"];
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    } else {
      setActiveSection("proyectos");
    }
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setMobileOpen(false);
  };

  if (pathname === "/proyectos") {
    return (
      <header className="fixed top-0 left-0 z-50 w-full p-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 px-5 py-2.5 bg-[var(--bg)]/80 backdrop-blur-md border border-[var(--border)] rounded-full text-sm font-semibold text-[var(--fg)] hover:border-[var(--warm)] hover:shadow-[0_0_20px_rgba(232,168,73,0.15)] transition-all duration-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-300">
            <path d="M19 12H5" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span className="tracking-wide">{t("nav.back")}</span>
        </Link>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 flex justify-center p-4 sm:p-6 ${
          isScrolled ? "pointer-events-none" : ""
        }`}
      >
        <nav 
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto flex items-center ${
            isScrolled 
              ? "bg-[var(--bg)]/70 backdrop-blur-xl border border-[var(--border)] px-4 py-2 rounded-full shadow-2xl gap-8" 
              : "w-full max-w-7xl justify-between"
          }`}
        >
          {/* Logo / Brand */}
          <Link href="/" className={`group flex items-center gap-2.5 transition-all duration-500 ${isScrolled ? "scale-90" : ""}`}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform duration-300"
            >
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
            <span className={`hidden sm:block text-sm font-bold text-[var(--fg)] tracking-wider transition-all duration-500 ${isScrolled ? "w-0 opacity-0 overflow-hidden" : ""}`}>
              Gaston
            </span>
          </Link>

          {/* Desktop nav */}
          <div className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? "gap-2" : "gap-1"}`}>
            {NAV_ITEMS.map((item) => {
              const isActive =
                (item.href === "/proyectos" && pathname === "/proyectos") ||
                (pathname === "/" && activeSection === item.id);

              const content = (
                <span className="relative z-10 flex items-center gap-1.5 px-3 py-1.5">
                  <span className={`w-1 h-1 rounded-full bg-[var(--warm)] transition-all duration-300 ${
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`} />
                  <span className={`text-[12px] font-bold tracking-wide transition-colors ${isActive ? "text-[var(--fg)]" : "text-[var(--fg-muted)] group-hover:text-[var(--fg)]"}`}>
                    {t(`nav.${item.id}`)}
                  </span>
                </span>
              );

              const btnClass = "group relative cursor-pointer outline-none";

              if (item.isScroll) {
                return (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className={btnClass}>
                    {isActive && (
                      <motion.div layoutId="nav-glow" className="absolute inset-0 bg-[var(--warm)]/5 rounded-full blur-md" />
                    )}
                    {content}
                  </button>
                );
              }

              return (
                <Link key={item.id} href={item.href ?? "/"} className={btnClass}>
                  {isActive && (
                    <motion.div layoutId="nav-glow" className="absolute inset-0 bg-[var(--warm)]/5 rounded-full blur-md" />
                  )}
                  {content}
                </Link>
              );
            })}

            {/* VigaSuite Link */}
            <a
              href="https://viga-suite.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1.5 rounded-full border border-[var(--border)] hover:border-[var(--warm)] hover:text-[var(--warm)] transition-all ml-1`}
              title="Viga Suite"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
              </svg>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full border border-[var(--border)] hover:border-[var(--warm)] hover:text-[var(--warm)] transition-all ml-1`}
              title={theme === "dark" ? "Light Mode" : "Dark Mode"}
            >
              {theme === "dark" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Language Toggle */}
            <div className={`h-4 w-px bg-[var(--border)] mx-2 transition-all`} />
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className={`text-[9px] font-black tracking-widest uppercase px-2 py-1 rounded border border-[var(--border)] hover:border-[var(--warm)] transition-all ${isScrolled ? "ml-2" : ""}`}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden flex flex-col gap-1 p-2 transition-all ${isScrolled ? "scale-90" : ""}`}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[2px] bg-[var(--fg)] transition-all ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-[var(--fg)] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-[var(--fg)] transition-all ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay — simplified */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[var(--bg)]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            <button onClick={() => setMobileOpen(false)} className="absolute top-8 right-8 text-[var(--fg-muted)]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.isScroll) scrollToSection(item.id);
                  else setMobileOpen(false);
                }}
                className="text-4xl font-black tracking-tighter text-[var(--fg)] hover:text-[var(--warm)] transition-colors"
              >
                {t(`nav.${item.id}`)}
              </button>
            ))}

            <div className="flex items-center gap-8 mt-6">
              {/* VigaSuite Link */}
              <a
                href="https://viga-suite.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[var(--border)] text-[var(--fg)]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full border border-[var(--border)] text-[var(--fg)]"
              >
                {theme === "dark" ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--border)] text-sm font-black text-[var(--fg)]"
              >
                {language === "es" ? "EN" : "ES"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
