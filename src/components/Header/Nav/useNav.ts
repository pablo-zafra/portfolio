import { useScrollContext } from "../../../context";
import { useCursor } from "../../../hooks";

const useNav = () => {
  const scrollData = useScrollContext();
  const currentScroll = scrollData.scrollData.current || 1;

  const introCursorRef = useCursor({
    className: "w-32 rounded-xl text-3xl bg-[url(/img/screenshots/Intro.jpg)]",
  });
  const aboutCursorRef = useCursor({
    className: "w-32 rounded-xl text-3xl bg-[url(/img/screenshots/About.jpg)]",
  });
  const skillsCursorRef = useCursor({
    className: "w-32 rounded-xl text-3xl bg-[url(/img/screenshots/Skills.jpg)]",
  });
  const workCursorRef = useCursor({
    className: "w-32 rounded-xl text-3xl bg-[url(/img/screenshots/Work.jpg)]",
  });
  const contactCursorRef = useCursor({
    className:
      "w-32 rounded-xl text-3xl bg-[url(/img/screenshots/Contact.jpg)]",
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
