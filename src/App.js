import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <h1 className="hero-heading">Uzma Ferdous</h1>
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
};

export default App;
