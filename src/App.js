import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
import WorkExperience from "./components/WorkExperience";
import VolunteerExperience from "./components/VolunteerExperience";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";

const App = () => {
  const [activeTab, setActiveTab] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Projects />;
      case 1:
        return (
          <>
            <WorkExperience />
            <VolunteerExperience />
          </>
        );
      case 2:
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <AnimatePresence mode="wait">
          {activeTab !== null && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {renderContent()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
