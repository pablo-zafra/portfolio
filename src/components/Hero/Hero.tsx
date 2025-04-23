"use client";

import Image from "next/image";
import profilePhoto from "../../../public/img/profile-photo.jpg";
import reactLogo from "../../../public/img/react.png";
import nextLogo from "../../../public/img/nextjs.png";
import tsLogo from "../../../public/img/typescript.png";
import { Pencil } from "../3dModels";

const Hero: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
      <div className="flex justify-center items-center gap-10">
        <div className="absolute w-160 h-160 -z-1 ml-36">
          <Pencil />
        </div>
        <h1 className="text-8xl/tight font-semibold">
          <span className="ml-11 relative">
            Hi!{" "}
            <span className="inline-block bg-gray size-[1.15em] rounded-full align-text-top transition-all overflow-hidden">
              <Image
                src={profilePhoto}
                alt="Pablo"
                className="object-cover"
                width={undefined}
                height={undefined}
              />
            </span>{" "}
            I&apos;m Pablo:
          </span>
          <br />
          <span className="">Frontend developer</span>
          <br />
          <span className="ml-23">& UX/UI designer</span>
          <br />
        </h1>
        <div className="mt-96 w-72">
          <h2 className="text-base font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis
            tellus erat. Morbi finibus odio nec felis iaculis dapibus ac ac
            quam. Nunc bibendum dui vel neque mattis, sed sodales lorem semper.
          </h2>
          <div className="flex mt-6 gap-4">
            <Image
              src={reactLogo}
              alt="React"
              className="w-auto h-8"
              width={undefined}
              height={40}
            />

            <Image
              src={nextLogo}
              alt="Next.js"
              className="w-auto h-8"
              width={undefined}
              height={40}
            />

            <Image
              src={tsLogo}
              alt="TypeScript"
              className="w-auto h-8"
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
