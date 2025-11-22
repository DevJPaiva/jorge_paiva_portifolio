import React, { useState, useEffect, useRef } from "react";
import { Icon } from "./Icon";

export const HeroScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const words = [
    "JORGE PAIVA",
    "UX/UI DESIGNER",
    "DEV FRONTEND",
    "AI ENTHUSIAST",
    "PRODUCT DESIGNER",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const { top } = container.getBoundingClientRect();
      const height = container.offsetHeight;
      const windowHeight = window.innerHeight;
      let progress = -top / (height - windowHeight);
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      const index = Math.min(
        Math.floor(progress * words.length),
        words.length - 1
      );
      setActiveIndex(index);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="relative w-full text-center px-4">
          {words.map((word, index) => (
            <h1
              key={index}
              className={`
                                font-condensed font-bold text-5xl md:text-8xl lg:text-9xl tracking-tighter uppercase
                                transition-all duration-500 ease-out absolute w-full left-0 right-0 mx-auto
                                ${
                                  index === activeIndex
                                    ? "opacity-100 translate-y-0 blur-0 text-black dark:text-white scale-100"
                                    : index < activeIndex
                                    ? "opacity-0 -translate-y-20 blur-sm text-neutral-400 dark:text-neutral-600 scale-95"
                                    : "opacity-0 translate-y-20 blur-sm text-neutral-400 dark:text-neutral-600 scale-95"
                                }
                            `}
              style={{
                top: "50%",
                transform:
                  index === activeIndex
                    ? "translateY(-50%)"
                    : index < activeIndex
                    ? "translateY(-150%)"
                    : "translateY(50%)",
                lineHeight: "1",
              }}
            >
              {word}
            </h1>
          ))}
          <h1 className="font-condensed font-bold text-5xl md:text-8xl lg:text-9xl tracking-tighter uppercase opacity-0 pointer-events-none select-none">
            JORGE PAIVA
          </h1>
        </div>
        <div
          className={`absolute bottom-10 transition-opacity duration-300 ${
            activeIndex === words.length - 1 ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="animate-bounce text-neutral-500 flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <Icon name="ArrowDown" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};
