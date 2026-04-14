import { useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactSection } from "@/components/ContactSection";

function useScrollReveal() {
  useEffect(() => {
    const selectors = [".reveal", ".reveal-left", ".reveal-right", ".stagger"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(selectors.join(","));
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function useCursorEffect() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animFrame = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      dot.style.transform = "translate(-50%, -50%) scale(2)";
      ring.style.width = "56px";
      ring.style.height = "56px";
    };

    const onMouseLeaveLink = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    document.addEventListener("mousemove", onMouseMove);
    animFrame = requestAnimationFrame(animate);

    const updateLinks = () => {
      const links = document.querySelectorAll("a, button");
      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnterLink);
        link.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    updateLinks();
    const interval = setInterval(updateLinks, 2000);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
      clearInterval(interval);
    };
  }, []);
}

function App() {
  useScrollReveal();
  useCursorEffect();

  return (
    <div className="grain relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Cursor */}
      <CustomCursor />

      {/* Ambient particles */}
      <FloatingParticles />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <PublicationsSection />
        <AwardsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
