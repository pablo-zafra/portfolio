"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// This hook is used to create a text reveal animation using GSAP and ScrollTrigger.
// Each <span className="reveal-text"> element inside the heading or paragraph will be animated
//
// Example usage:
//
// const textRef = useTextReveal({
//   trigger: ".trigger-element",
//   start: "top center+=100",
//   duration: 1,
//   stagger: 0.05,
//   y: "100%",
// });
//
// <h1 ref={textRef} className="text-8xl/tight font-semibold z-1">
//   <span className="reveal-text">Hi! </span>
//     <Image></Image>
//   <span className="reveal-text"> I am Pablo:</span>
// </h1>
//

interface UseTextRevealOptions {
  trigger?: string;
  start?: string;
  duration?: number;
  stagger?: number;
  y?: string;
  delay?: number;
}

export const useTextReveal = (options: UseTextRevealOptions = {}) => {
  const elementRef = useRef<HTMLHeadingElement | HTMLParagraphElement>(null);

  const {
    trigger = "bottom right-=100",
    start = "bottom right-=100",
    duration = 1,
    stagger = 0.05,
    y = "100%",
    delay = 0,
  } = options;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;
    if (!element) return;

    const lines = element.querySelectorAll(".reveal-text");
    lines.forEach((line) => {
      const words = line.textContent?.split(" ") || [];
      line.innerHTML = words
        .map(
          (word) =>
            `<span class="word"><span class="word-inner">${word}</span></span>`
        )
        .join(" ");
    });

    const animation = gsap.fromTo(
      element.querySelectorAll(".word-inner"),
      {
        y, // usar la variable y en lugar del valor fijo
        opacity: 0,
      },
      {
        y: "0%",
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
  }, [trigger, start, duration, stagger, y, delay]); // add delay to dependencies

  return elementRef;
};
