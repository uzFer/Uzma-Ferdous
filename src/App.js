import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <h1 className="hero-heading">Uzma Ferdous</h1>
        <Hero />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
