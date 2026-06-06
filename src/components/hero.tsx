"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "./language-context";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gast%C3%B3n-vigabriel-281626318/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/Gastonviga",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Viga Suite",
    href: "https://viga-suite.vercel.app/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
];

export function Hero() {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden scroll-mt-0"
      >
        {/* ── Left: content ── */}
        <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 z-10">

          {/* Eyebrow */}
          <motion.div className="flex items-center gap-3 mb-8" {...fadeUp(0.1)}>
            <span className="h-px w-8 bg-[var(--warm)]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)]">
              {t("hero.eyebrow")}
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.92] tracking-tight mb-8">
            {/* Greeting — fade up */}
            <motion.span
              className="block text-[var(--fg)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              {t("hero.greeting")}
            </motion.span>

            {/* Name — slide up from behind overflow clip */}
            <span className="block overflow-hidden leading-none pb-1">
              <motion.span
                className="block text-gradient-dual"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
              >
                {t("hero.name")}
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-[var(--fg-muted)] leading-relaxed max-w-md mb-10"
            {...fadeUp(0.35)}
          >
            {t("hero.description")}
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mb-10" {...fadeUp(0.45)}>
            <button
              onClick={() => setContactOpen(true)}
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[var(--bg)] bg-[var(--fg)] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,168,73,0.3)]"
            >
              <span className="absolute inset-0 bg-[var(--warm)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10 flex items-center gap-2">
                {t("hero.cta_primary")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
            <a
              href="/cv/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[var(--fg)] border border-[var(--border)] rounded-full hover:border-[var(--border-hover)] hover:bg-[var(--surface-1)] transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <path d="M7 17 17 7" /><path d="M7 7h10v10" />
              </svg>
              {t("hero.cta_secondary")}
            </a>
          </motion.div>

          {/* Social + available badge */}
          <motion.div className="flex items-center gap-5" {...fadeUp(0.55)}>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2.5 rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-1)] transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-[var(--border)]" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-[var(--fg-muted)]">{t("hero.available")}</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right: full-bleed photo (desktop) ── */}
        <div
          className="relative hidden lg:block"
          style={{
            backgroundImage: "url('/profile-cv.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 15%",
          }}
        >
          {/* Dark overlay to blend with dark theme */}
          <div className="absolute inset-0 bg-[var(--bg)]/20" />
          {/* Left edge fade */}
          <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--bg)] to-transparent z-10" />
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--bg)] to-transparent z-10" />
        </div>

        {/* ── Mobile photo ── */}
        <div className="relative block lg:hidden h-72 mx-6 mb-8 rounded-2xl overflow-hidden border border-[var(--border)]">
          <Image
            src="/profile-cv.png"
            alt="Gastón Vigabriel"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 hidden lg:flex flex-col items-center gap-2 z-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--fg-muted)]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--fg-muted)] to-transparent animate-bounce" />
        </div>
      </section>

      <ContactForm open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
