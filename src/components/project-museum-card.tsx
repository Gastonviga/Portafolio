"use client";

import Image from "next/image";
import type { PortfolioProject } from "@/data/portfolio-projects";
import { useLanguage } from "./language-context";
import { TechIcon } from "./tech-icons";

interface ProjectMuseumCardProps {
  project: PortfolioProject;
  index: number;
}

export function ProjectMuseumCard({ project, index }: ProjectMuseumCardProps) {
  const { t } = useLanguage();
  const accentClass =
    project.accent === "warm" ? "text-[var(--warm)]" : "text-[var(--cold)]";
  const borderClass =
    project.accent === "warm"
      ? "group-hover:border-[var(--warm)]/30"
      : "group-hover:border-[var(--cold)]/30";

  return (
    <article
      className={`group grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-10 border border-[var(--border)] ${borderClass} bg-[var(--surface-0)] p-4 sm:p-5 lg:p-6 rounded-[8px] transition-colors duration-500`}
    >
      <div className="space-y-4">
        <div className="border border-[var(--border)] bg-[var(--bg)] p-2 rounded-[8px] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[6px]">
            <Image
              src={project.cover}
              alt={`${project.title} - captura principal del proyecto`}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              priority={index === 0}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {project.details.map((image, detailIndex) => (
            <div
              key={image}
              className="border border-[var(--border)] bg-[var(--bg)] p-1.5 rounded-[8px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[5px]">
                <Image
                  src={image}
                  alt={`${project.title} - detalle ${detailIndex + 1}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 28vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 py-1 lg:py-3">
        <div>
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--fg-muted)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={`text-[11px] font-semibold tracking-[0.16em] uppercase ${accentClass}`}>
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] mb-4">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-[var(--fg-muted)] leading-relaxed">
            {project.summary}
          </p>

          <div className="mt-7 pt-6 border-t border-[var(--border)]">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--fg-muted)] mb-2">
              {t("contact.name") === "Name" ? "Role" : "Rol"}
            </p>
            <p className="text-sm text-[var(--fg)]">{project.role}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          {project.stack.map((tech) => (
            <div
              key={tech}
              className="group/tech relative flex items-center justify-center p-2.5 bg-[var(--surface-1)] border border-[var(--border)] rounded-xl hover:border-[var(--warm)]/50 hover:bg-[var(--surface-2)] transition-all duration-300"
            >
              <TechIcon name={tech} className="w-5 h-5 text-[var(--fg-muted)] group-hover/tech:text-[var(--warm)] transition-colors" />
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[var(--fg)] text-[var(--bg)] text-[10px] font-bold rounded-md opacity-0 translate-y-2 pointer-events-none group-hover/tech:opacity-100 group-hover/tech:translate-y-0 transition-all duration-300 whitespace-nowrap z-20 shadow-xl">
                {tech}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--fg)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
