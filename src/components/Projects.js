import React from "react";
import "./Projects.css";

const Projects = () => {
  const cards = [
    { title: "Text to ASL API", date: "April 2025 - present" },
    { title: "Uzma's Art Shop", date: "May 2023 - July 2023" },
    { title: "TCP Chat Room Application", date: "April 2024" },
    { title: "DE1-SoC Battleship", date: "April 2023" },
    { title: "Scavenger Hunt GIS", date: "January - April 2023" },
    {
      title: "YOLOv8 Object Segmentation",
      date: "September 2023 - December 2023",
    },
    { title: "Tidey", date: "November 2022 - January 2023" },
  ];

  return (
    <section className="projects">
      <h2>Personal Projects</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-image" />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
