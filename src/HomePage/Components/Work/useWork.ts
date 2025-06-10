import { useEffect, useRef, useState } from "react";
import { workData } from "../../../data";
import { useScrollContext } from "../../../context";
import { useBreakpoints, useInView } from "../../../hooks";
import { useWorkMobileDrag } from "./useWorkMobileDrag";
import { useLenis } from "../../../components/ScrollControll/ScrollControll";

export const useWork = () => {
  const [refreshScrollTrigger, setRefreshScrollTrigger] = useState(false);
  const { isMobile, isResizing } = useBreakpoints();
  const { setScrollData } = useScrollContext();
  const { lenisInstance: lenis, timeToRefreshGsap } = useLenis();
  const prevIsResizingRef = useRef(isResizing);
  const prevTimeToRefreshGsapRef = useRef(timeToRefreshGsap);

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

  useEffect(() => {
    if (isResizing !== prevIsResizingRef.current) {
      // Necesario para que no se ejecute al montarse
      // console.log("isResizing changed: ", isResizing);
      if (!isResizing && lenis) {
        lenis.scrollTo(0, { offset: 0, duration: 0.3 });
        // console.log("Scrolling to 0. Isresizing: ", isResizing);
        setTimeout(() => {
          setRefreshScrollTrigger(true);
        }, 600);
        setTimeout(() => {
          setRefreshScrollTrigger(false);
        }, 700);
      }
    }
    prevIsResizingRef.current = isResizing;
  }, [isResizing, lenis]);

  useEffect(() => {
    if (timeToRefreshGsap !== prevTimeToRefreshGsapRef.current) {
      setRefreshScrollTrigger(timeToRefreshGsap);
      // console.log("Refresh Scroll Trigger Changed: ", timeToRefreshGsap);
    }
    prevTimeToRefreshGsapRef.current = timeToRefreshGsap;
  }, [timeToRefreshGsap]);

  const draggeableOnMobileRef = useWorkMobileDrag();

  return {
    workData,
    WorkSectionRef,
    draggeableOnMobileRef,
    isMobile,
    refreshScrollTrigger,
  };
};
