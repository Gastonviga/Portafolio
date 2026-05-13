import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";
import { SectionSeparator } from "@/components/section-separator";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionSeparator />
      <About />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <Services />
      <Footer />
    </>
  );
}
