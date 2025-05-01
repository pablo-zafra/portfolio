import HandEllipse from "../HandEllipse/HandEllipse";
import { Headphones } from "../3dModels";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="absolute w-8/10 h-13/10 -left-26/100 -top-20/100 -rotate-16">
        <Headphones />
      </div>
      <div className="flex flex-row-reverse gap-11 text-gray-light mt-36 mb-36 ml-36 h-fit">
        <div className="border-l-1 border-gray-light border-solid px-6">
          <h2 className="text-lg font-light rotate-90 origin-bottom-left leading-0">
            Skills
          </h2>
        </div>
        <ul className="flex flex-col gap-3 text-6xl leading-none font-semibold">
          <li className="relative w-fit h-fit ml-0 px-8 py-3 skill-">
            Frontend Development
            <HandEllipse flipY={true} />
          </li>
          <li className="relative w-fit h-fit ml-[5em] px-6 py-3 skill-">
            UX/UI Design
            <HandEllipse flipX={true} />
          </li>
          <li className="relative w-fit h-fit ml-[3em] px-6 py-3 skill-">
            Prototyping
            <HandEllipse flipY={true} />
          </li>
          <li className="relative w-fit h-fit ml-[6em] px-6 py-3 skill-">
            Rich Media
            <HandEllipse />
          </li>
          <li className="relative w-fit h-fit ml-[7em] px-6 py-3 skill-">
            Motion Design
            <HandEllipse flipX={true} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
