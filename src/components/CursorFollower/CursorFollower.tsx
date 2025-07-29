"use client";
import { useCursorForllower } from "./useCursorForllower";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const CursorFollower: React.FC = () => {
  const { className, message, icon, cursorRef, isXL, isTouchDevice } =
    useCursorForllower();

  const avaiableIcons: Record<string, React.ReactNode> = {
    threeDRotation: <ThreeDRotationIcon />,
    forwardToInbox: <ForwardToInboxIcon />,
    arrowOutward: <ArrowOutwardIcon />,
    linkedin: <LinkedInIcon />,
    github: <GitHubIcon />,
    calendar: <CalendarMonthIcon />,
  };

  if (!isXL || isTouchDevice) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 origin-center -translate-2/1 transform-gpu flex flex-col justify-center items-center text-center transition-[position,width,translate] duration-600 ease-out bg-turquesa bg-cover rounded-full w-3 p-1 aspect-square overflow-hidden ${className} `}
    >
      {message && <span className="text-white">{message}</span>}
      {icon && <div className="text-white">{avaiableIcons[icon]}</div>}
    </div>
  );
};
