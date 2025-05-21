"use client";

import Image from "next/image";
import profilePhoto from "../../../public/img/profile-photo.jpg";
import reactLogo from "../../../public/img/react.png";
import nextLogo from "../../../public/img/nextjs.png";
import tsLogo from "../../../public/img/typescript.png";
import { Pencil } from "../3dModels";
import {
  useTextReveal,
  useElementReveal,
  useCursor,
  useInView,
} from "../../hooks/";
import DottedLine from "../DottedLine/DottedLine";
import styles from "./Hero.module.css";
import SpinThePen from "./SpinThePen/SpinThePen";

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

  const spinCursor = useCursor({
    className: "w-20! rotate-26! text-md -translate-y-2/3 -translate-x-3/5",
    message: "Spin it!",
    icon: "threeDRotation",
  });

  const { inViewportElemRef, isInView } = useInView({
    offsetTop: 200,
    offsetBottom: 500,
  });

  return (
    <div className="relative h-screen w-full flex justify-center items-center text-left overflow-hidden">
      <div className="relative flex flex-col lg:flex-row justify-center items-center md:items-end max-w-[1480px] gap-26 md:gap-12 2xl:gap-21 translate-y-1/6 lg:-translate-y-1/6">
        <SpinThePen />
        <div className="relative flex justify-center items-center">
          <div
            ref={spinCursor}
            className="absolute w-9/10 max-h-screen aspect-7/8 lg:translate-x-1/2 lg:translate-y-1/15"
          >
            <div ref={inViewportElemRef} className="w-full h-full">
              {isInView ? <Pencil /> : null}
            </div>
          </div>
          <h1
            ref={revealTitular}
            className="top-1/2 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight font-semibold z-1 relative whitespace-nowrap"
          >
            <span className="ml-[0.7em] relative reveal-text">Hi! </span>
            <span
              className={`relative inline-block align-baseline overflow-visible ${styles.profileImgWrapper}`}
            >
              <Image
                src={profilePhoto}
                alt="Pablo"
                className="absolute w-full h-auto rounded-full bottom-0 translate-y-1/10"
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
                  duration={3}
                  className="bottom-[-0.3em] right-[-0.3em] opacity-80 reveal-element"
                />
              </span>
            </span>
            <br />
            <DottedLine
              long="120%"
              direction="horizontal"
              duration={5}
              className="left-[-2em] reveal-element"
            />
            <span className="reveal-text">Creative developer</span>
            <br />
            <DottedLine
              long="140%"
              direction="horizontal"
              duration={5}
              className="left-[-2em] reveal-element rotate-180"
            />
            <span className="ml-[1.8em] relative">
              <DottedLine
                long="260%"
                direction="vertical"
                duration={4}
                className="top-[-0.1em] left-[-0.3em] opacity-60 rotate-180 reveal-element"
              />
              <span className="reveal-text">& UX/UI designer</span>
              <DottedLine
                long="250%"
                direction="vertical"
                duration={4}
                className="hidden xs:block top-[-1em] right-[-0.3em] opacity-80 reveal-element"
              />
            </span>
          </h1>
        </div>
        <div className="shrink max-w-44 xs:max-w-54 xl:max-w-68 2xl:max-w-80 flex flex-col justify-center items-center md:items-start lg:translate-y-full z-1 relative">
          <p
            ref={revealH2}
            className="font-light text-xs xs:text-sm xl:text-base text-center md:text-left"
          >
            <span className="reveal-text">
              Driven by a passion for crafting interactive and accessible
              solutions, I bring a meticulous approach to development, design,
              and animation. I love to write clean and scalable lines of magic
              code.
            </span>
          </p>
          <div ref={revealLogos} className="flex mt-6 h-5 md:h-8 gap-4">
            <Image
              src={reactLogo}
              alt="React"
              className="w-auto h-full reveal-element"
              width={undefined}
              height={40}
            />

            <Image
              src={nextLogo}
              alt="Next.js"
              className="w-auto h-full reveal-element"
              width={undefined}
              height={40}
            />

            <Image
              src={tsLogo}
              alt="TypeScript"
              className="w-auto h-full reveal-element"
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
