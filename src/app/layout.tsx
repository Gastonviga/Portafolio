import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StarBackground } from "@/components/star-background";
import { PageLoader } from "@/components/page-loader";
import { LanguageProvider } from "@/components/language-context";

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
    <html lang="es">
      <body className="bg-[var(--bg)] text-[var(--fg)] min-h-screen antialiased">
        <LanguageProvider>
          <PageLoader />
          <StarBackground />
          <SmoothScroll />
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
