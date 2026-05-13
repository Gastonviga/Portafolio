import Image from "next/image";

interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "work";
}

const TIMELINE: TimelineEntry[] = [
  {
    year: "Actual",
    title: "FullStack Developer",
    subtitle: "ClauStudio",
    description: "Proyectos en Paginas web y Aplicaciones web, totalmente personalizadas y optimizadas para el usuario, aplicandolas para el enfoque cotidiano de la empresa.",
    type: "work",
  },
  {
    year: "Actual",
    title: "Licenciatura en Ciencias en Datos",
    subtitle: "Universidad de Buenos Aires (UBA)",
    description: "Cursando actualmente",
    type: "education",
  },
];

const SKILLS = ["Python", "AI/ML", "Docker", "TypeScript", "React", "Node.js", "Git"];

export function About() {
  return (
    <section
      id="acerca"
      className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-16"
    >
      <div className="relative max-w-7xl w-full mx-auto z-10">
        {/* Section header — editorial style */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          {/* Left column — sticky image + intro */}
          <div className="lg:sticky lg:top-28">
            <div className="space-y-8">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--cold)]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)]">
                  Acerca de mí
                </span>
              </div>

              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                <span className="text-[var(--fg)]">Gaston</span>
                <br />
                <span className="text-gradient-dual">Vigabriel</span>
              </h2>

              <p className="text-base text-[var(--fg-muted)] leading-relaxed max-w-md">
                Actualmente formandome en{" "}
                <span className="text-[var(--warm)] font-medium">Ciencias en datos</span>{" "}
               en la UBA. Apasionado por la innovación, el desarrollo web y la tecnología.
              </p>

              {/* Photo */}
              <div className="relative mt-8">
                <div className="relative w-full aspect-[3/4] max-w-sm rounded-2xl overflow-hidden">
                  <Image
                    src="/me2.jpg"
                    alt="Ema trabajando en proyectos de desarrollo web e IA"
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-50" />
                </div>
                {/* Decorative line */}
                <div className="absolute -right-4 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[var(--cold)]/30 to-transparent hidden lg:block" />
              </div>
            </div>
          </div>

          {/* Right column — Timeline + Skills */}
          <div className="space-y-16">
            {/* Timeline */}
            <div className="space-y-0">
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)] mb-10">
                Trayectoria
              </h3>

              {TIMELINE.map((entry, i) => (
                <div
                  key={`${entry.title}-${i}`}
                  className="group relative pl-8 pb-12 last:pb-0 border-l border-[var(--border)] hover:border-[var(--border-hover)] transition-colors duration-500"
                >
                  {/* Dot */}
                  <div className={`absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
                    entry.type === "work"
                      ? "border-[var(--warm)] bg-[var(--warm)]/20 group-hover:bg-[var(--warm)]"
                      : "border-[var(--cold)] bg-[var(--cold)]/20 group-hover:bg-[var(--cold)]"
                  }`} />

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                        entry.type === "work"
                          ? "bg-[var(--warm)]/10 text-[var(--warm)]"
                          : "bg-[var(--cold)]/10 text-[var(--cold)]"
                      }`}>
                        {entry.year}
                      </span>
                      <span className={`text-[11px] font-medium tracking-wider uppercase ${
                        entry.type === "work" ? "text-[var(--warm)]/60" : "text-[var(--cold)]/60"
                      }`}>
                        {entry.type === "work" ? "Trabajo" : "Educación"}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-[var(--fg)] group-hover:text-[var(--fg)] transition-colors">
                      {entry.title}
                    </h4>
                    <p className="text-sm font-medium text-[var(--fg-muted)]">
                      {entry.subtitle}
                    </p>
                    <p className="text-sm text-[var(--fg-muted)]/70 leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills — horizontal chips */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)] mb-6">
                Stack Técnico
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium text-[var(--fg)] bg-[var(--surface-1)] border border-[var(--border)] rounded-full hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border)]">
              {[
                { value: "5+", label: "Proyectos" },
                { value: "1+", label: "Año exp." },
                { value: "∞", label: "Curiosidad" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--fg)]">{stat.value}</div>
                  <div className="text-xs text-[var(--fg-muted)] mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
