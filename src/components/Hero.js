import React, { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import "./Hero.css";

const facts = [
  "I love to paint and explore different forms of art (recently made some mini clay statues)",
  "I enjoy going to the gym to weightlift! In general, I love to stay active",
  "I like to watch sports and am a Raptors fan (unfortunately as of late). I'm also trying to get into Premier League and football",
  "I like coding (obviously) and incorporating creativity in my work",
  "I absolutely love music (check out my Spotify to see the immaculate music taste). Any song recommendations?",
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
        <img src="/name.png" alt="Uzma Ferdous" className="hero-title-image" />
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
            {facts[factIndex]}
          </div>
        </div>
        <div className="hero-right">
          <div className="avatar-wrapper">
            <img src="/avatar.png" alt="Trainer" className="hero-image" />
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
