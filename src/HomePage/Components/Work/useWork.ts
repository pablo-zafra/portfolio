import { useCallback, useEffect, useRef } from "react";
import { workData } from "../../../data";
import { useScrollContext } from "../../../context";
import { useBreakpoints, useInView } from "../../../hooks";
import { useWorkMobileDrag } from "./useWorkMobileDrag";
import { useLenis } from "../../../components/ScrollControll/ScrollControll";

export const useWork = () => {
  const { isMobile, isResizing } = useBreakpoints();
  const { setScrollData } = useScrollContext();
  const {
    lenisInstance: lenis,
    isLenisReady = false,
    refreshScrollTrigger,
  } = useLenis();
  const prevIsResizingRef = useRef(isResizing);

  const { inViewportElemRef: WorkSectionRef, isInView: WorkSectionInView } =
    useInView({
      start: "top 50%",
      end: "bottom 50%",
    });

  useEffect(() => {
    if (!WorkSectionInView) return;
    setScrollData({ current: 4 });
    // console.log("Section In View: Work");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [WorkSectionInView]);

  const resetScroll = useCallback(() => {
    // console.log("useWork: resetScroll(). Lenis: ", lenis);
    lenis?.scrollTo(0, { offset: 0, duration: 0.3 });
    refreshScrollTrigger({ delay: 0.3 });
    // console.log("useWork: resetScroll(). refreshScrollTrigger ordered.");
  }, [lenis, refreshScrollTrigger]);

  useEffect(() => {
    if (isResizing !== prevIsResizingRef.current) {
      // Condicionante, necesario para que no se ejecute al montarse
      // console.log("useWork: isResizing changed: ", isResizing);
      if (!isResizing && !isMobile && lenis && isLenisReady) {
        resetScroll();
      }
    }
    prevIsResizingRef.current = isResizing;
  }, [isResizing, isMobile, lenis, isLenisReady, resetScroll]);

  const draggeableOnMobileRef = useWorkMobileDrag();

  return {
    workData,
    WorkSectionRef,
    draggeableOnMobileRef,
    isMobile,
  };
};
