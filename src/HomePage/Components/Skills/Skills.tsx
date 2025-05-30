"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Headphones,
  SpinTheHeadphones,
  HandEllipse,
  JoinBox,
} from "../../../components";
import { useSkills } from "./useSkills";

gsap.registerPlugin(ScrollTrigger);

export const Skills: React.FC = () => {
  const {
    listRef,
    SkillsSectionRef,
    HeadPhonesTriggerRef,
    skillsCursorsRef,
    HeadphonesInView,
    isTouchDevice,
    ctaView,
    setCtaView,
    listHighlight,
    joinBoxState,
  } = useSkills();

  const {
    spinCursorRef,
    frontendCursorRef,
    uxuiCursorRef,
    prototypingCursorRef,
    richmediaCursorRef,
    motiondesignCursorRef,
  } = skillsCursorsRef;

  return (
    <section
      id="skills-section"
      ref={SkillsSectionRef}
      className="relative flex items-center justify-center overflow-hidden pt-32 md:pl-[20vw] 2xl:pl-60"
    >
      <div className="relative flex flex-col md:flex-row-reverse text-gray-light my-44 sm:my-52 gap-8 md:gap-14 max-md:-translate-y-20">
        <div
          ref={spinCursorRef}
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
          {isTouchDevice && (
            <JoinBox
              isActive={joinBoxState.isActive}
              className={joinBoxState.className}
            />
          )}
          <ul
            ref={listRef}
            className="flex flex-col gap-3 leading-snug sm:my-[-0.3em] font-semibold whitespace-nowrap"
            data-mobile-child-highlighted={listHighlight}
          >
            <li className="relative w-fit h-fit md:px-8">
              <span ref={frontendCursorRef} className="relative">
                Front-end Development
                <HandEllipse flipY={true} highlighted={listHighlight === 1} />
              </span>
            </li>
            <li className="relative w-fit h-fit ml-[2em] md:ml-[3em] lg:ml-[5em] md:px-6">
              <span ref={uxuiCursorRef} className="relative">
                UX/UI Design
                <HandEllipse flipX={true} highlighted={listHighlight === 2} />
              </span>
            </li>
            <li className="relative w-fit h-fit ml-[1em] md:ml-[2em] lg:ml-[3em] md:px-6">
              <span ref={prototypingCursorRef} className="relative">
                Prototyping
                <HandEllipse flipY={true} highlighted={listHighlight === 3} />
              </span>
            </li>
            <li className="relative w-fit h-fit ml-[3em] md:ml-[4em] lg:ml-[6em] md:px-6">
              <span ref={richmediaCursorRef} className="relative">
                Rich Media
                <HandEllipse highlighted={listHighlight === 4} />
              </span>
            </li>
            <li className="relative w-fit h-fit ml-[4em] md:ml-[5em] lg:ml-[7em] md:px-6">
              <span ref={motiondesignCursorRef} className="relative">
                Motion Design
                <HandEllipse flipX={true} highlighted={listHighlight === 5} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
