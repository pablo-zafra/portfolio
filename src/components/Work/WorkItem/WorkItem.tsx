"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

interface WorkItemProps {
  itemKey: number;
  title: string;
  tags: string[];
  slug: string;
  bg?: string;
  link?: string;
  newTab?: boolean;
  windowWidth: number;
}

gsap.registerPlugin(ScrollTrigger);

const WorkItem: React.FC<WorkItemProps> = (WorkItemProps) => {
  const { itemKey, title, tags, slug, bg, link, newTab, windowWidth } =
    WorkItemProps;
  const bgColor = bg! ? bg : "white";
  const mainImg = `/img/work/${slug}/${slug}.jpg`;

  const imgWrapperRef = useRef(null);
  const txtWrapperRef = useRef(null);

  useEffect(() => {
    const imgWrapper = imgWrapperRef.current;
    if (!imgWrapper) return;
    (imgWrapper as HTMLElement).removeAttribute("style");
    if (windowWidth < 768) return;

    const workItemImgAnim = gsap.timeline({
      scrollTrigger: {
        trigger: imgWrapper,
        start: "center 90%",
        end: "center 10%",
        scrub: true,
        invalidateOnRefresh: true,
        id: `imgWrapperTrigger-${itemKey}`,
      },
    });

    workItemImgAnim
      .from(imgWrapper, { width: "50%" })
      .to(imgWrapper, { width: "100%", duration: 1, ease: "power1.inOut" })
      .to(imgWrapper, { width: "50%", duration: 1, ease: "power1.inOut" });

    return () => {
      workItemImgAnim.scrollTrigger?.kill();
    };
  }, [itemKey, windowWidth]);

  useEffect(() => {
    const txtWrapper = txtWrapperRef.current;
    if (!txtWrapper) return;
    (txtWrapper as HTMLElement).removeAttribute("style");
    if (windowWidth < 768) return;

    const workItemTxtAnim = gsap.timeline({
      scrollTrigger: {
        trigger: txtWrapper,
        start: "center 50%",
        end: "center 20%",
        scrub: true,
        invalidateOnRefresh: true,
        id: `txtWrapperTrigger-${itemKey}`,
      },
    });

    workItemTxtAnim
      .to(txtWrapper, { opacity: "0", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "1", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "1", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "0", duration: 1, ease: "power1.inOut" });

    const workItemTxtAnimTrigger = workItemTxtAnim.scrollTrigger;

    return () => {
      if (workItemTxtAnimTrigger) {
        workItemTxtAnimTrigger.kill();
      }
    };
  }, [itemKey, windowWidth]);

  return (
    <div className="w-fit md:w-full flex flex-row gap-11">
      <div className="max-md:hidden md:flex-1 py-6">
        <div
          ref={txtWrapperRef}
          className="md:sticky flex flex-col md:items-end justify-center top-1/2 pl-10 xl:pl-26 right-0 h-0 opacity-0"
        >
          {link ? (
            <Link
              href={link}
              target={newTab ? "_blank" : "_self"}
              rel={newTab ? "noopener noreferrer" : undefined}
            >
              <h3
                className="text-2xl xl:text-4xl font-semibold hover:underline"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {title}
              </h3>
            </Link>
          ) : (
            <h3
              className="text-2xl xl:text-4xl font-semibold"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {title}
            </h3>
          )}
          <ul className="flex flex-wrap justify-end text-base xl:text-lg text-gray mt-2.5 list-none p-0 m-0 gap-x-1">
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
      <div className="max-md:h-[60vw] md:flex-1 flex-col flex items-end">
        <div
          ref={imgWrapperRef}
          className={
            "h-full aspect-2/3 md:w-full md:h-auto md:aspect-4/3 rounded-lg overflow-hidden"
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
                className="w-full h-auto"
              >
                <Image
                  width={1920}
                  height={1080}
                  src={mainImg}
                  alt={title}
                  className="w-full h-auto"
                />
              </Link>
            ) : (
              <Image
                width={1920}
                height={1080}
                src={mainImg}
                alt={title}
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
