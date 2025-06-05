import type { Metadata } from "next";
import {
  CustomH2,
  CustomH3,
  CustomP,
  Heading,
  ImgBg,
  LoopedVideo,
} from "../components";
import { workData } from "../../../data";
import Link from "next/link";
import Image from "next/image";
import { GridContainer } from "../../..//components";

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
    "This project involved the complete redefinition of a local television channel's visual identity.";
  const mainImg = `/media/work/${slug}/${slug}.jpg`;

  return (
    <>
      <Heading title={title} description={description} tagList={tagList} />
      <ImgBg imgURL={mainImg} bgColor={bg} alt="" priority={true} />
      <CustomH2>
        <>Brand Redesign & Style Guide Development</>
      </CustomH2>
      <CustomP>
        <>
          We carried out a <b>redesign of the main logo</b> across all its
          versions and city variants. This included a{" "}
          <b>typographic reassignment</b> and a{" "}
          <b>redefinition of bthe color palette and its usage percentages</b>,
          alongside examples of graphic resources and layouts. All this
          information was consolidated into a comprehensive style guide, which
          will serve as the foundation for redesigning various digital
          communication elements.
        </>
      </CustomP>
      <GridContainer>
        <div className="flex flex-col gap-4 col-span-4 md:col-span-4 md:col-start-3 mt-12">
          <Image
            src={`/media/work/${slug}/layouts-01.jpg`}
            alt="Laout101"
            width={3840}
            height={2160}
            className="rounded-lg"
          />
          <Image
            src={`/media/work/${slug}/layouts-04.jpg`}
            alt="Laout102"
            width={3840}
            height={2160}
            className="rounded-lg col-span-4 md:col-span-4 md:col-start-3"
          />
        </div>
        <div className="flex flex-col gap-4 col-span-4 md:col-span-4 md:col-start-7">
          <Image
            src={`/media/work/${slug}/layouts-03.jpg`}
            alt="Laout101"
            width={3840}
            height={2160}
            className="rounded-lg"
          />
          <Image
            src={`/media/work/${slug}/layouts-02.jpg`}
            alt="Laout102"
            width={3840}
            height={2160}
            className="rounded-lg"
          />
        </div>
      </GridContainer>
      <CustomP>
        <>
          All this information was consolidated into a comprehensive style
          guide, which will serve as the foundation for redesigning various
          digital communication elements.
        </>
      </CustomP>
      <CustomH3>
        <>Digital Asset Creation for Social Media</>
      </CustomH3>
      <CustomP>
        <>
          This guide will direct the creation of future digital brand assets.
          Additionally, we designed and animated a series of essential graphics
          for social media, optimized with editable fields and limited
          positional attributes to enable quick content creation by editors.
        </>
      </CustomP>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-6">
        <LoopedVideo
          src={`/media/work/${slug}/caja.webm`}
          poster={`/media/work/${slug}/caja.jpg`}
        />
        <LoopedVideo
          src={`/media/work/${slug}/story.webm`}
          poster={`/media/work/${slug}/story.jpg`}
        />
        <LoopedVideo
          src={`/media/work/${slug}/titular.webm`}
          poster={`/media/work/${slug}/titular.jpg`}
        />
        <LoopedVideo
          src={`/media/work/${slug}/nombreCargo.webm`}
          poster={`/media/work/${slug}/nombreCargo.jpg`}
        />
      </div>
      <CustomP>
        <>
          You can check out these resources on their{" "}
          <Link
            href="https://www.instagram.com/101tvmalaga/"
            target="_blank"
            className="underline"
          >
            Instagram
          </Link>{" "}
          account.
        </>
      </CustomP>
      <CustomH3>
        <>UX/UI Redesign of the Digital Newspaper</>
      </CustomH3>
      <CustomP>
        <>
          Finally, we worked on the complete UX/UI redesign of the digital
          newspaper: from component definition to the layout of homepages,
          sections, news articles (in all their variants), sports results, and
          the on-demand TV section.
        </>
      </CustomP>
      <GridContainer>
        <div className="col-span-8 md:col-span-8 md:col-start-3">
          <LoopedVideo
            src={`/media/work/${slug}/noticia-01.mp4`}
            poster={`/media/work/${slug}/noticia-01.jpg`}
            type="video/mp4"
          />
        </div>
      </GridContainer>
      <CustomP>
        <>
          The comprehensive redesign of the digital newspaper is now actively in
          its development phase. This final stage will integrate all defined
          UX/UI elements, bringing the updated visual identity to life for
          users.
        </>
      </CustomP>
    </>
  );
};

export default BrandRestyling;
