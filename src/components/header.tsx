"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  href?: string;
  isScroll?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Inicio", href: "/" },
  { id: "acerca", label: "Acerca", isScroll: true },
  { id: "proyectos", label: "Proyectos", href: "/proyectos" },
  { id: "servicios", label: "Servicios", isScroll: true },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
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
    }
    setMobileOpen(false);
  };

  if (pathname === "/proyectos") {
    return (
      <header className="fixed top-0 left-0 z-50 w-full">
        <nav className="flex items-center justify-center py-5 px-6">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-300">
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span className="font-medium tracking-wide">Volver</span>
          </Link>
        </nav>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? "backdrop-blur-xl bg-[var(--bg)]/70" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5">
          {/* Logo / Brand */}
          <Link href="/" className="group flex items-center gap-2.5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-110 transition-transform duration-300"
              aria-label="Logo pingüino"
            >
              {/* Body */}
              <ellipse cx="16" cy="18" rx="9" ry="11" fill="#1a1a2e" />
              {/* Belly */}
              <ellipse cx="16" cy="19.5" rx="5.5" ry="7.5" fill="#f5f0e8" />
              {/* Head */}
              <ellipse cx="16" cy="8" rx="7" ry="6.5" fill="#1a1a2e" />
              {/* Face white patch */}
              <ellipse cx="16" cy="8.5" rx="4.5" ry="4" fill="#f5f0e8" />
              {/* Left eye */}
              <circle cx="13.8" cy="7" r="1.2" fill="#1a1a2e" />
              <circle cx="14.1" cy="6.7" r="0.4" fill="white" />
              {/* Right eye */}
              <circle cx="18.2" cy="7" r="1.2" fill="#1a1a2e" />
              <circle cx="18.5" cy="6.7" r="0.4" fill="white" />
              {/* Beak */}
              <path d="M14.5 10 L16 12 L17.5 10 Z" fill="#E8A849" />
              {/* Left wing */}
              <ellipse cx="7.5" cy="18" rx="2.5" ry="5" fill="#1a1a2e" transform="rotate(-10 7.5 18)" />
              {/* Right wing */}
              <ellipse cx="24.5" cy="18" rx="2.5" ry="5" fill="#1a1a2e" transform="rotate(10 24.5 18)" />
              {/* Left foot */}
              <ellipse cx="13" cy="29" rx="3" ry="1.2" fill="#E8A849" />
              {/* Right foot */}
              <ellipse cx="19" cy="29" rx="3" ry="1.2" fill="#E8A849" />
              {/* Warm gradient accent on belly */}
              <ellipse cx="16" cy="17" rx="2.5" ry="3" fill="url(#pgrd)" opacity="0.35" />
              <defs>
                <radialGradient id="pgrd" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#E8A849" />
                  <stop offset="100%" stopColor="#7C6AEF" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <span className="hidden sm:block text-sm font-semibold text-[var(--fg)] tracking-wide">
              Ema
            </span>
          </Link>

          {/* Desktop nav */}
          <div ref={navRef} className="hidden md:flex items-center gap-1 relative">
            {NAV_ITEMS.map((item) => {
              const isActive =
                (item.href === "/proyectos" && pathname === "/proyectos") ||
                (pathname === "/" && activeSection === item.id);

              const content = (
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[var(--warm)] scale-100" : "bg-transparent scale-0"
                  }`} />
                  <span className="text-[13px] font-medium tracking-wide">{item.label}</span>
                </span>
              );

              const className = `relative px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "text-[var(--fg)]"
                  : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
              }`;

              if (item.isScroll) {
                return (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className={className}>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[var(--surface-2)] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {content}
                  </button>
                );
              }

              return (
                <Link key={item.id} href={item.href ?? "/"} className={className}>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[var(--surface-2)] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {content}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            <span className={`block w-6 h-[2px] bg-[var(--fg)] origin-center transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[var(--fg)] origin-center transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[var(--fg)] origin-center transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map((item) => {
          const isActive =
            (item.href === "/proyectos" && pathname === "/proyectos") ||
            (pathname === "/" && activeSection === item.id);

          const el = (
            <span
              className={`text-3xl font-bold tracking-tight transition-colors duration-300 ${
                isActive ? "text-[var(--warm)]" : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
              }`}
            >
              {item.label}
            </span>
          );

          if (item.isScroll) {
            return (
              <button key={item.id} onClick={() => scrollToSection(item.id)}>
                {el}
              </button>
            );
          }

          return (
            <Link key={item.id} href={item.href ?? "/"} onClick={() => setMobileOpen(false)}>
              {el}
            </Link>
          );
        })}

      </div>
    </>
  );
}
