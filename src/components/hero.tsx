"use client";

import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Forzar scroll al inicio
    window.scrollTo(0, 0);
    // Animación de entrada para el hero
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="inicio" 
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-14 pb-20 overflow-hidden transition-all duration-1000 scroll-mt-0 ${
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

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center z-10">
        {/* Columna izquierda - Imagen */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="group relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-slate-700/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
            {/* Imagen con borde neón */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 shadow-[0_0_30px_rgba(51,65,85,0.4)] group-hover:shadow-[0_0_50px_rgba(51,65,85,0.6)]">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/me.jpg"
                alt="Luis"
                className="w-full h-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Columna derecha - Información */}
        <div className="space-y-8 sm:space-y-10 text-center lg:text-left order-1 lg:order-2">
          {/* Título */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span 
                className="text-white inline-block animate-gentle-float"
              >
                Hola, soy
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-blue-400 to-cyan-400 animate-pulse">
                Luis
              </span>
            </h1>
          </div>

          {/* Descripción */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Soy estudiante de{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-blue-400">
              Inteligencia Artificial
            </span>{" "}
            y desarrollador web. Me apasiona crear, aprender y llevar mis ideas
            a la realidad a través de la programación y creatividad.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
            <a
              href="https://instagram.com/luiscortespenguin"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 sm:px-10 sm:py-5 rounded-full flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 cursor-pointer text-sm sm:text-base font-semibold shadow-[0_0_20px_rgba(51,65,85,0.5)] hover:shadow-[0_0_30px_rgba(51,65,85,0.7)] hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-white flex items-center gap-2.5 tracking-wide">
                <svg
                  width="18"
                  height="18"
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
                Contratar
              </span>
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 sm:px-10 sm:py-5 rounded-full flex items-center justify-center gap-3 border-2 border-white/40 bg-white/5 hover:bg-white/10 hover:border-white/70 transition-all duration-500 cursor-pointer text-sm sm:text-base font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(51,65,85,0.4)] hover:scale-105"
            >
              <span className="text-white flex items-center gap-2.5 group-hover:text-cyan-300 transition-colors duration-300 tracking-wide">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-y-1 transition-transform duration-300"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Descargar CV
              </span>
            </a>
          </div>

          {/* Redes sociales */}
          <div className="pt-6 sm:pt-8 border-t border-white/20">
            <p className="text-xs font-semibold text-gray-400 mb-4 sm:mb-5 tracking-widest uppercase text-center lg:text-left">
              Sígueme
            </p>
            <div className="flex gap-5 sm:gap-6 justify-center lg:justify-start">
              <a
                href="https://instagram.com/luiscortespenguin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/luis-cort%C3%A9s-penguin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/luisjosuecortes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

