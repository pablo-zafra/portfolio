import { GridContainer } from "../../../../components";
import React from "react";

interface CustomH3Props {
  children: React.ReactNode;
}

export const CustomH3: React.FC<CustomH3Props> = ({ children }) => {
  return (
    <GridContainer>
      <h3 className="col-span-8 col-start-1 md:col-span-8 md:col-start-3 w-full text-xl font-bold">
        {children}
      </h3>
    </GridContainer>
  );
};
