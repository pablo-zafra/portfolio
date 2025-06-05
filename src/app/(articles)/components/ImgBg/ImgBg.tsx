import Image from "next/image";
import { GridContainer } from "../../../../components";

interface ImgBgProps {
  bgColor: string;
  className?: string;
  imgURL: string;
  alt?: string;
}
export const ImgBg: React.FC<ImgBgProps> = ({
  bgColor = "white",
  className = "",
  imgURL = "",
  alt = "Main Image",
}) => {
  return (
    <GridContainer>
      <div
        style={{ backgroundColor: bgColor }}
        className={`col-span-8 md:col-span-12 relative flex justify-center items-center aspect-square md:aspect-5/3 lg:rounded-lg ${className}`}
      >
        <Image
          width={1920}
          height={1080}
          src={imgURL}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>
    </GridContainer>
  );
};
