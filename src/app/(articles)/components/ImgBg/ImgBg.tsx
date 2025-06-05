import Image from "next/image";

interface ImgBgProps {
  bgColor: string;
  className?: string;
  imgURL: string;
  alt?: string;
  priority?: boolean;
}
export const ImgBg: React.FC<ImgBgProps> = ({
  bgColor = "white",
  className = "",
  imgURL = "",
  alt = "Main Image",
  priority = false,
}) => {
  return (
    <div className="w-full lg:px-4">
      <div
        style={{ backgroundColor: bgColor }}
        className={`flex justify-center items-center aspect-square md:aspect-5/3 lg:rounded-lg ${className}`}
      >
        <Image
          width={1920}
          height={1080}
          src={imgURL}
          alt={alt}
          priority={priority}
          className=" w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
