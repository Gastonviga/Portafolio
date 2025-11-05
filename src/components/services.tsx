"use client";

import { useState, useEffect, useRef } from "react";

export function Services() {
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

  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Creación de aplicaciones web modernas y responsivas con las últimas tecnologías",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20V10" />
          <path d="M18 20V12" />
          <path d="M6 20V8" />
          <path d="M3 4h18v4H3z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Inteligencia Artificial",
      description: "Desarrollo de modelos de IA y machine learning para soluciones innovadoras",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05" />
          <path d="M12 22.08V12" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Full Stack",
      description: "Soluciones completas desde el backend hasta el frontend, optimizadas y escalables",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 3H2v4h6V3z" />
          <path d="M22 3h-6v4h6V3z" />
          <path d="M8 13H2v4h6v-4z" />
          <path d="M22 13h-6v4h6v-4z" />
          <path d="M12 17v4" />
          <path d="M16 7v4" />
          <path d="M12 1V3" />
          <path d="M16 11v2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden transition-all duration-1000 scroll-mt-16 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #000000 100%)',
      }}
    >
      {/* Degradados sutiles decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl w-full z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Mis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-blue-400 to-cyan-400 animate-pulse">
              Servicios
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Lo que puedo hacer por ti
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative flex flex-col items-center text-center p-12 sm:p-14 rounded-[2rem] border border-white/5 bg-gradient-to-b from-black/50 via-black/30 to-black/50 backdrop-blur-2xl hover:border-white/20 hover:from-black/70 hover:via-black/50 hover:to-black/70 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3 transform overflow-hidden ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Efecto de brillo elegante */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-out" />
              
              {/* Glow effect sutil */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-700/20 via-blue-500/30 to-cyan-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-10" />
              
              {/* Patrón decorativo sutil */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              {/* Icono elegante */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 scale-150" />
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-slate-800/90 via-blue-700/80 to-cyan-600/80 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-[0_8px_32px_rgba(51,65,85,0.4)] group-hover:shadow-[0_12px_48px_rgba(59,130,246,0.5)]">
                  <div className="text-blue-200 group-hover:text-cyan-200 transition-colors duration-500 scale-110">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Contenido refinado */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:via-blue-400 group-hover:to-cyan-400 transition-all duration-500">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-sm mx-auto group-hover:text-gray-300 transition-colors duration-500 font-light">
                {service.description}
              </p>

              {/* Línea decorativa elegante */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>

        {/* Botón de contacto elegante */}
        <div className="flex justify-center">
          <a 
            href="https://instagram.com/luiscortespenguin"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 sm:px-16 sm:py-6 rounded-full flex items-center gap-3 overflow-hidden transition-all duration-700 cursor-pointer text-base sm:text-lg font-semibold shadow-[0_8px_32px_rgba(51,65,85,0.4)] hover:shadow-[0_12px_48px_rgba(59,130,246,0.6)] hover:scale-[1.05] border border-white/10 hover:border-white/20 backdrop-blur-sm"
            style={{ 
              animation: isVisible ? 'fadeUp 0.8s ease-out 0.5s forwards' : 'none',
              opacity: 0
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/90 via-blue-600/90 to-cyan-500/90 opacity-95 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-cyan-500/90 to-slate-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="relative z-10 text-white flex items-center gap-3 tracking-wide">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-500"
              >
                <path d="M5 12h14" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              Contratame
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

