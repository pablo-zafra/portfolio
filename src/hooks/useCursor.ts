import { useCursorContext } from "../context/CursorContext";
import { useRef, useEffect, RefObject } from "react";
import { useBreakpoints } from "../hooks";

interface SetCursorOptions {
  className?: string;
  message?: string;
  icon?: string;
  parent?: HTMLDivElement;
}

export const useCursor = ({
  className = "",
  message,
  icon,
}: SetCursorOptions = {}): RefObject<HTMLDivElement> => {
  const { setCursorData } = useCursorContext();
  const elementRef = useRef<HTMLDivElement>(null);
  const { isXL, isTouchDevice } = useBreakpoints();
  let isMouseOver = false;
  let isMouseDown = false;

  const applyCursorEffect = () => {
    setCursorData({
      className,
      message,
      icon,
    });
  };

  const resetCursorEffect = () => {
    setCursorData({
      className: "",
      message: "",
      icon: undefined,
    });
  };

  const handleMouseEnter = () => {
    isMouseOver = true;
    if (!isMouseDown) {
      applyCursorEffect();
    }
    // console.log("MouseEnter. isOver: ", isMouseOver, " isDown: ", isMouseDown);
  };

  const handleMouseLeave = () => {
    isMouseOver = false;
    resetCursorEffect();
    // console.log("MouseLeave. isOver: ", isMouseOver, " isDown: ", isMouseDown);
  };

  const handleMouseDown = () => {
    isMouseDown = true;
    resetCursorEffect();
    // console.log("MouseDown. isOver: ", isMouseOver, " isDown: ", isMouseDown);
  };

  const handleMouseUp = () => {
    isMouseDown = false;
    if (isMouseOver) {
      applyCursorEffect();
    }
    // console.log("MouseUp. isOver: ", isMouseOver, " isDown: ", isMouseDown);
  };

  const handleHighlighted = (element: HTMLDivElement) => {
    const isHighlighted = element.getAttribute("highlighted") === "true";
    if (isHighlighted) {
      setCursorData({
        className: "highlighted-cursor",
        message: "Highlighted!",
        icon: "star",
      });
    }
  };

  const applyListeners = (element: HTMLDivElement) => {
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseup", handleMouseUp);

    // Nuevo listener para el atributo "highlighted"
    handleHighlighted(element);
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

    if (isXL && !isTouchDevice) {
      // console.log("Applying cursor listeners");
      applyListeners(element);
    } else {
      // console.log("Removing cursor listeners");
      removeListeners(element);
    }

    return () => {
      removeListeners(element);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isXL, isTouchDevice]);

  return elementRef as RefObject<HTMLDivElement>;
};

export default useCursor;
