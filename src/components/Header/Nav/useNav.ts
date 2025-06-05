import { useScrollContext } from "../../../context";
import { useCursor } from "../../../hooks";

const useNav = () => {
  const scrollData = useScrollContext();
  const currentScroll = scrollData.scrollData.current || 0;

  const introCursorRef = useCursor({
    className:
      "w-32 rounded-xl text-3xl bg-[url(/media/screenshots/Intro.jpg)]",
  });
  const aboutCursorRef = useCursor({
    className:
      "w-32 rounded-xl text-3xl bg-[url(/media/screenshots/About.jpg)]",
  });
  const skillsCursorRef = useCursor({
    className:
      "w-32 rounded-xl text-3xl bg-[url(/media/screenshots/Skills.jpg)]",
  });
  const workCursorRef = useCursor({
    className: "w-32 rounded-xl text-3xl bg-[url(/media/screenshots/Work.jpg)]",
  });
  const contactCursorRef = useCursor({
    className:
      "w-32 rounded-xl text-3xl bg-[url(/media/screenshots/Contact.jpg)]",
  });

  return {
    introCursorRef,
    aboutCursorRef,
    skillsCursorRef,
    workCursorRef,
    contactCursorRef,
    currentScroll,
  };
};

export default useNav;
