"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface UseInViewOptions {
  offsetTop?: number;
  offsetBottom?: number;
}

gsap.registerPlugin(ScrollTrigger);

export const useInView = ({
  offsetTop = 0,
  offsetBottom = 0,
}: UseInViewOptions = {}) => {
  const inViewportElemRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentElement = inViewportElemRef.current;

    if (!currentElement) return;

    let scrollTriggerInstance: ScrollTrigger | null = null;

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: currentElement,
      start: `top bottom+=${offsetTop}`,
      end: `bottom top-=${offsetBottom}`,
      onEnter: () => {
        setIsInView(true);
      },
      onLeave: () => {
        setIsInView(false);
      },
      onEnterBack: () => {
        setIsInView(true);
      },
      onLeaveBack: () => {
        setIsInView(false);
      },
    });

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        scrollTriggerInstance = null;
      }
    };
  }, [offsetTop, offsetBottom]);

  return { inViewportElemRef, isInView };
};
