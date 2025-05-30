import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseElementRevealOptions {
  trigger?: string;
  start?: string;
  duration?: number;
  stagger?: number;
  y?: string;
  delay?: number;
  opacity?: number;
  animation?: "fadeInUp" | "fadeIn" | "scaleIn";
}

interface GSAPFromVars {
  y?: string;
  opacity?: number;
  scale?: number;
  width?: number | string;
  height?: number | string;
}

interface GSAPToVars extends GSAPFromVars {
  duration: number;
  stagger: number;
  delay: number;
  ease: string;
  scrollTrigger: {
    trigger: HTMLDivElement;
    start: string;
  };
}

export const useElementReveal = (options: UseElementRevealOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    start = "bottom right-=100",
    duration = 1,
    stagger = 0.2,
    y = "50px",
    delay = 0,
    opacity = 0,
    animation = "fadeInUp",
  } = options;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;
    if (!element) return;

    const elements = element.querySelectorAll(".reveal-element");

    let fromVars: GSAPFromVars = {};
    let toVars: GSAPToVars = {
      duration,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start,
      },
    };

    switch (animation) {
      case "fadeInUp":
        fromVars = {
          y,
          opacity,
        };
        toVars = {
          ...toVars,
          y: "0",
          opacity: 1,
        };
        break;

      case "fadeIn":
        fromVars = {
          opacity,
        };
        toVars = {
          ...toVars,
          opacity: 1,
        };
        break;

      case "scaleIn":
        fromVars = {
          opacity,
          scale: 0,
        };
        toVars = {
          ...toVars,
          opacity: 1,
          scale: 1,
        };
        break;
    }

    const tween = gsap.fromTo(elements, fromVars, toVars);

    return () => {
      tween.kill();
    };
  }, [start, duration, stagger, y, delay, opacity, animation]);

  return elementRef;
};
