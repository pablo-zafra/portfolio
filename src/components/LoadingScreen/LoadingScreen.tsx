"use client";

import { useState, useEffect } from "react";
import { FC } from "react";
import styles from "./LoadingScreen.module.css";

export const LoadingScreen: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }

    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      className={`loading-screen fixed w-screen h-screen flex items-center justify-center flex-col gap-11 bg-gray-dark-X z-50 transition-opacity duration-100
        ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className={`${styles["pencil-icon"]} size-16`}></div>

      <p className="font-light">Loading...</p>
    </div>
  );
};
