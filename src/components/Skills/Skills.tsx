"use client";
import HandEllipse from "./HandEllipse/HandEllipse";
import { Headphones } from "../3dModels";
import { useBreakpoints, useCursor, useInView } from "../../hooks";
import { useState, useRef, useEffect } from "react"; // Import useRef and useEffect
import { SpinTheHeadphones } from "../HandWrittenCTAs";
import { gsap } from "gsap"; // Import gsap
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Skills: React.FC = () => {
  const spinCursor = useCursor({
    className: "w-20! rotate-26! text-md -translate-y-2/3 -translate-x-3/5",
    message: "Spin it!",
    icon: "threeDRotation",
  });

  const frontendCursor = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/img/front-end.gif)]",
  });

  const uxuiCursor = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/img/ux-ui.gif)]",
  });

  const prototypingCursor = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/img/prototyping.gif)]",
  });

  const richmediaCursor = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/img/rich-media.gif)]",
  });

  const motiondesignCursor = useCursor({
    className: "w-36! text-md rounded-xl! bg-[url(/img/motion-design.gif)]",
  });

  const { inViewportElemRef, isInView } = useInView({
    offsetTop: 200,
    offsetBottom: 200,
  });
  const [ctaView, setCtaView] = useState(true);

  const listRef = useRef<HTMLUListElement>(null); // Create a ref for the ul element
  const [listHighlight, setListHighlight] = useState(0);
  const { isMobile } = useBreakpoints();

  useEffect(() => {
    if (!isMobile) {
      return;
    }
    const listElement = listRef.current;
    if (!listElement) return;

    const listItems = listElement.querySelectorAll("li");
    const numItems = listItems.length;

    const st = ScrollTrigger.create({
      trigger: listElement,
      start: "top 70%", // Start when the top of the ul hits 70% from the top of the viewport
      end: "bottom 40%", // End when the bottom of the ul hits 30% from the bottom of the viewport
      scrub: true,
      onUpdate: (self) => {
        // Calculate the current step based on scroll progress (0 to 1)
        // Map progress (0 to 1) to steps (1 to numItems)
        const step = Math.min(
          numItems,
          Math.floor(self.progress * numItems) + 1
        );
        setListHighlight(step);
      },
      onToggle: (self) => {
        // Set attribute to 0 when the trigger is inactive (scrolled out of range)
        if (!self.isActive) {
          setListHighlight(0);
        }
      },
    });

    // Cleanup function to destroy ScrollTrigger instance on component unmount
    return () => {
      st.kill();
    };
  }, [isMobile]); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="relative flex items-center justify-center overflow-hidden pt-32 md:pl-[20vw] 2xl:pl-60">
      <div className="relative flex flex-col md:flex-row-reverse text-gray-light my-44 sm:my-52 gap-8 md:gap-14 max-md:-translate-y-20">
        <div
          ref={spinCursor}
          className="absolute w-3/2 aspect-square top-4/10 md:-top-14/10 lg:-top-16/10 right-0 md:right-65/100 -rotate-16"
        >
          <div
            ref={inViewportElemRef}
            className="w-full h-full"
            onMouseDown={() => setCtaView(false)}
            onMouseUp={() => setCtaView(true)}
            onTouchStart={() => setCtaView(false)}
            onTouchEnd={() => setCtaView(true)}
          >
            <div
              className={`${
                ctaView ? "" : "opacity-0"
              } transition-opacity duration-400 z-20`}
            >
              <SpinTheHeadphones />
            </div>
            {isInView ? <Headphones /> : null}
          </div>
        </div>
        <div className="max-md:border-b-1 md:border-l-1 border-gray-light border-solid">
          <h2 className="text-lg font-light max-md:text-right md:rotate-90 origin-left-middle md:origin-top-left md:translate-x-[2em] mb-2">
            Skills
          </h2>
        </div>
        <ul
          ref={listRef}
          className="flex flex-col gap-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-snug sm:my-[-0.3em] font-semibold whitespace-nowrap"
          data-mobile-child-highlighted={listHighlight}
        >
          <div className="box-highlighted w-36! text-md rounded-xl! bg-turquesa"></div>
          <li className="relative w-fit h-fit md:px-8">
            <span ref={frontendCursor} className="relativeº">
              Front-end Development
              <HandEllipse flipY={true} highlighted={listHighlight === 1} />
            </span>
          </li>
          <li className="relative w-fit h-fit ml-[2em] md:ml-[3em] lg:ml-[5em] md:px-6">
            <span ref={uxuiCursor} className="relativeº">
              UX/UI Design
              <HandEllipse flipX={true} highlighted={listHighlight === 2} />
            </span>
          </li>
          <li className="relative w-fit h-fit ml-[1em] md:ml-[2em] lg:ml-[3em] md:px-6">
            <span ref={prototypingCursor} className="relativeº">
              Prototyping
              <HandEllipse flipY={true} highlighted={listHighlight === 3} />
            </span>
          </li>
          <li className="relative w-fit h-fit ml-[3em] md:ml-[4em] lg:ml-[6em] md:px-6">
            <span ref={richmediaCursor} className="relativeº">
              Rich Media
              <HandEllipse highlighted={listHighlight === 4} />
            </span>
          </li>
          <li className="relative w-fit h-fit ml-[4em] md:ml-[5em] lg:ml-[7em] md:px-6">
            <span ref={motiondesignCursor} className="relativeº">
              Motion Design
              <HandEllipse flipX={true} highlighted={listHighlight === 5} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
