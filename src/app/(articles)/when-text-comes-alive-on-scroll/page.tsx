import { CustomH2, CustomP, Heading, ImgBg } from "../components";
import { workData } from "../../../data";
import TextHighlight from "react-scroll-text-highlighter";
import { CustomUL } from "../components/CustomUL";
import { CustomButton } from "../components/CustomButton";

const BrandRestyling: React.FC = () => {
  const slug = "when-text-comes-alive-on-scroll";
  const workItem = workData.find((item) => item.slug === slug);
  const { titleLines = [], tags = [], bg = "#ffffff" } = workItem || {};
  const title = titleLines.join(" ");
  const tagList = tags.join(", ");
  const description =
    "A new npm package for React, react-scroll-text-highlighter. This component is designed and developed looking to add a touch of interactivity and style to their web pages.";
  const mainImg = `/media/work/${slug}/${slug}.gif`;

  return (
    <>
      <Heading title={title} description={description} tagList={tagList} />
      <ImgBg imgURL={mainImg} bgColor={bg} alt="" priority={true} />
      <CustomH2>
        <>What does this component do?</>
      </CustomH2>
      <CustomP>
        <>
          The component is a simple wrapper that can be used to highlight any
          text on a webpage. What makes it special is that the highlight is not
          static, it animates fluidly as the user scrolls down the page. This
          creates a striking visual effect and guides the reader&apos;s
          attention as they progress through the content.
        </>
      </CustomP>
      <div className="w-full flex flex-wrap justify-center items-center gap-4">
        <CustomButton
          href="https://www.npmjs.com/package/react-scroll-text-highlighter"
          blank
        >
          <>View on npm</>
        </CustomButton>
        <CustomButton
          href="https://github.com/pablo-zafra/npm-react-scroll-text-highlighter"
          blank
        >
          <>View on GitHub</>
        </CustomButton>
      </div>
      <CustomP>
        <>
          This tool is perfect for bringing life to headlines, important quotes,
          or any text snippet you wish to highlight without resorting to
          intrusive animations. It is an example of how design and development
          can combine to create unique and memorable user experiences.
        </>
      </CustomP>
      <CustomH2>
        <>
          Key{" "}
          <TextHighlight highlightColor="var(--color-turquesa)">
            features
          </TextHighlight>
        </>
      </CustomH2>
      <CustomUL>
        <li className="mb-4">
          <b>Easy to Use:</b> Simply wrap the desired text with the component.
        </li>
        <li className="mb-4">
          <b>Fully Customizable:</b> The color, thickness, and offset of the
          underline can be adjusted to perfectly match the site&apos;s style.
        </li>
        <li className="mb-4">
          <b>Lightweight and Efficient:</b> The component is optimized to not
          impact page performance.
        </li>
        <li className="mb-4">
          <b>Scroll-Triggered Animation:</b> The magic happens when users
          scroll, activating the animation and making the reading experience
          more engaging.
        </li>
      </CustomUL>
    </>
  );
};

export default BrandRestyling;
