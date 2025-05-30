import { workData } from "../../../data";
import { isSafari } from "../../../helpers";
import { useBreakpoints } from "../../../hooks";
import { useEffect, useRef } from "react";

export const useWorkMobileDrag = () => {
  const isDragging = useRef(false);
  const { isMobile, isResizing } = useBreakpoints();
  const safari: boolean = isSafari();
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const draggeableOnMobileRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    // Draggeable horizontal scroll for mobile devices
    const el = draggeableOnMobileRef.current;
    if (!el || !isMobile) return;

    const minScroll = () => window.innerWidth * 0.5 - 16;
    const maxScroll = () =>
      minScroll() + (window.innerWidth * 0.23332 + 16) * workData.length - 1;

    const startPos = setTimeout(() => {
      el.scrollTo({
        left: minScroll(),
        behavior: "smooth",
      });
    }, 50);

    const scrollToClosestSnapPoint = () => {
      const snapPoints: number[] = workData.map(
        (item, index) =>
          minScroll() + (window.innerWidth * 0.23332 + 16) * index
      );
      const snapDistances = snapPoints.map((point) =>
        Math.abs(point - el.scrollLeft)
      );
      const closestDistance = Math.min(...snapDistances);
      const closestSnapIndex = snapDistances.indexOf(closestDistance);
      const closestSnapPoint = snapPoints[closestSnapIndex];
      isDragging.current = false;
      el.scrollTo({
        left: closestSnapPoint,
        behavior: "smooth",
      });
      // console.log("Closest snap point:", closestSnapIndex);
    };

    const onScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
        // console.log("Scrolling (continuando)");
        if (el.scrollLeft > maxScroll()) {
          el.scrollTo({ left: maxScroll(), behavior: "smooth" });
        }
      } else {
        // console.log("Scrolling (iniciado)");
      }

      scrollTimeout.current = setTimeout(() => {
        scrollToClosestSnapPoint();
        // console.log("Scroll detenido");
        scrollTimeout.current = null;
      }, 100);
    };

    if (safari) {
      el.addEventListener("scroll", onScroll);
    } else {
      el.addEventListener("scrollend", scrollToClosestSnapPoint);
    }

    return () => {
      clearTimeout(startPos);
      if (safari) {
        el.removeEventListener("scroll", onScroll);
      } else {
        el.removeEventListener("scrollend", scrollToClosestSnapPoint);
      }
      el.style.removeProperty("touch-action");
    };
  }, [isMobile, isResizing, safari]);

  return draggeableOnMobileRef;
};
