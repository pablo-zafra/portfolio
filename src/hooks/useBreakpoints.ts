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

  const debounceResizingFalse = useDebouncedCallback(
    () => setResizing(false),
    400
  );

  useEffect(() => {
    const handleTouchStart = () => {
      // console.log("Touch detected");
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

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
      once: true,
    });

    window.addEventListener("resize", updateValues);

    return () => {
      window.removeEventListener("resize", updateValues);
    };
  }, [debounceResizingFalse]);

  useEffect(() => {
    const handleResize = () => {
      setResizing(true);
      debounceResizingFalse();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [debounceResizingFalse]);

  // useEffect(() => {
  //   console.log("isResizing changed: ", isResizing);
  // }, [isResizing]);

  return { isMobile, isTablet, isDesktop, isXL, isResizing, isTouchDevice };
};
