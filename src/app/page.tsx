import { FunDivider, CursorFollower } from "../components";
import { Hero, AboutMe, Skills, Work } from "../HomePage";

const Home: React.FC = () => {
  return (
    <main>
      <CursorFollower />
      <Hero />
      <AboutMe />
      <FunDivider />
      <Skills />
      <Work />
    </main>
  );
};

export default Home;
