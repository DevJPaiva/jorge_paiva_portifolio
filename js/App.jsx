import React, { useState } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Navigation } from "./components/Navigation";
import { MobileMenu } from "./components/MobileMenu";
import { HeroScroll } from "./components/HeroScroll";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { SplashScreen } from "./components/SplashScreen";
import { useTheme } from "./hooks/useTheme";
import { useScroll } from "./hooks/useScroll";
import { useMenu } from "./hooks/useMenu";
import { projects } from "../data/projects";
import { experience } from "../data/experience";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const scrolled = useScroll();
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <>
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}

      <CustomCursor />

      <div
        className={`min-h-screen bg-white text-neutral-900 dark:bg-dark dark:text-neutral-100 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-500 ${
          loading ? "h-screen overflow-hidden" : ""
        }`}
      >
        <div className="grain-overlay"></div>

        <Navigation
          scrolled={scrolled}
          theme={theme}
          onToggleTheme={toggleTheme}
          onMenuToggle={toggleMenu}
          isMenuOpen={isMenuOpen}
          onScrollToSection={scrollToSection}
        />

        <MobileMenu
          isOpen={isMenuOpen}
          onClose={closeMenu}
          onScrollToSection={scrollToSection}
        />

        <HeroScroll />
        <ProjectsSection projects={projects} />
        <AboutSection experience={experience} />
        <ContactSection />
      </div>
    </>
  );
};
