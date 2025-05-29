"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollContext } from "../../context";
import { useBreakpoints, useInView } from "../../hooks";
import WorkItem from "./WorkItem/WorkItem";
import { workData } from "../../data";
import { isSafari } from "../../helpers";

gsap.registerPlugin(ScrollTrigger);

const Work: React.FC = () => {
  const { isMobile, isResizing } = useBreakpoints();
  const { setScrollData } = useScrollContext();
  const safari: boolean = isSafari();

  const scrollRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const isDragging = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Draggeable horizontal scroll for mobile devices
    const el = scrollRef.current;
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

  return (
    <div
      id="work-section"
      ref={WorkSectionRef}
      className="relative flex flex-col md:flex-row mb-40 md:mb-32 gap-6"
    >
      <div className="max-md:px-4 md:sticky md:top-0 md:w-40 xl:w-[18vh] xl:ml-4 md:h-screen flex md:items-center md:justify-center">
        <h2 className="uppercase font-semibold md:-rotate-90 text-5xl md:text-9xl xl:text-[24vh] leading-[0.73em]">
          Work
        </h2>
        <p className="hidden">Take a look to some selected projects</p>
      </div>
      <div
        ref={scrollRef}
        className="relative flex flex-col max-md:px-[50vw] md:flex-1 md:pt-24 md:pb-86 md:pl-0 md:pr-20 xl:pr-32 max-md:overflow-x-scroll max-md:select-none [&::-webkit-scrollbar]:hidden"
      >
        <div className="relative flex gap-4 max-md:w-fit md:flex-col md:items-end md:gap-16">
          {workData.map(
            ({ titleLines, tags, slug, bg, link, newTab }, index) => (
              <WorkItem
                key={index}
                itemKey={index}
                titleLines={titleLines}
                tags={tags}
                slug={slug}
                bg={bg}
                link={link}
                newTab={newTab}
                isMobile={isMobile}
                itemsContainerRef={scrollRef}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
