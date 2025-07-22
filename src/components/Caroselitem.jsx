import React from "react";

export default function CarouselItem({ icon, title }) {
  return (
    <div className="carousel-item">
      <img src={icon} alt={title} style={{ height: "50px", marginBottom: "10px"  }} loading="lazy"/>
      <div>{title}</div>
    </div>
  );
}
