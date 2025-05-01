const Works: React.FC = () => {
  return (
    <div className="relative w-full flex flex-row items-stretch overflow-hidden">
      <div className="relative w-[20vh]">
        <h2 className="sticky top-0 origin-top-right uppercase text-[23vh] -rotate-90 font-bold leading-0 text-right">
          Works
        </h2>
      </div>
      <div className="flex flex-col flex-1 items-end text-right gap-10">
        <div className="bg-gray rounded-2 min-h-140 w-full">Work 1</div>
        <div className="bg-gray rounded-2 min-h-140 w-full">Work 2</div>
        <div className="bg-gray rounded-2 min-h-140 w-full">Work 3</div>
        <div className="bg-gray rounded-2 min-h-140 w-full">Work 4</div>
      </div>
    </div>
  );
};

export default Works;
