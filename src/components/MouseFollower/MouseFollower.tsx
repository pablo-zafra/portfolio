"use client";
import React, { useEffect, useRef } from "react";
import { useCursorContext } from "@/context/CursorContext";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { cursorData } = useCursorContext();

  const avaiableIcons: Record<string, React.ReactNode> = {
    threeDRotation: <ThreeDRotationIcon />,
    forwardToInbox: <ForwardToInboxIcon />,
    arrowOutward: <ArrowOutwardIcon />,
  };

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-10 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-center transition-[width,transform] duration-300 ease-out origin-center bg-turquesa bg-cover rounded-full w-3 p-1 aspect-square overflow-hidden ${cursorData.className} `}
    >
      {cursorData.message && (
        <span className="text-white">{cursorData.message}</span>
      )}
      {cursorData.icon && (
        <div className="text-white">{avaiableIcons[cursorData.icon]}</div>
      )}
    </div>
  );
};

export default CursorFollower;
