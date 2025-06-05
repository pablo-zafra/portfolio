import type { Metadata } from "next";
import { CustomH2, CustomH3, CustomP, Heading, ImgBg } from "../components";
import { workData } from "../../../data";

export const metadata: Metadata = {
  title: "Local TV Network Brand Restyling",
  description: "Frontend developer, UI/UX designer, Motion Designer",
};

const BrandRestyling: React.FC = () => {
  const slug = "local-tv-network-brand-restyling";
  const workItem = workData.find((item) => item.slug === slug);
  const { titleLines = [], tags = [], bg = "#ffffff" } = workItem || {};
  const title = titleLines.join(" ");
  const tagList = tags.join(", ");
  const description =
    "Trying to maintain the brand's identity while keeping it consistent with the modern digital landscape. This project was an important step in the brand's evolution and helped to establish a strong and recognizable brand identity.";
  const mainImg = `/img/work/${slug}/${slug}.jpg`;

  return (
    <>
      <Heading title={title} description={description} tagList={tagList} />
      <ImgBg imgURL={mainImg} bgColor={bg} alt="" />
      <CustomH3 content="Local TV Network Brand Restyling" />
      <CustomP content={description} />
      <CustomH2 content="Project Details" />
      <CustomP
        content="This project involved a comprehensive brand restyling for a local TV
        network, focusing on modernizing the visual identity while maintaining
        the essence of the brand. The process included logo redesign, color
        palette updates, and the creation of new graphic elements to enhance the
        overall brand presence across various media platforms. The final result
        was a cohesive and visually appealing brand identity that resonated with
        the target audience and effectively communicated the network's
        values and offerings."
      />
    </>
  );
};

export default BrandRestyling;
