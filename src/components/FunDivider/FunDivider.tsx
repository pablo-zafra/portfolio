import { logs } from "../../data";
import { BinaryValues } from "./BinaryValues";
import { useMemo } from "react";
import styles from "./FunDivider.module.css";

const FunDivider: React.FC = () => {
  const randomizedLogs = useMemo(() => {
    return [...logs].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden text-gray-dark text-xs uppercase py-2 font-mono">
      <div
        className={`${styles["left-scrolling"]} flex flex-row gap-4 w-fit px-2`}
      >
        {/* Primera copia del contenido */}
        <div className="flex flex-row gap-3 shrink-0">
          {randomizedLogs.map((log, index) => (
            <div key={`first-${index}`} className="flex flex-row gap-3">
              <span className="whitespace-nowrap">{log}</span>
              <BinaryValues indexOffset={index} />
            </div>
          ))}
        </div>
        {/* Segunda copia del contenido */}
        <div className="flex flex-row gap-3 shrink-0">
          {randomizedLogs.map((log, index) => (
            <div key={`second-${index}`} className="flex flex-row gap-3">
              <span className="whitespace-nowrap">{log}</span>
              <BinaryValues indexOffset={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunDivider;
