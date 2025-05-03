import WorkItem from "./WorkItem/WorkItem";

const Works: React.FC = () => {
  return (
    <div className="relative flex flex-row items-stretch">
      <div className="sticky top-0 w-[22vh] h-screen flex items-center justify-center">
        <h2 className="uppercase font-semibold -rotate-90 text-[22vh]">
          Works
        </h2>
        <p className="hidden">Take a look to some selected projects</p>
      </div>
      <div className="flex flex-col flex-1 items-end text-right gap-16 py-86 pr-32">
        <WorkItem key={1} itemKey={1} />
        <WorkItem key={2} itemKey={2} />
        <WorkItem key={3} itemKey={3} />
        <WorkItem key={4} itemKey={4} />
      </div>
    </div>
  );
};

export default Works;
