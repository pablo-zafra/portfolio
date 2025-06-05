import { GridContainer } from "../../../../components";

interface HeadingProps {
  className?: string;
  title?: string;
  description?: string;
  tagList?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  className = "",
  title = "Loren ipsun ad his scripta",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  tagList = "UI/UX, Frontend Development",
}) => {
  return (
    <GridContainer>
      <div
        className={`col-span-8 md:col-span-10 xl:col-span-8 md:col-start-2 xl:col-start-3 relative ${className}`}
      >
        <span className="text-gray text-sm">{tagList}</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">{title}</h1>
        <p className="text-lg font-light mt-4">{description}</p>
      </div>
    </GridContainer>
  );
};
