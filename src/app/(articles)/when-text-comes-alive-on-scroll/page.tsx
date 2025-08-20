import { CustomH2, CustomH3, CustomP, Heading, ImgBg } from "../components";
import { workData } from "../../../data";
import TextHighlight from "react-scroll-text-highlighter";
import { CustomUL } from "../components/CustomUL";
import { CustomButton } from "../components/CustomButton";
import { Separation } from "../components/Separation";
import { CustomCode } from "../components/CustomCode";
import { SeparationLight } from "../components/SeparationLight";
import { CustomTable } from "../components/CustomTable";
import Link from "next/link";

const BrandRestyling: React.FC = () => {
  const slug = "when-text-comes-alive-on-scroll";
  const workItem = workData.find((item) => item.slug === slug);
  const { titleLines = [], tags = [], bg = "#ffffff" } = workItem || {};
  const title = titleLines.join(" ");
  const tagList = tags.join(", ");
  const description =
    "A new npm package for React, react-scroll-text-highlighter. This component is designed and developed looking to add a touch of interactivity and style to their web pages.";
  const mainImg = `/media/work/${slug}/${slug}.gif`;

  const propTableData = [
    {
      prop: "textColor",
      type: "string",
      default: "#FFFFFF",
      description: "Color of the text",
    },
    {
      prop: "highlightColor",
      type: "string",
      default: "#6D00C7",
      description: "Color of the highlight effect",
    },
    {
      prop: "start",
      type: "string",
      default: "bottom 98%",
      description: "GSAP ScrollTrigger start position",
    },
    {
      prop: "end",
      type: "string",
      default: "bottom 65%",
      description: "GSAP ScrollTrigger end position",
    },
  ];

  return (
    <>
      <Heading title={title} description={description} tagList={tagList} />
      <ImgBg imgURL={mainImg} bgColor={bg} alt="" priority={true} />
      <CustomH2>
        <>
          What does this{" "}
          <TextHighlight highlightColor="var(--color-turquesa)">
            component
          </TextHighlight>{" "}
          do?
        </>
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
      <Separation />
      <CustomH2>
        <>
          <TextHighlight highlightColor="var(--color-turquesa)">
            How to
          </TextHighlight>{" "}
          use it
        </>
      </CustomH2>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <CustomH3>
          <>Installation</>
        </CustomH3>
        <SeparationLight />
        <CustomCode>
          <>npm install react-scroll-text-highlighter</>
        </CustomCode>
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <CustomH3>
          <>Requirements</>
        </CustomH3>
        <SeparationLight />
        <CustomP className="w-full col-span-8! col-start-1! md:col-span-8! md:col-start-3!">
          <>This package requires the following peer dependencies:</>
        </CustomP>
        <CustomUL className="w-full col-span-8! col-start-1! md:col-span-8! md:col-start-3! px-6">
          <li className="mb-4">React {">="} 16.8.0</li>
          <li className="mb-4">GSAP {">="} 3.13.0</li>
        </CustomUL>
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <CustomH3>
          <>Usage</>
        </CustomH3>
        <SeparationLight />
        <CustomCode>
          <>
            {'import TextHighlight from "react-scroll-text-highlighter";'}
            <br />
            {"function App() {"}
            <br />
            &nbsp;&nbsp;{"return ("}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"<h1>"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Check this:"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {'<TextHighlight textColor="#000000" highlightColor="#ffeb3b">'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {"This text will be highlighted on scroll"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</TextHighlight>"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"This text will not."}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"</h1>"}
            <br />
            &nbsp;&nbsp;{");"}
            <br />
            {"}"}
          </>
        </CustomCode>
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <CustomH3>
          <>Props</>
        </CustomH3>
        <SeparationLight />
        <CustomTable data={propTableData} />
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <CustomH3>
          <>Example Project</>
        </CustomH3>
        <SeparationLight />
        <CustomP className="w-full col-span-8! col-start-1! md:col-span-8! md:col-start-3!">
          <>
            Check out the example-project directory for a complete working
            example using Next.js.
          </>
        </CustomP>
        <CustomP className="w-full col-span-8! col-start-1! md:col-span-8! md:col-start-3!">
          <>To run the example:</>
        </CustomP>
        <CustomCode>
          <>
            {"# Clone the repository"}
            <br />
            {
              "git clone https://github.com/pablo-zafra/npm-react-scroll-text-highlighter.git"
            }
            <br />
            {""}
            <br />
            {"# Install dependencies"}
            <br />
            {"npm install"}
            <br />
            {""}
            <br />
            {"# Link the package locally"}
            <br />
            {"npm link"}
            <br />
            {""}
            <br />
            {"# Move to example project"}
            <br />
            {"cd example-project"}
            <br />
            {""}
            <br />
            {"# Install dependencies"}
            <br />
            {"npm install"}
            <br />
            {""}
            <br />
            {"# Link to local package"}
            <br />
            {"npm link react-scroll-text-highlighter"}
            <br />
            {""}
            <br />
            {"# Run the development server"}
            <br />
            {"npm run dev"}
          </>
        </CustomCode>
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <CustomH3>
          <>License</>
        </CustomH3>
        <SeparationLight />
        <CustomP className="w-full col-span-8! col-start-1! md:col-span-8! md:col-start-3!">
          <>MIT © Pablo Zafra</>
        </CustomP>
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <CustomH3>
          <>Contributing</>
        </CustomH3>
        <SeparationLight />
        <CustomP className="w-full col-span-8! col-start-1! md:col-span-8! md:col-start-3!">
          <>
            Contributions, issues and feature requests are welcome. Feel free to
            check{" "}
            <Link
              href={
                "https://github.com/pablo-zafra/npm-react-scroll-text-highlighter/issues"
              }
              className="text-turquesa hover:underline"
            >
              issues page
            </Link>{" "}
            if you want to contribute.
          </>
        </CustomP>
        <SeparationLight />
        <CustomP className="w-full col-span-8! col-start-1! md:col-span-8! md:col-start-3!">
          <>
            ⭐{" "}
            <Link
              href={
                "https://github.com/pablo-zafra/npm-react-scroll-text-highlighter"
              }
              className="text-turquesa hover:underline"
            >
              Star this repository
            </Link>{" "}
            if you like it!
          </>
        </CustomP>
      </div>
    </>
  );
};

export default BrandRestyling;
