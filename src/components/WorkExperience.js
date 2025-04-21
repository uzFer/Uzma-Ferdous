import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const jobs = [
    {
      title: "Software Engineer Intern",
      company: "Xero",
      duration: "May 2024 - present",
      description: [
        "Performed load testing on 15 API endpoints with the K6 library to validate readiness for Amazon EKS migration.",
        "Rebuilt entire Files UI using TypeScript and RTK Query, taking end-to-end ownership of key features such as file upload with progress tracking, drag and drop, table sorting, and centralized error handling.",
        "Designed a New Relic dashboard to monitor file services, displaying key metrics for on-call support like throughput, latency, and error rates, aligned with SLOs to track error budgets for proactive alerting.",
        "Developing a scalable API for documents functionality, replacing 9 integration points using C# and .NET.",
      ],
      image: "xero.svg",
    },
    {
      title: "Infrastructure & Cloud Operations Intern",
      company: "Questrade Financial Group",
      duration: "May 2023 - August 2023",
      description: [
        "Leveraged Jira and Confluence to streamline change request workflows and create setup, maintenance, and troubleshooting guides for tools such as Google Cloud Platform, Pure Storage, and other cybersecurity software.",
        "Streamlined CMDB with tools such as Device42, vSphere, and SolarWinds to improve asset tracking.",
      ],
      image: "questrade.png",
    },
    {
      title: "Information Technology Intern",
      company: "Children's Aid Society of Toronto",
      duration: "May 2022 - September 2022",
      description: [
        "Configured Checkpoint security for 400+ Lenovo laptops and used Microsoft Excel to keep record of progress.",
        "Successfully prepared 800+ laptops for deployment to office employees",
      ],
      image: "cast.jpg",
    },
    {
      title: "Information Technology Field Staff",
      company: "Toronto District School Board",
      duration: "July 2021 - August 2021",
      description: [
        "Supervised the return of 15,000 TDSB-loaned devices and reported team progress to IT supervisors and staff.",
        "Recorded software issues and/or electronic damages for all chrome books using Google Suite tools.",
      ],
      image: "tdsb.png",
    },
  ];

  return (
    <div className="work-experience">
      <h2 className="work-experience-title">Work Experience</h2>
      <div className="timeline">
        {jobs.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-content-top">
                <div className="timeline-content-left">
                  <img src={job.image} className="timeline-image" />
                  <h3 className="job-title">{job.title}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <p className="duration">{job.duration}</p>
              </div>
              <ul className="description">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
