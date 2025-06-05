import { GridContainer } from "../../../../components";
import React from "react";

interface CustomH2Props {
  content: string;
}

export const CustomH2: React.FC<CustomH2Props> = ({ content }) => {
  return (
    <GridContainer className="px-4 md:px-6">
      <h2 className="col-span-8 col-start-1 md:col-span-8 md:col-start-3 w-full text-2xl font-bold">
        {content}
      </h2>
    </GridContainer>
  );
};
