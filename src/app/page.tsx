import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
