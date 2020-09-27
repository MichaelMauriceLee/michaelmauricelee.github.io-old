import { Typography } from '@material-ui/core';
import React from 'react';
import IWorkExperience from '../interfaces/IWorkExperience';

const workExperience: Array<IWorkExperience> = [
  {
    imageUrl: '/images/work-experience/cf.png',
    company: 'Child Friendly Care',
    jobTitle: 'Software Developer',
    location: 'Calgary',
    dateRange: {
      startDate: {
        month: 'May',
        year: 2020,
      },
      endDate: 'Present',
    },
    description: (
      <>
        <Typography variant="body2" paragraph>
          - Developing a full stack enterprise resource planning web application
          as part of a developer team working for a daycare SaaS start-up.
        </Typography>
        <Typography variant="body2">
          Some of my notable work include:
        </Typography>
        <Typography variant="body2">
          - Designing and implementing business logic and database schema in order to
          allow administration staff to perform CRUD operations on programs as well
          as tracking the timing of students’ arrival and departures
          and their associated charges.
        </Typography>
      </>
    ),
  },
  {
    imageUrl: '/images/work-experience/atco.jpg',
    company: 'ATCO Gas Transmission',
    jobTitle: 'Intern, Facilities Engineering',
    location: 'Edmonton',
    dateRange: {
      startDate: {
        month: 'May',
        year: 2017,
      },
      endDate: {
        month: 'August',
        year: 2018,
      },
    },
    description: (
      <>
        <Typography variant="body2">
          - Designed meter station installations, upgrades and removals
          within ATCO’s natural gas transmission system in Alberta.
        </Typography>
        <Typography variant="body2">
          - Worked on several projects simultaneously from project
          conception to completion.
        </Typography>
        <Typography variant="body2">
          - Worked with third-party contractors, field operations,
          drafting and construction crews on projects.
        </Typography>
        <Typography variant="body2">
          - Designed meter station layouts, prepared drawings and job procedures
          and calculated equipment sizing for pressure control and pipeline.
        </Typography>
        <Typography variant="body2" paragraph>
          - Selected material for piping and station equipment installation.
        </Typography>
        <Typography variant="body2">
          Some of my major projects include:
        </Typography>
        <Typography variant="body2">
          - Designed a brand-new meter station to replace an old meter station
          with an estimated budget of $350k.
        </Typography>
        <Typography variant="body2">
          - Removed a meter station from project conception to land
          reclamation on budget ($200K) and on time.
        </Typography>
        <Typography variant="body2">
          - Completed a tight deadline project (1 week) to check and
          ensure the accuracy of a job procedure for a $1 million project.
        </Typography>
      </>
    ),
  },
  {
    imageUrl: '/images/work-experience/cnrl.png',
    company: 'Canadian Natural Resources Limited',
    jobTitle: 'Summer Student, Relief Operator',
    location: 'Lloydminster',
    dateRange: {
      startDate: {
        month: 'May',
        year: 2016,
      },
      endDate: {
        month: 'August',
        year: 2016,
      },
    },
    description: (
      <>
        <Typography variant="body2">
          - Operated 34 heavy oil wells in Marshall
          and Lone Rock oil fields within Lloydminster district.
        </Typography>
        <Typography variant="body2">
          - Performed normal maintenance and production data entry.
        </Typography>
        <Typography variant="body2">
          - Optimized heavy oil wells which included shooting
          fluid level and adjusting pump speeds.
        </Typography>
        <Typography variant="body2">
          - Organized various well services and rig work when wells were down.
        </Typography>
      </>
    ),
  },
  {
    imageUrl: '/images/work-experience/uofc.png',
    company: 'University of Calgary',
    jobTitle: 'Leader',
    location: 'Calgary',
    dateRange: {
      startDate: {
        month: 'July',
        year: 2015,
      },
      endDate: {
        month: 'August',
        year: 2015,
      },
    },
    description: (
      <>
        <Typography variant="body2">
          - Supervised young attendees, prepared new activities and
          assisted camp instructors in teaching new skills.
        </Typography>
      </>
    ),
  },
];

export default workExperience;
