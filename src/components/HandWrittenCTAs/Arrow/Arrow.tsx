import styles from "./Arrow.module.css";

const Arrow: React.FC = () => {
  return (
    <svg viewBox="0 0 53 195" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1426 2.96729C54.6167 57.2088 49.3162 125.366 21.5 190"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${styles["palo-draw"]}`}
      />
      <path
        d="M11 167C16.5 173.5 19 184 21.1667 192.5C29 187 38 181.5 47.5 179"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${styles["punta-draw"]}`}
      />
    </svg>
  );
};

export default Arrow;
