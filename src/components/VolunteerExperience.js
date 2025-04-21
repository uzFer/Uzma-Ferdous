import React, { useRef, useState } from "react";
import "./VolunteerExperience.css";
import { FaCaretSquareLeft, FaCaretSquareRight, FaTimes } from "react-icons/fa";

const VolunteerExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const clickSound = useRef(null);

  const cards = [
    {
      role: "Brand Growth & Marketing Lead",
      club: "You're Next Career Network",
      date: "March 2025 - present",
      description:
        "YNCN works with over 6000 students and 100+ companies to offer professional development programs and career opportunities. My current role on YNCN involves managing a team of four wonderful graphics associates and developing our marketing vision for the upcoming year.",
      image: "yncn.png",
      altText: "YNCN Logo",
    },
    {
      role: "Student Ambassador",
      club: "Department of Electrical & Computer Engineering",
      date: "September 2021 - present",
      description:
        "As an ECE student ambassador, I participate in open house and reception events where I speak to incoming university students and give advice based on my experience in the program. I also frequently communicate with faculty members to offer my insights on key departmental decisions affecting students.",
      image: "ece.png",
      altText: "ECE Logo",
    },
    {
      role: "Brand Growth & Marketing Associate",
      club: "You're Next Career Network",
      date: "April 2024 - March 2025",
      description:
        "YNCN works with over 6000 students and 100+ companies to offer professional development programs and career opportunities. My previous role at YNCN involved working on creative graphics for our marketing material and volunteering at pop-up booths",
      image: "yncn.png",
      altText: "YNCN Logo",
    },
    {
      role: "Computer Vision Developer",
      club: "UofT Robotics Association",
      date: "August 2023 - March 2024",
      description:
        "Implemented deep learning object detection algorithms for autonomous rover using Python, PyTorch, and OpenCV. Improved data labelling efficiency for lane line detection using Roboflow's annotate feature on a 1K dataset.",
      image: "utra.png",
      altText: "UTRA Logo",
    },
    {
      role: "Professional Development Marketing Director",
      club: "Women in Science & Engineering",
      date: "August 2023 - May 2024",
      description:
        "WISE @ UofT is a community of 50+ members with the hope of cultivating a safe and beneficial environment for women in all areas of STEM to meet one another and build valuable skills. My role as PD Marketing Director involved creating posters, announcements, and various marketing material to promote our career development events.",
      image: "wise.jpeg",
      altText: "WISE Logo",
    },
    {
      role: "Software Developer",
      club: "UofT Engineering Society",
      date: "January - September 2023",
      description:
        "I helped work on the UofT Engineering Orientation (Frosh) website for 1000+ incoming students! I also refined the infamous course database website (www.courses.skule.ca) using React.js and Redux.",
      image: "engsoc.png",
      altText: "EngSoc Logo",
    },
    {
      role: "Programming Director",
      club: "UofT Engineering Kompetition",
      date: "August - November 2023",
      description:
        "UTEK is UofT's largest engineering competition with categories like competitive programming, design, and consulting. I developed the programming case study for the 2023 year with 40+ participants!",
      image: "utek.png",
      altText: "UTEK Logo",
    },
    {
      role: "Content Lead",
      club: "UofT Cybersecurity Association",
      date: "June 2022 - June 2023",
      description:
        "As the Content Lead for UofT CSSA, I led educational workshops about cybersecurity and best practices.",
      image: "cssa.png",
      altText: "CSSA Logo",
    },
    {
      role: "Handbook Executive",
      club: "UofT Engineering Orientation Committee",
      date: "May - August 2022",
      description:
        "After my first year of engineering, I decided to give back with some humour by offering my (lack of) writing skills to the 2022 Frosh Handbook.",
      image: "frosh.png",
      altText: "Frosh 2022 Logo",
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
              onClick={() => {
                setSelectedExperience(card);
                if (clickSound.current) {
                  clickSound.current.currentTime = 0;
                  clickSound.current.play();
                }
              }}
            >
              <div className="volunteer-card">
                <img
                  src={card.image}
                  alt={card.altText}
                  className="volunteer-card-image"
                />
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
          className="volunteer-modal-overlay"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="volunteer-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="volunteer-modal-close-button"
              onClick={() => setSelectedExperience(null)}
            >
              <FaTimes />
            </button>
            <div className="volunteer-modal-content">
              <div className="volunteer-modal-header">
                <h2>{selectedExperience.role}</h2>
                <h3>{selectedExperience.club}</h3>
                <p>{selectedExperience.date}</p>
              </div>
              <div className="volunteer-modal-body">
                <img
                  src={selectedExperience.image}
                  alt="Alt"
                  className="volunteer-modal-image"
                />
                <div className="volunteer-modal-text">
                  <p>{selectedExperience.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <audio ref={clickSound} src="/click.mp3" preload="auto" />
    </section>
  );
};

export default VolunteerExperience;
