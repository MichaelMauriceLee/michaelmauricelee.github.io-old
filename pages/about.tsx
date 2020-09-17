import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import Link from '../components/Link';

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

// TODO fix this later
const StyledMenuIcon = styled(IconButton)`
  position: absolute;
  width: auto;
  top: 45%;
  right: 48%;
`;

interface TabPanelProps {
  children?: React.ReactNode;
  index: unknown;
  value: unknown;
}

const TabPanel = (props: TabPanelProps) => {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

interface IProjects {
  title: string;
  codeUrl: string;
  modalInfo: {
      imageUrl: string;
      description: string;
  }
  cardInfo: {
      imageUrl: string;
      description: string;
  }
  webAppInfo: {
      isWebApp: boolean;
      webAppURL: string | undefined;
  }
}

const projects: Array<IProjects> = [
  {
    title: 'Social Media Web Application',
    codeUrl: 'https://github.com/MichaelMauriceLee/Connectivities',
    modalInfo: {
      imageUrl: '/images/connectivities.JPG',
      description: 'Full stack social media web application similar to meetup.com, built using ASP .NET Core, Microsoft SQL Server, and React and deployed using Microsoft Azure.Users can create and search for events and other like-minded users. In addition to its main functionality, users can leave comments on eents and upload photos to their profile, as well as keep a list of followers.',
    },
    cardInfo: {
      imageUrl: '/images/connectivities_sm.JPG',
      description: 'Social media application similar to meetup.com',
    },
    webAppInfo: {
      isWebApp: true,
      webAppURL: 'https://connectivities.azurewebsites.net',
    },
  },
  {
    title: 'Tensorflow Real Time Object Detection Program',
    codeUrl: 'https://github.com/MichaelMauriceLee/FF14-Race-Identifer',
    modalInfo: {
      imageUrl: '/images/ff14_race_identifer.JPG',
      description: 'Real time object detection of races from the game Final Fantasy 14.  The frozen inference model was created by using Tensorflow\'s Object Detection API and retraining Google\'s faster_rcnn_inception_v2_coco_2018_01_28 model to detect any images on the computer screen of any character from Final Fantasy 14 and display the information of the character\'s race and gender on screen.',
    },
    cardInfo: {
      imageUrl: '/images/ff14_race_identifer_sm.JPG',
      description: 'Real time object detection of races from the game Final Fantasy 14.',
    },
    webAppInfo: {
      isWebApp: false,
      webAppURL: undefined,
    },
  },
  {
    title: 'Event-Driven Mobile Game Bot with GUI',
    codeUrl: 'https://github.com/MichaelMauriceLee/Shiny-Colors-Bot-1920-x-1080',
    modalInfo: {
      imageUrl: '/images/shiny_colors_bot.JPG',
      description: 'Bot for the mobile game アイドルマスターシャイニ―カラーズ.  Built using Python OpenCV, tkinter. This program opens up a GUI for users to configure settings and allows the user to start and stop the program. The bot continually scans the play area, and when a series of buttons pops up, uses the mouse to click on the buttons in a set sequence. No files are injected into the game, as the bot uses on screen pixel data to make decisions.  Note that this program only works with screen resolutions around 1920 x 1080 px. The bot will only recognize images when around 80% of the image on screen matches the image stored in its database.',
    },
    cardInfo: {
      imageUrl: '/images/shiny_colors_bot_sm.JPG',
      description: 'Bot for the mobile game アイドルマスターシャイニ―カラーズ.',
    },
    webAppInfo: {
      isWebApp: false,
      webAppURL: undefined,
    },
  },
  {
    title: 'Tic-Tac-Toe',
    codeUrl: 'https://github.com/MichaelMauriceLee/Tic-Tac-Toe',
    modalInfo: {
      imageUrl: '/images/tic-tac-toe.JPG',
      description: 'Tic-Tac-Toe game made in Java with AI players.  The game runs in the terminal, asks for the names for the players, lets the human player choose the difficulty of the AI and then starts the game.  All files in the src folder.',
    },
    cardInfo: {
      imageUrl: '/images/tic-tac-toe_sm.JPG',
      description: 'Tic-Tac-Toe game made in Java with AI players.',
    },
    webAppInfo: {
      isWebApp: false,
      webAppURL: undefined,
    },
  },
  {
    title: 'Student Registration App',
    codeUrl: 'https://github.com/MichaelMauriceLee/Student-Registration-App',
    modalInfo: {
      imageUrl: '/images/student_rep_app.JPG',
      description: 'Student registration app for registering courses. Made in Java.  The app runs in the terminal, asks for the user if they are one of the few registered students or the system admin, and then runs the app.  Features a main menu with abilities such as adding and removing course offerings, looking up courses offered this semester, and check grades.  All files in the src folder.',
    },
    cardInfo: {
      imageUrl: '/images/student_rep_app_sm.JPG',
      description: 'Student registration app for registering courses. Made in Java.',
    },
    webAppInfo: {
      isWebApp: false,
      webAppURL: undefined,
    },
  },
  {
    title: 'Inventory Management App',
    codeUrl: 'https://github.com/MichaelMauriceLee/Inventory-Management-App',
    modalInfo: {
      imageUrl: '/images/inventory_management.JPG',
      description: 'Retail store inventory management app. Made in Java.  The app runs in the terminal. At startup, the app parses data from tools.txt and suppliers.txt (which at like databases) and creates a list of these items to be used in the app.  Features a main menu with abilities such as checking tool stock, creating orders and writing the orders to orders.txt.  All files in the src folder.',
    },
    cardInfo: {
      imageUrl: '/images/inventory_management_sm.JPG',
      description: 'Retail store inventory management app. Made in Java.',
    },
    webAppInfo: {
      isWebApp: false,
      webAppURL: undefined,
    },
  },
];

const About: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <Head>
        <title>About | Michael Lee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <StyledApp>
          <NavBar />
          <StyledMenuIcon component={Link} href="/">
            <MenuIcon style={{ fill: 'white' }} />
          </StyledMenuIcon>
          <StyledPage>
            <div style={{ backgroundColor: '#444' }}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                >
                  <Tab label="Work Experience" />
                  <Tab label="Side Projects" />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
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
                </Typography>
                <Typography variant="body1">
                  Leader
                  Mini University Summer Camps (University of Calgary)                                                                             July 2015 - August 2015
                  	Supervised young attendees, prepared new activities and assisted camp instructors in teaching new skills.
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid
                  container
                  spacing={3}
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={projects.indexOf(project)}>
                      <ProjectCard
                        title={project.title}
                        codeUrl={project.codeUrl}
                        modalInfo={project.modalInfo}
                        cardInfo={project.cardInfo}
                        webAppInfo={project.webAppInfo}
                      />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <Typography variant="body1">
                Master of Engineering in Software Engineering.
                Proficient in web development using Python, Java, JavaScript,
                C# as well as working with Microsoft Azure cloud services.
                Has previous work experience in the oil and gas industry as a
                Facilities Engineering Intern and as a Relief Field Operator.
              </Typography>
            </div>
          </StyledPage>
        </StyledApp>
      </main>
    </div>
  );
};
export default About;
