"use client";

import { WorkItem } from "./WorkItem";
import { useWork } from "./useWork";

interface WorkDataItem {
  titleLines: string[];
  tags?: string[];
  slug?: string;
  bg?: string;
  link?: string;
  newTab?: boolean;
}

export const Work: React.FC = () => {
  const { workData, draggeableOnMobileRef, WorkSectionRef, isMobile } =
    useWork();

  return (
    <section
      ref={WorkSectionRef}
      className="relative flex flex-col md:flex-row mb-40 md:mb-32 gap-6"
    >
      <div
        className="absolute w-0 h-0 bg-transparent invisible opacity-0 top-[-16vh]"
        id="work-section"
      ></div>
      <div className="max-md:px-4 md:sticky md:top-0 md:w-40 xl:w-[18vh] xl:ml-4 md:h-screen flex md:items-center md:justify-center">
        <h2 className="uppercase font-semibold md:-rotate-90 text-5xl md:text-9xl xl:text-[24vh] leading-[0.73em]">
          Work
        </h2>
        <p className="hidden">Take a look to some selected projects</p>
      </div>
      <div
        ref={draggeableOnMobileRef}
        className="relative flex flex-col max-md:px-[50vw] md:flex-1 max-md:overflow-x-scroll max-md:select-none [&::-webkit-scrollbar]:hidden"
      >
        <div className="relative flex gap-4 max-md:w-fit md:flex-col md:items-end md:gap-16 md:pt-24 md:pb-86 md:pl-0 md:pr-20 xl:pr-32">
          {workData.map(
            (
              { titleLines, tags, slug, bg, link, newTab }: WorkDataItem,
              index: number
            ) => (
              <WorkItem
                key={index}
                itemKey={index}
                titleLines={titleLines}
                tags={tags}
                slug={slug}
                bg={bg}
                link={link}
                newTab={newTab}
                isMobile={isMobile}
                itemsContainerRef={draggeableOnMobileRef}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
