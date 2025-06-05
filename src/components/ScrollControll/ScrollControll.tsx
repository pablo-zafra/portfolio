"use client";
import { useEffect, useRef, createContext, useContext } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

const LenisContext = createContext<Lenis | null>(null);

export const ScrollControll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!lenisRef.current) {
      const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.7,
        lerp: 0.1,
      });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        lenisRef.current = null;
      };
    }
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.resize();

      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          lenisRef.current.scrollTo(targetElement, { offset: 0 });
        }
      } else {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => {
  return useContext(LenisContext);
};
