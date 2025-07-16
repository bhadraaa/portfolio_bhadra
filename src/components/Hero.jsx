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
      <h1 className="hero-heading">Hi, I'm Bhadra</h1>
      
      <motion.img
  src="/src/assets/avatar.png"
  alt="My Avatar"
  style={{ width: "300px", height: "300px" }}
  className="rounded-full mb-6 shadow-lg"
  initial={{ x: -200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
/>

      
      <p className="hero-subtext">CSE Student | Flutter & AI Enthusiast</p>
    </motion.div>
  );
}

export default Hero;
