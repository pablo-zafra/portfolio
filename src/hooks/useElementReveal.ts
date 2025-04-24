"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hook to animate elements on scroll
// This hook uses GSAP and ScrollTrigger to animate elements when they come into view.
//
// Example usage:
// const elementRef = useElementReveal({
//   duration: 1,
//   stagger: 0.2,
//   y: "50px"
// });
//
// <div ref={elementRef}>
//   <div className="reveal-element">Logo 1</div>
//   <div className="reveal-element">Logo 2</div>
//   <div className="reveal-element">Logo 3</div>
// </div>

interface UseElementRevealOptions {
  trigger?: string;
  start?: string;
  duration?: number;
  stagger?: number;
  y?: string;
  delay?: number;
  opacity?: number;
}

export const useElementReveal = (options: UseElementRevealOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    trigger = "bottom right-=100",
    start = "bottom right-=100",
    duration = 1,
    stagger = 0.2,
    y = "50px",
    delay = 0,
    opacity = 0,
  } = options;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;
    if (!element) return;

    const elements = element.querySelectorAll(".reveal-element");

    const animation = gsap.fromTo(
      elements,
      {
        y,
        opacity,
      },
      {
        y: "0",
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [trigger, start, duration, stagger, y, delay, opacity]);

  return elementRef;
};
