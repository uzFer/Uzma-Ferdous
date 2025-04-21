import React, { useState } from "react";
import "./Projects.css";
import {
  FaCaretSquareLeft,
  FaCaretSquareRight,
  FaTimes,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const cards = [
    {
      title: "Text to ASL API",
      date: "April 2025 - present",
      description:
        "Working in a team of 4 to develop a Text-to-ASL API that converts written messages into American Sign Language (ASL) symbols and animations, aiming to bridge the communication gap between ASL users and non-signers.",
      image: "",
    },
    {
      title: "Uzma's Art Shop",
      date: "May 2023 - July 2023",
      description:
        "Working in a team of 4 to develop a Text-to-ASL API that converts written messages into American Sign Language (ASL) symbols and animations, aiming to bridge the communication gap between ASL users and non-signers.",
      image: "",
      githubLink: "https://github.com/uzFer/Uzmas-Art-Shop",
      websiteLink: "https://uzmas-art-shop.vercel.app/",
    },
    {
      title: "TCP Chat Room Application",
      date: "April 2024",
      description:
        "Working in a team of 4 to develop a Text-to-ASL API that converts written messages into American Sign Language (ASL) symbols and animations, aiming to bridge the communication gap between ASL users and non-signers.",
      image: "",
    },
    {
      title: "DE1-SoC Battleship",
      date: "April 2023",
      description:
        "Working in a team of 4 to develop a Text-to-ASL API that converts written messages into American Sign Language (ASL) symbols and animations, aiming to bridge the communication gap between ASL users and non-signers.",
      image: "",
      githubLink: "https://github.com/uzFer/ECE243-Battleship",
    },
    {
      title: "Scavenger Hunt GIS",
      date: "January - April 2023",
      description:
        "Working in a team of 4 to develop a Text-to-ASL API that converts written messages into American Sign Language (ASL) symbols and animations, aiming to bridge the communication gap between ASL users and non-signers.",
      image: "",
    },
    {
      title: "YOLOv8 Object Segmentation",
      date: "September 2023 - December 2023",
      description:
        "Working in a team of 4 to develop a Text-to-ASL API that converts written messages into American Sign Language (ASL) symbols and animations, aiming to bridge the communication gap between ASL users and non-signers.",
      image: "",
      githubLink: "https://github.com/uzFer/APS360-Project",
    },
    {
      title: "Tidey",
      date: "November 2022 - January 2023",
      description:
        "Working in a team of 4 to develop a Text-to-ASL API that converts written messages into American Sign Language (ASL) symbols and animations, aiming to bridge the communication gap between ASL users and non-signers.",
      image: "",
      githubLink: "https://github.com/uzFer/tidey",
      websiteLink: "https://uzfer.github.io/tidey/",
    },
  ];

  const totalCards = cards.length;
  const cardsVisible = 4;
  const maxIndex = totalCards - cardsVisible;

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="projects">
      <h2>Personal Projects</h2>
      <div className="project-carousel">
        <button
          className="project-carousel-prev"
          onClick={goToPreviousSlide}
          disabled={currentIndex === 0}
        >
          <FaCaretSquareLeft />
        </button>
        <div
          className="project-cards-container"
          style={{ transform: `translateX(-${currentIndex * 10}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`project-card-wrapper ${
                index < currentIndex || index >= currentIndex + cardsVisible
                  ? "project-card-blurred"
                  : ""
              }`}
              onClick={() => setSelectedProject(card)}
            >
              <div className="project-card">
                <div className="project-card-image" />
                <div className="project-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="project-carousel-next"
          onClick={goToNextSlide}
          disabled={currentIndex === maxIndex}
        >
          <FaCaretSquareRight />
        </button>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-button"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.date}</p>
              </div>
              <div className="modal-body">
                <div className="modal-image"></div>
                <div className="modal-text">
                  <p>{selectedProject.description}</p>
                  <div className="modal-buttons">
                    {selectedProject.githubLink && (
                      <a
                        className="project-tag1"
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {selectedProject.websiteLink && (
                      <a
                        className="project-tag2"
                        href={selectedProject.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe /> Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
