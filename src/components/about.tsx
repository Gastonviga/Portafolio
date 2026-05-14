"use client";

import Image from "next/image";
import { useLanguage } from "./language-context";
import { motion } from "framer-motion";

const SKILLS = ["Python", "AI/ML", "Docker", "TypeScript", "React", "Node.js", "Git", "SQL", "Cloud"];

export function About() {
  const { t } = useLanguage();
  const timeline = t("about.timeline") || [];
  const stats = t("about.stats") || [];

  return (
    <section
      id="acerca"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-16 bg-[var(--bg)]"
    >
      <div className="relative max-w-7xl w-full mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column — Sticky Info Panel */}
          <div className="lg:sticky lg:top-28 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--cold)]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--fg-muted)]">
                  {t("about.eyebrow")}
                </span>
              </div>

              <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1] tracking-tight">
                <span className="text-[var(--fg)]">{t("about.title_first")}</span>
                <br />
                <span className="text-gradient-dual">{t("about.title_last")}</span>
              </h2>

              <div className="space-y-4">
                <p className="text-base text-[var(--fg-muted)] leading-relaxed border-l border-[var(--border)] pl-5">
                  {t("about.description")}
                </p>
              </div>
            </div>

            {/* Photo with refined frame */}
            <div className="relative group max-w-[280px]">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[var(--warm)]/20 to-[var(--cold)]/20 rounded-xl blur-lg group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--border)] shadow-xl bg-[var(--surface-1)]">
                <Image
                  src="/me2.jpg"
                  alt="Gaston"
                  fill
                  sizes="(max-width: 280px) 100vw, 280px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 to-transparent" />
              </div>
            </div>

            {/* Stats — more compact */}
            <div className="flex items-center justify-between py-6 border-y border-[var(--border)]">
              {stats.map((stat: any) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-[var(--fg)]">{stat.value}</div>
                  <div className="text-[9px] font-bold text-[var(--fg-muted)] uppercase tracking-widest mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills — organized and serious */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--warm)]">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-[10px] font-bold text-[var(--fg)] bg-[var(--surface-1)] border border-[var(--warm)]/20 rounded-md hover:border-[var(--warm)]/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--fg-muted)]">
                  Complementary & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "SQL", "Tailwind CSS", "Framer Motion", "Cloud", "Git"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-[10px] font-bold text-[var(--fg-muted)] bg-[var(--surface-0)] border border-[var(--border)] rounded-md hover:border-[var(--cold)]/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Timeline */}
          <div className="relative pl-2 sm:pl-6">
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--fg-muted)] mb-12 flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--warm)]" />
              {t("about.timeline_title")}
            </h3>

            {/* Timeline Line */}
            <div className="absolute left-[11px] sm:left-[27px] top-24 bottom-4 w-px bg-gradient-to-b from-[var(--border)] via-[var(--border)] to-transparent" />

            <div className="space-y-16">
              {timeline.map((entry: any, i: number) => (
                <motion.div
                  key={`${entry.title}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative group pl-10 sm:pl-14"
                >
                  {/* Indicator Dot */}
                  <div className={`absolute left-[-2px] sm:left-[14px] top-1.5 w-2.5 h-2.5 rounded-full border-2 bg-[var(--bg)] z-10 transition-transform duration-300 group-hover:scale-125 ${
                    entry.type === "work" ? "border-[var(--warm)]" : "border-[var(--cold)]"
                  }`} />
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded ${
                        entry.type === "work" 
                          ? "text-[var(--warm)] bg-[var(--warm)]/10" 
                          : "text-[var(--cold)] bg-[var(--cold)]/10"
                      }`}>
                        {entry.year}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-[var(--fg)] leading-tight group-hover:text-[var(--warm)] transition-colors duration-300">
                        {entry.title}
                      </h4>
                      <p className="text-[13px] font-semibold text-[var(--fg-muted)] mt-1">
                        {entry.subtitle}
                      </p>
                    </div>

                    <p className="text-[14px] text-[var(--fg-muted)]/80 leading-relaxed max-w-xl">
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
