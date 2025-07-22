import React, { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";

function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js-resume", {
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

  const handleImageClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <section id="resume" className="resumeS" style={{ position: "relative" }}>
      {/* Particle Background */}
      <div
        id="particles-js-resume"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 className="section-title">My Resume</h2>
        <div className="resume-wrapper">
          <a
            href="/Bhadra_resume_v1.pdf"
            download
            className="download-btn"
          >
            Download Resume
          </a>


          <img
            src="Resume-v1.png"
            alt="My Resume"
            className="resumei"
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Modal Preview */}
      {isOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src="Resume-v1.png"
              alt="Full Resume"
              className="resume-full"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Resume;
