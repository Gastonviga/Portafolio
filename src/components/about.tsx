"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./language-context";

/* ── Animated Penguin Mascot ───────────────────────────────────────── */
function PenguinMascot({ greeting }: { greeting: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="120"
          height="140"
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Body */}
          <ellipse cx="16" cy="24" rx="9" ry="11" fill="#1a1a2e" />
          {/* Belly */}
          <ellipse cx="16" cy="25.5" rx="5.5" ry="7.5" fill="#f5f0e8" />
          {/* Head */}
          <ellipse cx="16" cy="10" rx="7" ry="6.5" fill="#1a1a2e" />
          {/* Face */}
          <ellipse cx="16" cy="10.5" rx="4.5" ry="4" fill="#f5f0e8" />
          {/* Eyes */}
          <circle cx="13.8" cy="9" r="1.2" fill="#1a1a2e" />
          <circle cx="18.2" cy="9" r="1.2" fill="#1a1a2e" />
          {/* Eye shine */}
          <circle cx="14.2" cy="8.6" r="0.4" fill="white" />
          <circle cx="18.6" cy="8.6" r="0.4" fill="white" />
          {/* Beak */}
          <path d="M14.5 12 L16 14 L17.5 12 Z" fill="#E8A849" />
          {/* Left wing — static */}
          <ellipse cx="7.5" cy="24" rx="2.5" ry="5" fill="#1a1a2e" transform="rotate(-10 7.5 24)" />
          {/* Right wing — waving */}
          <motion.ellipse
            cx="24.5" cy="22"
            rx="2.5" ry="5"
            fill="#1a1a2e"
            style={{ originX: "24.5px", originY: "16px" }}
            animate={{ rotate: [10, -40, 10, -40, 10] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
          {/* Feet */}
          <ellipse cx="13" cy="35" rx="3" ry="1.2" fill="#E8A849" />
          <ellipse cx="19" cy="35" rx="3" ry="1.2" fill="#E8A849" />
        </svg>
      </motion.div>

      {/* Speech bubble */}
      <motion.div
        className="relative px-3 py-1.5 bg-[var(--surface-1)] border border-[var(--border)] rounded-full"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-[var(--border)]" />
        <span className="text-[11px] font-semibold text-[var(--fg-muted)] tracking-wide">{greeting}</span>
      </motion.div>
    </div>
  );
}

/* ── About Section ─────────────────────────────────────────────────── */
export function About() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const timeline = t("about.timeline") || [];
  const stats = t("about.stats") || [];

  return (
    <section
      id="acerca"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-16 bg-[var(--bg)]"
    >
      <div className="relative max-w-7xl w-full mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">

          {/* ── Left column ── */}
          <motion.div
            className="lg:sticky lg:top-28 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >

            {/* Eyebrow + Title */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--cold)]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--fg-muted)]">
                  {t("about.eyebrow")}
                </span>
              </div>
              <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold leading-[1] tracking-tight">
                <span className="text-[var(--fg)]">{t("about.title_first")}</span>
                <br />
                <span className="text-gradient-dual">{t("about.title_last")}</span>
              </h2>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed border-l border-[var(--border)] pl-4">
                {t("about.description")}
              </p>
            </div>

            {/* Penguin mascot */}
            <div className="flex justify-start pl-2">
              <PenguinMascot greeting={t("about.penguin_greeting")} />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between py-5 border-y border-[var(--border)]">
              {stats.map((stat: any) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-[var(--fg)]">{stat.value}</div>
                  <div className="text-[9px] font-bold text-[var(--fg-muted)] uppercase tracking-widest mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--warm)]">Core</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-[10px] font-bold text-[var(--fg)] bg-[var(--surface-1)] border border-[var(--warm)]/20 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--fg-muted)]">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "SQL", "Tailwind", "Framer Motion", "Git"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-[10px] font-bold text-[var(--fg-muted)] bg-[var(--surface-0)] border border-[var(--border)] rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right column: expandable timeline ── */}
          <div>
            <motion.p
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--fg-muted)] mb-10 flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--warm)]" />
              {t("about.timeline_title")}
            </motion.p>

            <div className="border-t border-[var(--border)]">
              {timeline.map((entry: any, i: number) => {
                const isActive = i === activeIndex;
                const isWork = entry.type === "work";
                const accentColor = isWork ? "var(--warm)" : "var(--cold)";

                return (
                  <motion.div
                    key={`${entry.title}-${i}`}
                    className="border-b border-[var(--border)] cursor-pointer"
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  >
                    <div className="py-7 sm:py-8 flex items-center justify-between gap-6">
                      <div className="flex items-center gap-6 sm:gap-8 min-w-0">
                        {/* Year badge */}
                        <span
                          className="text-[9px] font-black tracking-widest uppercase shrink-0 px-2 py-0.5 rounded transition-all duration-300 min-w-[44px] text-center"
                          style={{
                            color: isActive ? accentColor : "var(--fg-muted)",
                            background: isActive
                              ? isWork ? "rgba(232,168,73,0.12)" : "rgba(124,106,239,0.12)"
                              : "transparent",
                          }}
                        >
                          {entry.year}
                        </span>

                        {/* Title + expandable detail */}
                        <div className="min-w-0">
                          <h3
                            className="text-[clamp(1rem,2.5vw,1.5rem)] font-bold tracking-tight leading-none transition-colors duration-300"
                            style={{ color: isActive ? "var(--fg)" : "var(--fg-muted)" }}
                          >
                            {entry.title}
                          </h3>

                          <div
                            className="overflow-hidden transition-all duration-500 ease-in-out"
                            style={{ maxHeight: isActive ? "100px" : "0px", opacity: isActive ? 1 : 0 }}
                          >
                            <p className="text-xs font-semibold mt-2" style={{ color: accentColor }}>
                              {entry.subtitle}
                            </p>
                            <p className="text-sm text-[var(--fg-muted)] leading-relaxed mt-1 max-w-lg">
                              {entry.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <svg
                        width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="shrink-0 transition-all duration-300"
                        style={{
                          color: isActive ? accentColor : "var(--border-hover)",
                          transform: isActive ? "translateX(4px)" : "translateX(0)",
                        }}
                      >
                        <path d="M5 12h14" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
