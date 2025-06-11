"use client";
import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const useBreakpoints = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isXL, setIsXL] = useState(false);
  const [isResizing, setResizing] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const hasTouched = useRef(false);
  const previousWidth = useRef(1360);

  const debounceResizingFalse = useDebouncedCallback(
    () => setResizing(false),
    400
  );

  useEffect(() => {
    previousWidth.current = window.innerWidth;
  }, []);

  useEffect(() => {
    const handleTouchStart = () => {
      hasTouched.current = true;
      setIsTouchDevice(true);
      document.body.classList.add("touch-device");
    };

    const updateValues = () => {
      setIsMobile(window.innerWidth < breakpoints.md);
      setIsTablet(
        window.innerWidth >= breakpoints.md &&
          window.innerWidth < breakpoints.lg
      );
      setIsDesktop(window.innerWidth >= breakpoints.lg);
      setIsXL(window.innerWidth >= breakpoints.xl);
      debounceResizingFalse();
    };

    updateValues();

    const handleResize = () => {
      if (window.innerWidth < breakpoints.md) {
        // En mobile ignoramos el resize vertical,
        // porque ocurre demasiado y no nos afecta
        if (previousWidth.current !== window.innerWidth) {
          setResizing(true);
          debounceResizingFalse();
          previousWidth.current = window.innerWidth;
        }
      } else {
        setResizing(true);
        debounceResizingFalse();
      }
    };

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
      once: true,
    });

    window.addEventListener("resize", updateValues);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", updateValues);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [debounceResizingFalse]);

  return { isMobile, isTablet, isDesktop, isXL, isResizing, isTouchDevice };
};
