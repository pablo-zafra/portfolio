import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
      <div className="flex justify-center items-center gap-10">
        <h1 className="text-8xl/tight font-semibold">
          <span className="ml-11 relative">
            Hi!{" "}
            <span className="inline-block bg-gray size-[1.15em] rounded-full align-text-top transition-all"></span>{" "}
            I&apos;m Pablo:
          </span>
          <br />
          <span className="">Frontend developer</span>
          <br />
          <span className="ml-23">& UX/UI designer</span>
          <br />
        </h1>
        <div className="mt-104 w-72">
          <h2 className="text-base font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis
            tellus erat. Morbi finibus odio nec felis iaculis dapibus ac ac
            quam. Nunc bibendum dui vel neque mattis, sed sodales lorem semper.
          </h2>
          <p className="mt-4">Core stack:</p>
          <div className="flex mt-3 gap-4">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              <Image
                src="/api/placeholder/40/40"
                alt="React"
                className="w-8 h-8"
                width={40}
                height={40}
              />
            </div>

            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              <Image
                src="/api/placeholder/40/40"
                alt="TypeScript"
                className="w-8 h-8"
                width={40}
                height={40}
              />
            </div>

            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              <Image
                src="/api/placeholder/40/40"
                alt="Next.js"
                className="w-8 h-8"
                width={40}
                height={40}
              />
            </div>

            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              <Image
                src="/api/placeholder/40/40"
                alt="Tailwind CSS"
                className="w-8 h-8"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
