"use client";
import { binaryValues } from "../../data";
import React, { useEffect, useState } from "react";

interface BinaryValuesProps {
  indexOffset: number;
}

export const BinaryValues: React.FC<BinaryValuesProps> = ({ indexOffset }) => {
  const [currentIndex, setCurrentIndex] = useState(
    indexOffset % binaryValues.length
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % binaryValues.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block text-turquesa">
      {binaryValues[currentIndex]}
    </span>
  );
};
