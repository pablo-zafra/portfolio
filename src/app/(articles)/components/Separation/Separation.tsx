import { GridContainer } from "../../../../components";

interface HeadingProps {
  className?: string;
}

export const Separation: React.FC<HeadingProps> = ({ className = "" }) => {
  return (
    <GridContainer>
      <div
        className={`col-span-8 md:col-span-10 xl:col-span-8 md:col-start-2 xl:col-start-3 relative h-[1px] bg-white ${className}`}
      ></div>
    </GridContainer>
  );
};
