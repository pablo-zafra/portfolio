import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseInViewOptions {
  start?: string;
  end?: string;
}

export const useInView = ({
  start = "top bottom",
  end = "bottom top",
}: UseInViewOptions = {}) => {
  const inViewportElemRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentElement = inViewportElemRef.current;

    if (!currentElement) return;

    let scrollTriggerInstance: ScrollTrigger | null = null;

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: currentElement,
      start: start,
      end: end,
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
  }, [start, end]);

  return { inViewportElemRef, isInView };
};
