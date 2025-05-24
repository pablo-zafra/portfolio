"use client";
import { logs } from "../../data";
import { BinaryValues } from "./BinaryValues";
import { useEffect, useRef, useState } from "react";
import styles from "./FunDivider.module.css";
import { useScrollContext } from "../../context/";

interface FunDividerOptions {
  top?: string;
  bottom?: string;
}

const FunDivider: React.FC<FunDividerOptions> = ({ top, bottom }) => {
  const [rotation, setRotation] = useState(0);
  const { throttledScrollData } = useScrollContext();
  const { speed, direction } = throttledScrollData;
  const rotationFactor = 0.4;
  const rotationLimit = 3;

  useEffect(() => {
    if (!speed || !direction) {
      return;
    }
    //console.log(speed * rotationFactor);
    if (Math.abs(speed * rotationFactor) > rotationLimit) {
      setRotation(rotationLimit * direction);
      return;
    }
    setRotation(speed * rotationFactor);
  }, [speed]);

  const [clientRandomizedLogs, setClientRandomizedLogs] =
    useState<string[]>(logs);

  useEffect(() => {
    setClientRandomizedLogs([...logs].sort(() => Math.random() - 0.5));
  }, [logs]);

  return (
    <div className="w-full overflow-x-clip overflow-y-visible">
      <div
        className={`relative z-30 h-0 overflow-visible transition-transform duration-400 ease-linear`}
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="absolute -translate-y-1/2">
          {top ? <div className={`${top} pb-30 w-full`}></div> : null}
          <div className="relative bg-white overflow-x-hidden text-gray-dark text-xs uppercase font-mono">
            <div
              className={`${styles["left-scrolling"]} flex flex-row gap-4 w-fit p-2 h-fit`}
            >
              <div className="flex flex-row gap-3 shrink-0">
                {clientRandomizedLogs.map((log, index) => (
                  <div key={`first-${index}`} className="flex flex-row gap-3">
                    <span className="whitespace-nowrap">{log}</span>
                    <BinaryValues indexOffset={index} />
                  </div>
                ))}
              </div>
              <div className="flex flex-row gap-3 shrink-0">
                {clientRandomizedLogs.map((log, index) => (
                  <div key={`second-${index}`} className="flex flex-row gap-3">
                    <span className="whitespace-nowrap">{log}</span>
                    <BinaryValues indexOffset={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {bottom ? <div className={`${bottom} pb-30 w-full`}></div> : null}
        </div>
      </div>
    </div>
  );
};

export default FunDivider;
