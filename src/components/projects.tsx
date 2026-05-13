import { ProjectMuseumCard } from "@/components/project-museum-card";
import { featuredPortfolioProjects } from "@/data/portfolio-projects";
import Link from "next/link";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-16"
    >
      <div className="relative max-w-7xl w-full mx-auto z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[var(--warm)]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)]">
                Trabajo selecto
              </span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
              <span className="text-[var(--fg)]">Mis </span>
              <span className="text-gradient-warm">Proyectos</span>
            </h2>
          </div>
          <p className="text-sm text-[var(--fg-muted)] max-w-xs leading-relaxed">
            Una seleccion curada de proyectos reales, mostrados como piezas de portfolio.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {featuredPortfolioProjects.map((project, index) => (
            <ProjectMuseumCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:justify-start">
          <Link
            href="/proyectos"
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[var(--fg)] border border-[var(--border)] rounded-full hover:border-[var(--border-hover)] hover:bg-[var(--surface-1)] transition-all duration-300"
          >
            Ver todos los proyectos
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
