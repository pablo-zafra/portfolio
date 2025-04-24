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

const Hero: React.FC = () => {
  const animatedH1 = useTextReveal({
    duration: 1.2,
    stagger: 0.11,
  });

  const animatedH2 = useTextReveal({
    duration: 1,
    delay: 1,
    stagger: 0.025,
  });

  const logosRef = useElementReveal({
    duration: 0.8,
    stagger: 0.15,
    delay: 1.5,
  });

  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
      <div className="absolute w-full h-full ml-96">
        <Pencil />
      </div>
      <div className="flex justify-center items-center gap-10">
        <h1
          ref={animatedH1}
          className="text-8xl/tight font-semibold z-1 relative"
        >
          <span className="ml-11 relative reveal-text">Hi! </span>
          <span className="inline-block bg-gray w-[1.15em] rounded-full align-middle transition-all overflow-hidden">
            <Image
              src={profilePhoto}
              alt="Pablo"
              className="object-cover"
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
                className="-top-4/10 -right-6 animate-[fadeIn_13s] opacity-80"
              />
            </span>
          </span>
          <br />
          <DottedLine
            long="140%"
            duration={13}
            delay={1}
            className="-left-2/10 animate-[fadeIn_4s]"
          />
          <span className="reveal-text">Creative developer</span>
          <br />
          <DottedLine
            long="140%"
            duration={11}
            delay={4}
            className="-left-1/10 animate-[fadeIn_9s]"
          />
          <span className="ml-23 relative">
            <span>
              <DottedLine
                long="300%"
                direction="vertical"
                duration={14}
                className="-top-1/10 -left-6 animate-[fadeIn_8s]  opacity-60"
              />
            </span>
            <span className="reveal-text">& UX/UI designer</span>
          </span>
        </h1>
        <div className="mt-96 w-72 z-1 relative">
          <DottedLine
            long="200%"
            direction="vertical"
            duration={9}
            className="top-[-30%] -left-6 animate-[fadeIn_11s]  opacity-80"
          />
          <h2 ref={animatedH2} className="text-base font-extralight">
            <span className="reveal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              iaculis tellus erat. Morbi finibus odio nec felis iaculis dapibus
              ac ac quam. Nunc bibendum dui vel neque mattis, sed sodales lorem
              semper.
            </span>
          </h2>
          <div ref={logosRef} className="flex mt-6 gap-4">
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
