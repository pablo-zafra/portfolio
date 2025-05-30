import { useScrollContext } from "../../context";
import { workData } from "../../data";
import { useBreakpoints, useInView } from "../../hooks";
import { useEffect } from "react";
import useWorkMobileDrag from "./useWorkMobileDrag";

const useWork = () => {
  const { isMobile } = useBreakpoints();
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
  };
};

export default useWork;
