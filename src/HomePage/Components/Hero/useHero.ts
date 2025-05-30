"use client";
import { useEffect, useState } from "react";
import {
  useCursor,
  useElementReveal,
  useInView,
  useTextReveal,
} from "../../../hooks";
import { useScrollContext } from "../../../context";

export const useHero = () => {
  const [ctaView, setCtaView] = useState(true);
  const { setScrollData } = useScrollContext();

  const revealH1Ref = useTextReveal({
    duration: 1.2,
    stagger: 0.11,
  });

  const descriptionRef = useTextReveal({
    duration: 1,
    delay: 1,
    stagger: 0.025,
    start: "top bottom",
  });

  const logosRef = useElementReveal({
    duration: 0.8,
    stagger: 0.15,
    start: "top bottom",
    y: "40px",
    delay: 1.5,
  });

  const revealLines = useElementReveal({
    duration: 3,
    stagger: 0.2,
    delay: 0.5,
    animation: "fadeIn",
  });

  const titularRef = (e: HTMLHeadingElement) => {
    revealH1Ref.current = e;
    revealLines.current = e;
  };

  const spinItCursorRef = useCursor({
    className: "w-20! rotate-26! text-md",
    message: "Spin it!",
    icon: "threeDRotation",
  });

  const { inViewportElemRef: PencilTriggerRef, isInView: PencilInView } =
    useInView({
      start: "top bottom",
      end: "bottom -50%",
    });

  const { inViewportElemRef: HeroRef, isInView: HeroInView } = useInView({
    start: "top bottom",
    end: "bottom 50%",
  });

  useEffect(() => {
    if (!HeroInView) return;
    setScrollData({ current: 1 });
    // console.log("Section In View: Intro");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HeroInView]);

  return {
    HeroRef,
    titularRef,
    logosRef,
    descriptionRef,
    PencilTriggerRef,
    PencilInView,
    spinItCursorRef,
    ctaView,
    setCtaView,
  };
};
