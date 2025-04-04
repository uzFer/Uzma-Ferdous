import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const jobs = [
    {
      title: "Software Engineer Intern",
      company: "Xero",
      duration: "May 2024 - present",
      description: "W job",
    },
    {
      title: "Infrastructure & Cloud Operations Intern",
      company: "Questrade Financial Group",
      duration: "May 2023 - August 2023",
      description: "W cloud",
    },
    {
      title: "Information Technology Intern",
      company: "Children's Aid Society of Toronto",
      duration: "May 2022 - September 2022",
      description: "W computers",
    },
    {
      title: "Information Technology Field Staff",
      company: "Toronto District School Board",
      duration: "July 2021 - August 2021",
      description: "W laptops",
    },
  ];

  return (
    <div className="timeline">
      <h2 className="timeline-title">Work Experience</h2>
      <div className="timeline-container">
        {jobs.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="job-title">{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="duration">{job.duration}</p>
              <p className="description">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
