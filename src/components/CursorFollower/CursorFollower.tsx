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
  const { className, message, icon } = cursorData;
  const { isXL } = useBreakpoints();

  const avaiableIcons: Record<string, React.ReactNode> = {
    threeDRotation: <ThreeDRotationIcon />,
    forwardToInbox: <ForwardToInboxIcon />,
    arrowOutward: <ArrowOutwardIcon />,
  };

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

  if (!isXL) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-10 origin-center -translate-2/1 transform-gpu flex flex-col justify-center items-center text-center transition-[position,width,translate] duration-600 ease-out bg-turquesa bg-cover rounded-full w-3 p-1 aspect-square overflow-hidden ${className} `}
    >
      {message && <span className="text-white">{message}</span>}
      {icon && <div className="text-white">{avaiableIcons[icon]}</div>}
    </div>
  );
};

export default CursorFollower;
