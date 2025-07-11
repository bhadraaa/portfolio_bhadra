import React from "react";

function Skills() {
  const skills = ["React", "Tailwind", "Framer Motion", "Flutter", "C", "Java", "MongoDB", "Firebase"];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
