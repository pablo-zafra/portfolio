import { useCursorContext } from "../../context";
import { useBreakpoints } from "../../hooks";
import { useEffect, useRef } from "react";

export const useCursorForllower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { cursorData } = useCursorContext();
  const { className, message, icon } = cursorData;
  const { isXL, isTouchDevice } = useBreakpoints();

  useEffect(() => {
    const cursorElement = cursorRef.current;
    if (!cursorElement) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      cursorElement.style.translate = `calc(-60% + ${x}px) calc(-75% + ${y}px)`;
    };

    if (isXL) {
      window.addEventListener("mousemove", moveCursor);
    } else {
      window.removeEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isXL]);

  return {
    cursorRef,
    className,
    message,
    icon,
    isTouchDevice,
    isXL,
  };
};
