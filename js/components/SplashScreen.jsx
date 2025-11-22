import React, { useState, useEffect } from "react";

export const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 800);
      }, 200);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
        isExiting ? "splash-exit" : ""
      }`}
    >
      <div className="relative mb-6">
        <div className="text-white font-display font-bold text-4xl md:text-6xl tracking-tighter relative z-10">
          JP<span className="text-neutral-500">.DESIGN</span>
        </div>
      </div>
      <div className="w-64 h-[2px] bg-neutral-800 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-white transition-all duration-100 ease-out relative z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 font-mono text-neutral-500 text-xs tracking-widest">
        LOADING {Math.min(100, Math.round(progress))}%
      </div>
    </div>
  );
};
