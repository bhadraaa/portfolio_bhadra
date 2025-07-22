import React, { useEffect, useState } from "react";
// Ensure your CSS file path is correct

const projects = [
  {
    name: "Choreoscope",
    description:
      "AI-based mudra recognition app using Flutter & DL. This project demonstrates advanced deep learning techniques applied to real-time gesture recognition.",
    gitLink: "https://github.com/bhadraaa/choreoscope_last_253",
    image: "/choreo.png",
  },
  
  {
  name: "Offside Deals",
  description:
    "A platform providing exclusive football merchandise deals and transfer updates. Built using React and integrated with live football APIs for real-time data.",
  gitLink: "https://github.com/bhadraaa/OffSideDeals", 
  image: "/offside.png" 
}
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <section id="projects" className="projects-section">
      <div id="particles-js-projects" className="particles-background"></div>

      <div className="projects-content">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openProjectModal(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/4a5568/ffffff?text=Image+Not+Found";
                }}
                loading="lazy"
              />
              <h3 className="project-name">{project.name}</h3>
              
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeProjectModal}>
              &times;
            </button>
            <h2 className="modal-title">{selectedProject.name}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="modal-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/4a5568/ffffff?text=Image+Not+Found";
              }}
              loading="lazy"
            />
            <p className="modal-description">{selectedProject.description}</p>
            <div className="modal-links">
              {selectedProject.gitLink && (
                <a
                  href={selectedProject.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github"
                >
                  GitHub
                </a>
              )}
              
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
