"use client";

import { useEffect, useRef, useState } from "react";
import WorkItem from "./WorkItem/WorkItem";
import workData from "../../data/works.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const scrollRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || windowWidth > 768) return;

    const minScroll = window.innerWidth * 0.5 - 16;
    const maxScroll = el.scrollWidth - 16;

    const timeout = setTimeout(() => {
      el.scrollTo({
        left: minScroll,
        behavior: "smooth",
      });
    }, 600);

    let scrollTimeout: NodeJS.Timeout | null = null;

    const onScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (el.scrollLeft < minScroll) {
          el.scrollTo({ left: minScroll, behavior: "smooth" });
        } else if (el.scrollLeft > maxScroll) {
          el.scrollTo({ left: maxScroll, behavior: "smooth" });
        }
      }, 50);
    };
    el.addEventListener("scroll", onScroll);

    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 1.2;
      el.scrollLeft = scrollLeft.current - walk;
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging.current = false;
      el.releasePointerCapture(e.pointerId);
      if (el.scrollLeft < minScroll) {
        el.scrollLeft = minScroll;
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointerleave", onPointerUp);

    return () => {
      clearTimeout(timeout);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointerleave", onPointerUp);
    };
  }, [windowWidth]);

  return (
    <div className="relative flex flex-col md:flex-row mb-40 md:mb-0 gap-6">
      <div className="max-md:px-4 md:sticky md:top-0 md:w-28 xl:w-[19vh] md:h-screen flex md:items-center md:justify-center">
        <h2 className="uppercase font-semibold md:-rotate-90 text-5xl md:text-9xl xl:text-[24vh]">
          Work
        </h2>
        <p className="hidden">Take a look to some selected projects</p>
      </div>
      <div
        ref={scrollRef}
        className="relative flex max-md:pl-[50vw] max-md:pr-[50vw] max-md:select-none md:h-auto md:flex-col md:flex-1 md:items-end gap-4 md:gap-16 md:pt-24 md:pb-86 md:pr-20 xl:pr-32 max-md:overflow-x-scroll [&::-webkit-scrollbar]:hidden"
      >
        {workData.map(({ title, tags, slug, bg, link, newTab }, index) => (
          <WorkItem
            key={index}
            itemKey={index}
            title={title}
            tags={tags}
            slug={slug}
            bg={bg}
            link={link}
            newTab={newTab}
            windowWidth={windowWidth}
            itemsContainerRef={scrollRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
