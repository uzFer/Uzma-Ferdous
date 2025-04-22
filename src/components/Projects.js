import React, { useRef, useState, useEffect } from "react";
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
  const containerRef = useRef(null);
  const [cardsVisible, setCardsVisible] = useState(4);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const cards = [
    {
      title: "Text to ASL API",
      date: "April 2025 - present",
      description:
        "Working in a team of 4 to develop a Text-to-ASL API that converts written messages into American Sign Language (ASL) symbols and animations, aiming to bridge the communication gap between ASL users and non-signers.",
      image: "./text-to-asl.png",
      altText: "Text to ASL Model Image",
    },
    {
      title: "Uzma's Art Shop",
      date: "May 2023 - July 2023",
      description:
        "Designed a full-stack e-commerce website to display my paintings using React.js, Next.js, Google Cloud Platform, AWS S3, MongoDB and the Stripe API. Users can sign up/log in, add products to their cart, leave product reviews, and save their favourite paintings.",
      image: "./art-shop.png",
      githubLink: "https://github.com/uzFer/Uzmas-Art-Shop",
      websiteLink: "https://uzmas-art-shop.vercel.app/",
      altText: "Uzma's Art Shop Image",
    },
    {
      title: "TCP Chat Room Application",
      date: "April 2024",
      description:
        "Created a multi-threaded chat room application in C using UNIX TCP sockets to enable users to create, join, and leave chat rooms using doubly linked lists, multithreading, and synchronous I/O. Other features include private messaging and admin controls to switch roles and kick users out of sessions.",
      image: "./tcp.jpg",
      altText: "TCP Image",
    },
    {
      title: "DE1-SoC Battleship",
      date: "April 2023",
      description:
        "Developed an interactive Battleship game in C for the DE1-SOC board, taking user input from multiple I/O Devices including DE1-SOC board pushbutton keys and switches, and an external PS/2 Keyboard. Also, it uses the A9 Private Timer to measure and display player turn countdowns and control gameplay animations.",
      image: "./battleship.png",
      githubLink: "https://github.com/uzFer/ECE243-Battleship",
      altText: "ECE243 Battleship Image",
    },
    {
      title: "Scavenger Hunt GIS",
      date: "January - April 2023",
      description:
        "In a team of 3, we created a Geographic Information System in C++ to extract information from the OpenStreetMap API. We optimized autocomplete searching using Tries and integrated it with other STL data structures such as hashmaps and sets. We secured 4th out of 90 teams for our 'Travelling Courier Problem' algorithm!",
      image: "./mapper.png",
      altText: "ECE297 GIS Image",
    },
    {
      title: "YOLOv8 Object Segmentation",
      date: "September 2023 - December 2023",
      description:
        "A deep learning model for object segmentation of common road obstacles. We also processed the Berkeley Deep Drive 10K dataset by converting instance segmentation labels into YOLOv8 format and applying data augmentation techniques. Final F1 score = 61.5%, mAP 50 = 58.4%",
      image: "./yolo.png",
      githubLink: "https://github.com/uzFer/APS360-Project",
      altText: "YOLOv8 Model Image",
    },
    {
      title: "Tidey",
      date: "November 2022 - January 2023",
      description:
        "An organization and productivity website allowing student users to add, edit, or delete courses, calculate and save grades, and store multiple course-related files. We integrated Google Firebase for user authentication, saving changes to course information, and storing/retrieving user files.",
      image: "./tidey.png",
      githubLink: "https://github.com/uzFer/tidey",
      websiteLink: "https://uzfer.github.io/tidey/",
      altText: "Tidey Image",
    },
  ];

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 768) {
        setCardsVisible(1);
      } else if (window.innerWidth <= 1024) {
        setCardsVisible(2);
      } else {
        setCardsVisible(4);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalCards = cards.length;
  const maxIndex = totalCards - cardsVisible;

  const getTranslateValue = () => {
    if (!containerRef.current) return 0;
    const cardWidth = containerRef.current.scrollWidth / totalCards;
    const containerWidth = containerRef.current.offsetWidth;

    if (cardsVisible === 1) {
      const centerOffset = (containerWidth - cardWidth) / 2;
      return currentIndex * cardWidth - centerOffset;
    } else {
      return currentIndex * (cardWidth + 30);
    }
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const deltaX = e.clientX - dragStartX;
    if (Math.abs(deltaX) > 30) {
      const newIndex = Math.max(
        0,
        Math.min(maxIndex, currentIndex - Math.sign(deltaX))
      );
      setCurrentIndex(newIndex);
      setDragStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <section className="projects">
      <h2>Personal Projects</h2>
      <div className="project-carousel">
        <button className="project-carousel-prev" onClick={goToPreviousSlide}>
          <FaCaretSquareLeft />
        </button>

        <div
          ref={containerRef}
          className="project-cards-container"
          style={{
            transform: `translateX(-${getTranslateValue()}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
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
                  alt={card.altText}
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

        <button className="project-carousel-next" onClick={goToNextSlide}>
          <FaCaretSquareRight />
        </button>
      </div>

      {selectedProject && (
        <div
          className="projects-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="projects-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="projects-modal-close-button"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>
            <div className="projects-modal-content">
              <div className="projects-modal-header">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.date}</p>
              </div>
              <div className="projects-modal-body">
                <img
                  src={selectedProject.image}
                  alt="Uzma Ferdous"
                  className="projects-modal-image"
                />
                <div className="projects-modal-text">
                  <p>{selectedProject.description}</p>
                  <div className="projects-modal-buttons">
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
