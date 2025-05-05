import WorkItem from "./WorkItem/WorkItem";
import workData from "../../data/works.json";

const Works: React.FC = () => {
  return (
    <div className="relative flex flex-row items-stretch">
      <div className="sticky top-0 w-[22.5vh] h-screen flex items-center justify-center">
        <h2 className="uppercase font-semibold -rotate-90 text-[24vh]">Work</h2>
        <p className="hidden">Take a look to some selected projects</p>
      </div>
      <div className="flex flex-col flex-1 items-end text-right gap-16 py-86 pr-32">
        {workData.map((work, index) => (
          <WorkItem
            key={index}
            itemKey={index}
            title={work.title}
            tags={work.tags}
            slug={work.slug}
            link={work.link}
            newTab={work.newTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
