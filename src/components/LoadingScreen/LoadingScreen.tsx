"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Correcto para App Router
import styles from "./LoadingScreen.module.css";

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const handleLoad = () =>
    setTimeout(() => {
      setLoading(false);
    }, 200);

  useEffect(() => {
    setLoading(true);
    if (document.readyState === "complete") {
      handleLoad();
      return;
    }

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, [pathname]);

  return (
    <>
      {loading ? (
        <div
          className={`loading-screen fixed w-screen h-screen flex items-center justify-center flex-col gap-11 bg-gray-dark-X z-50 transition-opacity duration-100
          ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div className={`${styles["pencil-icon"]} size-16`}></div>

          <p className="font-light">Loading...</p>
        </div>
      ) : null}
    </>
  );
};
