/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import {Element} from "react-scroll";
import Header from "./components/Header";

import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/about";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./index.css";
import Particles from "react-particles";
// className="bg-[#fffcef]"
function App() {
  return (
    <>
      <div className=" h-max bg-conic-gradient-animation">
        <Header />

        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>

        <Element name="education">
          <Education />
        </Element>

        <Element name="skills">
          <Skills />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>

        <Footer />
      </div>
    </>
  );
}

export default App;
