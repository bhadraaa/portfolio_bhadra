import React, { useEffect } from "react";

function Projects() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js-projects", {
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

  const projects = [
    {
      title: "Choreoscope",
      desc: "AI-based mudra recognition app using Flutter & DL.",
    },
    {
      title: "Automated Fish Feeder",
      desc: "Smart aquaculture feeding system.",
    },
    {
      title: "JWST Stories",
      desc: "Web app visualizing space telescope images interactively.",
    },
  ];

  return (
    <section id="projects" className="projects-section" style={{ position: "relative" }}>
      <div
        id="particles-js-projects"
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
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
