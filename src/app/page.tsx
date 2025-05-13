import {
  Hero,
  AboutMe,
  FunDivider,
  Skills,
  Work,
  MouseFollower,
} from "../components";

export default function Home() {
  return (
    <>
      <MouseFollower />
      <Hero />
      <AboutMe />
      <FunDivider />
      <Skills />
      <Work />
      <FunDivider />
    </>
  );
}
