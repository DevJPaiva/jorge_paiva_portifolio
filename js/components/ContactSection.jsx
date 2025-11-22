import React from "react";
import { Icon } from "./Icon";
import { RevealOnScroll } from "./RevealOnScroll";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-[90vh] flex flex-col justify-between py-32 container mx-auto px-6 relative z-10 bg-white dark:bg-transparent transition-colors duration-500"
    >
      <div className="flex-grow flex flex-col justify-center items-start">
        <RevealOnScroll>
          <p className="text-neutral-500 font-mono text-sm tracking-widest mb-6 uppercase">
            O que vem a seguir?
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <h2 className="font-condensed font-bold text-7xl md:text-[9rem] leading-[0.9] tracking-tighter uppercase mb-12 text-black dark:text-white">
            VAMOS{" "}
            <span className="text-neutral-400 dark:text-neutral-600">
              CRIAR
            </span>
            <br />
            ALGO{" "}
            <span className="text-neutral-400 dark:text-neutral-600">
              ÚNICO?
            </span>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <a
            href="mailto:email@exemplo.com"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-display font-bold border-b-2 border-black dark:border-white pb-2 hover:text-neutral-600 dark:hover:text-neutral-400 hover:border-neutral-600 dark:hover:border-neutral-400 transition-all cursor-pointer"
          >
            <span className="group-hover:mr-4 transition-all">
              Iniciar Projeto
            </span>
            <Icon
              name="ArrowUpRight"
              size={36}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </a>
        </RevealOnScroll>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-300 dark:border-neutral-800 pt-8">
        <RevealOnScroll delay={300}>
          <div className="text-neutral-500 text-sm">
            &copy; 2025 Seu Nome.
            <br />
            Todos os direitos reservados.
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={400}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-end text-lg font-medium">
            <a
              href="#"
              className="hover:text-neutral-500 transition-colors cursor-pointer flex items-center gap-2 group"
            >
              LinkedIn{" "}
              <Icon
                name="ArrowUpRight"
                size={18}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="#"
              className="hover:text-neutral-500 transition-colors cursor-pointer flex items-center gap-2 group"
            >
              Instagram{" "}
              <Icon
                name="ArrowUpRight"
                size={18}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="#"
              className="hover:text-neutral-500 transition-colors cursor-pointer flex items-center gap-2 group"
            >
              Behance{" "}
              <Icon
                name="ArrowUpRight"
                size={18}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
