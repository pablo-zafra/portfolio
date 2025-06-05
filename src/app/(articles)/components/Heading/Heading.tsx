import GridContainer from "../../../../components/GridContainer/GridContainer";

interface HeadingProps {
  className?: string;
  title?: string;
  description?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  className = "",
  title = "Loren ipsun ad his scripta",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  return (
    <GridContainer className="px-4 md:px-6">
      <div className={`col-span-8 md:col-start-3 ${className}`}>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-lg font-light pt-3">{description}</p>
      </div>
    </GridContainer>
  );
};
