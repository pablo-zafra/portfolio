"use client";
import { useEffect, useRef, useState } from "react";
import { useScrollContext } from "../../context";
import { useCursor, useInView } from "../../hooks";

export const useFooter = () => {
  const [email, setEmail] = useState("");
  const { setScrollData } = useScrollContext();
  const footerRef = useRef<HTMLElement>(null);

  const {
    inViewportElemRef: ContactSectionRef,
    isInView: ContactSectionInView,
  } = useInView({
    start: "top 80%",
    end: "bottom top",
  });

  const isHomePage = () => window.location.pathname === "/";

  useEffect(() => {
    if (!ContactSectionInView || !isHomePage()) return;
    setScrollData({ current: 5 });
    // console.log("Section In View: Contact");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ContactSectionInView]);

  useEffect(() => {
    //
    const currentFooterRef = footerRef.current;
    if (!currentFooterRef) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const encodedEmail = "aG9sYUBwYWJsb3phZnJhLmRldg==";
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

  const linkedinCursor = useCursor({
    className: "w-14! rotate-18! text-md -translate-y-2/3 -translate-x-3/5",
    icon: "linkedin",
  });

  const githubCursor = useCursor({
    className: "w-14! rotate-18! text-md -translate-y-2/3 -translate-x-3/5",
    icon: "github",
  });

  const calendarCursor = useCursor({
    className: "w-14! rotate-18! text-md -translate-y-2/3 -translate-x-3/5",
    icon: "calendar",
  });

  return {
    footerRef,
    emailCursor,
    linkedinCursor,
    githubCursor,
    calendarCursor,
    ContactSectionRef,
    ContactSectionInView,
    email,
  };
};
