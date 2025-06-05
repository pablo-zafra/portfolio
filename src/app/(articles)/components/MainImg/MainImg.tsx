import GridContainer from "../../../..//components/GridContainer/GridContainer";
import Image from "next/image";

interface MainImgProps {
  bgColor: string;
  className?: string;
  imgURL: string;
  alt?: string;
}
export const MainImg: React.FC<MainImgProps> = ({
  bgColor = "white",
  className = "",
  imgURL = "",
  alt = "Main Image",
}) => {
  return (
    <GridContainer>
      <div
        style={{ backgroundColor: bgColor }}
        className={`col-span-8 md:col-span-12 relative flex justify-center items-center aspect-square md:aspect-5/3 md:rounded-lg ${className}`}
      >
        <Image
          width={1920}
          height={1080}
          src={imgURL}
          alt={alt}
          className="h-full w-auto"
        />
      </div>
    </GridContainer>
  );
};
