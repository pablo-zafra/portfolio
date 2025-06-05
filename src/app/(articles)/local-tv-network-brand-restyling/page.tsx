import type { Metadata } from "next";
import { Heading, MainImg } from "../components";

export const metadata: Metadata = {
  title: "Local TV Network Brand Restyling",
  description: "Frontend developer, UI/UX designer, Motion Designer",
};

const BrandRestyling: React.FC = () => {
  const slug = "local-tv-network-brand-restyling";
  const title = "Local TV Network Brand Restyling";
  const description =
    "Trying to maintain the brand's identity while keeping it consistent with the modern digital landscape. This project was an important step in the brand's evolution and helped to establish a strong and recognizable brand identity.";

  const bgColor = "#d2d2d2";
  const mainImg = `/img/work/${slug}/${slug}.jpg`;

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center max-w-5xl w-full py-28 gap-6">
        <Heading title={title} description={description} />
        <MainImg imgURL={mainImg} bgColor={bgColor} alt="" />
        <div className="flex flex-col w-full max-w-3xl px-6 gap-4">
          <h2 className="text-2xl font-bold">
            Local TV Network Brand Restyling
          </h2>
          <p className="text-lg font-light">
            This project involved a comprehensive brand restyling for a local TV
            network, focusing on modernizing the visual identity while
            maintaining the essence of the brand. The process included logo
            redesign, color palette updates, and the creation of new graphic
            elements to enhance the overall brand presence across various media
            platforms. The final result was a cohesive and visually appealing
            brand identity that resonated with the target audience and
            effectively communicated the network&apos;s values and offerings.
          </p>
        </div>
      </div>
    </main>
  );
};

export default BrandRestyling;
