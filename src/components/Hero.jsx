import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="hero-section"
      id="hero"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="hero-heading">Hi, I'm Bhadra 👋</h1>
      <p className="hero-subtext">CSE Student | Flutter & AI Enthusiast</p>
      <a href="#projects" className="hero-button">View Projects</a>
    </motion.div>
  );
}

export default Hero;
