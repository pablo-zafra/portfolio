"use client";
import { useRef, useEffect } from "react";
import style from "./HandEllipse.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  flipX?: boolean;
  flipY?: boolean;
};

const HandEllipse: React.FC<Props> = ({ flipX = false, flipY = false }) => {
  const DrawRef = useRef<SVGPathElement>(null);
  const UnDrawRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { isMobile } = useBreakpoints();

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    const drawElement = DrawRef.current;
    const undrawElement = UnDrawRef.current;
    const containerElement = containerRef.current;

    if (!drawElement || !undrawElement || !containerElement) {
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,
        start: "bottom 60%",
        end: "top 40%",
        scrub: true,
        markers: true,
      },
    });

    tl.set(drawElement, { display: "none" }, 0)
      .set(undrawElement, { display: "block" }, 0)
      .set(drawElement, { display: "block" }, 0.01)
      .set(undrawElement, { display: "none" }, 0.01)
      .set(drawElement, { display: "none" }, 1)
      .set(undrawElement, { display: "block" }, 1);

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full hidden xl:block"
    >
      <svg
        viewBox="0 0 543 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute top-0 left-0 w-full h-full ${
          flipX ? "-scale-x-100" : ""
        } ${flipY ? "-scale-y-100" : ""}`}
        preserveAspectRatio="none"
      >
        <path
          ref={DrawRef}
          d="M10.8001 30.8838C150.305 2.01907 562.818 22.3152 539.011 75.501C505.1 151.258 57.6303 137.507 10.823 90.2006C-31.8214 47.1018 111.597 12.3999 158.672 3"
          stroke="var(--color-turquesa)"
          strokeWidth="var(--hand-ellipse-stroke-width)"
          strokeLinecap="round"
          className={style["hand-ellipse-draw"]}
          vectorEffect="non-scaling-stroke"
        />
        <path
          ref={UnDrawRef}
          d="M10.8001 30.8838C150.305 2.01907 562.818 22.3152 539.011 75.501C505.1 151.258 57.6303 137.507 10.823 90.2006C-31.8214 47.1018 111.597 12.3999 158.672 3"
          stroke="var(--color-turquesa)"
          strokeWidth="var(--hand-ellipse-stroke-width)"
          strokeLinecap="round"
          className={style["hand-ellipse-undraw"]}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

export default HandEllipse;
