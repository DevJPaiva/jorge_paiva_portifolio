import React from "react";
import { Icon } from "./Icon";
import { RevealOnScroll } from "./RevealOnScroll";

export const AboutSection = ({ experience }) => {
  return (
    <section
      id="about"
      className="py-24 bg-neutral-100 dark:bg-neutral-900/30 relative z-10 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-24 z-20 bg-neutral-100/80 dark:bg-[#0d0d0d]/80 backdrop-blur-sm py-4 -my-4">
              <RevealOnScroll>
                <h2 className="text-4xl font-display font-bold mb-4">
                  Experiência
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed text-sm">
                  Minha jornada é marcada pela busca constante entre a
                  funcionalidade lógica e a beleza visual.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-black dark:text-white border-b border-black dark:border-white pb-1 hover:text-neutral-600 dark:hover:text-neutral-300 hover:border-neutral-600 dark:hover:border-neutral-300 transition-colors group cursor-pointer text-sm"
                >
                  Baixar Currículo{" "}
                  <Icon
                    name="ExternalLink"
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </RevealOnScroll>
            </div>
          </div>

          <div className="lg:col-span-8 relative z-10">
            <div className="space-y-0">
              {experience.map((job, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                  <div className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/20 transition-all px-4 -mx-4 rounded-lg cursor-pointer bg-neutral-100 dark:bg-transparent">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white mb-1 group-hover:text-neutral-700 dark:group-hover:text-neutral-200">
                        {job.company}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-500">
                        {job.role}
                      </p>
                    </div>
                    <span className="text-neutral-500 dark:text-neutral-600 font-mono mt-2 md:mt-0">
                      {job.date}
                    </span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-neutral-300 dark:border-neutral-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <RevealOnScroll delay={200}>
                  <div>
                    <h4 className="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-6 pb-2 border-b border-neutral-300 dark:border-neutral-800">
                      Expertise
                    </h4>
                    <ul className="space-y-3 text-neutral-800 dark:text-neutral-200 text-base font-medium">
                      <li>Product Design</li>
                      <li>UI Design</li>
                      <li>Design Systems</li>
                      <li>Prototyping</li>
                    </ul>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                  <div>
                    <h4 className="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-6 pb-2 border-b border-neutral-300 dark:border-neutral-800">
                      Tools
                    </h4>
                    <ul className="space-y-3 text-neutral-800 dark:text-neutral-200 text-base font-medium">
                      <li>Figma</li>
                      <li>Adobe Creative Suite</li>
                      <li>Principle</li>
                      <li>Webflow</li>
                    </ul>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
