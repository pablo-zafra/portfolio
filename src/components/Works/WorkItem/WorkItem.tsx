import Image from "next/image";
import mainImg from "../../../../public/img/work/custom-brand-days/main.jpg";

const WorkItem = () => {
  return (
    <div className="flex flex-row gap-11 p-24">
      <div className="flex justify-center items-end flex-col flex-1">
        <h3 className="text-3xl font-semibold">Custom Brand Days</h3>
        <p className="text-m text-gray">Rich Media Visual Design</p>
      </div>
      <div className="flex justify-center items-center flex-1 rounded-lg aspect-4/3 overflow-hidden bg-white">
        <Image
          width={1920}
          height={1080}
          src={mainImg.src}
          alt="Custom Brand Days"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default WorkItem;
