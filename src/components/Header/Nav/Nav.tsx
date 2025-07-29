"use client";
import Link from "next/link";
import useNav from "./useNav";
import { HandEllipse } from "../..";

interface OffCanvasMenuProps {
  opened: boolean;
  onClose: () => void;
}

const Nav: React.FC<OffCanvasMenuProps> = ({ opened, onClose }) => {
  const {
    introCursorRef,
    aboutCursorRef,
    skillsCursorRef,
    workCursorRef,
    contactCursorRef,
    currentScroll,
  } = useNav();

  return (
    <>
      <nav
        className={`fixed top-0 left-full ${
          opened ? "-translate-x-full" : ""
        } h-screen w-[80dvw] max-w-240  bg-gray-dark-X grid-pattern text-white transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-32 z-20`}
      >
        <ul className="flex flex-col justify-center gap-2 md:gap-6 text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold h-fit">
          <li className="relative ml-[1em] w-fit cursor-pointer">
            <span ref={introCursorRef} className="block overflow-hidden">
              <Link
                href="/#hero-section"
                onClick={onClose}
                className={`inline-block relative px-2 py-1 md:px-6 md:py-1 ${
                  !opened
                    ? "translate-y-full transition-transform duration-100 delay-100"
                    : "transition-transform duration-500 ease-out delay-100"
                } `}
              >
                Intro
                <HandEllipse flipX={true} highlighted={currentScroll === 1} />
              </Link>
            </span>
          </li>
          <li className="relative ml-[0em] w-fit cursor-pointer">
            <span ref={aboutCursorRef} className="block overflow-hidden">
              <Link
                href="/#about-section"
                onClick={onClose}
                className={`inline-block relative px-2 py-1 md:px-6 md:py-1 ${
                  !opened
                    ? "translate-y-full transition-transform duration-100 delay-100"
                    : "transition-transform duration-500 ease-out delay-150"
                } `}
              >
                About me
                <HandEllipse flipY={true} highlighted={currentScroll === 2} />
              </Link>
            </span>
          </li>
          <li className="relative ml-[2.5em] w-fit -transform cursor-pointer">
            <span ref={skillsCursorRef} className="block overflow-hidden">
              <Link
                href="/#skills-section"
                onClick={onClose}
                className={`inline-block relative px-2 py-1 md:px-6 md:py-1 ${
                  !opened
                    ? "translate-y-full transition-transform duration-100 delay-100"
                    : "transition-transform duration-500 ease-out delay-200"
                } `}
              >
                Skills
                <HandEllipse flipX={true} highlighted={currentScroll === 3} />
              </Link>
            </span>
          </li>
          <li className="relative ml-[3.5em] w-fit cursor-pointer">
            <span ref={workCursorRef} className="block overflow-hidden">
              <Link
                href="/#work-section"
                onClick={onClose}
                className={`inline-block relative px-2 py-1 md:px-6 md:py-1 ${
                  !opened
                    ? "translate-y-full transition-transform duration-100 delay-100"
                    : "transition-transform duration-500 ease-out delay-250"
                } `}
              >
                Work
                <HandEllipse
                  flipX={true}
                  flipY={true}
                  highlighted={currentScroll === 4}
                />
              </Link>
            </span>
          </li>
          <li className="relative ml-[1.5em] w-fit cursor-pointer">
            <span ref={contactCursorRef} className="block overflow-hidden">
              <Link
                href="/#contact-section"
                onClick={onClose}
                className={`inline-block relative px-2 py-1 md:px-6 md:py-1 ${
                  !opened
                    ? "translate-y-full transition-transform duration-100 delay-100"
                    : "transition-transform duration-500 ease-out delay-300"
                } `}
              >
                Contact
                <HandEllipse flipY={true} highlighted={currentScroll === 5} />
              </Link>
            </span>
          </li>
        </ul>
        <span className="block relative overflow-hidden">
          <Link
            href="https://calendly.com/pablozafra"
            target="_blank"
            className={`inline-block relative p-4 bg-transparent hover:bg-turquesa text-white rounded-full border-white border-1 hover:border-turquesa box-border h-fit ${
              !opened
                ? "translate-y-full transition-transform duration-100 delay-100"
                : "transition-transform duration-500 ease-out delay-300"
            }`}
          >
            Book a meeting
          </Link>
        </span>
      </nav>
      {opened && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-black opacity-80 z-19"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default Nav;
