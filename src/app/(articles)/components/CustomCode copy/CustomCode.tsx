import { GridContainer } from "../../../../components";
import React from "react";

interface CustomPProps {
  children: React.ReactNode;
}

export const CustomCode: React.FC<CustomPProps> = ({ children }) => {
  return (
    <GridContainer>
      <p className="col-span-8 col-start-1 md:col-span-8 md:col-start-3 w-full font-mono font-light px-6 py-4 bg-gray-dark rounded-md overflow-x-scroll text-sm">
        <span className="block w-max">{children}</span>
      </p>
    </GridContainer>
  );
};
