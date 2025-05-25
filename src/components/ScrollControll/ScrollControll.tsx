"use client";
import { useCallback, useEffect } from "react";
import Lenis from "lenis";

const ScrollControll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.7,
        lerp: 3,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return <>{children}</>;
};

export default ScrollControll;
