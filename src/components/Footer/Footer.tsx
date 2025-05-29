"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useCursor, useInView } from "../../hooks";
import { useScrollContext } from "../../context";
import { useBreakpoints } from "../../hooks/useBreakpoints";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const { setScrollData } = useScrollContext();
  const footerRef = useRef<HTMLElement>(null);
  const { isMobile } = useBreakpoints();

  useEffect(() => {
    //
    const currentFooterRef = footerRef.current;
    if (!currentFooterRef) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const encodedEmail = "aG9sYUBwYWJsb3phZnJhLmVz";
          setEmail(atob(encodedEmail));
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(currentFooterRef);

    return () => {
      if (currentFooterRef) {
        observer.unobserve(currentFooterRef);
      }
    };
  }, []);

  const formatEmail = (email: string): React.ReactElement | string => {
    if (email && isMobile) {
      const index = email.indexOf("z");
      if (index !== -1) {
        return (
          <>
            {email.slice(0, index)}
            <br />
            {email.slice(index)}
          </>
        );
      }
    }
    return email;
  };

  const emailCursor = useCursor({
    className: "w-22! rotate-26! text-md -translate-y-2/3 -translate-x-3/5",
    message: "Email",
    icon: "forwardToInbox",
  });

  const {
    inViewportElemRef: ContactSectionRef,
    isInView: ContactSectionInView,
  } = useInView({
    start: "top 80%",
    end: "bottom top",
  });

  useEffect(() => {
    if (!ContactSectionInView) return;
    setScrollData({ current: 5 });
    // console.log("Section In View: Contact");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ContactSectionInView]);

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
                {formatEmail(email)}
              </p>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
