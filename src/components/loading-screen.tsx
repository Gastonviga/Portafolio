"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 25);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #000000 100%)',
      }}
    >
      {/* Degradados animados de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Ondas radiales animadas */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/10 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              animation: `pulse 2s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal centrado */}
      <div className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}>
        {/* Texto principal con efecto neón */}
        <div className="mb-0">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-blue-400 to-cyan-400 animate-pulse">
                Iniciando
              </span>
            </h1>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-gray-400 text-sm sm:text-base mt-3 tracking-widest uppercase font-light">
            Preparando experiencia
          </p>
        </div>

        {/* Círculo de progreso animado */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8">
          {/* Círculo de fondo */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            {/* Círculo de fondo */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="8"
            />
            {/* Círculo de progreso */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
              className="transition-all duration-300 ease-out"
            />
            {/* Gradiente para el círculo */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Porcentaje en el centro */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl font-bold text-white font-mono">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Glow effect alrededor del círculo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl animate-pulse" />
        </div>

        {/* Texto de estado */}
        <div className="text-center">
          <p className="text-gray-400 text-sm sm:text-base tracking-widest uppercase font-light mb-2">
            {progress < 100 ? "Cargando" : "Listo"}
          </p>
          {/* Puntos animados */}
          <div className="flex gap-2 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Efectos de esquinas con líneas neón */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Esquina superior izquierda */}
        <div className="absolute top-8 left-8 w-32 h-32">
          <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-blue-400 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-blue-400 to-transparent" />
        </div>
        {/* Esquina superior derecha */}
        <div className="absolute top-8 right-8 w-32 h-32">
          <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-cyan-400 to-transparent" />
          <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
        {/* Esquina inferior izquierda */}
        <div className="absolute bottom-8 left-8 w-32 h-32">
          <div className="absolute bottom-0 left-0 w-16 h-px bg-gradient-to-r from-blue-400 to-transparent" />
          <div className="absolute bottom-0 left-0 w-px h-16 bg-gradient-to-t from-blue-400 to-transparent" />
        </div>
        {/* Esquina inferior derecha */}
        <div className="absolute bottom-8 right-8 w-32 h-32">
          <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-cyan-400 to-transparent" />
          <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-cyan-400 to-transparent" />
        </div>
      </div>
    </div>
  );
}
