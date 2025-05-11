"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.7,
        lerp: 3,
        // touchMultiplier: 2,
        // normalizeWheel: false,
        // infinite: false,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Opcional: Destruir la instancia de Lenis al desmontar el componente
      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
