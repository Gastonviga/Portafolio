"use client";

import { ProjectMuseumCard } from "@/components/project-museum-card";
import { portfolioProjects } from "@/data/portfolio-projects";

export function ProjectsWeb() {
  return (
    <section
      id="proyectos-web"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-16"
    >
      <div className="relative max-w-7xl w-full mx-auto z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[var(--warm)]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)]">
              Web
            </span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
            <span className="text-[var(--fg)]">Desarrollo </span>
            <span className="text-gradient-warm">Web</span>
          </h2>
          <p className="text-sm text-[var(--fg-muted)] mt-4 max-w-lg leading-relaxed">
            Capturas reales seleccionadas como piezas de museo: una vista protagonista,
            detalles de interfaz y responsive.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {portfolioProjects.map((project, index) => (
            <ProjectMuseumCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
