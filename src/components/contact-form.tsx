"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "./language-context";

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

const WA_NUMBER = "5491171488045";

export function ContactForm({ open, onClose }: ContactFormProps) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      setSent(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xqekvyqe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      if (response.ok) {
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Hubo un error al enviar el mensaje. Por favor intenta por WhatsApp.");
      }
    } catch (error) {
      alert("Error de conexión. Por favor intenta por WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola! Te escribo desde tu portfolio.")}`;

  return (
    <>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className={`fixed inset-0 z-[100] bg-[var(--bg)]/80 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
        className={`fixed z-[101] left-1/2 top-1/2 w-[calc(100vw-2rem)] max-w-[440px] max-h-[calc(100vh-2rem)] overflow-y-auto bg-[var(--bg)] border border-[var(--border)] rounded-2xl shadow-2xl -translate-x-1/2 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "opacity-100 -translate-y-1/2 pointer-events-auto"
            : "opacity-0 translate-y-[calc(-50%+1.5rem)] pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div className="space-y-1">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--fg-muted)]">
              {t("contact.title")}
            </p>
            <h2 className="text-xl font-bold text-[var(--fg)]">
              {t("contact.subtitle")}
            </h2>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-[var(--fg-muted)]">{t("contact.response_time")}</span>
            </div>
          </div>
          {!sent && (
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-full text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface-1)] transition-all duration-200 -mt-1 -mr-1"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Body */}
        <div className="p-6">
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[var(--fg)] mb-1">{t("contact.success")}</p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 text-sm font-semibold text-[var(--bg)] bg-[var(--fg)] rounded-full hover:bg-[var(--warm)] transition-colors duration-300"
              >
                {t("nav.back")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="cf-name" className="block text-xs font-medium text-[var(--fg-muted)] mb-1.5">
                  {t("contact.name")}
                </label>
                <input
                  ref={firstInputRef}
                  id="cf-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="..."
                  className="w-full px-4 py-2.5 text-sm bg-[var(--surface-1)] border border-[var(--border)] rounded-xl text-[var(--fg)] placeholder:text-[var(--fg-muted)]/50 focus:outline-none focus:border-[var(--warm)] transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="cf-email" className="block text-xs font-medium text-[var(--fg-muted)] mb-1.5">
                  {t("contact.email")}
                </label>
                <input
                  id="cf-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-2.5 text-sm bg-[var(--surface-1)] border border-[var(--border)] rounded-xl text-[var(--fg)] placeholder:text-[var(--fg-muted)]/50 focus:outline-none focus:border-[var(--warm)] transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="cf-message" className="block text-xs font-medium text-[var(--fg-muted)] mb-1.5">
                  {t("contact.message")}
                </label>
                <textarea
                  id="cf-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ej: Tengo un consultorio odontológico y necesito una web..."
                  className="w-full px-4 py-2.5 text-sm bg-[var(--surface-1)] border border-[var(--border)] rounded-xl text-[var(--fg)] placeholder:text-[var(--fg-muted)]/50 focus:outline-none focus:border-[var(--warm)] transition-colors duration-200 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={sending}
                  className="group relative flex-1 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--bg)] bg-[var(--fg)] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,168,73,0.25)] disabled:opacity-60"
                >
                  <span className="absolute inset-0 bg-[var(--warm)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <span className="relative z-10 flex items-center gap-2">
                    {sending ? t("contact.sending") : t("contact.send")}
                  </span>
                </button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-1 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#25D366] border border-[#25D366]/30 bg-[#25D366]/5 rounded-full overflow-hidden transition-all duration-300 hover:bg-[#25D366] hover:text-white"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
