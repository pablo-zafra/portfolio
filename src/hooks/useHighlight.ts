import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./useHighlight.module.css";

interface HighlightAnimationOptions {
  textColor?: string;
  underlineColor?: string;
}

export const useHighlight = (options?: HighlightAnimationOptions) => {
  const elementRef = useRef<HTMLElement>(null);
  const { textColor, underlineColor } = options || {};

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!element.classList.contains(styles["custom-highlight"])) {
      element.classList.add(styles["custom-highlight"]);
    }

    // Añadir el atributo highlight-text con el contenido del elemento
    const text = element.textContent || "";
    element.setAttribute("highlight-text", text);

    if (textColor) {
      element.style.color = textColor;
    }
    if (underlineColor) {
      element.style.setProperty("--highlight-color", underlineColor);
    }

    gsap.to(element, {
      keyframes: [
        {
          "--animate-padding-X": "0.3em",
          "padding-left": "0.3em",
          "padding-right": "0.3em",
          "--animate-width": "20%",
          duration: 0.3,
        },
        {
          "--animate-width": "100%",
          duration: 0.7,
        },
      ],
      scrollTrigger: {
        trigger: element,
        start: "bottom 98%",
        end: "bottom 65%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getById(element.id)?.kill();
      gsap.killTweensOf(element);
      element.classList.remove(styles["custom-highlight"]);
      element.removeAttribute("highlight-text");
      if (textColor) {
        element.style.removeProperty("color");
      }
      if (underlineColor) {
        element.style.removeProperty("--highlight-color");
      }
    };
  }, [textColor, underlineColor]);

  return elementRef;
};
