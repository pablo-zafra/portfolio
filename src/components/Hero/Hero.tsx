"use client";

import Image from "next/image";
import profilePhoto from "../../../public/img/profile-photo.jpg";
import reactLogo from "../../../public/img/react.png";
import nextLogo from "../../../public/img/nextjs.png";
import tsLogo from "../../../public/img/typescript.png";
import { Pencil } from "../3dModels";
import { useTextReveal } from "@/hooks/useTextReveal";
import { useElementReveal } from "@/hooks/useElementReveal";
import DottedLine from "../DottedLine/DottedLine";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero: React.FC = () => {
  const revealH1 = useTextReveal({
    duration: 1.2,
    stagger: 0.11,
  });

  const revealH2 = useTextReveal({
    duration: 1,
    delay: 1,
    stagger: 0.025,
  });

  const revealLogos = useElementReveal({
    duration: 0.8,
    stagger: 0.15,
    y: "40px",
    delay: 1.5,
  });

  const revealLines = useElementReveal({
    duration: 3,
    stagger: 0.2,
    delay: 0.5,
    animation: "fadeIn",
  });

  const revealTitular = (e: HTMLInputElement | null) => {
    revealH1.current = e;
    revealLines.current = e;
  };

  const profileRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // FadeIn
    gsap.fromTo(
      profileRef.current,
      { width: 0 },
      {
        width: "1em",
        duration: 1.1,
        ease: "power2.out",
        delay: 2.6,
      }
    );

    // Hover
    const element = profileRef.current;
    if (element) {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          width: "1.2em",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          width: "1em",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
      <div className="absolute w-full h-full ml-96">
        <Pencil />
      </div>
      <div className="flex justify-center items-center gap-21 mb-21">
        <h1
          ref={revealTitular}
          className="text-8xl/tight font-semibold z-1 relative"
        >
          <span className="ml-13 relative reveal-text">Hi! </span>
          <span
            ref={profileRef}
            className="relative inline-block w-0 h-0 align-baseline overflow-visible"
          >
            <Image
              src={profilePhoto}
              alt="Pablo"
              className="absolute w-full h-auto rounded-full -bottom-3"
              width={undefined}
              height={undefined}
            />
          </span>
          <span className="relative">
            <span className="reveal-text"> I&apos;m Pablo:</span>
            <span>
              <DottedLine
                long="300%"
                direction="vertical"
                duration={11}
                delay={3}
                className="-top-8/10 -right-6 opacity-80 reveal-element"
              />
            </span>
          </span>
          <br />
          <DottedLine
            long="140%"
            direction="horizontal"
            duration={13}
            delay={1}
            className="-left-2/10 reveal-element"
          />
          <span className="reveal-text">Creative developer</span>
          <br />
          <DottedLine
            long="140%"
            direction="horizontal"
            duration={11}
            delay={4}
            className="-left-1/10 reveal-element rotate-180"
          />
          <span className="ml-36 relative">
            <span>
              <DottedLine
                long="300%"
                direction="vertical"
                duration={14}
                delay={0}
                className="-top-1/10 -left-6 opacity-60 rotate-180 reveal-element"
              />
            </span>
            <span className="reveal-text">& UX/UI designer</span>
          </span>
          <DottedLine
            long="110%"
            direction="vertical"
            duration={9}
            delay={0}
            className="-bottom-4/10 -right-11 opacity-80 reveal-element"
          />
        </h1>
        <div className="mt-96 w-72 z-1 relative">
          <h2 ref={revealH2} className="text-base font-extralight">
            <span className="reveal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              iaculis tellus erat. Morbi finibus odio nec felis iaculis dapibus
              ac ac quam. Nunc bibendum dui vel neque mattis, sed sodales lorem
              semper.
            </span>
          </h2>
          <div ref={revealLogos} className="flex mt-6 gap-4">
            <Image
              src={reactLogo}
              alt="React"
              className="w-auto h-8 reveal-element"
              width={undefined}
              height={40}
            />

            <Image
              src={nextLogo}
              alt="Next.js"
              className="w-auto h-8 reveal-element"
              width={undefined}
              height={40}
            />

            <Image
              src={tsLogo}
              alt="TypeScript"
              className="w-auto h-8 reveal-element"
              width={undefined}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
