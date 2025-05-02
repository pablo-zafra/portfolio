import Image from "next/image";
import mainImg from "../../../public/img/work/custom-brand-days/main.jpg";

const Works: React.FC = () => {
  return (
    <div className="relative w-full flex flex-row items-stretch">
      <div className="sticky top-0 w-[22vh] h-screen flex items-center justify-center">
        <h2 className="uppercase font-semibold -rotate-90 text-[22vh]">
          Works
        </h2>
        <p className="hidden">Take a look to some selected projects</p>
      </div>
      <div className="flex flex-col flex-1 items-end text-right gap-10">
        <div className="w-full flex flex-row gap-11 p-24">
          <div className="w-full flex justify-center items-end flex-col">
            <h3 className="text-3xl font-semibold">Custom Brand Days</h3>
            <p className="text-m text-gray">Rich Media Visual Design</p>
          </div>
          <div className="flex justify-center items-center rounded-lg aspect-4/3 overflow-hidden bg-white">
            <Image
              width={1920}
              height={1080}
              src={mainImg.src}
              alt="Custom Brand Days"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
