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

  const workContainerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) return;
    const container = workContainerRef.current;
    const pinWrap = pinWrapRef.current;

    if (!container || !pinWrap) return;

    const mobileAnimation = gsap.to(container, {
      x: () =>
        -container.offsetWidth +
        (document.documentElement.clientWidth || window.innerWidth || 0),
      ease: "none",
      scrollTrigger: {
        trigger: pinWrap, // Pin the wrapper
        pin: true,
        start: "top 30%", // Start when the top of the container hits the middle of the viewport
        end: () => `+=${container.offsetWidth}`, // End after scrolling the entire container width
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      mobileAnimation.scrollTrigger?.kill();
      mobileAnimation.kill();
    };
  }, [windowWidth]);

  return (
    <div
      ref={pinWrapRef}
      className="relative flex flex-col md:flex-row mb-40 md:mb-0 gap-6"
    >
      <div className="max-md:px-4 md:sticky md:top-0 md:w-28 xl:w-[19vh] md:h-screen flex md:items-center md:justify-center">
        <h2 className="uppercase font-semibold md:-rotate-90 text-5xl md:text-9xl xl:text-[24vh]">
          Work
        </h2>
        <p className="hidden">Take a look to some selected projects</p>
      </div>
      <div
        ref={workContainerRef}
        className="relative flex w-fit max-md:px-4 md:h-auto md:flex-col md:flex-1 md:items-end text-right gap-4 md:gap-16 md:pt-24 md:pb-86 md:pr-20 xl:pr-32 max-md:overflow-visible max-md:flex-nowrap"
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
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
