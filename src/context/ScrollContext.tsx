"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface ScrollData {
  current?: number;
}

interface ScrollContextType {
  scrollData: ScrollData;
  setScrollData: React.Dispatch<React.SetStateAction<ScrollData>>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [scrollData, setScrollData] = useState<ScrollData>({
    current: 1,
  });

  return (
    <ScrollContext.Provider value={{ scrollData, setScrollData }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
