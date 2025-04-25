"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./LoadingScreen.module.css";

export const LoadingScreen: FC = () => {
  const [loading, setLoading] = useState(true); // Iniciamos en true
  const pathname = usePathname();

  useEffect(() => {
    const handleLoad = () => {
      //console.log("Document loaded");
      setLoading(false);
    };

    if (document.readyState === "complete") {
      //console.log("Document is already loaded");
      setLoading(false);
    } else {
      //console.log("Document is not loaded yet");
      window.addEventListener("load", handleLoad);
    }

    return () => {
      //console.log("Cleaning up event listener");
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`loading-screen fixed w-screen h-screen flex items-center justify-center bg-gray-dark-X z-50 transition-opacity duration-300 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className={styles.loader}></div>
    </div>
  );
};
