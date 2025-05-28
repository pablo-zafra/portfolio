"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollContext } from "../../context";
import { useBreakpoints, useInView } from "../../hooks";
import WorkItem from "./WorkItem/WorkItem";
import { workData } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const Work: React.FC = () => {
  const { isMobile } = useBreakpoints();
  const { setScrollData } = useScrollContext();

  const scrollRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    // Draggeable horizontal scroll for mobile devices
    const el = scrollRef.current;
    if (!el || !isMobile) return;

    el.style.touchAction = "auto"; // O 'none' si necesitas control total

    const minScroll = () => window.innerWidth * 0.5 - 16;

    const startPos = setTimeout(() => {
      el.scrollTo({
        left: minScroll(),
        behavior: "smooth",
      });
    }, 50);

    let scrollTimeout: NodeJS.Timeout | null = null;

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
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isDragging.current = false;
        el.scrollTo({
          left: closestSnapPoint,
          behavior: "smooth",
        });
      }, 100);
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      e.preventDefault();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 1.2;
      el.scrollLeft = scrollLeft.current - walk;
    };

    // Creamos una función común para la lógica de finalización del arrastre
    const endDrag = (e: PointerEvent) => {
      if (!isDragging.current) return; // Solo si estábamos arrastrando
      console.log("Pointer Up/Cancel/Leave - ending drag");
      // Solo liberar la captura si el elemento la tiene
      if (el.hasPointerCapture(e.pointerId)) {
        el.releasePointerCapture(e.pointerId);
      }
      scrollToClosestSnapPoint();
    };

    const onPointerUp = (e: PointerEvent) => {
      console.log("Pointer Up");
      endDrag(e); // Llama a la función común
    };

    // Es crucial manejar pointercancel también, ya que el navegador puede interrumpir el gesto
    const onPointerCancel = (e: PointerEvent) => {
      console.log("Pointer Cancel");
      endDrag(e); // Llama a la función común
    };

    const onPointerLeave = (e: PointerEvent) => {
      console.log("Pointer Leave");
      // Si el puntero se fue mientras arrastrábamos, también finalizamos el arrastre
      // Sin embargo, si el puntero se fue y *luego* se soltó el botón, onPointerUp ya se encargó.
      // `endDrag` ya tiene la protección `if (!isDragging.current) return;`
      // para evitar esto si el `pointerup` se encargó ya.
      endDrag(e);
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerCancel); // ¡Añadir este listener!
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      clearTimeout(startPos);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerCancel);
      el.removeEventListener("pointerleave", onPointerLeave);
      el.style.removeProperty("touch-action"); // Limpiar el estilo al desmontar
    };
  }, [isMobile]); // Asegúrate de que las dependencias sean correctas

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
      <div className="max-md:px-4 md:sticky md:top-0 md:w-40 xl:w-[18vh] xl:ml-7.5 md:h-screen flex md:items-center md:justify-center">
        <h2 className="uppercase font-semibold md:-rotate-90 text-5xl md:text-9xl xl:text-[24vh] leading-[0.73em]">
          Work
        </h2>
        <p className="hidden">Take a look to some selected projects</p>
      </div>
      <div
        ref={scrollRef}
        className="relative flex px-[50vw] md:pl-0 md:pr-20 xl:pr-32 max-md:overflow-x-scroll max-md:select-none md:h-auto md:flex-col md:flex-1 md:items-end gap-4 md:gap-16 md:pt-24 md:pb-86 [&::-webkit-scrollbar]:hidden"
      >
        {workData.map(({ titleLines, tags, slug, bg, link, newTab }, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Work;
