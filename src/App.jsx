import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Resume from "./components/Resume";
import SKills from "./components/Skill";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="break"></div>
      <About />
       <SKills />
      <Projects/>
      <Achievements />
      <Resume/>
      <Contact />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;