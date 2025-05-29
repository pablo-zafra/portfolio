"use client";
import { logs } from "../../data";
import { BinaryValues } from "./BinaryValues";
import { useEffect, useState } from "react";
import styles from "./FunDivider.module.css";

interface FunDividerOptions {
  top?: string;
  bottom?: string;
}

const FunDivider: React.FC<FunDividerOptions> = ({ top, bottom }) => {
  const [clientRandomizedLogs, setClientRandomizedLogs] =
    useState<string[]>(logs);

  useEffect(() => {
    setClientRandomizedLogs([...logs].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="w-full overflow-x-clip z-9">
      <div
        className={`relative h-fit transition-transform duration-400 ease-linear`}
      >
        <div className="relative -my-1">
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
