import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StarBackground } from "@/components/star-background";
import { PageLoader } from "@/components/page-loader";
import { LanguageProvider } from "@/components/language-context";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: {
    default: "Gastón Vigabriel — Arquitecto Web & Full Stack Developer",
    template: "%s | Gastón Vigabriel",
  },
  description:
    "Portafolio de Gastón Vigabriel. Arquitecto web freelance especializado en sitios modernos, rápidos y a medida para profesionales y negocios. Fundador de Viga Studio.",
  keywords: [
    "desarrollador web",
    "freelance",
    "Next.js",
    "React",
    "diseño web",
    "portfolio",
    "Viga Studio",
    "Buenos Aires",
    "Argentina",
    "Full Stack Developer",
  ],
  authors: [{ name: "Gastón Vigabriel", url: "https://gastonvigabriel.com" }],
  creator: "Gastón Vigabriel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://gastonvigabriel.com",
    siteName: "Gastón Vigabriel",
    title: "Gastón Vigabriel — Arquitecto Web & Full Stack Developer",
    description:
      "Portafolio de Gastón Vigabriel. Webs modernas y rápidas para profesionales y negocios. Fundador de Viga Studio.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gastón Vigabriel — Arquitecto Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gastón Vigabriel — Arquitecto Web & Full Stack Developer",
    description:
      "Webs modernas y rápidas para profesionales y negocios. Fundador de Viga Studio.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (!theme) theme = 'dark'; // Default
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[var(--bg)] text-[var(--fg)] min-h-screen antialiased">
        <LanguageProvider>
          <ThemeProvider>
            <CustomCursor />
            <PageLoader />
            <StarBackground />
            <SmoothScroll />
            <Header />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
