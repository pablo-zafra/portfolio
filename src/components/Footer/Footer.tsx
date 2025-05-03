"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

    const currentFooterRef = footerRef.current;
    if (currentFooterRef) {
      observer.observe(currentFooterRef);
    }

    return () => {
      if (currentFooterRef) {
        observer.unobserve(currentFooterRef);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative flex flex-col items-start justify-center gap-6 h-140 p-16 bg-gray-light text-gray-dark text-4xl w-full overflow-hidden"
    >
      <p className="">Get in touch:</p>
      {email && (
        <Link href={`mailto:${email}`}>
          <p className="text-[8vw]">{email}</p>
        </Link>
      )}
    </footer>
  );
};

export default Footer;
