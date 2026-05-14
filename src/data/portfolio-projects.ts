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
    slug: "arca-facturacion",
    title: "Módulo de Facturación ARCA",
    category: "Integración de Servicios Gubernamentales",
    summary:
      "Desarrollo de un microservicio crítico para la gestión de facturación electrónica integrada directamente con los servicios web de ARCA (AFIP). Maneja protocolos SOAP complejos, firma digital de certificados y garantiza la validez fiscal de las transacciones en tiempo real.",
    role: "Backend & Integration Developer",
    stack: ["Node.js", "Express", "SOAP", "Cryptography", "PostgreSQL"],
    cover: "https://brauni.io/DashBoard%20Ligth%20Brauni.png",
    details: [
      "https://cdn.tusfacturas.app/web/images/tusfacturasapp-home-screenshot.webp",
      "https://cdn.tusfacturas.app/web/images/tusfacturasapp-productos-screenshot.webp"
    ],
    accent: "cold",
    featured: true,
  },
  {
    slug: "areacam",
    title: "AREACAM",
    category: "Software de Gestión de Video (VMS)",
    summary:
      "Arquitectura de software crítica para la gestión masiva de flujos de video en tiempo real. Implementa procesamiento avanzado de señales RTSP/WebRTC con baja latencia, sistemas de detección de movimiento optimizados y una infraestructura escalable en la nube para centros de monitoreo de alta demanda.",
    role: "Arquitecto de software y desarrollo backend",
    stack: ["Node.js", "TypeScript", "Docker", "FFmpeg", "React"],
    cover: "/projects/areacam/cover.png",
    details: ["/projects/areacam/detail-1.png", "/projects/areacam/mobile.png"],
    accent: "cold",
    featured: true,
  },
  {
    slug: "app-turnos",
    title: "Sistema de Turnos Pro",
    category: "App de Gestión Multiplataforma",
    summary:
      "Ecosistema completo para la gestión de citas que incluye una API REST desarrollada con Spring Boot y aplicaciones móviles multiplataforma. Gestiona flujos complejos de disponibilidad, notificaciones push y sincronización en tiempo real.",
    role: "Full Stack & Mobile Developer",
    stack: ["Java", "Spring Boot", "React Native", "PostgreSQL", "REST API"],
    cover: "https://github.com/JIgnacioEchevarria/turns-app/raw/main/assets/screenshots/calendar.PNG",
    details: ["https://github.com/JIgnacioEchevarria/turns-app/raw/main/assets/screenshots/home.PNG"],
    accent: "cold",
    featured: true,
  },
  {
    slug: "ministock",
    title: "MiniStock",
    category: "App de gestión comercial",
    summary:
      "Ecosistema integral de gestión para PyMEs que centraliza inventario, ventas y reportes analíticos. Utiliza una arquitectura basada en Prisma para garantizar la integridad transaccional, roles de usuario granulares y un dashboard interactivo que permite la toma de decisiones basada en datos en tiempo real.",
    role: "Frontend de producto, arquitectura UI y flujos de gestion",
    stack: ["React", "Vite", "TypeScript", "Express", "Prisma"],
    cover: "/projects/ministock/cover.png",
    details: ["/projects/ministock/detail-1.png", "/projects/ministock/mobile.png"],
    accent: "cold",
    featured: false,
  },
  {
    slug: "budongsan",
    title: "Budongsan",
    category: "Web comercial inmobiliaria",
    summary:
      "Plataforma inmobiliaria de alto rendimiento con enfoque en la conversión y experiencia de usuario premium. Integra búsqueda avanzada con filtros dinámicos, gestión de propiedades destacadas mediante CMS y una dirección visual editorial diseñada para comunicar confianza y exclusividad.",
    role: "Diseño UI, frontend y experiencia comercial",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    cover: "/projects/budongsan/cover.png",
    details: ["/projects/budongsan/detail-1.png", "/projects/budongsan/mobile.png"],
    accent: "warm",
    featured: false,
  },
  {
    slug: "egao",
    title: "Egao Dental",
    category: "Web de servicios profesionales",
    summary:
      "Solución digital para clínicas odontológicas que digitaliza la captación de pacientes. Incluye narrativa de servicio persuasiva, optimización de velocidad de carga para SEO local y flujos de conversión directa hacia agenda de turnos.",
    role: "Diseño UI, frontend responsive y narrativa de servicio",
    stack: ["Next.js", "React", "Tailwind CSS", "Lenis"],
    cover: "/projects/egao/cover.png",
    details: ["/projects/egao/detail-1.png", "/projects/egao/mobile.png"],
    accent: "cold",
    featured: false,
  },
  {
    slug: "stanfit",
    title: "StanFit",
    category: "Web fitness interactiva",
    summary:
      "Web-app para gimnasios de alto rendimiento que combina gestión de clases con analítica de usuarios. Permite la visualización de métricas de entrenamiento, reserva de turnos y una experiencia interactiva fluida basada en animaciones táctiles.",
    role: "Diseño UI, frontend interactivo y experiencia de conversion",
    stack: ["Next.js", "React", "Tailwind CSS", "Zod"],
    cover: "/projects/stanfit/cover.png",
    details: ["/projects/stanfit/detail-1.png", "/projects/stanfit/mobile.png"],
    accent: "warm",
    featured: false,
  },
  {
    slug: "arquitectura",
    title: "VIGA Arquitectura",
    category: "Web comercial arquitectura",
    summary:
      "Sitio editorial minimalista para estudios de arquitectura. Prioriza la visualización de obra en alta resolución, navegación técnica por fichas de proyecto y una estética sobria que resalta la materialidad de las construcciones.",
    role: "Diseño UI, frontend responsive y direccion visual editorial",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    cover: "/projects/arquitectura/cover.png",
    details: ["/projects/arquitectura/detail-1.png", "/projects/arquitectura/mobile.png"],
    accent: "warm",
    featured: false,
  },
  {
    slug: "estudio-navarro",
    title: "Navarro & Asociados",
    category: "Web institucional legal",
    summary:
      "Presencia digital boutique para estudios jurídicos enfocados en el ecosistema startup. Transmite autoridad y modernidad mediante una arquitectura de información clara, servicios especializados y flujos de contacto profesional.",
    role: "Diseño UI, frontend responsive y narrativa institucional",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    cover: "/projects/estudio-navarro/cover.png",
    details: ["/projects/estudio-navarro/detail-1.png", "/projects/estudio-navarro/mobile.png"],
    accent: "cold",
    featured: false,
  },
  {
    slug: "portfolio-arquitect",
    title: "ARK Architecture",
    category: "Portfolio arquitectura experimental",
    summary:
      "Experimento visual que explora la intersección entre arquitectura y diseño digital oscuro. Utiliza microinteracciones fluidas y transiciones asíncronas para crear una experiencia de navegación inmersiva.",
    role: "Diseño UI, frontend creativo y microinteracciones",
    stack: ["Vite", "React", "Tailwind CSS", "Framer Motion"],
    cover: "/projects/portfolio-arquitect/cover.png",
    details: ["/projects/portfolio-arquitect/detail-1.png", "/projects/portfolio-arquitect/mobile.png"],
    accent: "warm",
    featured: false,
  },
];

export const featuredPortfolioProjects = portfolioProjects.filter(
  (project) => project.featured
);
