import { GridContainer } from "../../../../components";
import React from "react";

interface CustomPProps {
  content: string;
}

export const CustomP: React.FC<CustomPProps> = ({ content }) => {
  return (
    <GridContainer className="px-4 md:px-6">
      <p className="col-span-6 col-start-2 md:col-span-6 md:col-start-4 w-full text-lg font-light">
        {content}
      </p>
    </GridContainer>
  );
};
