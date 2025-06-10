"use client";
import { useEffect, useRef, createContext, useContext } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const LenisContext = createContext<Lenis | null>(null);

export const ScrollControll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const refreshLenis = () => {
    if (lenisRef.current) {
      lenisRef.current.resize();
    }
  };

  const refreshScroll = () => {
    if (lenisRef.current) {
      refreshLenis();
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          lenisRef.current.scrollTo(0, { immediate: true });
          lenisRef.current.scrollTo(targetElement, { offset: 0 });
        }
      } else {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      refreshLenis();
    }
  };

  const debouncedRefreshLenis = useDebouncedCallback(refreshLenis, 200);
  const debouncedRefreshScroll = useDebouncedCallback(refreshScroll, 200);

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
        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
          resizeObserverRef.current = null;
        }
        debouncedRefreshLenis.cancel();
      };
    }
  }, [debouncedRefreshLenis]);

  useEffect(() => {
    if (!lenisRef.current || !contentRef.current) return;

    if (!resizeObserverRef.current) {
      resizeObserverRef.current = new ResizeObserver(() => {
        debouncedRefreshLenis();
      });
    }

    resizeObserverRef.current.observe(contentRef.current);

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [debouncedRefreshLenis]);

  useEffect(() => {
    debouncedRefreshScroll();
  }, [pathname, debouncedRefreshScroll]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      <div ref={contentRef}>{children}</div>
    </LenisContext.Provider>
  );
};

export const useLenis = () => {
  return useContext(LenisContext);
};
