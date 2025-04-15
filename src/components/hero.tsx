export const Hero = () => {
  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
      <div className="flex justify-center items-center">
        <h1 className=" text-8xl/tight font-semibold">
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
        <h2 className="text-base mt-84 ml-10 w-72 font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis
          tellus erat. Morbi finibus odio nec felis iaculis dapibus ac ac quam.
          Nunc bibendum dui vel neque mattis, sed sodales lorem semper.
        </h2>
        <p>Core stack:</p>
      </div>
    </div>
  );
};
