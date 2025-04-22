import React, { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute, FaDownload } from "react-icons/fa";

import "./Hero.css";
const facts = [
  {
    type: "text",
    content:
      "I love to be creative! My favourite hobby is painting and I enjoy exploring different forms of art (recently experimented with air-dry clay).",
  },
  {
    type: "textWithLink",
    preText: "Check out my",
    linkText: "Instagram page",
    linkHref: "https://www.instagram.com/yourusername/",
    postText: "where I post my paintings and commissions ;)",
  },
  {
    type: "text",
    content:
      "I enjoy going to the gym and staying active! I'm more of a weightlifting-person but I've been trying out pilates and yoga recently!",
  },
  {
    type: "text",
    content:
      "I like to watch sports and am a big Raptors fan (unfortunately as of late). Besides the NBA, I'm a super beginner Premier League fan",
  },
  {
    type: "text",
    content:
      "I like coding (obviously) and incorporating creativity in my work.",
  },
  {
    type: "textWithLink",
    preText: "I absolutely love music and all types of genres. Any",
    linkText: "song recommendations?",
    linkHref: "https://open.spotify.com/user/ujmaaaa",
    postText: "",
  },
];

const Hero = () => {
  const [factIndex, setFactIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const clickSound = useRef(null);
  const backgroundMusic = useRef(null);

  const handleBoxClick = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % facts.length);

    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play();
    }
  };

  const toggleMusic = () => {
    if (!backgroundMusic.current) return;

    if (isMusicPlaying) {
      backgroundMusic.current.pause();
      setIsMusicPlaying(false);
    } else {
      backgroundMusic.current
        .play()
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch((err) => {
          console.warn("Music playback failed:", err);
        });
    }
  };

  return (
    <section className="hero">
      <div className="hero-title-row">
        <img src="./name.png" alt="Uzma Ferdous" className="hero-title-image" />
      </div>
      <div className="hero-content-row">
        <div className="hero-left">
          <h2 className="hero-title">
            Trainer Information <span className="gender-symbol">♀</span>
          </h2>

          <p className="trainer-level">Lv. 22</p>

          <div className="hero-tags">
            <span className="tag1">Software Engineer</span>
            <span className="tag2">Computer Architecture</span>
            <span className="tag3">Backend Software</span>
          </div>

          <div className="trainer-info">
            <p>
              <strong>Languages/Frameworks:</strong> C/C++, C#, TypeScript,
              React, Redux, Python
            </p>
            <p>
              <strong>Abilities:</strong> Backend/full-stack development, APIs,
              & low-level software. Strong interest in computer
              architecture/hardware and machine learning
            </p>
            <p>
              <strong>Nature:</strong> Curious & Resilient
            </p>
          </div>

          <div className="hero-box" onClick={handleBoxClick}>
            {facts[factIndex].type === "text" && facts[factIndex].content}
            {facts[factIndex].type === "textWithLink" && (
              <span>
                {facts[factIndex].preText}&nbsp;
                <a
                  href={facts[factIndex].linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fact-link"
                >
                  {facts[factIndex].linkText}
                </a>
                &nbsp;{facts[factIndex].postText}
              </span>
            )}
          </div>
          <a
            href="./Uzma Ferdous - Resume.pdf"
            download
            className="download-resume-button"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
        <div className="hero-right">
          <div className="avatar-wrapper">
            <img src="./avatar.png" alt="Trainer" className="hero-image" />
            <div className="avatar-shadow"></div>
          </div>
        </div>
      </div>

      <div className="audio-icon" onClick={toggleMusic}>
        {isMusicPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </div>
      <audio ref={backgroundMusic} src="/music.mp3" loop preload="auto" />
      <audio ref={clickSound} src="/click.mp3" preload="auto" />
    </section>
  );
};

export default Hero;
