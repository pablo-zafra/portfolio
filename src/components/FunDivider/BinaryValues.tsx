// "use client";
import { binaryValues } from "../../data";
// import { useEffect, useState } from "react";

interface BinaryValuesProps {
  indexOffset: number;
}

export const BinaryValues: React.FC<BinaryValuesProps> = ({ indexOffset }) => {
  return (
    <span className="inline-block text-turquesa">
      {binaryValues[indexOffset]}
    </span>
  );
};

// export const BinaryValues: React.FC<BinaryValuesProps> = ({ indexOffset }) => {
//   const [currentIndex, setCurrentIndex] = useState(
//     indexOffset % binaryValues.length
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % binaryValues.length);
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <span className="inline-block text-turquesa">
//       {binaryValues[currentIndex]}
//     </span>
//   );
// };
