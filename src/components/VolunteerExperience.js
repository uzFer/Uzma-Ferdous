import React, { useState } from "react";
import "./VolunteerExperience.css";
import { FaCaretSquareLeft, FaCaretSquareRight, FaTimes } from "react-icons/fa";

const VolunteerExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const cards = [
    {
      role: "Brand Growth & Marketing Lead",
      club: "You're Next Career Network",
      date: "March 2025 - present",
      description: "",
    },
    {
      role: "Student Ambassador",
      club: "Department of Electrical & Computer Engineering",
      date: "September 2021 - present",
      description: "",
    },
    {
      role: "Brand Growth & Marketing Associate",
      club: "You're Next Career Network",
      date: "April 2024 - March 2025",
      description: "",
    },
    {
      role: "Computer Vision Developer",
      club: "UofT Robotics Association",
      date: "August 2023 - March 2024",
      description: "",
    },
    {
      role: "Professional Development Marketing Director",
      club: "Women in Science & Engineering",
      date: "August 2023 - May 2024",
      description: "",
    },

    {
      role: "Programming Director",
      club: "UofT Engineering Kompetition",
      date: "August - November 2023",
      description: "",
    },
    {
      role: "Content Lead",
      club: "UofT Cybersecurity Association",
      date: "June 2022 - June 2023",
      description: "",
    },
    {
      role: "Handbook Executive",
      club: "UofT Engineering Orientation Committee",
      date: "May - August 2022",
      description: "",
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
    <section className="volunteer-experience">
      <h2>Volunteer Experience</h2>
      <div className="volunteer-experience-carousel">
        <button
          className="volunteer-carousel-prev"
          onClick={goToPreviousSlide}
          disabled={currentIndex === 0}
        >
          <FaCaretSquareLeft />
        </button>
        <div
          className="volunteer-cards-container"
          style={{ transform: `translateX(-${currentIndex * 10}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`volunteer-card-wrapper ${
                index < currentIndex || index >= currentIndex + cardsVisible
                  ? "volunteer-blurred"
                  : ""
              }`}
              onClick={() => setSelectedExperience(card)}
            >
              <div className="volunteer-card">
                <div className="volunteer-card-image" />
                <div className="volunteer-card-content">
                  <h3>{card.role}</h3>
                  <p>{card.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="volunteer-carousel-next"
          onClick={goToNextSlide}
          disabled={currentIndex === maxIndex}
        >
          <FaCaretSquareRight />
        </button>
      </div>

      {selectedExperience && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedExperience(null)}
        >
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-button"
              onClick={() => setSelectedExperience(null)}
            >
              <FaTimes />
            </button>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{selectedExperience.role}</h2>
                <h3>{selectedExperience.club}</h3>
                <p>{selectedExperience.date}</p>
              </div>
              <div className="modal-body">
                <div className="modal-image"></div>
                <div className="modal-text">
                  <p>{selectedExperience.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VolunteerExperience;
