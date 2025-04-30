"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        duration: 2,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        // touchMultiplier: 2,
        // normalizeWheel: false,
        // infinite: false,
      });

      function raf(time) {
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
