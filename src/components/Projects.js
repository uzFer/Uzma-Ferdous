import React, { useRef, useState } from "react";
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
  const clickSound = useRef(null);

  const cards = [
    {
      title: "Text to ASL API",
      date: "April 2025 - present",
      description:
        "Working in a team of 4 to develop a Text-to-ASL API that converts written messages into American Sign Language (ASL) symbols and animations, aiming to bridge the communication gap between ASL users and non-signers.",
      image: "./text-to-asl.png",
    },
    {
      title: "Uzma's Art Shop",
      date: "May 2023 - July 2023",
      description:
        "Designed a full-stack e-commerce website to display my paintings using React.js, Next.js, Google Cloud Platform, AWS S3, MongoDB and the Stripe API. Users can sign up/log in, add products to their cart, leave product reviews, and save their favourite paintings.",
      image: "./art-shop.png",
      githubLink: "https://github.com/uzFer/Uzmas-Art-Shop",
      websiteLink: "https://uzmas-art-shop.vercel.app/",
    },
    {
      title: "TCP Chat Room Application",
      date: "April 2024",
      description:
        "Created a multi-threaded chat room application in C using UNIX TCP sockets to enable users to create, join, and leave chat rooms using doubly linked lists, multithreading, and synchronous I/O. Other features include private messaging and admin controls to switch roles and kick users out of sessions.",
      image: "./tcp.jpg",
    },
    {
      title: "DE1-SoC Battleship",
      date: "April 2023",
      description:
        "Developed an interactive Battleship game in C for the DE1-SOC board, taking user input from multiple I/O Devices including DE1-SOC board pushbutton keys and switches, and an external PS/2 Keyboard. Also, it uses the A9 Private Timer to measure and display player turn countdowns and control gameplay animations.",
      image: "./battleship.png",
      githubLink: "https://github.com/uzFer/ECE243-Battleship",
    },
    {
      title: "Scavenger Hunt GIS",
      date: "January - April 2023",
      description:
        "In a team of 3, we created a Geographic Information System (GIS) in C++ to extract information from the OpenStreetMap API and store street intersections, points of interest, natural features, and transit data from over 8 billion graph nodes. We optimized autocomplete searching and zoom rendering using Tries and integrated it with other STL data structures. We ended up placing 4th out of 90 teams on course leaderboard for our 'Travelling Courier Problem' algorithm involving Multi-target Dijkstra, simulated annealing, and two-opt operations.",
      image: "./mapper.png",
    },
    {
      title: "YOLOv8 Object Segmentation",
      date: "September 2023 - December 2023",
      description:
        "This project involved training and evaluating a YOLOv8 deep learning model for object segmentation of common road obstacles with a final F1 score of 61.5% and mAP 50 of 58.4%, outperforming the baseline Canny Edge Detector by 10% (which I was responsible for developing). We processed Berkeley Deep Drive 10K dataset to create training, validation, and testing datasets by converting instance segmentation labels into YOLOv8 format and applying augmentation techniques to improve data diversity.",
      image: "./yolo.png",
      githubLink: "https://github.com/uzFer/APS360-Project",
    },
    {
      title: "Tidey",
      date: "November 2022 - January 2023",
      description:
        "Used React and Node.js to develop an organization and productivity website for university students to add, edit, or delete courses, calculate and save grades, and store multiple course-related files. Integrated Google Firebase into website using Firebase Authentication for user authentication, Firestore Database to save changes to course information, and Firebase Storage to store and retrieve user files.",
      image: "./tidey.png",
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
              onClick={() => {
                setSelectedProject(card);
                if (clickSound.current) {
                  clickSound.current.currentTime = 0;
                  clickSound.current.play();
                }
              }}
            >
              <div className="project-card">
                <img
                  src={card.image}
                  alt="Uzma Ferdous"
                  className="project-card-image"
                />
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
                <img
                  src={selectedProject.image}
                  alt="Uzma Ferdous"
                  className="modal-image"
                />
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
      <audio ref={clickSound} src="/click.mp3" preload="auto" />
    </section>
  );
};

export default Projects;
