"use client";

import topCurve from "../../../public/img/top-curve.svg";
import { useHighlight } from "../../hooks";

export const AboutMe: React.FC = () => {
  const highlightRef01 = useHighlight();
  const highlightRef02 = useHighlight();

  return (
    <div>
      <div
        className={"w-screen pb-[12%] bg-no-repeat bg-cover bg-top"}
        style={{ backgroundImage: `url(${topCurve.src})` }}
      ></div>
      <div className="w-screen flex justify-center items-center bg-gray-light">
        <div className="max-w-5xl -mt-[3vw] text-gray-dark">
          <div className="text-2xl">
            <h3 className="inline-block text-sm uppercase text-s mr-6 align-middle font-medium">
              About me
            </h3>
            <p className="inline font-light align-middle">
              I started creating interactive animations with Flash and
              ActionScript, and later worked as a visual and web designer,
              building rich media ads, dynamic motion graphics, and engaging
              microsites and landing pages.
            </p>
            <p className="font-light mt-11">
              I developed expertise with various CMS platforms, contributed to
              multiple web projects, specialized in{" "}
              <span ref={highlightRef02}>front-end development</span>, led a
              small team of designers and developers, and have kept learning
              ever since.
            </p>
          </div>
          <h3 className="text-6xl text-center font-bold mt-42 mb-42">
            Based in <span ref={highlightRef01}>Málaga</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
