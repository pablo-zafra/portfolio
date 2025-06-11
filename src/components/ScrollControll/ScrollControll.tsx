"use client";
import { useEffect, useRef, createContext, useContext, useState } from "react"; // Importa useState
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDebouncedCallback } from "use-debounce";

gsap.registerPlugin(ScrollTrigger);

interface LenisContextType {
  lenisInstance: Lenis | null;
  isLenisReady: boolean;
  refreshScrollTrigger: (options?: { duration?: number }) => void;
}

// Inicializa el contexto con un objeto que incluye el estado de "listo"
const LenisContext = createContext<LenisContextType>({
  lenisInstance: null,
  isLenisReady: false,
  refreshScrollTrigger: () => {
    ScrollTrigger.refresh();
  },
});

export const ScrollControll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [isLenisReady, setIsLenisReady] = useState(false);
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const refreshLenis = () => {
    if (lenisRef.current) {
      lenisRef.current.resize();
    }
  };

  const refreshScrollTrigger = ({
    duration = 0,
  }: { duration?: number } = {}) => {
    if (duration > 0) {
      setTimeout(() => {
        ScrollTrigger.refresh();
        // console.log("refreshScrollTrigger done after duration");
      }, duration * 1000);
    } else {
      ScrollTrigger.refresh();
      // console.log("refreshScrollTrigger done immediately");
    }
  };

  const refreshScroll = async () => {
    if (lenisRef.current) {
      try {
        if (window.location.hash) {
          const id = window.location.hash.substring(1);
          const targetElement = document.getElementById(id);

          if (targetElement) {
            await lenisRef.current.scrollTo(0, { immediate: true });
            ScrollTrigger.refresh();
            refreshLenis();
            await lenisRef.current.scrollTo(targetElement, { offset: 0 });
          }
        } else {
          await lenisRef.current.scrollTo(0, { immediate: true });
          ScrollTrigger.refresh();
          refreshLenis();
        }
      } catch (error) {
        console.error("Error durante el refreshScroll:", error);
      }
    }
  };

  const debouncedRefreshLenis = useDebouncedCallback(refreshLenis, 200);
  const debouncedRefreshScroll = useDebouncedCallback(refreshScroll, 200);

  // Inicia lenis
  useEffect(() => {
    if (!lenisRef.current) {
      const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.7,
        lerp: 0.1,
      });
      lenisRef.current = lenis;
      setIsLenisReady(true); // Marca Lenis como listo una vez inicializado en su context

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        lenisRef.current = null;
        setIsLenisReady(false);
        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
          resizeObserverRef.current = null;
        }
        debouncedRefreshLenis.cancel();
      };
    }
  }, [debouncedRefreshLenis]);

  // Prepara el refresh cuando el dom cambie su tamaño (lenis se supone que tiene autorefresh pero no va bien)
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
    <LenisContext.Provider
      value={{
        lenisInstance: lenisRef.current,
        isLenisReady,
        refreshScrollTrigger,
      }}
    >
      <div ref={contentRef}>{children}</div>
    </LenisContext.Provider>
  );
};

export const useLenis = () => {
  return useContext(LenisContext);
};
