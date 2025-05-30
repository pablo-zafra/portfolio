import { useState, useEffect, useRef } from "react";

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

  useEffect(() => {
    const handleTouchStart = () => {
      // console.log("Touch detected");
      hasTouched.current = true;
      setIsTouchDevice(true);
      document.body.classList.add("touch-device");
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoints.md);
      setIsTablet(
        window.innerWidth >= breakpoints.md &&
          window.innerWidth < breakpoints.lg
      );
      setIsDesktop(window.innerWidth >= breakpoints.lg);
      setIsXL(window.innerWidth >= breakpoints.xl);
      setResizing(true);
      setResizing(false);
    };

    handleResize();

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
      once: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop, isXL, isResizing, isTouchDevice };
};
