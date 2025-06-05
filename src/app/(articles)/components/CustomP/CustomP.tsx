import { GridContainer } from "../../../../components";
import React from "react";

interface CustomPProps {
  children: React.ReactNode;
}

export const CustomP: React.FC<CustomPProps> = ({ children }) => {
  return (
    <GridContainer>
      <p className="col-span-6 col-start-2 md:col-span-6 md:col-start-4 w-full text-lg font-light">
        {children}
      </p>
    </GridContainer>
  );
};
