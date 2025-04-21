import React, { useState, useRef } from "react";
import "./Tabs.css";

const tabs = [
  {
    label: "Projects",
    target: "projects",
    image: "./projects-title.png",
    labelClassName: "projects-label-image",
  },
  {
    label: "Experience",
    target: "timeline",
    image: "./experience-title.png",
    labelClassName: "experience-label-image",
  },
  {
    label: "Contact Me",
    target: "contact",
    image: "./contact-me-title.png",
    labelClassName: "contact-me-label-image",
  },
];

const PokeballTabs = ({ activeTab, setActiveTab }) => {
  const [hoverTab, setHoverTab] = useState(null);
  const pokeballSound = useRef(null);

  const handleClick = (index) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }

    if (pokeballSound.current) {
      pokeballSound.current.currentTime = 0;
      pokeballSound.current.play();
    }
  };

  return (
    <div className="pokeball-container">
      {tabs.map((tab, index) => {
        const isActive = activeTab === index;
        const isHovered = hoverTab === index;

        return (
          <div
            key={index}
            className="pokeball-item"
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoverTab(index)}
            onMouseLeave={() => setHoverTab(null)}
          >
            <img
              src={tab.image}
              alt={tab.label}
              className={tab.labelClassName}
            />
            <img
              src={
                isActive
                  ? "./pokeball-open.png"
                  : isHovered
                  ? "./hover-pokeball.png"
                  : "./pokeball.png"
              }
              alt={tab.label}
              className={
                isActive
                  ? "pokeball-open-image"
                  : isHovered
                  ? "pokeball-hover-image"
                  : "pokeball-image"
              }
            />
          </div>
        );
      })}
      <audio ref={pokeballSound} src="/pokeball.mp3" preload="auto" />
    </div>
  );
};

export default PokeballTabs;
