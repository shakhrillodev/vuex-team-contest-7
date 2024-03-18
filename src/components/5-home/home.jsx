import Intro from "./1-intro/intro";
import Hiring from "./2-hiring/hiring";
import Community from "./3-community/community";
import ScreenContent from "./4-screen-content/screen-content";
import Interview from "./5-interview/interview";
import About from "./6-about/about";
import Links from "./7-links/links";

const Home = () => {
  return (
    <div>
      <Intro />
      <Hiring />
      <Community />
      <ScreenContent />
      <Interview />
      <About />
      <Links />
    </div>
  );
};

export default Home;
