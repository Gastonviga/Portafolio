export function ProjectsHero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[55vh] flex items-center px-6 sm:px-8 pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/3 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-[var(--cold)] opacity-[0.04] blur-[120px]" />
        <div className="absolute -bottom-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-[var(--warm)] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl w-full mx-auto z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-[var(--warm)]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)]">
              Portfolio
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight mb-6">
            <span className="text-[var(--fg)]">Mis </span>
            <span className="text-gradient-dual">Proyectos</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--fg-muted)] leading-relaxed max-w-xl mx-auto">
            Trabajo real, código real. Proyectos de desarrollo web que reflejan
            mi forma de pensar y construir.
          </p>
        </div>
      </div>
    </section>
  );
}
