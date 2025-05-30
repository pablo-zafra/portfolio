import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseWorkItemAnimTxtProps {
  itemKey: number;
  isMobile: boolean;
  itemsContainerRef: React.RefObject<HTMLDivElement>;
}

gsap.registerPlugin(ScrollTrigger);

const useWorkItemAnimTxt = ({
  itemKey,
  isMobile,
  itemsContainerRef,
}: UseWorkItemAnimTxtProps) => {
  const txtWrapperRef = useRef(null);

  // ** --------- Animation Txt for Desktop --------- ** //

  useEffect(() => {
    const txtWrapper = txtWrapperRef.current;
    if (!txtWrapper || isMobile) return;
    (txtWrapper as HTMLElement).removeAttribute("style");

    const TxtAnimDesktop = gsap.timeline({
      scrollTrigger: {
        trigger: txtWrapper,
        start: "center 50%",
        end: "center 20%",
        scrub: true,
        invalidateOnRefresh: true,
        id: `txtWrapperTrigger-${itemKey}`,
      },
    });

    TxtAnimDesktop.to(txtWrapper, {
      opacity: "0",
      display: "none",
      duration: 1,
      ease: "power1.inOut",
    })
      .to(txtWrapper, {
        opacity: "1",
        display: "flex",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(txtWrapper, {
        opacity: "1",
        display: "flex",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(txtWrapper, {
        opacity: "0",
        display: "none",
        duration: 1,
        ease: "power1.inOut",
      });

    return () => {
      TxtAnimDesktop.scrollTrigger?.kill();
    };
  }, [itemKey, isMobile]);

  // ** --------- Animation Txt for Mobile --------- ** //

  useEffect(() => {
    const txtWrapper = txtWrapperRef.current;
    const scroller = itemsContainerRef.current;
    if (!txtWrapper || !scroller || !isMobile) return;
    (txtWrapper as HTMLElement).removeAttribute("style");

    const TxtAnimMobile = gsap.timeline({
      scrollTrigger: {
        trigger: txtWrapper,
        start: "left 25%",
        end: "left -10%",
        scrub: true,
        horizontal: true,
        invalidateOnRefresh: true,
        id: `txtWrapperTrigger-${itemKey}`,
        scroller: scroller || undefined,
      },
    });

    TxtAnimMobile.to(txtWrapper, {
      opacity: "0",
      duration: 1,
      ease: "power1.inOut",
    })
      .to(txtWrapper, { opacity: "1", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "1", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "0", duration: 1, ease: "power1.inOut" });

    return () => {
      TxtAnimMobile.scrollTrigger?.kill();
    };
  }, [itemKey, isMobile, itemsContainerRef]);

  return {
    txtWrapperRef,
  };
};

export default useWorkItemAnimTxt;
