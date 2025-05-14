"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface CursorData {
  className?: string;
  message?: string;
  icon?: string;
  bgImg?: string;
}

interface CursorContextType {
  cursorData: CursorData;
  setCursorData: React.Dispatch<React.SetStateAction<CursorData>>;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cursorData, setCursorData] = useState<CursorData>({
    className: "",
    message: "",
    icon: undefined,
    bgImg: undefined,
  });

  return (
    <CursorContext.Provider value={{ cursorData, setCursorData }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursorContext must be used within a CursorProvider");
  }
  return context;
};
