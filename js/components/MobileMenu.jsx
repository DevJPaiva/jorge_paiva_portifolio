import React from "react";
import { Icon } from "./Icon";

export const MobileMenu = ({ isOpen, onClose, onScrollToSection }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-neutral-950 z-50 flex flex-col justify-center items-center gap-8 text-2xl font-display animate-fade-up text-black dark:text-white">
      <button
        className="absolute top-8 right-6 cursor-pointer"
        onClick={onClose}
      >
        <Icon name="X" size={28} />
      </button>
      <button
        className="cursor-pointer"
        onClick={() => onScrollToSection("work")}
      >
        Trabalhos
      </button>
      <button
        className="cursor-pointer"
        onClick={() => onScrollToSection("about")}
      >
        Sobre
      </button>
      <button
        className="cursor-pointer"
        onClick={() => onScrollToSection("contact")}
      >
        Contato
      </button>
    </div>
  );
};
