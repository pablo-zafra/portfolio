"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useInViewport = () => {
  const inViewportElemRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentElement = inViewportElemRef.current;

    if (!currentElement) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: currentElement,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none none",
        onEnter: () => {
          console.log("¡Elemento entró al viewport!");
          setIsInView(true);
        },
        onLeave: () => {
          console.log(
            "Elemento salió del viewport (desplazándose hacia abajo)."
          );
          setIsInView(false);
        },
        onEnterBack: () => {
          console.log(
            "¡Elemento volvió a entrar al viewport (desplazándose hacia arriba)!"
          );
          setIsInView(true);
        },
        onLeaveBack: () => {
          console.log(
            "Elemento salió del viewport (desplazándose hacia arriba)."
          );
          setIsInView(false);
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return { inViewportElemRef, isInView };
};
