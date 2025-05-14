"use client";

import { useCursorContext } from "../context/CursorContext";
import { useRef, useEffect, RefObject } from "react";

interface SetCursorOptions {
  className?: string;
  message?: string;
  icon?: string;
  bgImg?: string;
}

export const useCursor = ({
  className = "",
  message,
  icon,
  bgImg,
}: SetCursorOptions = {}): RefObject<HTMLDivElement> => {
  const { setCursorData } = useCursorContext();
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const handleMouseEnter = () => {
      setCursorData({ className, message, icon, bgImg });
    };

    const handleMouseLeave = () => {
      setCursorData({
        className: "",
        message: "",
        icon: undefined,
        bgImg: undefined,
      });
    };

    const handleMouseDown = () => {
      setCursorData({
        className: "",
        message: "",
        icon: undefined,
        bgImg: undefined,
      });
    };

    const handleMouseUp = () => {
      setCursorData({
        className: "",
        message: "",
        icon: undefined,
        bgImg: undefined,
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("mouseup", handleMouseUp);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousedown", handleMouseDown);
      element.removeEventListener("mouseup", handleMouseUp);
    };
  }, [className, message, icon, bgImg, setCursorData]);

  return elementRef as RefObject<HTMLDivElement>;
};

export default useCursor;
