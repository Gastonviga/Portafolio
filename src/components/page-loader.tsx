"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setLoading(false);
      return;
    }

    const duration = 2000;
    const steps = 100;
    const interval = duration / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setExiting(true);
          sessionStorage.setItem("hasVisited", "true");
          setTimeout(() => setLoading(false), 500);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg)] transition-opacity duration-500 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Penguin */}
        <div className="penguin-container">
          <div className="penguin">
            <div className="penguin-body">
              <div className="penguin-belly" />
              <div className="penguin-eye left" />
              <div className="penguin-eye right" />
              <div className="penguin-beak" />
              <div className="penguin-arm left" />
              <div className="penguin-arm right typing" />
            </div>
            <div className="penguin-feet">
              <div className="foot left" />
              <div className="foot right" />
            </div>
          </div>

          <div className="laptop">
            <div className="laptop-screen">
              <div className="code-line" />
              <div className="code-line short" />
              <div className="code-line" />
              <div className="cursor-blink" />
            </div>
            <div className="laptop-base" />
          </div>
        </div>

        {/* Progress */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-48 h-px bg-[var(--border)] relative overflow-hidden rounded-full">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--warm)] to-[var(--cold)] transition-[width] duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fg-muted)]">
            Cargando
          </span>
        </div>
      </div>
    </div>
  );
}
