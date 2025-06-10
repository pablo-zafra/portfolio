import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "../../../../hooks";
import { useWorkItemAnimTxt } from "./useWorkItemAnimTxt";
import { useWorkItemAnimImg } from "./useWorkItemAnimImg";

interface UseWorkItemProps {
  itemKey: number;
  isMobile: boolean;
  isResizing: boolean;
  itemsContainerRef: React.RefObject<HTMLDivElement>;
}

gsap.registerPlugin(ScrollTrigger);

export const useWorkItem = ({
  itemKey,
  isMobile,
  isResizing,
  itemsContainerRef,
}: UseWorkItemProps) => {
  const imgCursorRef = useCursor({
    className: "w-22! rotate-26! text-md ",
    message: "See project",
    icon: "arrowOutward",
  });

  const headingCursorRef = useCursor({
    className: "w-22! rotate-26! text-md",
    message: "See project",
    icon: "arrowOutward",
  });

  const { imgWrapperRef } = useWorkItemAnimImg({
    itemKey,
    isMobile,
    isResizing,
    itemsContainerRef,
  });

  const { txtWrapperRef } = useWorkItemAnimTxt({
    itemKey,
    isMobile,
    isResizing,
    itemsContainerRef,
  });

  return {
    imgWrapperRef,
    txtWrapperRef,
    imgCursorRef,
    headingCursorRef,
  };
};
