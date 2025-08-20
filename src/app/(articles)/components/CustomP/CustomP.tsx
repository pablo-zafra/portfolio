import { GridContainer } from "../../../../components";
import React from "react";

interface CustomPProps {
  children: React.ReactNode;
  className?: string;
}

export const CustomP: React.FC<CustomPProps> = ({ children, className }) => {
  return (
    <GridContainer>
      <p
        className={`col-span-6 col-start-2 md:col-span-6 md:col-start-4 w-full text-lg font-light ${className}`}
      >
        {children}
      </p>
    </GridContainer>
  );
};
