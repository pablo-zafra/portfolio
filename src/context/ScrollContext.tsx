"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useThrottle } from "@custom-react-hooks/use-throttle";

interface ScrollData {
  speed: number;
  direction: number;
}

interface ScrollContextType {
  scrollData: ScrollData;
  setScrollData: React.Dispatch<React.SetStateAction<ScrollData>>;
  throttledScrollData: ScrollData;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [scrollData, setScrollData] = useState<ScrollData>({
    speed: 0,
    direction: 0,
  });

  const throttledScrollData: ScrollData = useThrottle<ScrollData>(
    scrollData,
    200
  ) || { speed: 0, direction: 0 };

  return (
    <ScrollContext.Provider
      value={{ scrollData, setScrollData, throttledScrollData }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
