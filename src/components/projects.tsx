"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredPortfolioProjects } from "@/data/portfolio-projects";
import { useLanguage } from "./language-context";

export function Projects() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = featuredPortfolioProjects[activeIndex];

  return (
    <section
      id="proyectos"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-16"
    >
      <div className="relative max-w-7xl w-full mx-auto z-10">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[var(--warm)]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)]">
                {t("projects.eyebrow")}
              </span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
              <span className="text-[var(--fg)]">{t("projects.title").split(" ")[0]} </span>
              <span className="text-gradient-warm">{t("projects.title").split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <p className="text-sm text-[var(--fg-muted)] max-w-xs leading-relaxed">
            {t("projects.description")}
          </p>
        </motion.div>

        {/* Main layout: list + image */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0 lg:gap-16 items-start">

          {/* Left — project list */}
          <div className="border-t border-[var(--border)]">
            {featuredPortfolioProjects.map((project, index) => {
              const isActive = index === activeIndex;
              const accentColor = project.accent === "warm" ? "var(--warm)" : "var(--cold)";

              return (
                <motion.div
                  key={project.slug}
                  className="group border-b border-[var(--border)] cursor-pointer"
                  onMouseEnter={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                >
                  <div className="py-8 sm:py-10 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6 sm:gap-10 min-w-0">
                      {/* Number */}
                      <span
                        className="text-[11px] font-bold tracking-[0.2em] shrink-0 transition-colors duration-300"
                        style={{ color: isActive ? accentColor : "var(--fg-muted)" }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Title + category + description */}
                      <div className="min-w-0">
                        <h3
                          className="text-[clamp(1.4rem,3.5vw,2.4rem)] font-bold tracking-tight leading-none transition-colors duration-300 truncate"
                          style={{ color: isActive ? "var(--fg)" : "var(--fg-muted)" }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-xs font-semibold tracking-[0.15em] uppercase mt-2 transition-all duration-300"
                          style={{ color: isActive ? accentColor : "transparent" }}
                        >
                          {project.category}
                        </p>

                        {/* Expandable description */}
                        <div
                          className="overflow-hidden transition-all duration-500 ease-in-out"
                          style={{ maxHeight: isActive ? "120px" : "0px", opacity: isActive ? 1 : 0 }}
                        >
                          <p className="text-sm text-[var(--fg-muted)] leading-relaxed mt-3 max-w-lg">
                            {project.summary}
                          </p>
                          <p className="text-xs text-[var(--fg-muted)]/60 mt-1.5 font-medium">
                            {project.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow + CTA */}
                    <div className="flex items-center gap-4 shrink-0">
                      {project.liveUrl && isActive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-300"
                          style={{ color: accentColor }}
                        >
                          {t("projects.see_project")}
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17 17 7" /><path d="M7 7h10v10" />
                          </svg>
                        </a>
                      )}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                        style={{
                          color: isActive ? accentColor : "var(--border-hover)",
                          transform: isActive ? "translateX(4px)" : "translateX(0)",
                        }}
                      >
                        <path d="M5 12h14" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right — sticky image panel (desktop only) */}
          <div className="hidden lg:block sticky top-28 self-start">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-0)] shadow-[var(--shadow)]">
              {featuredPortfolioProjects.map((project, index) => (
                <Image
                  key={project.slug}
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="420px"
                  className="object-cover transition-opacity duration-500"
                  style={{ opacity: index === activeIndex ? 1 : 0 }}
                  priority={index === 0}
                />
              ))}

              {/* Overlay with stack tags */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex flex-wrap gap-2">
                  {active.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-semibold tracking-wide bg-[var(--bg)]/80 border border-[var(--border)] rounded-full text-[var(--fg-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 mt-4 justify-end">
              {featuredPortfolioProjects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver ${project.title}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: index === activeIndex ? "20px" : "6px",
                    height: "6px",
                    background:
                      index === activeIndex
                        ? featuredPortfolioProjects[index].accent === "warm"
                          ? "var(--warm)"
                          : "var(--cold)"
                        : "var(--border-hover)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-start">
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[var(--fg)] border border-[var(--border)] rounded-full hover:border-[var(--border-hover)] hover:bg-[var(--surface-1)] transition-all duration-300"
          >
            {t("projects.cta")}
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
