"use client";

import { useState, useEffect, useRef } from "react";

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Penguin Academy",
      description:
        "Plataforma educativa especializada en Inteligencia Artificial, programación y matemáticas aplicadas.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
      demo: "https://www.penguinmy.xyz/",
      image: "/proyecto1.png",
      showOnlyDemo: true,
    },
    {
      id: 2,
      title: "TREEJS",
      description:
        "Aplicación web interactiva con animaciones 3D creadas con ThreeJS.",
      technologies: ["ThreeJS", "JavaScript", "WebGL", "3D"],
      demo: "https://treejsprojects.vercel.app/",
      image: "/proyecto2.png",
      showOnlyDemo: true,
    },
    {
      id: 3,
      title: "Entropy Evolve",
      description:
        "Sistema de automejora para agentes de IA, diseñado para dominios complejos con ingeniería de software como caso de prueba.",
      technologies: ["Python", "AI", "Machine Learning"],
      github: "https://github.com/luisjosuecortes/EntropyEvolve",
      image: "/proyecto3.png",
      showOnlyDemo: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden transition-all duration-1000 scroll-mt-16 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #000000 100%)',
      }}
    >
      {/* Degradados sutiles decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl w-full z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Mis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-blue-400 to-cyan-400 animate-pulse">
              Proyectos
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.showOnlyDemo ? project.demo : project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-black/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:bg-black/60 hover:border-white/30 transition-all duration-500 hover:-translate-y-3 transform cursor-pointer block shadow-[0_0_30px_rgba(51,65,85,0.3)] hover:shadow-[0_0_50px_rgba(51,65,85,0.6)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect mejorado */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-700/30 via-blue-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Imagen con overlay mejorado */}
              <div className="relative h-56 overflow-hidden bg-slate-900/80">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 via-transparent to-transparent opacity-50" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Contenido */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-5 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/80 rounded-lg text-xs font-medium hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-blue-600/50 hover:border-white/30 hover:text-white transition-all duration-300 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botón de acción */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                    {project.showOnlyDemo ? (
                      <>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover:text-blue-400 transition-colors"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        <span className="text-sm font-semibold">Ver Proyecto</span>
                      </>
                    ) : (
                      <>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="group-hover:text-blue-400 transition-colors"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="text-sm font-semibold">GitHub</span>
                      </>
                    )}
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/40 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300"
                  >
                    <path d="M5 12h14" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

