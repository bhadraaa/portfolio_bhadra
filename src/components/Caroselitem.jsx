import React from "react";

export default function CarouselItem({ icon, title }) {
  return (
    <div className="carousel-card">
      {icon}
      <p>{title}</p>
    </div>
  );
}
