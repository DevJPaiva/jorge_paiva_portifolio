import React from "react";
import { Icon } from "./Icon";

export const Navigation = ({
  scrolled,
  theme,
  onToggleTheme,
  onMenuToggle,
  isMenuOpen,
  onScrollToSection,
}) => {
  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled
          ? "opacity-100 pointer-events-auto top-0 bg-white/80 dark:bg-black/50 backdrop-blur-md py-4 border-b border-neutral-200 dark:border-neutral-800"
          : "opacity-100 py-8 text-black dark:text-white mix-blend-difference"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className={`text-xl font-bold tracking-tighter font-display z-50 relative cursor-pointer transition-colors ${
            scrolled
              ? "text-black dark:text-white"
              : "text-white mix-blend-difference"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          JP<span className="text-neutral-500">.DESIGN</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <div
            className={`text-sm font-medium tracking-wide flex gap-8 ${
              scrolled
                ? "text-neutral-600 dark:text-neutral-300"
                : "text-neutral-300 mix-blend-difference"
            }`}
          >
            <button
              onClick={() => onScrollToSection("work")}
              className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              Trabalhos
            </button>
            <button
              onClick={() => onScrollToSection("about")}
              className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => onScrollToSection("contact")}
              className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              Contato
            </button>
          </div>
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              scrolled
                ? "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-black dark:text-white"
                : "text-white mix-blend-difference"
            }`}
          >
            <Icon name={theme === "dark" ? "Sun" : "Moon"} size={20} />
          </button>
        </div>
        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              scrolled
                ? "text-black dark:text-white"
                : "text-white mix-blend-difference"
            }`}
          >
            <Icon name={theme === "dark" ? "Sun" : "Moon"} size={24} />
          </button>
          <button
            className={`transition-colors cursor-pointer ${
              scrolled
                ? "text-black dark:text-white"
                : "text-white mix-blend-difference"
            }`}
            onClick={onMenuToggle}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};
