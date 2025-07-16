import React from "react";
import "../autoplaycarousel.css";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./Caroselitem";

export default function AutoplayCarousel() {
  return (
    <div section id="skills" className="carousel-container">
        
        <h1 className="section-title">Skills</h1>
      <div className="carousel-track">
        {[...cardDetails, ...cardDetails].map((detail, index) => (
          <CarouselItem key={index} icon={detail.icon} title={detail.title} />
        ))}
      </div>
    </div>
  );
}
