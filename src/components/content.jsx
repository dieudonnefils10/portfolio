import About from "./about";
import Blog from "./blog";
import Contact from "./contact";
import Navbar from "./navbar";
import Portfolio from "./portfolio";
import Resume from "./resume";

const Content = () => {
  return (
    <div className="main-content">
      <Navbar />

      <About />

      <Resume />

      <Portfolio />

      <Blog />

      <Contact />
    </div>
  );
};

export default Content;
