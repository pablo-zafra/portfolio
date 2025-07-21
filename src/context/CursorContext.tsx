"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";

interface CursorData {
  className?: string;
  message?: string;
  icon?: string;
  parent?: HTMLDivElement | null;
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
    parent: null,
  });

  const pathname = usePathname();

  // Reset cursorData on URL change
  useEffect(() => {
    setCursorData({
      className: "",
      message: "",
      icon: undefined,
      parent: null,
    });
  }, [pathname]);

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
