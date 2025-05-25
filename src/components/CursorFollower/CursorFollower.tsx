"use client";
import { useEffect, useRef } from "react";
import { useCursorContext } from "@/context/CursorContext";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useBreakpoints } from "../../hooks";

const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { cursorData } = useCursorContext();
  const { className, message, icon, elementTrigger } = cursorData;
  const { isXL } = useBreakpoints();

  const avaiableIcons: Record<string, React.ReactNode> = {
    threeDRotation: <ThreeDRotationIcon />,
    forwardToInbox: <ForwardToInboxIcon />,
    arrowOutward: <ArrowOutwardIcon />,
  };

  useEffect(() => {
    const element = cursorRef.current;
    if (!element) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
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

  useEffect(() => {
    if (isXL) {
      return;
    }
    const cursorElement = cursorRef.current; // Accede al elemento DOM real
    if (!cursorElement) {
      return;
    }

    if (elementTrigger instanceof HTMLDivElement) {
      elementTrigger.appendChild(cursorElement);
    } else {
      document.body.appendChild(cursorElement);
    }
  }, [elementTrigger, isXL]);

  if (!isXL) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed bottom-full right-full pointer-events-none z-10 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-center transition-[width,transform,left,top] duration-300 ease-out origin-center bg-turquesa bg-cover rounded-full w-3 p-1 aspect-square overflow-hidden ${className} `}
    >
      {message && <span className="text-white">{message}</span>}
      {icon && <div className="text-white">{avaiableIcons[icon]}</div>}
    </div>
  );
};

export default CursorFollower;
