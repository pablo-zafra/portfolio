import { GridContainer } from "../../../../components";

interface HeadingProps {
  className?: string;
}

export const SeparationLight: React.FC<HeadingProps> = ({ className = "" }) => {
  return (
    <GridContainer>
      <div
        className={`col-span-8 md:col-span-8 xl:col-span-8 md:col-start-3 xl:col-start-3 relative h-[1px] bg-gray ${className}`}
      ></div>
    </GridContainer>
  );
};
