import style from "./HandEllipse.module.css";

type Props = {
  flipX?: boolean;
  flipY?: boolean;
};

const HandEllipse: React.FC<Props> = ({ flipX = false, flipY = false }) => {
  return (
    <svg
      viewBox="0 0 543 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 left-0 w-full h-full ${
        flipX ? "-scale-x-100" : ""
      } ${flipY ? "-scale-y-100" : ""}`}
      preserveAspectRatio="none"
    >
      <path
        d="M10.8001 30.8838C150.305 2.01907 562.818 22.3152 539.011 75.501C505.1 151.258 57.6303 137.507 10.823 90.2006C-31.8214 47.1018 111.597 12.3999 158.672 3"
        stroke="var(--color-turquesa)"
        strokeWidth="var(--hand-ellipse-stroke-width)"
        strokeLinecap="round"
        className={style["hand-ellipse-draw"]}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M10.8001 30.8838C150.305 2.01907 562.818 22.3152 539.011 75.501C505.1 151.258 57.6303 137.507 10.823 90.2006C-31.8214 47.1018 111.597 12.3999 158.672 3"
        stroke="var(--color-turquesa)"
        strokeWidth="var(--hand-ellipse-stroke-width)"
        strokeLinecap="round"
        className={style["hand-ellipse-undraw"]}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default HandEllipse;
