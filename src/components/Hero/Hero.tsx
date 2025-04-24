"use client";

import Image from "next/image";
import profilePhoto from "../../../public/img/profile-photo.jpg";
import reactLogo from "../../../public/img/react.png";
import nextLogo from "../../../public/img/nextjs.png";
import tsLogo from "../../../public/img/typescript.png";
import { Pencil } from "../3dModels";
import { useTextReveal } from "@/hooks/useTextReveal";
import { useElementReveal } from "@/hooks/useElementReveal";

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
        <h1 ref={animatedH1} className="text-8xl/tight font-semibold z-1">
          <span className="ml-11 relative reveal-text">Hi! </span>
          <span className="inline-block bg-gray size-[1.15em] rounded-full align-text-top transition-all overflow-hidden">
            <Image
              src={profilePhoto}
              alt="Pablo"
              className="object-cover"
              width={undefined}
              height={undefined}
            />
          </span>
          <span className="reveal-text"> I&apos;m Pablo:</span>
          <br />
          <span className="reveal-text">Creative developer</span>
          <br />
          <span className="ml-23 reveal-text">& UX/UI designer</span>
          <br />
        </h1>
        <div className="mt-96 w-72  z-1">
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
