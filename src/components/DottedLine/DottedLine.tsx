import styles from "./DottedLine.module.css";

interface DottedLineProps {
  long?: string;
  direction?: "horizontal" | "vertical";
  className?: string;
  duration?: number;
  delay?: number;
}

const DottedLine: React.FC<DottedLineProps> = ({
  long = "100%",
  direction = "horizontal",
  className = "",
  duration = 11,
  delay = 0,
}) => {
  const containerStyle = {
    [direction === "horizontal" ? "width" : "height"]: long,
  };

  const lineStyle = {
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };

  return (
    <div
      className={`${styles.lineContainer} ${styles[direction]} ${className} pointer-events-none`}
      style={containerStyle}
    >
      <div className={styles.dottedLine} style={lineStyle}></div>
    </div>
  );
};

export default DottedLine;
