import React from "react";

function Achievements() {
  const achievements = [
    "3rd Place — Hackspiration Hackathon",
    "Top 10 — NASA Space Apps 2024",
    "Shortlisted — Smart India Hackathon 2024",
    "SQL Advanced — HackerRank",
  ];

  return (
    <section id="achievements" className="achievements-section">
      <h2 className="achievements-heading">Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((item, index) => (
          <li key={index} className="achievement-item">{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
