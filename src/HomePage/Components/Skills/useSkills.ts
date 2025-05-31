import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollContext } from "../../../context";
import { useBreakpoints, useInView } from "../../../hooks";
import { useSkillsCursors } from "./useSkillsCursors";

gsap.registerPlugin(ScrollTrigger);

export const useSkills = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [ctaView, setCtaView] = useState(true);
  const [listHighlight, setListHighlight] = useState(0);
  const [joinBoxState, setJoinBoxState] = useState({
    isActive: false,
    className: "",
  });
  const { isTouchDevice } = useBreakpoints();
  const { setScrollData } = useScrollContext();

  const { inViewportElemRef: SkillsSectionRef, isInView: SkillsSectionInView } =
    useInView({
      start: "top 50%",
      end: "bottom 50%",
    });

  const {
    inViewportElemRef: HeadPhonesTriggerRef,
    isInView: HeadphonesInView,
  } = useInView({
    start: "top 130%",
    end: "bottom -30%",
  });

  useEffect(() => {
    if (!SkillsSectionInView) return;
    setScrollData({ current: 3 });
    // console.log("Section In View: Skills");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SkillsSectionInView]);

  const skillsCursorsRef = useSkillsCursors();

  const updateJoinBox = (step = 0) => {
    if (!isTouchDevice) {
      setJoinBoxState({ isActive: false, className: "" });
      return;
    } else {
      // console.log("Updating step:", step);
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
    // Set the list step based on the current scroll position

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
      start: "top 85%",
      end: "bottom 30%",
      scrub: true,
      onUpdate: (self) => {
        const step = Math.min(
          totalSteps,
          Math.floor(self.progress * totalSteps)
        );
        setListHighlight(step);
        // console.log("step: ", step);
      },
    });

    return () => {
      // console.log("ScrollTrigger for Skills component removed");
      st.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouchDevice]);

  useEffect(() => {
    // Set the JoinBox state based on the current list highlight

    if (!isTouchDevice) {
      return;
    }
    updateJoinBox(listHighlight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listHighlight]);

  return {
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
  };
};
