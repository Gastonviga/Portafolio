import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon = ({ name, className = "w-5 h-5" }: TechIconProps) => {
  const icons: Record<string, React.ReactNode> = {
    "React": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="2"/><path d="M12 12c-3.1 0-6.1-.8-8-2 2 1.2 5 2 8 2 3.1 0 6.1-.8 8-2-2 1.2-5 2-8 2z"/><path d="M12 12c.5-3 .8-6-1-8 .8 2 .5 5-1 8-.5 3-.8 6 1 8-.8-2-.5-5 1-8z"/><path d="M12 12c2.5-1.5 5-3 6-5.5-1.5 2.5-4 4.5-6 6-2.5 1.5-5 3-6 5.5 1.5-2.5 4-4.5 6-6z"/>
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M13 3v6l-4-4v14l11-10h-7l4-6z"/>
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10z"/><path d="M7 12l3 3 7-7"/>
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/><path d="M12 22V12"/><path d="M2 7l10 5 10-5"/>
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/><path d="M7 8h4"/><path d="M9 8v8"/><path d="M13 12l2 2 2-2"/><path d="M15 8v8"/>
      </svg>
    ),
    "Docker": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 7.7c-1 .1-1.3-.3-1.6-.6-.4-.3-.8-.3-1.2-.2-.4.1-.7.4-.9.8-.2.4-.2.8-.2 1.2 0 .4.2.8.5 1.1.3.3.7.4 1.1.4h.1c.4 0 .8-.2 1.1-.5.3-.3.4-.7.4-1.1s-.2-.8-.5-1.1z"/><path d="M2 13h20"/><path d="M4 13v4h4v-4"/><path d="M9 13v4h4v-4"/><path d="M14 13v4h4v-4"/>
      </svg>
    ),
    "Framer Motion": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2l10 10-10 10-10-10z"/><path d="M12 22V2"/><path d="M2 12h20"/>
      </svg>
    ),
    "Express": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    "Prisma": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 3h18v18H3z"/><path d="M8 8l8 8"/><path d="M16 8l-8 8"/>
      </svg>
    ),
    "Vite": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    "FFmpeg": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2v20M2 12h20M12 2l10 10-10 10L2 12 12 2z"/>
      </svg>
    ),
    "Python": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2v10m0 0l-4-4m4 4l4-4M2 12h20"/>
      </svg>
    ),
    "SQL": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3z"/><path d="M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3"/>
      </svg>
    ),
    "Zod": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    "Java": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M7 15c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5-1.5-2.5-3-2.5-3 1-3 2.5z"/><path d="M12 12c0-3 2-5 5-5"/><path d="M12 12c0 3-2 5-5 5"/><path d="M12 12c3 0 5-2 5-5"/><path d="M12 12c-3 0-5 2-5 5"/>
      </svg>
    ),
    "Spring Boot": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/><path d="M12 22V12"/><path d="M12 12L2 7"/><path d="M12 12l10-5"/>
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 18V6"/><path d="M16 10l-4 4-4-4"/>
      </svg>
    ),
    "SOAP": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 4h16v16H4z"/><path d="M9 9h6v6H9z"/>
      </svg>
    ),
    "OpenCV": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/>
      </svg>
    ),
  };

  return icons[name] || (
    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-[var(--surface-2)] rounded">
      {name}
    </span>
  );
};
