import { useEffect } from "react";
import { workData } from "../../../data";
import { useScrollContext } from "../../../context";
import { useBreakpoints, useInView } from "../../../hooks";
import { useWorkMobileDrag } from "./useWorkMobileDrag";

export const useWork = () => {
  const { isMobile, isResizing } = useBreakpoints();
  const { setScrollData } = useScrollContext();

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

  const draggeableOnMobileRef = useWorkMobileDrag();

  return {
    workData,
    WorkSectionRef,
    draggeableOnMobileRef,
    isMobile,
    isResizing,
  };
};
