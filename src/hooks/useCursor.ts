"use client";

import { useCursorContext } from "../context/CursorContext";
import { useRef, useEffect, RefObject } from "react";
import { useBreakpoints } from "../hooks";

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
  const { isXL } = useBreakpoints();
  let isMouseOver = false;
  let isMouseDown = false;

  const applyCursorEffect = () => {
    setCursorData({ className, message, icon, bgImg });
  };

  const resetCursorEffect = () => {
    setCursorData({
      className: "",
      message: "",
      icon: undefined,
      bgImg: undefined,
    });
  };

  const handleMouseEnter = () => {
    isMouseOver = true;
    if (!isMouseDown) {
      applyCursorEffect();
    }
  };

  const handleMouseLeave = () => {
    isMouseOver = false;
    resetCursorEffect();
  };

  const handleMouseDown = () => {
    isMouseDown = true;
    resetCursorEffect();
  };

  const handleMouseUp = () => {
    isMouseDown = false;
    if (isMouseOver) {
      applyCursorEffect();
    }
  };

  const applyListeners = (element: HTMLDivElement) => {
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const removeListeners = (element: HTMLDivElement) => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
    element.removeEventListener("mousedown", handleMouseDown);
    element.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    if (isXL) {
      applyListeners(element);
    } else {
      removeListeners(element);
    }

    return () => {
      removeListeners(element);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isXL]);

  return elementRef as RefObject<HTMLDivElement>;
};

export default useCursor;
