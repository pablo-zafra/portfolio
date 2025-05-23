import {
  Hero,
  AboutMe,
  FunDivider,
  Skills,
  Work,
  CursorFollower,
} from "../components";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <Hero />
      <AboutMe />
      <FunDivider top="bg-gray-light" />
      <Skills />
      <Work />
      <FunDivider bottom="bg-gray-light" />
    </>
  );
}
