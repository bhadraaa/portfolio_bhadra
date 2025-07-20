import React, { useEffect } from "react";
import "../autoplaycarousel.css";
import { skills } from "./carousel-config"; // Ensure this file has the skills array
import { IconContext } from "react-icons";

export default function AutoplayCarousel() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js-skills", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#00d4ff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.4, sync: false },
          },
          size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 2, size_min: 1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00d4ff",
            opacity: 0.6,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 2,
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div id="skills" className="carousel-container" style={{ position: "relative" }}>
      <div
        id="particles-js-skills"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 className="section-title">My Skills</h1>
        <IconContext.Provider value={{ size: "2.5em", color: "#00eaff" }}>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
