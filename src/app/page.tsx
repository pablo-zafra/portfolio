import { FunDivider } from "../components";
import { Hero, AboutMe, Skills, Work } from "../HomePage";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <FunDivider />
      <Skills />
      <Work />
    </main>
  );
};

export default Home;
