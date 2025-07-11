import { useEffect, useRef } from "react";
import { workData } from "../../../data";
import { useLenis } from "../../../components";
import { isSafari } from "../../../helpers";
import { useBreakpoints } from "../../../hooks";

export const useWorkMobileDrag = () => {
  const isDragging = useRef(false);
  const { isMobile, isResizing } = useBreakpoints();
  const safari: boolean = isSafari();
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const refreshScrollTriggerTimeout = useRef<NodeJS.Timeout | null>(null);
  const { refreshScrollTrigger } = useLenis();

  const draggeableOnMobileRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const workItemLength = workData.length;

  useEffect(() => {
    // Draggeable horizontal scroll for mobile devices
    const el = draggeableOnMobileRef.current;
    if (!el || !isMobile) return;
    // console.log("draggeableOnMobile loaded. Resizing: ", isResizing);

    const minScroll = () => window.innerWidth * 0.5 - 16;
    const maxScroll = () =>
      minScroll() + (window.innerWidth * 0.23332 + 16) * workData.length - 1;
    const snapPoints = (length: number) => {
      return Array.from({ length: length }).map(
        (_, index) => minScroll() + (window.innerWidth * 0.23332 + 16) * index
        // El primer argumento de map (el elemento actual) no se usa, por eso se pone '_'
      );
    };

    const resetScroll = () => {
      if (isResizing) {
        return;
      }
      el.scrollTo({
        left: 0,
      });

      refreshScrollTriggerTimeout.current = setTimeout(() => {
        refreshScrollTrigger();
      }, 300);

      scrollTimeout.current = setTimeout(() => {
        el.scrollTo({
          left: minScroll(),
          behavior: "smooth",
        });
        // console.log("initial pos set");
      }, 500);
    };

    resetScroll();

    const scrollToClosestSnapPoint = () => {
      if (isResizing) {
        return;
      }
      // console.log("Snap points:", snapPoints);
      const points = snapPoints(workItemLength);
      const snapDistances = points.map((point) =>
        Math.abs(point - el.scrollLeft)
      );
      const closestDistance = Math.min(...snapDistances);
      const closestSnapIndex = snapDistances.indexOf(closestDistance);
      const closestSnapPoint = points[closestSnapIndex];
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
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (safari) {
        el.removeEventListener("scroll", onScroll);
      } else {
        el.removeEventListener("scrollend", scrollToClosestSnapPoint);
      }
      el.style.removeProperty("touch-action");
    };
  }, [isMobile, isResizing, refreshScrollTrigger, safari, workItemLength]);

  return draggeableOnMobileRef;
};
