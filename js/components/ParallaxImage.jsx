import React, { useState, useEffect, useRef } from "react";

export const ParallaxImage = ({ src, alt, className }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top, height } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && top + height > 0) {
        const scrollSpeed = 0.15;
        const yPos = (windowHeight - top) * scrollSpeed;
        setOffset(yPos - 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden h-full w-full relative ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover absolute top-[-10%] left-0 transition-transform duration-75 ease-linear will-change-transform opacity-90 dark:opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-opacity"
        style={{ transform: `translateY(${offset}px)` }}
      />
    </div>
  );
};
