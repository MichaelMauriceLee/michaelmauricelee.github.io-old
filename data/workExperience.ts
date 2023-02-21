import IWorkExperience from "../interfaces/IWorkExperience";

const workExperience: Array<IWorkExperience> = [
  {
    imageUrl: "/images/work-experience/morgan stanley.jpg",
    company: "Morgan Stanley at Work",
    jobTitle: "Software Developer",
    location: "Calgary",
    dateRange: {
      startDate: "May 2021",
      endDate: "Present",
    },
    description: [
      "Working on an existing full stack web application in an agile environment.  Currently using technologies such as React, Spring Boot, GWT, and Oracle SQL.",
      "Recommend Program Managers on technical solutions that can meet business requirements and then follow with implementation.",
    ],
    achievements: [
      "Created new functionality to allow for trading of private company stock certificates between select users.",
      "Led discussions around including new technologies such as Redux Toolkit and Vite into our new investor web application.",
      "Assisted Cisco in migrating onto the web application by modifying data validation rules.",
      "Created new workflow and scripts to periodically check phone number validity on hundreds of phone numbers that exist in the database.",
    ],
  },
  {
    imageUrl: "/images/work-experience/cf.png",
    company: "Child Friendly Care",
    jobTitle: "Software Developer",
    location: "Calgary",
    dateRange: {
      startDate: "May 2020",
      endDate: "May 2021",
    },
    description: [
      `Developed a full stack enterprise resource planning web application as part of a daycare SaaS start-up.
      Technologies used include Cosmos DB, Azure Functions with C# for serverless API backend, and Vue.js for single page application.`,
    ],
    achievements: [
      "Designed and implemented payment processing",
      "Created functionality to allow for the transfer of financial information data functionality between our web app and QuickBooks through REST API calls.",
      "Setup and manage Azure CI/CD pipelines and test coverage for our various microservices.",
    ],
  },
  {
    imageUrl: "/images/work-experience/atco.png",
    company: "ATCO Gas Transmission",
    jobTitle: "Intern, Facilities Engineering",
    location: "Edmonton",
    dateRange: {
      startDate: "May 2017",
      endDate: "August 2018",
    },
    description: [
      `Designed meter station installations, upgrades and removals
      within ATCO’s natural gas transmission system in Alberta.`,
      `Worked on several projects simultaneously from project
      conception to completion.`,
      `Worked with third-party contractors, field operations,
      drafting and construction crews on projects.`,
      `Designed meter station layouts, prepared drawings and job procedures
      and calculated equipment sizing for pressure control and pipeline.`,
      "Selected material for piping and station equipment installation.",
    ],
    achievements: [
      `Designed a brand-new meter station to replace an old meter station
      with an estimated budget of $350k.`,
      `Removed a meter station from project conception to land
      reclamation on budget ($200K) and on time.`,
      `Completed a tight deadline project (1 week) to check and
      ensure the accuracy of a job procedure for a $1 million project.`,
    ],
  },
  {
    imageUrl: "/images/work-experience/cnrl.png",
    company: "Canadian Natural Resources Limited",
    jobTitle: "Summer Student, Relief Operator",
    location: "Lloydminster",
    dateRange: {
      startDate: "May 2016",
      endDate: "August 2016",
    },
    description: [
      `Operated 34 heavy oil wells in Marshall
      and Lone Rock oil fields within Lloydminster district.`,
      "Performed maintenance and production data entry.",
      `Optimized heavy oil wells which included shooting
      fluid level and adjusting pump speeds.`,
      "Organized various well services and rig work when wells were down.",
    ],
    achievements: null,
  },
  {
    imageUrl: "/images/work-experience/uofc.png",
    company: "University of Calgary",
    jobTitle: "Leader",
    location: "Calgary",
    dateRange: {
      startDate: "July 2015",
      endDate: "August 2015",
    },
    description: [
      `Supervised young attendees, prepared new activities and
      assisted camp instructors in teaching new skills.`,
    ],
    achievements: null,
  },
];

export default workExperience;
