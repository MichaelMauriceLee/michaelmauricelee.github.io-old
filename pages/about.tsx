import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import NavBar from '../components/NavBar';
import SideNavBar from '../components/SideNavBar';

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Verdana', 'san serif';
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black;
`;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

const About: React.FC = () => (
  <div className="container">
    <Head>
      <title>About | Michael Lee</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <StyledApp>
        <NavBar />
        <SideNavBar />
        <StyledPage>
          <div style={{ backgroundColor: '#444' }}>
            <Typography variant="h1">
              About
            </Typography>
            <Typography variant="body1">
              Master of Engineering in Software Engineering.   Proficient in web development using Python, Java, JavaScript, C# as well as working with Microsoft Azure cloud services.  Demonstrates leadership, organization, good teamwork skills, persistence, and accountability through work experience and extracurricular activities.  Has previous work experience in the oil and gas industry as a Facilities Engineering Intern and as a Relief Field Operator.
            </Typography>
            <Typography variant="h3">
              Work Experience
            </Typography>
            <Typography variant="body1">
              Software Developer
              Child Friendly Care (Calgary) 		                  					                     May 2020 - Present
              	Developing a full stack enterprise resource planning web application as part of a developer team working for a daycare SaaS start-up.  Technologies used in my work include:
              -	Cosmos DB
              -	Azure Functions for serverless API backend
              -	Vue.js for single page web application

              Some of my notable work include:
              	Designing and implementing business logic and database schema in order to allow administration staff to perform CRUD operations on programs as well as tracking the timing of students’ arrival and departures and their associated charges.

            </Typography>
            <Typography variant="body1">
              Intern, Facilities Engineering
              ATCO Gas Transmission (Edmonton)                   					 	              May 2017 - August 2018
              	Designed meter station installations, upgrades and removals within ATCO’s natural gas transmission system in Alberta.
              -	Worked on several projects simultaneously from project conception to completion.
              -	Worked with third-party contractors, field operations, drafting and construction crews on projects.
              -	Designed meter station layouts, prepared drawings and job procedures and calculated equipment sizing for pressure control and pipeline.
              -	Selected material for piping and station equipment installation.

              Some of my major projects include:
              	Designed a brand-new meter station to replace an old meter station with an estimated budget of $350k.
              	Removed a meter station from project conception to land reclamation on budget ($200K) and on time.
              	Completed a tight deadline project (1 week) to check and ensure the accuracy of a job procedure for a $1 million project.

            </Typography>
            <Typography variant="body1">
              Summer Student, Relief Operator
              Canadian Natural Resources Limited (Lloydminster)                                                     	              May 2016 - August 2016
              	Operated 34 heavy oil wells in Marshall and Lone Rock oil fields within Lloydminster district.
              -	Performed normal maintenance and production data entry.
              -	Optimized heavy oil wells which included shooting fluid level and adjusting pump speeds.
              -	Organized various well services and rig work when wells were down.
              -
            </Typography>
            <Typography variant="body1">
              Leader
              Mini University Summer Camps (University of Calgary)                                                                             July 2015 - August 2015
              	Supervised young attendees, prepared new activities and assisted camp instructors in teaching new skills.

            </Typography>
          </div>
        </StyledPage>
      </StyledApp>
    </main>
  </div>
);

export default About;
