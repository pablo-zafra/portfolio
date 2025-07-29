"use client";
import Link from "next/link";
import { useFooter } from "./useFooter";
import { FormatEmail } from "./FormatEmail";

export const Footer: React.FC = () => {
  const {
    footerRef,
    email,
    emailCursor,
    linkedinCursor,
    githubCursor,
    calendarCursor,
    ContactSectionRef,
  } = useFooter();

  return (
    <footer
      id="contact-section"
      ref={footerRef}
      className="relative flex flex-col items-start justify-center bg-gray-light text-gray-dark text-4xl w-full overflow-hidden"
    >
      <div
        ref={ContactSectionRef}
        className="relative flex flex-col items-start justify-center gap-2 md:gap-4 lg:gap-6 px-6 md:px-12 lg:px-16 w-full aspect-square md:aspect-5/2 xl:aspect-auto xl:h-128"
      >
        <p className="text-xl md:text-2xl lg:text-3xl">Get in touch:</p>
        <div ref={emailCursor}>
          {email && (
            <Link href={`mailto:${email}`}>
              <p className="text-[13vw] md:text-[8vw] 2xl:text-9xl md:-ml-0.5 lg:-ml-1 xl:-ml-1.5">
                <FormatEmail email={email} />
              </p>
            </Link>
          )}
        </div>
        <ul className="text-xl md:text-2xl lg:text-3xl flex gap-11 mt-6 -mb-4">
          <li>
            <Link
              href="https://www.linkedin.com/in/pablo-zafra/"
              target="_blank"
              className="hover:underline"
            >
              <span ref={linkedinCursor}>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/pablo-zafra"
              target="_blank"
              className="hover:underline"
            >
              <span ref={githubCursor}>GitHub</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://calendly.com/pablozafra"
              target="_blank"
              className="hover:underline"
            >
              <span ref={calendarCursor}>Book a meeting</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
