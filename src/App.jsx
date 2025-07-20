import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AutoplayCarousel from "./components/AutoplayCarousel";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="break"></div>
      <About />
       <AutoplayCarousel />
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