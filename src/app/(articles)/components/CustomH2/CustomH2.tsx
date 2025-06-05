import { GridContainer } from "../../../../components";
import React from "react";

interface CustomH2Props {
  children: React.ReactNode;
}

export const CustomH2: React.FC<CustomH2Props> = ({ children }) => {
  return (
    <GridContainer>
      <h2 className="col-span-8 col-start-1 md:col-span-8 md:col-start-3 w-full text-2xl font-bold">
        {children}
      </h2>
    </GridContainer>
  );
};
