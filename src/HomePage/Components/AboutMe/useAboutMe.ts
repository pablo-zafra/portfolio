import { useScrollContext } from "../../../context";
import {
  useBreakpoints,
  useCursor,
  useHighlight,
  useInView,
} from "../../../hooks";
import { useEffect } from "react";

export const useAboutMe = () => {
  const highlightRef = useHighlight();
  const { setScrollData } = useScrollContext();

  const malagaCursorRef = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/media/malaga.gif)]",
  });
  const { isTouchDevice } = useBreakpoints();

  const { inViewportElemRef: AboutRef, isInView: AboutInView } = useInView({
    start: "top 50%",
    end: "bottom 50%",
  });

  const { inViewportElemRef: JoinBoxRef, isInView: JoinBoxInView } = useInView({
    start: "top 70%",
    end: "bottom 30%",
  });

  useEffect(() => {
    if (!AboutInView) return;
    setScrollData({ current: 2 });
    // console.log("Section In View: About");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AboutInView]);

  return {
    highlightRef,
    malagaCursorRef,
    isTouchDevice,
    AboutRef,
    AboutInView,
    JoinBoxRef,
    JoinBoxInView,
  };
};
