import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./useTextReveal.module.css";

interface UseTextRevealOptions {
  trigger?: string;
  start?: string;
  duration?: number;
  stagger?: number;
  y?: string;
  delay?: number;
}

export const useTextReveal = (options: UseTextRevealOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

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
            `<span class="${styles.word}"><span class="${styles["word-inner"]}">${word}</span></span>`
        )
        .join(" ");
    });

    const animation = gsap.fromTo(
      element.querySelectorAll(`.${styles["word-inner"]}`),
      {
        y,
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
  }, [trigger, start, duration, stagger, y, delay]);

  return elementRef;
};
