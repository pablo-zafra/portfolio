"use client";
import { useEffect, useRef, createContext, useContext, useState } from "react"; // Importa useState
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface LenisContextType {
  lenisInstance: Lenis | null;
  isLenisReady: boolean;
  timeToRefreshGsap: boolean;
}

// Inicializa el contexto con un objeto que incluye el estado de "listo"
const LenisContext = createContext<LenisContextType>({
  lenisInstance: null,
  isLenisReady: false,
  timeToRefreshGsap: false,
});

export const ScrollControll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [isLenisReady, setIsLenisReady] = useState(false);
  const [timeToRefreshGsap, setTimeToRefreshGsap] = useState(false);
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const refreshLenis = () => {
    if (lenisRef.current) {
      lenisRef.current.resize();
    }
  };

  const refresGsapOrder = () => {
    setTimeout(() => {
      setTimeToRefreshGsap(true);
    }, 200);
    setTimeout(() => {
      setTimeToRefreshGsap(false);
    }, 400);
  };

  const refreshScroll = () => {
    if (lenisRef.current) {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          lenisRef.current.scrollTo(0, { immediate: true });
          refresGsapOrder();
          refreshLenis();
          lenisRef.current.scrollTo(targetElement, { offset: 0 });
        }
      } else {
        lenisRef.current.scrollTo(0, { immediate: true });
        refresGsapOrder();
        refreshLenis();
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
        timeToRefreshGsap,
      }}
    >
      <div ref={contentRef}>{children}</div>
    </LenisContext.Provider>
  );
};

export const useLenis = () => {
  return useContext(LenisContext);
};

//===================================================================

// "use client";
// import { useEffect, useRef, createContext, useContext, useState } from "react"; // Importa useState
// import Lenis from "lenis";
// import { usePathname } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";

// interface LenisContextType {
//   lenisInstance: Lenis | null;
//   timeToRefreshGsap: boolean;
// }

// // Inicializa el contexto con un objeto que incluye el estado de "listo"
// const LenisContext = createContext<LenisContextType>({
//   lenisInstance: null,
//   timeToRefreshGsap: false,
// });

// export const ScrollControll: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const lenisRef = useRef<Lenis | null>(null);
//   const [timeToRefreshGsap, setTimeToRefreshGsap] = useState(false);
//   const pathname = usePathname();
//   const contentRef = useRef<HTMLDivElement>(null);
//   const resizeObserverRef = useRef<ResizeObserver | null>(null); //No es un resize del viewport sino del elemento

//   const refreshLenis = () => {
//     if (lenisRef.current) {
//       lenisRef.current.resize();
//     }
//   };

//   const refresGsapOrder = () => {
//     setTimeout(() => {
//       setTimeToRefreshGsap(true);
//     }, 200);
//     setTimeout(() => {
//       setTimeToRefreshGsap(false);
//     }, 400);
//   };

//   const refreshScroll = () => {
//     if (lenisRef.current) {
//       refreshLenis();
//       if (window.location.hash) {
//         const id = window.location.hash.substring(1);
//         const targetElement = document.getElementById(id);
//         if (targetElement) {
//           lenisRef.current.scrollTo(0, { immediate: true });
//           refresGsapOrder();
//           refreshLenis();
//           lenisRef.current.scrollTo(targetElement, { offset: 0 });
//         }
//       } else {
//         lenisRef.current.scrollTo(0, { immediate: true });
//         refreshLenis();
//       }
//     }
//   };

//   const debouncedRefreshLenis = useDebouncedCallback(refreshLenis, 200);
//   const debouncedRefreshScroll = useDebouncedCallback(refreshScroll, 200);

//   useEffect(() => {
//     // Init Lenis
//     if (typeof window === "undefined") {
//       // console.log(
//       //   "ScrollControll: Running on server, Lenis won't initialize yet."
//       // );
//       return;
//     }

//     if (!lenisRef.current) {
//       const lenis = new Lenis({
//         duration: 1.2,
//         smoothWheel: true,
//         wheelMultiplier: 0.7,
//         lerp: 0.1,
//       });
//       lenisRef.current = lenis;

//       const raf = (time: number) => {
//         lenis.raf(time);
//         requestAnimationFrame(raf);
//       };

//       requestAnimationFrame(raf);

//       return () => {
//         lenis.destroy();
//         lenisRef.current = null;
//         if (resizeObserverRef.current) {
//           resizeObserverRef.current.disconnect();
//           resizeObserverRef.current = null;
//         }
//         debouncedRefreshLenis.cancel();
//       };
//     }
//   }, [debouncedRefreshLenis]);

//   useEffect(() => {
//     // Para refrescar cuando cambie el tamaño de contenido
//     if (!lenisRef.current || !contentRef.current) return;

//     if (!resizeObserverRef.current) {
//       resizeObserverRef.current = new ResizeObserver(() => {
//         debouncedRefreshLenis();
//       });
//     }

//     resizeObserverRef.current.observe(contentRef.current);

//     return () => {
//       if (resizeObserverRef.current) {
//         resizeObserverRef.current.disconnect();
//       }
//     };
//   }, [debouncedRefreshLenis]);

//   useEffect(() => {
//     debouncedRefreshScroll();
//   }, [pathname, debouncedRefreshScroll]);

//   return (
//     <LenisContext.Provider
//       value={{
//         lenisInstance: lenisRef.current,
//         timeToRefreshGsap,
//       }}
//     >
//       <div ref={contentRef}>{children}</div>
//     </LenisContext.Provider>
//   );
// };

// export const useLenis = () => {
//   return useContext(LenisContext);
// };
