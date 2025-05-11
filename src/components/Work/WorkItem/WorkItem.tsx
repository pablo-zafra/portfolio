"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

interface WorkItemProps {
  itemKey: number;
  titleLines: string[];
  tags: string[];
  slug: string;
  bg?: string;
  link?: string;
  newTab?: boolean;
  windowWidth: number;
  itemsContainerRef: React.RefObject<HTMLDivElement>;
}

gsap.registerPlugin(ScrollTrigger);

const WorkItem: React.FC<WorkItemProps> = (WorkItemProps) => {
  const {
    itemKey,
    titleLines,
    tags,
    slug,
    bg,
    link,
    newTab,
    windowWidth,
    itemsContainerRef,
  } = WorkItemProps;
  const bgColor = bg! ? bg : "white";
  const mainImg = `/img/work/${slug}/${slug}.jpg`;

  const imgWrapperRef = useRef(null);
  const txtWrapperRef = useRef(null);

  useEffect(() => {
    const imgWrapper = imgWrapperRef.current;
    if (!imgWrapper) return;
    if (windowWidth < 768) return;
    (imgWrapper as HTMLElement).removeAttribute("style");

    const imgAnimDesktop = gsap.timeline({
      scrollTrigger: {
        trigger: imgWrapper,
        start: "center 90%",
        end: "center 10%",
        scrub: true,
        invalidateOnRefresh: true,
        id: `imgWrapperTrigger-${itemKey}`,
      },
    });

    imgAnimDesktop
      .from(imgWrapper, { width: "50%", duration: 1, ease: "power1.inOut" })
      .to(imgWrapper, { width: "100%", duration: 1, ease: "power1.inOut" })
      .to(imgWrapper, { width: "50%", duration: 1, ease: "power1.inOut" });

    return () => {
      imgAnimDesktop.scrollTrigger?.kill();
    };
  }, [itemKey, windowWidth]);

  useEffect(() => {
    const imgWrapper = imgWrapperRef.current;
    const scroller = itemsContainerRef.current;
    if (!imgWrapper || !scroller) return;
    if (windowWidth >= 768) return;
    (imgWrapper as HTMLElement).removeAttribute("style");

    const imgAnimMobile = gsap.timeline({
      scrollTrigger: {
        trigger: imgWrapper,
        start: "right 100%",
        end: "right 6rem",
        scrub: true,
        horizontal: true,
        invalidateOnRefresh: true,
        id: `imgWrapperTrigger-${itemKey}`,
        scroller: scroller || undefined,
      },
    });

    imgAnimMobile
      .from(imgWrapper, { height: "50%", duration: 1, ease: "power1.inOut" })
      .to(imgWrapper, { height: "100%", duration: 2, ease: "power1.inOut" })
      .to(imgWrapper, { height: "50%", duration: 1, ease: "power1.inOut" });

    return () => {
      imgAnimMobile.scrollTrigger?.kill();
    };
  }, [itemKey, windowWidth, itemsContainerRef]);

  useEffect(() => {
    const txtWrapper = txtWrapperRef.current;
    if (!txtWrapper) return;
    if (windowWidth < 768) return;
    (txtWrapper as HTMLElement).removeAttribute("style");

    const TxtAnimDesktop = gsap.timeline({
      scrollTrigger: {
        trigger: txtWrapper,
        start: "center 50%",
        end: "center 20%",
        scrub: true,
        invalidateOnRefresh: true,
        id: `txtWrapperTrigger-${itemKey}`,
      },
    });

    TxtAnimDesktop.to(txtWrapper, {
      opacity: "0",
      duration: 1,
      ease: "power1.inOut",
    })
      .to(txtWrapper, { opacity: "1", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "1", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "0", duration: 1, ease: "power1.inOut" });

    return () => {
      TxtAnimDesktop.scrollTrigger?.kill();
    };
  }, [itemKey, windowWidth]);

  useEffect(() => {
    const txtWrapper = txtWrapperRef.current;
    const scroller = itemsContainerRef.current;
    if (!txtWrapper || !scroller) return;
    if (windowWidth >= 768) return;
    (txtWrapper as HTMLElement).removeAttribute("style");

    const TxtAnimMobile = gsap.timeline({
      scrollTrigger: {
        trigger: txtWrapper,
        start: "left 25%",
        end: "left -10%",
        scrub: true,
        horizontal: true,
        invalidateOnRefresh: true,
        id: `txtWrapperTrigger-${itemKey}`,
        scroller: scroller || undefined,
      },
    });

    TxtAnimMobile.to(txtWrapper, {
      opacity: "0",
      duration: 1,
      ease: "power1.inOut",
    })
      .to(txtWrapper, { opacity: "1", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "1", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "0", duration: 1, ease: "power1.inOut" });

    return () => {
      TxtAnimMobile.scrollTrigger?.kill();
    };
  }, [itemKey, windowWidth, itemsContainerRef]);

  return (
    <div className="relative flex flex-col-reverse w-fit md:flex-row justify-end gap-11 md:w-full overflow-visible">
      <div className="flex flex-col sticky left-[-50vw] w-full min-h-34 overflow-visible items-start justify-start md:items-end md:flex-1 md:py-6">
        <div
          ref={txtWrapperRef}
          className="absolute w-[calc(100vw-2rem)] md:relative flex flex-col md:items-end opacity-0 md:justify-center md:top-1/2 xl:pl-26 md:right-0 md:h-0 md:w-auto md:text-right md:overflow-visible"
        >
          {link ? (
            <Link
              href={link}
              target={newTab ? "_blank" : "_self"}
              rel={newTab ? "noopener noreferrer" : undefined}
            >
              <h3 className="text-2xl xl:text-4xl font-semibold hover:underline whitespace-pre-wrap">
                {titleLines?.map((line, index) => (
                  <span key={index}>
                    <span>{line}</span>
                    <br />
                  </span>
                ))}
              </h3>
            </Link>
          ) : (
            <h3 className="text-2xl xl:text-4xl font-semibold whitespace-pre-wrap">
              {titleLines?.map((line, index) => (
                <span key={index}>
                  <span>{line}</span>
                  <br />
                </span>
              ))}
            </h3>
          )}
          <ul className="flex flex-wrap md:justify-end text-base xl:text-lg text-gray mt-2.5 list-none p-0 m-0 gap-x-1">
            {tags.map((tag, idx) => (
              <li key={idx} className="flex items-center">
                {idx > 0 && <span>&nbsp;</span>}
                <span className="whitespace-nowrap">{tag}</span>
                {idx < tags.length - 1 && <span>,</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-md:h-[70vw] w-fit md:flex-1 flex flex-col items-start md:items-end">
        <div
          ref={imgWrapperRef}
          className={
            "h-full aspect-2/3 md:w-1/2 md:h-auto md:aspect-4/3 rounded-lg overflow-hidden"
          }
        >
          <div
            style={{ backgroundColor: bgColor }}
            className="relative flex items-center w-full h-full"
          >
            {link ? (
              <Link
                href={link}
                target={newTab ? "_blank" : "_self"}
                rel={newTab ? "noopener noreferrer" : undefined}
                draggable={false}
                className="w-full h-auto"
              >
                <Image
                  width={1920}
                  height={1080}
                  src={mainImg}
                  alt={titleLines.join(" ")}
                  draggable={false}
                  className="w-full h-auto"
                />
              </Link>
            ) : (
              <Image
                width={1920}
                height={1080}
                src={mainImg}
                alt={titleLines.join(" ")}
                draggable={false}
                className="w-full h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
