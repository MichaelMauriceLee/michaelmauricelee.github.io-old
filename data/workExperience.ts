import IWorkExperience from '../interfaces/IWorkExperience';

const workExperience: Array<IWorkExperience> = [
  {
    imageUrl: '/images/work-experience/cf.png',
    company: 'Child Friendly Care',
    jobTitle: 'Software Developer',
    location: 'Calgary',
    dateRange: {
      startDate: 'May 2020',
      endDate: 'Present',
    },
    description: [
      `Developing a full stack enterprise resource planning web application as part of a daycare SaaS start-up.
      Technologies used include Cosmos DB, Azure Functions with C# for serverless API backend, and Vue.js for single page application.`,
    ],
    achievements: [
      `Designing and implementing business logic allowing administration staff
      to perform CRUD operations on programs as well as tracking the timing
      of students’ arrival and departures and their associated charges.`,
      `Designing and implementing Cosmos DB document partitioning
      and concurrent document update strategies, on change data handlers, and
      CI/CD pipelines for our various microservices.`,
    ],
  },
  {
    imageUrl: '/images/work-experience/atco.png',
    company: 'ATCO Gas Transmission',
    jobTitle: 'Intern, Facilities Engineering',
    location: 'Edmonton',
    dateRange: {
      startDate: 'May 2017',
      endDate: 'August 2018',
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
      'Selected material for piping and station equipment installation.',
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
    imageUrl: '/images/work-experience/cnrl.png',
    company: 'Canadian Natural Resources Limited',
    jobTitle: 'Summer Student, Relief Operator',
    location: 'Lloydminster',
    dateRange: {
      startDate: 'May 2016',
      endDate: 'August 2016',
    },
    description: [
      `Operated 34 heavy oil wells in Marshall
      and Lone Rock oil fields within Lloydminster district.`,
      'Performed maintenance and production data entry.',
      `Optimized heavy oil wells which included shooting
      fluid level and adjusting pump speeds.`,
      'Organized various well services and rig work when wells were down.',
    ],
    achievements: null,
  },
  {
    imageUrl: '/images/work-experience/uofc.png',
    company: 'University of Calgary',
    jobTitle: 'Leader',
    location: 'Calgary',
    dateRange: {
      startDate: 'July 2015',
      endDate: 'August 2015',
    },
    description: [
      `Supervised young attendees, prepared new activities and
      assisted camp instructors in teaching new skills.`,
    ],
    achievements: null,
  },
];

export default workExperience;
