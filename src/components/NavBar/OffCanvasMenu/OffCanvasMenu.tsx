import { useScrollContext } from "../../../context";
import { HandEllipse } from "../../";
import { useCursor } from "../../../hooks";

interface OffCanvasMenuProps {
  opened: boolean;
  onClose: () => void;
}

const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({ opened, onClose }) => {
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

  return (
    <>
      <div
        className={`fixed top-0 left-full ${
          opened ? "-translate-x-full" : ""
        } h-screen w-[80dvw] max-w-240 p-16 bg-gray-dark-X grid-pattern text-white transition-transform duration-300 ease-in-out z-30 flex flex-col items-center`}
      >
        <ul className="flex flex-col justify-center gap-2 md:gap-6 text-3xl md:text-7xl font-semibold h-full z-32">
          <li className="relative ml-[1em] w-fit transition-transform cursor-pointer">
            <span ref={introCursorRef}>
              Intro
              <HandEllipse flipY={true} highlighted={currentScroll === 1} />
            </span>
          </li>
          <li className="relative ml-[0em] w-fit transition-transform cursor-pointer">
            <span ref={aboutCursorRef}>
              About me
              <HandEllipse flipX={true} highlighted={currentScroll === 2} />
            </span>
          </li>
          <li className="relative ml-[2.5em] w-fit -transform cursor-pointer">
            <span ref={skillsCursorRef}>
              Skills
              <HandEllipse highlighted={currentScroll === 3} />
            </span>
          </li>
          <li className="relative ml-[3.5em] w-fit transition-transform cursor-pointer">
            <span ref={workCursorRef}>
              Work
              <HandEllipse
                flipY={true}
                flipX={true}
                highlighted={currentScroll === 4}
              />
            </span>
          </li>
          <li className="relative ml-[1.5em] w-fit transition-transform cursor-pointer">
            <span ref={contactCursorRef}>
              Contact
              <HandEllipse flipY={true} highlighted={currentScroll === 5} />
            </span>
          </li>
        </ul>
      </div>
      {opened && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-black opacity-80 z-20"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default OffCanvasMenu;
