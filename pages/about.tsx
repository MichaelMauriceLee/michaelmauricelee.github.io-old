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
import Paper from '@material-ui/core/Paper';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import Link from '../components/Link';

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Verdana', 'san serif';
  overflow:auto;
  display: flex;
  flex-direction: column;
  background-color: #6c757d;
`;

const StyledPage = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex: 1;
`;

const StyledMenuIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.5%;
`;

const StyledContainer = styled(Paper)`
  && {
    background-color: #343a40;
  }
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const StyledAbout = styled.div`
  padding: 2em;
`;

const StyledWriting = styled(Typography)`
  color: #FFF;
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
    description: React.ReactNode;
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
      description: (
        <>
          <Typography variant="body2" color="textSecondary">
            Full stack social media web application similar to meetup.com,
            built using ASP .NET Core, Microsoft SQL Server, and
            React and deployed using Microsoft Azure.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            Users can create and search for events and other like-minded users.
            In addition to its main functionality, users can leave comments on events
            and upload photos to their profile, as well as keep a list of followers.
          </Typography>
        </>
      ),
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
      description: (
        <>
          <Typography variant="body2" color="textSecondary">
            Real time object detection of races from the game Final Fantasy 14.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            The frozen inference model was created by using Tensorflow&apos;s
            Object Detection API and retraining Google&apos;s
            faster_rcnn_inception_v2_coco_2018_01_28 model to
            detect any images on the computer
            screen of any character from Final Fantasy 14 and display the
            information of the character&apos;s race and gender on screen.
          </Typography>
        </>
      ),
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
      description: (
        <>
          <Typography variant="body2" color="textSecondary">
            Bot for the mobile game アイドルマスターシャイニ―カラーズ.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            Built using Python OpenCV, tkinter. This program opens up a
            GUI for user&apos;s to configure settings and allows the user to
            start and stop the program. The bot continually scans the
            play area, and when a series of buttons pops up, uses the
            mouse to click on the buttons in a set sequence. No files
            are injected into the game, as the bot uses on screen pixel
            data to make decisions.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            Note that this program only works with screen resolutions
            around 1920 x 1080 px. The bot will only recognize images
            when around 80% of the image on screen matches the image stored in its database.
          </Typography>
        </>
      ),
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
      description: (
        <>
          <Typography variant="body2" color="textSecondary">
            Tic-Tac-Toe game made in Java with AI players.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            The game runs in the terminal, asks for the names
            for the players, lets the human player choose the
            difficulty of the AI and then starts the game.
          </Typography>
        </>
      ),
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
      description: (
        <>
          <Typography variant="body2" color="textSecondary">
            Student registration app for registering courses made in Java.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            The app runs in the terminal, asks for the user if they
            are one of the few registered students or the system admin,
            and then runs the app.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            Features a main menu with abilities such as adding and
            removing course offerings, looking up courses offered
            this semester, and check grades.
          </Typography>
        </>
      ),
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
      description: (
        <>
          <Typography variant="body2" color="textSecondary">
            Retail store inventory management app, made in Java.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            The app runs in the terminal. At startup, the app parses data
            from tools.txt and suppliers.txt (which at like databases)
            and creates a list of these items to be used in the app.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary">
            Features a main menu with abilities such as checking tool stock,
            creating orders and writing the orders to orders.txt.
          </Typography>
        </>
      ),
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
          <StyledMenuIcon>
            <IconButton component={Link} href="/">
              <MenuIcon style={{ fill: 'white' }} />
            </IconButton>
          </StyledMenuIcon>
          <StyledPage>
            <StyledContainer>
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
                <StyledWriting variant="h6">
                  Software Developer (May 2020 - Present)
                </StyledWriting>
                <StyledWriting variant="body1">
                  Child Friendly Care (Calgary)
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Developing a full stack enterprise resource planning web application
                  as part of a developer team working for a daycare SaaS start-up.
                </StyledWriting>
                <StyledWriting variant="body2">
                  Some of my notable work include:
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Designing and implementing business logic and database schema in order to
                  allow administration staff to perform CRUD operations on programs as well
                  as tracking the timing of students’ arrival and departures
                  and their associated charges.
                </StyledWriting>
                <br />
                <StyledWriting variant="h6">
                  Intern, Facilities Engineering (May 2017 - August 2018)
                </StyledWriting>
                <StyledWriting variant="body1">
                  ATCO Gas Transmission (Edmonton)
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Designed meter station installations, upgrades and removals
                  within ATCO’s natural gas transmission system in Alberta.
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Worked on several projects simultaneously from project conception to completion.
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Worked with third-party contractors, field operations,
                  drafting and construction crews on projects.
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Designed meter station layouts, prepared drawings and job procedures
                  and calculated equipment sizing for pressure control and pipeline.
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Selected material for piping and station equipment installation.
                </StyledWriting>
                <br />
                <StyledWriting variant="body2">
                  Some of my major projects include:
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Designed a brand-new meter station to replace an old meter station
                  with an estimated budget of $350k.
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Removed a meter station from project conception to land
                  reclamation on budget ($200K) and on time.
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Completed a tight deadline project (1 week) to check and
                  ensure the accuracy of a job procedure for a $1 million project.
                </StyledWriting>
                <br />
                <StyledWriting variant="h6">
                  Summer Student, Relief Operator (May 2016 - August 2016)
                </StyledWriting>
                <StyledWriting variant="body1">
                  Canadian Natural Resources Limited (Lloydminster)
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Operated 34 heavy oil wells in Marshall
                  and Lone Rock oil fields within Lloydminster district.
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Performed normal maintenance and production data entry.
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Optimized heavy oil wells which included shooting
                  fluid level and adjusting pump speeds.
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Organized various well services and rig work when wells were down.
                </StyledWriting>
                <br />
                <StyledWriting variant="h6">
                  Leader (July 2015 - August 2015)
                </StyledWriting>
                <StyledWriting variant="body1">
                  Mini University Summer Camps (University of Calgary)
                </StyledWriting>
                <StyledWriting variant="body2">
                  - Supervised young attendees, prepared new activities and
                  assisted camp instructors in teaching new skills.
                </StyledWriting>
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
              <StyledAbout>
                <StyledWriting variant="body1">
                  Master of Engineering in Software Engineering.
                  Proficient in web development using Python, Java, JavaScript,
                  C# as well as working with Microsoft Azure cloud services.
                  Has previous work experience in the oil and gas industry as a
                  Facilities Engineering Intern and as a Relief Field Operator.
                </StyledWriting>
              </StyledAbout>
            </StyledContainer>
          </StyledPage>
        </StyledApp>
      </main>
    </div>
  );
};
export default About;
