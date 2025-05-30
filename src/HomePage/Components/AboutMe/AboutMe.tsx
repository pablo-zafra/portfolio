"use client";

import { JoinBox } from "../../../components";
import { useAboutMe } from "./useAboutMe";

export const AboutMe: React.FC = () => {
  const {
    highlightRef,
    malagaCursorRef,
    isTouchDevice,
    AboutRef,
    JoinBoxRef,
    JoinBoxInView,
  } = useAboutMe();

  return (
    <section id="about-section" ref={AboutRef}>
      <div
        className={"pb-[12%] bg-no-repeat bg-cover bg-top"}
        style={{ backgroundImage: `url("/img/top-curve.svg")` }}
      ></div>
      <div className="flex justify-center items-center bg-gray-light -mt-1">
        <div className="flex flex-col-reverse px-10 xs:px-14 md:max-w-3xl xl:max-w-5xl mt-6 xl:-mt-[3vw] text-gray-dark">
          <h2 className="relative text-3xl xs:text-4xl md:text-6xl leading-relaxed text-center font-bold my-14 xs:my-20 md:my-28">
            <div ref={malagaCursorRef} className="relative p-6">
              <div ref={JoinBoxRef} className="absolute left-8/10 bottom-8/10">
                {isTouchDevice && (
                  <JoinBox
                    isActive={JoinBoxInView}
                    className="bottom-full w-20! text-md rounded-xl! bg-[url(/img/malaga.gif)]"
                  />
                )}
              </div>
              Based in <span ref={highlightRef}>Málaga</span>
            </div>
          </h2>
          <div className="text-lg sm:text-xl lg:text-2xl font-light">
            <h3 className="inline-block text-[10px] md:text-sm uppercase text-s mr-[1em] align-baseline font-medium">
              About me
            </h3>
            <p className="inline align-middle">
              I started creating interactive animations with Flash and
              ActionScript, and later worked as a visual and web designer,
              building rich media ads, dynamic motion graphics, and engaging
              microsites and landing pages.
            </p>
            <p className="mt-11">
              I developed expertise with various CMS platforms, contributed to
              multiple web projects, specialized in front-end development, led a
              small team of designers and developers, and have kept learning
              ever since.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
