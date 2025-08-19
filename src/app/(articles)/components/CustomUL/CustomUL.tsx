import { GridContainer } from "../../../../components";
import React from "react";

interface CustomPProps {
  children: React.ReactNode;
}

export const CustomUL: React.FC<CustomPProps> = ({ children }) => {
  return (
    <GridContainer>
      <ul className="list-disc col-span-6 col-start-2 md:col-span-6 md:col-start-4 w-full text-lg font-light">
        {children}
      </ul>
    </GridContainer>
  );
};
