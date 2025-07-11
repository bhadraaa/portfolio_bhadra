import React from "react";

function Projects() {
  const projects = [
    { title: "Choreoscope", desc: "AI-based mudra recognition app using Flutter & DL." },
    { title: "Automated Fish Feeder", desc: "Smart aquaculture feeding system." },
    { title: "JWST Stories", desc: "Web app visualizing space telescope images interactively." },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
