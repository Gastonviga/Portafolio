export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  summary: string;
  role: string;
  stack: string[];
  cover: string;
  details: string[];
  accent: "warm" | "cold";
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "budongsan",
    title: "Budongsan",
    category: "Web comercial inmobiliaria",
    summary:
      "Landing inmobiliaria premium pensada para comunicar confianza, busqueda rapida y propiedades destacadas con una direccion visual sobria.",
    role: "Diseño UI, frontend y experiencia comercial",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    cover: "/projects/budongsan/cover.png",
    details: ["/projects/budongsan/detail-1.png", "/projects/budongsan/mobile.png"],
    accent: "warm",
    featured: true,
  },
  {
    slug: "egao",
    title: "Egao Dental",
    category: "Web de servicios profesionales",
    summary:
      "Sitio para clinica dental con foco en calidez, claridad del mensaje y conversion hacia agenda de consultas.",
    role: "Diseño UI, frontend responsive y narrativa de servicio",
    stack: ["Next.js", "React", "Tailwind CSS", "Lenis"],
    cover: "/projects/egao/cover.png",
    details: ["/projects/egao/detail-1.png", "/projects/egao/mobile.png"],
    accent: "cold",
    featured: true,
  },
  {
    slug: "arquitectura",
    title: "VIGA Arquitectura",
    category: "Web comercial arquitectura",
    summary:
      "Sitio editorial para estudio de arquitectura con una primera impresion fuerte, obras destacadas y navegacion tecnica.",
    role: "Diseño UI, frontend responsive y direccion visual editorial",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    cover: "/projects/arquitectura/cover.png",
    details: ["/projects/arquitectura/detail-1.png", "/projects/arquitectura/mobile.png"],
    accent: "warm",
  },
  {
    slug: "estudio-navarro",
    title: "Navarro & Asociados",
    category: "Web institucional legal",
    summary:
      "Web boutique para estudio juridico orientado a startups, con propuesta clara, servicios, proceso y confianza profesional.",
    role: "Diseño UI, frontend responsive y narrativa institucional",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    cover: "/projects/estudio-navarro/cover.png",
    details: ["/projects/estudio-navarro/detail-1.png", "/projects/estudio-navarro/mobile.png"],
    accent: "cold",
  },
  {
    slug: "stanfit",
    title: "StanFit",
    category: "Web fitness interactiva",
    summary:
      "Experiencia para gimnasio de alto rendimiento con agenda de clases, entrenadores, metricas y herramientas de analisis.",
    role: "Diseño UI, frontend interactivo y experiencia de conversion",
    stack: ["Next.js", "React", "Tailwind CSS", "Zod"],
    cover: "/projects/stanfit/cover.png",
    details: ["/projects/stanfit/detail-1.png", "/projects/stanfit/mobile.png"],
    accent: "warm",
  },
  {
    slug: "ministock",
    title: "MiniStock",
    category: "App de gestion comercial",
    summary:
      "Sistema para comercios con dashboard operativo, inventario, control de stock, productos, ventas y roles de usuario.",
    role: "Frontend de producto, arquitectura UI y flujos de gestion",
    stack: ["React", "Vite", "TypeScript", "Express", "Prisma"],
    cover: "/projects/ministock/cover.png",
    details: ["/projects/ministock/detail-1.png", "/projects/ministock/mobile.png"],
    accent: "cold",
  },
  {
    slug: "portfolio-arquitect",
    title: "ARK Architecture",
    category: "Portfolio arquitectura experimental",
    summary:
      "Portfolio visual para estudio de arquitectura con direccion de arte oscura, transiciones suaves y fichas de proyectos.",
    role: "Diseño UI, frontend creativo y microinteracciones",
    stack: ["Vite", "React", "Tailwind CSS", "Framer Motion"],
    cover: "/projects/portfolio-arquitect/cover.png",
    details: ["/projects/portfolio-arquitect/detail-1.png", "/projects/portfolio-arquitect/mobile.png"],
    accent: "warm",
  },
];

export const featuredPortfolioProjects = portfolioProjects.filter(
  (project) => project.featured
);
