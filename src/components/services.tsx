"use client";

import { useState } from "react";
import { ContactForm } from "@/components/contact-form";

interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  accent: "warm" | "cold";
}

const SERVICES: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Desarrollo Web",
    description: "Creación de aplicaciones web modernas y responsivas con las últimas tecnologías.",
    capabilities: ["React / Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    accent: "warm",
  },
  {
    id: 2,
    number: "02",
    title: "Inteligencia Artificial",
    description: "Desarrollo de modelos de IA y machine learning para soluciones innovadoras.",
    capabilities: ["Python / PyTorch", "Machine Learning", "Data Science", "NLP"],
    accent: "cold",
  },
  {
    id: 3,
    number: "03",
    title: "Full Stack",
    description: "Soluciones completas desde el backend hasta el frontend, optimizadas y escalables.",
    capabilities: ["Node.js", "APIs REST", "Bases de datos", "Docker"],
    accent: "warm",
  },
];

export function Services() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section
        id="servicios"
        className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-16"
      >
        <div className="relative max-w-7xl w-full mx-auto z-10">
          {/* Header */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[var(--cold)]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)]">
                Lo que hago
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                <span className="text-[var(--fg)]">Mis </span>
                <span className="text-gradient-cold">Servicios</span>
              </h2>
              <p className="text-sm text-[var(--fg-muted)] max-w-xs leading-relaxed">
                Áreas en las que puedo aportar valor a tu proyecto
              </p>
            </div>
          </div>

          {/* Services — horizontal ruled list */}
          <div className="border-t border-[var(--border)]">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group border-b border-[var(--border)]"
              >
                <div className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-12 items-start lg:items-center">
                  {/* Number */}
                  <span className={`text-sm font-bold tracking-[0.2em] ${
                    service.accent === "warm" ? "text-[var(--warm)]/50" : "text-[var(--cold)]/50"
                  }`}>
                    {service.number}
                  </span>

                  {/* Title + Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className={`px-3 py-1.5 text-[11px] font-medium rounded-full border ${
                          service.accent === "warm"
                            ? "text-[var(--warm)]/70 border-[var(--warm)]/15 bg-[var(--warm)]/5"
                            : "text-[var(--cold)]/70 border-[var(--cold)]/15 bg-[var(--cold)]/5"
                        }`}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setContactOpen(true)}
              className="group relative inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold text-[var(--bg)] bg-[var(--fg)] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,106,239,0.25)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--warm)] to-[var(--cold)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10 flex items-center gap-2.5">
                Charlemos
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      <ContactForm open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
