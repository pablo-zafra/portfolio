import { FunDivider, CursorFollower } from "../components";
import { Hero, AboutMe, Skills, Work } from "../HomePage";

export default function Home() {
  return (
    <main>
      <CursorFollower />
      <Hero />
      <AboutMe />
      <FunDivider />
      <Skills />
      <Work />
      <FunDivider />
    </main>
  );
}
