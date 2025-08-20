"use client";

import Image from "next/image";
import Link from "next/link";
import { useWorkItem } from "./useWorkItem";

interface WorkItemProps {
  itemKey: number;
  titleLines: string[];
  tags?: string[];
  slug?: string;
  bg?: string;
  format?: "jpg" | "gif";
  link?: string;
  newTab?: boolean;
  isMobile: boolean;
  itemsContainerRef: React.RefObject<HTMLDivElement>;
}

export const WorkItem: React.FC<WorkItemProps> = (WorkItemProps) => {
  const {
    itemKey,
    titleLines,
    tags,
    slug,
    bg,
    format,
    link,
    newTab,
    isMobile,
    itemsContainerRef,
  } = WorkItemProps;
  const bgColor = bg! ? bg : "white";
  const imgFormat = format ? format : "jpg";
  const mainImg = `/media/work/${slug}/${slug}.${imgFormat}`;

  const { imgWrapperRef, txtWrapperRef, imgCursorRef, headingCursorRef } =
    useWorkItem({ itemKey, isMobile, itemsContainerRef });

  return (
    <div className="relative flex flex-col-reverse w-fit md:flex-row justify-end gap-11 md:w-full overflow-visible">
      <div className="flex flex-col sticky left-[-50vw] w-full min-h-40 overflow-visible items-start justify-start md:items-end md:flex-1 md:py-6">
        <div
          ref={txtWrapperRef}
          className="absolute w-[calc(100vw-2rem)] flex flex-col md:items-end opacity-0 md:justify-center md:sticky md:top-1/2 xl:pl-26 md:right-0 md:h-0 md:w-auto md:text-right md:overflow-visible"
        >
          <div ref={headingCursorRef}>
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
          </div>
          <ul className="flex flex-wrap md:justify-end text-base xl:text-lg text-gray mt-2.5 list-none p-0 m-0 gap-x-2 gap-y-0.5">
            {tags &&
              tags.map((tag, idx) => (
                <li key={idx} className="flex items-center">
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
          className="h-1/2 aspect-2/3 md:w-1/2 md:h-auto md:aspect-4/3 rounded-lg overflow-hidden"
        >
          <div
            ref={imgCursorRef}
            style={{ backgroundColor: bgColor }}
            className="relative flex items-center w-full h-full"
          >
            {link ? (
              <Link
                href={link}
                target={newTab ? "_blank" : "_self"}
                rel={newTab ? "noopener noreferrer" : undefined}
                draggable={false}
                className="w-full h-auto "
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
