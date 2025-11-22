import React from "react";
import { Icon } from "./Icon";
import { RevealOnScroll } from "./RevealOnScroll";
import { ParallaxImage } from "./ParallaxImage";

export const ProjectsSection = ({ projects }) => {
  return (
    <section
      id="work"
      className="py-24 container mx-auto px-6 bg-neutral-50 dark:bg-[#0a0a0a] relative z-10 transition-colors duration-500"
    >
      <div className="flex items-end justify-between mb-16 border-b border-neutral-300 dark:border-neutral-800 pb-6">
        <RevealOnScroll>
          <h2 className="text-4xl font-display font-bold">
            Projetos Selecionados
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <span className="text-neutral-500 hidden md:block">2021 — 2025</span>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <RevealOnScroll
            key={project.id}
            delay={index * 150}
            className={index % 2 !== 0 ? "md:mt-24" : ""}
          >
            <div className="group cursor-pointer">
              <div className="rounded-lg overflow-hidden mb-6 aspect-[4/3] relative bg-neutral-200 dark:bg-neutral-900">
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-all z-10 pointer-events-none"></div>

                <ParallaxImage src={project.image} alt={project.title} />

                <div className="absolute bottom-4 right-4 bg-black text-white dark:bg-white dark:text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-lg">
                  <Icon name="ArrowRight" size={20} />
                </div>
              </div>

              <div className="flex justify-between items-start border-t border-neutral-300 dark:border-neutral-800 pt-4 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-sm">{project.category}</p>
                </div>
                <span className="text-neutral-500 dark:text-neutral-600 font-mono text-sm">
                  {project.year}
                </span>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};
