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
  link?: string;
  newTab?: boolean;
}

gsap.registerPlugin(ScrollTrigger);

const WorkItem: React.FC<WorkItemProps> = (WorkItemProps) => {
  const { itemKey, title, tags, slug, link, newTab } = WorkItemProps;
  const mainImg = `/img/work/${slug}/${slug}.jpg`;

  const imgWrapperRef = useRef(null);
  const txtWrapperRef = useRef(null);

  useEffect(() => {
    const imgWrapper = imgWrapperRef.current;

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
  }, [itemKey]);

  useEffect(() => {
    const txtWrapper = txtWrapperRef.current;

    const workItemTxtAnim = gsap.timeline({
      scrollTrigger: {
        trigger: txtWrapper,
        start: "center 50%",
        end: "top 20%",
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
  }, [itemKey]);

  return (
    <div className="work-item w-full flex flex-row gap-11">
      <div className="flex justify-center items-end flex-col flex-1">
        <div
          ref={txtWrapperRef}
          className="sticky top-1/2 bottom-1/2 h-0 opacity-0"
        >
          {link ? (
            <Link
              href={link}
              target={newTab ? "_blank" : "_self"}
              rel={newTab ? "noopener noreferrer" : undefined}
            >
              <h3
                className="text-4xl pl-36 font-semibold hover:underline"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {title}
              </h3>
            </Link>
          ) : (
            <h3
              className="text-4xl pl-36 font-semibold"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {title}
            </h3>
          )}
          <p className="text-lg text-gray mt-2.5">{tags.join(", ")}</p>
        </div>
      </div>
      <div className="flex-1 flex-col flex items-end">
        <div
          ref={imgWrapperRef}
          className="flex items-center w-full aspect-4/3 overflow-hidden bg-white rounded-lg"
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
  );
};

export default WorkItem;
