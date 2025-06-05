import { GridContainer } from "../../../../components";
import React from "react";

interface CustomH3Props {
  content: string;
}

export const CustomH3: React.FC<CustomH3Props> = ({ content }) => {
  return (
    <GridContainer className="px-4 md:px-6">
      <h3 className="col-span-8 col-start-1 md:col-span-8 md:col-start-3 w-full text-xl font-bold">
        {content}
      </h3>
    </GridContainer>
  );
};
