"use client";
import { useCallback, useEffect } from "react";
import Lenis from "lenis";
import { useScrollContext } from "../../context"; // Asegúrate de que esta ruta y nombre sean correctos

const ScrollControll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setScrollData } = useScrollContext();

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

      lenis.on("scroll", ({ velocity, direction }) => {
        setScrollData({ speed: velocity, direction: direction });
      });

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return <>{children}</>;
};

export default ScrollControll;
