import React from "react";

export const Icon = ({ name, size = 24, className = "" }) => {
  if (name === "Linkedin") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    );
  }
  const iconMap = {
    Menu: "menu",
    X: "close",
    ArrowDown: "arrow_downward",
    ArrowRight: "arrow_forward",
    ExternalLink: "open_in_new",
    Mail: "mail",
    Github: "code",
    Sun: "light_mode",
    Moon: "dark_mode",
    ArrowUpRight: "north_east",
  };
  const materialName = iconMap[name] || name.toLowerCase();
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      {materialName}
    </span>
  );
};
