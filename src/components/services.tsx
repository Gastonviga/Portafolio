"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "./language-context";

const SERVICE_META = [
  {
    number: "01",
    accent: "warm" as const,
    capabilities: ["Diseño responsive", "Carga rápida", "SEO local", "Formulario de contacto"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    number: "02",
    accent: "cold" as const,
    capabilities: ["Mercado Pago / Stripe", "Gestión de stock", "Panel de admin", "Pedidos online"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    number: "03",
    accent: "warm" as const,
    capabilities: ["Sistema de turnos", "Portal de clientes", "Integraciones API", "Panel propio"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export function Services() {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const services = t("services.list") || [];
  const capabilities = t("services.capabilities") || [];

  return (
    <>
      <section
        id="servicios"
        className="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden scroll-mt-16"
      >
        <div className="relative max-w-7xl w-full mx-auto z-10">

          {/* Header */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[var(--cold)]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)]">
                {t("services.eyebrow")}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                <span className="text-[var(--fg)]">{t("services.title").split(" ")[0]} </span>
                <span className="text-gradient-cold">{t("services.title").split(" ").slice(1).join(" ")}</span>
              </h2>
              <p className="text-sm text-[var(--fg-muted)] max-w-xs leading-relaxed">
                {t("services.description")}
              </p>
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICE_META.map((meta, i) => {
              const service = services[i];
              if (!service) return null;
              const isWarm = meta.accent === "warm";
              const accentColor = isWarm ? "var(--warm)" : "var(--cold)";
              const glowColor = isWarm
                ? "rgba(232,168,73,0.12)"
                : "rgba(124,106,239,0.12)";
              const borderHover = isWarm
                ? "hover:border-[var(--warm)]/30"
                : "hover:border-[var(--cold)]/30";

              return (
                <motion.div
                  key={meta.number}
                  className={`group relative flex flex-col gap-6 p-7 bg-[var(--surface-0)] border border-[var(--border)] ${borderHover} rounded-xl transition-all duration-500 hover:-translate-y-1`}
                  style={{ "--glow": glowColor } as React.CSSProperties}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${glowColor} 0%, transparent 70%)` }}
                  />

                  {/* Top row: number + icon */}
                  <div className="flex items-start justify-between">
                    <span
                      className="text-[11px] font-black tracking-[0.2em] transition-colors duration-300"
                      style={{ color: accentColor }}
                    >
                      {meta.number}
                    </span>
                    <div
                      className="p-2 rounded-lg border transition-colors duration-300"
                      style={{
                        color: accentColor,
                        borderColor: isWarm ? "rgba(232,168,73,0.2)" : "rgba(124,106,239,0.2)",
                        background: isWarm ? "rgba(232,168,73,0.06)" : "rgba(124,106,239,0.06)",
                      }}
                    >
                      {meta.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[var(--fg)] mb-3 group-hover:text-[var(--fg)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--border)]">
                    {(capabilities[i] || meta.capabilities).map((cap: string) => (
                      <span
                        key={cap}
                        className="px-2.5 py-1 text-[10px] font-semibold rounded-full border transition-colors duration-300"
                        style={{
                          color: isWarm ? "rgba(232,168,73,0.8)" : "rgba(124,106,239,0.8)",
                          borderColor: isWarm ? "rgba(232,168,73,0.15)" : "rgba(124,106,239,0.15)",
                          background: isWarm ? "rgba(232,168,73,0.05)" : "rgba(124,106,239,0.05)",
                        }}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setContactOpen(true)}
              className="group relative inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold text-[var(--bg)] bg-[var(--fg)] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,106,239,0.25)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--warm)] to-[var(--cold)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10 flex items-center gap-2.5">
                {t("services.cta")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14" /><polyline points="12 5 19 12 12 19" />
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
