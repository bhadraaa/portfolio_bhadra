import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Bhadra</h1>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
