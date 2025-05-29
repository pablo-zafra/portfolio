"use client";
import { Headphones } from "../3dModels";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useScrollContext } from "../../context";
import { useBreakpoints, useCursor, useInView } from "../../hooks";
import { SpinTheHeadphones } from "../HandWrittenCTAs";
import { HandEllipse, JoinBox } from "../";

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [ctaView, setCtaView] = useState(true);
  const [listHighlight, setListHighlight] = useState(0);
  const [joinBoxState, setJoinBoxState] = useState({
    isActive: false,
    className: "",
  });
  const { isTouchDevice } = useBreakpoints();
  const { setScrollData } = useScrollContext();

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

  const {
    inViewportElemRef: HeadPhonesTriggerRef,
    isInView: HeadphonesInView,
  } = useInView({
    start: "top 130%",
    end: "bottom -30%",
  });

  const updateJoinBox = (step = 0) => {
    if (!isTouchDevice) {
      setJoinBoxState({ isActive: false, className: "" });
      return;
    } else {
      console.log("Updating step:", step);
      if (step <= 0) {
        // Front-end Development
        setJoinBoxState({
          isActive: false,
          className:
            "translate-x-[0.5em] translate-y-[-3em] sm:translate-x-[0.5em] sm:translate-y-[-2.8em] md:translate-x-[12em] md:translate-y-[-2.5em] lg:translate-x-[13em] lg:translate-y-[-1em] xl:translate-x-[12.8em] xl:translate-y-[-0.5em] bg-[url(/img/front-end.gif)]",
        });
      } else if (step === 1) {
        // Front-end Development
        setJoinBoxState({
          isActive: true,
          className:
            "translate-x-[0.5em] translate-y-[-3em] sm:translate-x-[0.5em] sm:translate-y-[-2.8em] md:translate-x-[12em] md:translate-y-[-2.5em] lg:translate-x-[13em] lg:translate-y-[-1em] xl:translate-x-[12.8em] xl:translate-y-[-0.5em] bg-[url(/img/front-end.gif)]",
        });
      } else if (step === 2) {
        // UX/UI Design
        // UX/UI Design
        setJoinBoxState({
          isActive: true,
          className:
            "translate-x-[9em] translate-y-[1.5em] md:translate-x-[10.5em] md:translate-y-[1.5em] lg:translate-x-[3.5em] lg:translate-y-[1.1em] xl:translate-x-[3.7em] xl:translate-y-[1.3em] bg-[url(/img/ux-ui.gif)]",
        });
      } else if (step === 3) {
        // Prototyping
        setJoinBoxState({
          isActive: true,
          className:
            "translate-x-[-2em] translate-y-[3.3em] sm:translate-x-[-1.5em] sm:translate-y-[3em] md:translate-x-[0.2em] md:translate-y-[2.5em] lg:translate-x-[10em] lg:translate-y-[3em] xl:translate-x-[9.5em] xl:translate-y-[3em] bg-[url(/img/prototyping.gif)]",
        });
      } else if (step === 4) {
        // Rich Media
        setJoinBoxState({
          isActive: true,
          className:
            "translate-x-[8.5em] translate-y-[4.5em] sm:translate-x-[9em] sm:translate-y-[4.3em] md:translate-x-[11em] md:translate-y-[4.5em] lg:translate-x-[4em] lg:translate-y-[4.6em] xl:translate-x-[4.8em] xl:translate-y-[4.6em] bg-[url(/img/rich-media.gif)]",
        });
      } else if (step === 5) {
        // Motion Design
        setJoinBoxState({
          isActive: true,
          className:
            "translate-x-[9.5em] translate-y-[9em] sm:translate-x-[9.5em] sm:translate-y-[8.5em] md:translate-x-[11.5em] md:translate-y-[8.2em] lg:translate-x-[5em] lg:translate-y-[6.5em] xl:translate-x-[5.5em] xl:translate-y-[6.3em] bg-[url(/img/motion-design.gif)]",
        });
      } else {
        // Motion Design
        setJoinBoxState({
          isActive: false,
          className:
            "translate-x-[9.5em] translate-y-[9em] sm:translate-x-[9.5em] sm:translate-y-[8.5em] md:translate-x-[11.5em] md:translate-y-[8.2em] lg:translate-x-[5em] lg:translate-y-[6.5em] xl:translate-x-[5.5em] xl:translate-y-[6.3em] bg-[url(/img/motion-design.gif)]",
        });
      }
    }
  };

  useEffect(() => {
    updateJoinBox(listHighlight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listHighlight]);

  useEffect(() => {
    if (!isTouchDevice) {
      updateJoinBox(0);
      return;
    }
    // console.log("ScrollTrigger is active for Skills component");
    const listElement = listRef.current;
    if (!listElement) return;

    const listItems = listElement.querySelectorAll("li");
    const totalSteps = listItems.length + 2;

    const st = ScrollTrigger.create({
      trigger: listElement,
      start: "top 70%",
      end: "bottom 40%",
      scrub: true,
      onUpdate: (self) => {
        const step = Math.min(
          totalSteps,
          Math.floor(self.progress * totalSteps)
        );
        setListHighlight(step);
        console.log("step: ", step);
      },
    });

    return () => {
      // console.log("ScrollTrigger for Skills component removed");
      st.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouchDevice]);

  const { inViewportElemRef: SkillsSectionRef, isInView: SkillsSectionInView } =
    useInView({
      start: "top 50%",
      end: "bottom 50%",
    });

  useEffect(() => {
    if (!SkillsSectionInView) return;
    setScrollData({ current: 3 });
    // console.log("Section In View: Skills");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SkillsSectionInView]);

  return (
    <div
      id="skills-section"
      ref={SkillsSectionRef}
      className="relative flex items-center justify-center overflow-hidden pt-32 md:pl-[20vw] 2xl:pl-60"
    >
      <div className="relative flex flex-col md:flex-row-reverse text-gray-light my-44 sm:my-52 gap-8 md:gap-14 max-md:-translate-y-20">
        <div
          ref={spinCursor}
          className="absolute w-3/2 aspect-square top-4/10 md:-top-14/10 lg:-top-16/10 right-0 md:right-65/100 -rotate-16"
        >
          <div
            ref={HeadPhonesTriggerRef}
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
            {HeadphonesInView ? <Headphones /> : null}
          </div>
        </div>
        <div className="max-md:border-b-1 md:border-l-1 border-gray-light border-solid">
          <h2 className="text-lg font-light max-md:text-right md:rotate-90 origin-left-middle md:origin-top-left md:translate-x-[2em] mb-2">
            Skills
          </h2>
        </div>
        <div className="relative text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          <JoinBox
            isActive={joinBoxState.isActive}
            className={joinBoxState.className}
          />
          <ul
            ref={listRef}
            className="flex flex-col gap-3 leading-snug sm:my-[-0.3em] font-semibold whitespace-nowrap"
            data-mobile-child-highlighted={listHighlight}
          >
            <li className="relative w-fit h-fit md:px-8">
              <span ref={frontendCursor} className="relative">
                Front-end Development
                <HandEllipse flipY={true} highlighted={listHighlight === 1} />
              </span>
            </li>
            <li className="relative w-fit h-fit ml-[2em] md:ml-[3em] lg:ml-[5em] md:px-6">
              <span ref={uxuiCursor} className="relative">
                UX/UI Design
                <HandEllipse flipX={true} highlighted={listHighlight === 2} />
              </span>
            </li>
            <li className="relative w-fit h-fit ml-[1em] md:ml-[2em] lg:ml-[3em] md:px-6">
              <span ref={prototypingCursor} className="relative">
                Prototyping
                <HandEllipse flipY={true} highlighted={listHighlight === 3} />
              </span>
            </li>
            <li className="relative w-fit h-fit ml-[3em] md:ml-[4em] lg:ml-[6em] md:px-6">
              <span ref={richmediaCursor} className="relative">
                Rich Media
                <HandEllipse highlighted={listHighlight === 4} />
              </span>
            </li>
            <li className="relative w-fit h-fit ml-[4em] md:ml-[5em] lg:ml-[7em] md:px-6">
              <span ref={motiondesignCursor} className="relative">
                Motion Design
                <HandEllipse flipX={true} highlighted={listHighlight === 5} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
