import { useCursor } from "../../../hooks";

export const useSkillsCursors = () => {
  const spinCursorRef = useCursor({
    className: "w-20! rotate-26! text-md -translate-y-2/3 -translate-x-3/5",
    message: "Spin it!",
    icon: "threeDRotation",
  });

  const frontendCursorRef = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/media/front-end.gif)]",
  });

  const uxuiCursorRef = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/media/ux-ui.gif)]",
  });

  const prototypingCursorRef = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/media/prototyping.gif)]",
  });

  const richmediaCursorRef = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/media/rich-media.gif)]",
  });

  const motiondesignCursorRef = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/media/motion-design.gif)]",
  });

  return {
    spinCursorRef,
    frontendCursorRef,
    uxuiCursorRef,
    prototypingCursorRef,
    richmediaCursorRef,
    motiondesignCursorRef,
  };
};
