"use client";

import { useState, useEffect, useRef } from "react";

export function About() {
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

  return (
    <section
      ref={sectionRef}
      id="acerca"
      className={`relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden transition-all duration-1000 scroll-mt-16 ${
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
        <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        {/* Columna izquierda - Información */}
        <div className="space-y-8 order-1 lg:order-1">
          <div className="transform transition-all duration-700 ease-out hover:scale-105" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.3s forwards' : 'none',
                 opacity: 0 
               }}>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Acerca de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-blue-400 to-cyan-400 animate-pulse">
                Mí
              </span>
            </h2>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.4s forwards' : 'none',
                 opacity: 0 
               }}>
            <h3 className="text-2xl font-bold text-white mb-3">
              Luis Cortés
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Estudiante de{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-blue-400">
                Inteligencia Artificial
              </span>{" "}
              en sus últimos semestres en la Universidad Autónoma del Estado de Morelos. 
              Apasionado por la programación, el desarrollo web y la ciencia de datos.
            </p>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.5s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full animate-pulse" /> Educación
            </h4>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-white transition-colors">
                <span className="font-semibold">
                  Universidad Autónoma del Estado de Morelos (UAEM)
                </span>
              </p>
              <p className="text-sm hover:text-white transition-colors">Licenciatura en Inteligencia Artificial</p>
              <p className="text-sm hover:text-white transition-colors">Actualmente estudiando</p>
            </div>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.6s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full animate-pulse" /> Experiencia
            </h4>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-white transition-colors">
                <span className="font-semibold">
                  Asistente en Investigación
                </span>{" "}
                - UAEM CINC Morelos
              </p>
              <p className="text-sm hover:text-white transition-colors">
                Proyectos en Ciencia de Datos y su aplicación en Series de
                Tiempo (EEG, MEG, fMRI, Ritmo Cardíaco)
              </p>
              <p className="text-sm hover:text-white transition-colors">2025 – Actualmente</p>
            </div>
          </div>

          <div className="transform transition-all duration-700 ease-out" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.7s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full animate-pulse" /> Habilidades Técnicas
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "AI/ML",
                "PyTorch",
                "TypeScript",
                "React",
                "Node.js",
                "Git",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/10 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/20 hover:border-white/50 hover:scale-110 hover:shadow-[0_0_15px_rgba(51,65,85,0.5)] transition-all duration-300 transform hover:rotate-1 backdrop-blur-sm"
                  style={{
                    animation: isVisible ? `fadeUp 0.5s ease-out ${0.8 + index * 0.05}s forwards` : 'none',
                    opacity: 0
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-2">
          <div className="group relative w-96 h-[32rem] lg:w-[30rem] lg:h-[40rem]">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-slate-700/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            {/* Imagen con borde neón */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 shadow-[0_0_30px_rgba(51,65,85,0.4)] group-hover:shadow-[0_0_50px_rgba(51,65,85,0.6)]">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/me2.jpg"
                alt="Luis Cortés"
                className="w-full h-full object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

