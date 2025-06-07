"use client";

import Image from "next/image";
import { useHero } from "./useHero";
import { Pencil, DottedLine, SpinThePen } from "../../../components";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  const {
    HeroRef,
    titularRef,
    logosRef,
    descriptionRef,
    PencilTriggerRef,
    PencilInView,
    spinItCursorRef,
    scrollArrowRef,
    ctaView,
    setCtaView,
    scrollArrowInView,
  } = useHero();

  return (
    <section
      id="hero-section"
      ref={HeroRef}
      className="relative h-screen w-full flex justify-center items-center text-left overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center gap-6 max-md:translate-y-1/6">
        <div className="relative flex flex-col lg:flex-row justify-center items-center md:items-end max-w-[1480px] gap-24 md:gap-12 2xl:gap-21  lg:-translate-y-1/6">
          <div className="relative flex justify-center items-center">
            <div
              ref={spinItCursorRef}
              className="absolute w-9/10 max-h-screen aspect-7/8 lg:translate-x-1/2 lg:translate-y-1/15"
            >
              <div
                ref={PencilTriggerRef}
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
                  <SpinThePen />
                </div>
                {PencilInView ? <Pencil /> : null}
              </div>
            </div>
            <h1
              ref={titularRef}
              className="top-1/2 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight font-semibold z-1 relative whitespace-nowrap"
            >
              <span className="ml-[0.7em] relative reveal-text">Hi! </span>
              <span
                className={`relative inline-block align-baseline overflow-visible ${styles.profileImgWrapper}`}
              >
                <Image
                  src="/media/profile-photo.jpg"
                  alt="Pablo"
                  className="absolute w-full h-auto rounded-full bottom-0 translate-y-1/10"
                  width={400}
                  height={400}
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
          <div
            ref={descriptionRef}
            className="shrink max-w-44 xs:max-w-54 xl:max-w-68 2xl:max-w-80 flex flex-col justify-center items-center md:items-start lg:translate-y-full z-1 relative"
          >
            <p className="font-light text-xs xs:text-sm xl:text-base text-center md:text-left">
              <span className="reveal-text">
                Driven by a passion for crafting interactive and accessible
                solutions, I bring a meticulous approach to development, design,
                and animation. I love to write clean and scalable lines of magic
                code.
              </span>
            </p>
            <div ref={logosRef} className="flex mt-6 h-5 md:h-8 gap-4">
              <Image
                src="/media/react.png"
                alt="React"
                className="w-auto h-full reveal-element"
                width={40}
                height={40}
              />

              <Image
                src="/media/nextjs.png"
                alt="Next.js"
                className="w-auto h-full reveal-element"
                width={40}
                height={40}
              />

              <Image
                src="/media/typescript.png"
                alt="TypeScript"
                className="w-auto h-full reveal-element"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
        <div className="md:absolute md:right-0 md:bottom-0 opacity-0 animate-[fadeIn_2s_ease-in-out_3.5s_forwards]">
          <div
            ref={scrollArrowRef}
            className={`text-2xl xs:text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-thin p-4 md:p-6 animate-[customBounce_2s_ease-in-out_alternate_infinite] ${
              scrollArrowInView ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          >
            ↓
          </div>
        </div>
      </div>
      <div className="scroll-keeper bg-transparent absolute right-0 h-full w-5/20 md:hidden"></div>
      <div className="scroll-keeper bg-transparent absolute left-0 h-full w-5/20 md:hidden"></div>
    </section>
  );
};
