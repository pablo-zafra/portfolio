"use client";
import Link from "next/link";
import { useFooter } from "./useFooter";
import { FormatEmail } from "./FormatEmail";

export const Footer: React.FC = () => {
  const { footerRef, email, emailCursor, ContactSectionRef } = useFooter();

  return (
    <footer
      id="contact-section"
      ref={footerRef}
      className="relative flex flex-col items-start justify-center bg-gray-light text-gray-dark text-4xl w-full overflow-hidden"
    >
      <div
        ref={ContactSectionRef}
        className="relative flex flex-col items-start justify-center gap-2 md:gap-4 lg:gap-6 px-6 md:px-12 lg:px-16 py-24 md:py-36 lg:py-42"
      >
        <p className="text-xl md:text-2xl lg:text-3xl">Get in touch:</p>
        <div ref={emailCursor}>
          {email && (
            <Link href={`mailto:${email}`}>
              <p className="text-[13vw] md:text-[8vw] 2xl:text-9xl">
                <FormatEmail email={email} />
              </p>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};
