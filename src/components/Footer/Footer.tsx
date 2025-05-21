"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useCursor } from "../../hooks";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

  const emailCursor = useCursor({
    className: "w-22! rotate-26! text-md -translate-y-2/3 -translate-x-3/5",
    message: "Email",
    icon: "forwardToInbox",
  });

  return (
    <footer
      ref={footerRef}
      className="relative flex flex-col items-start justify-center gap-6 h-60 md:h-100 lg:h-140 p-6 md:p-12 lg:p-16 bg-gray-light text-gray-dark text-4xl w-full overflow-hidden"
    >
      <p className="text-xl md:text-2xl lg:text-3xl">Get in touch:</p>
      <div ref={emailCursor}>
        {email && (
          <Link href={`mailto:${email}`}>
            <p className="text-[8vw] 2xl:text-9xl">{email}</p>
          </Link>
        )}
      </div>
    </footer>
  );
};

export default Footer;
