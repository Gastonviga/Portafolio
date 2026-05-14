import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StarBackground } from "@/components/star-background";
import { PageLoader } from "@/components/page-loader";
import { LanguageProvider } from "@/components/language-context";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Ema | Desarrollador Web & IA",
  description: "Portafolio de Ema - Estudiante de Inteligencia Artificial y desarrollador web especializado en crear experiencias digitales innovadoras.",
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
