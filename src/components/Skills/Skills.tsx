"use client";
import HandEllipse from "./HandEllipse/HandEllipse";
import { Headphones } from "../3dModels";
import { useCursor } from "../../hooks";

const Skills: React.FC = () => {
  const spinCursor = useCursor({
    className:
      "w-20! rotate-26! text-md -translate-y-2/3 -translate-x-3/5 transition-[width,transform]!",
    message: "Spin it!",
    icon: "threeDRotation",
  });

  return (
    <div className="relative flex items-center justify-center overflow-hidden md:pl-[20vw] 2xl:pl-60">
      <div className="relative flex flex-col md:flex-row-reverse text-gray-light my-44 sm:my-52 gap-8 md:gap-14 max-md:-translate-y-20">
        <div
          ref={spinCursor}
          className="absolute w-3/2 aspect-square top-4/10 md:-top-14/10 lg:-top-16/10 right-0 md:right-65/100  -rotate-16"
        >
          <Headphones />
        </div>
        <div className="max-md:border-b-1 md:border-l-1 border-gray-light border-solid">
          <h2 className="text-lg font-light max-md:text-right md:rotate-90 origin-left-middle md:origin-top-left md:translate-x-[2em] mb-2">
            Skills
          </h2>
        </div>
        <ul className="flex flex-col gap-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-snug sm:my-[-0.3em] font-semibold whitespace-nowrap">
          <li className="relative w-fit h-fit md:px-8">
            Front-end Development
            <HandEllipse flipY={true} />
          </li>
          <li className="relative w-fit h-fit ml-[2em] md:ml-[3em] lg:ml-[5em] md:px-6">
            UX/UI Design
            <HandEllipse flipX={true} />
          </li>
          <li className="relative w-fit h-fit ml-[1em] md:ml-[2em] lg:ml-[3em] md:px-6">
            Prototyping
            <HandEllipse flipY={true} />
          </li>
          <li className="relative w-fit h-fit ml-[3em] md:ml-[4em] lg:ml-[6em] md:px-6">
            Rich Media
            <HandEllipse />
          </li>
          <li className="relative w-fit h-fit ml-[4em] md:ml-[5em] lg:ml-[7em] md:px-6">
            Motion Design
            <HandEllipse flipX={true} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
