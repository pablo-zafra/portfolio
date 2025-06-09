import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

interface UseWorkItemAnimImgProps {
  itemKey: number;
  isMobile: boolean;
  itemsContainerRef: React.RefObject<HTMLDivElement>;
}

gsap.registerPlugin(ScrollTrigger);

export const useWorkItemAnimImg = ({
  itemKey,
  isMobile,
  itemsContainerRef,
}: UseWorkItemAnimImgProps) => {
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // ** --------- Animación de Imagen para Escritorio --------- ** //

  useEffect(() => {
    const imgWrapper = imgWrapperRef.current;
    if (!imgWrapper || isMobile) return;
    (imgWrapper as HTMLElement).removeAttribute("style");

    const imgAnimDesktop = gsap.timeline({
      scrollTrigger: {
        trigger: imgWrapper,
        start: "center 90%",
        end: "center 10%",
        scrub: true,
        invalidateOnRefresh: true,
        id: `imgWrapperTrigger-desktop-${itemKey}`,
      },
    });

    imgAnimDesktop
      .from(imgWrapper, { width: "50%", duration: 1, ease: "power1.inOut" })
      .to(imgWrapper, { width: "100%", duration: 1, ease: "power1.inOut" })
      .to(imgWrapper, { width: "50%", duration: 1, ease: "power1.inOut" });

    return () => {
      imgAnimDesktop.scrollTrigger?.kill();
    };
  }, [itemKey, isMobile]);

  // ** --------- Animación de Imagen para Móvil --------- ** //

  useEffect(() => {
    const imgWrapper = imgWrapperRef.current;
    const scroller = itemsContainerRef.current;
    if (!imgWrapper || !scroller || !isMobile) return;
    (imgWrapper as HTMLElement).removeAttribute("style");

    const imgAnimMobile = gsap.timeline({
      scrollTrigger: {
        trigger: imgWrapper,
        start: "right 100%",
        end: "right 6rem",
        scrub: true,
        horizontal: true,
        invalidateOnRefresh: true,
        id: `imgWrapperTrigger-mobile-${itemKey}`, // ID único para diferenciar del escritorio
        scroller: scroller || undefined,
      },
    });

    imgAnimMobile
      .from(imgWrapper, { height: "50%", duration: 1, ease: "power1.inOut" })
      .to(imgWrapper, { height: "100%", duration: 2, ease: "power1.inOut" })
      .to(imgWrapper, { height: "50%", duration: 1, ease: "power1.inOut" });

    return () => {
      imgAnimMobile.scrollTrigger?.kill();
    };
  }, [itemKey, isMobile, itemsContainerRef]);

  // ** --------- Refrescar ScrollTrigger al Cambiar el Pathname --------- ** //
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return {
    imgWrapperRef,
  };
};
