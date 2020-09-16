import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SideNavBar from '../components/SideNavBar';
import NavBar from '../components/NavBar';
import Modal from '@material-ui/core/Modal';

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
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

const About: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <SideNavBar />
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
                  -
                </Typography>
                <Typography variant="body1">
                  Leader
                  Mini University Summer Camps (University of Calgary)                                                                             July 2015 - August 2015
                  	Supervised young attendees, prepared new activities and assisted camp instructors in teaching new skills.

                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <Card>
                      <CardActionArea>
                        <CardMedia component="img" image="/images/connectivities_sm.JPG" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Social Media Web Application
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Social media application similar to meetup.com
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" href="https://connectivities.azurewebsites.net">
                          Open Application
                        </Button>
                        <Button size="small" color="primary">
                          See Details
                        </Button>
                        <Button size="small" color="primary" href="https://github.com/MichaelMauriceLee/Connectivities">
                          View Code
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card>
                      <CardActionArea>
                        <CardMedia component="img" image="/images/ff14_race_identifer_sm.JPG" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Tensorflow Real Time Object Detection Program
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Real time object detection of races from the game Final Fantasy 14.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          See Details
                        </Button>
                        <Button size="small" color="primary" href="https://github.com/MichaelMauriceLee/FF14-Race-Identifer">
                          View Code
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card>
                      <CardActionArea>
                        <CardMedia component="img" image="/images/shiny_colors_bot_sm.JPG" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Tic-Tac-Toe
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Tic-Tac-Toe game made in Java with AI players.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          See Details
                        </Button>
                        <Button size="small" color="primary" href="https://github.com/MichaelMauriceLee/Shiny-Colors-Bot-1920-x-1080">
                          View Code
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <Card>
                      <CardActionArea>
                        <CardMedia component="img" image="/images/tic-tac-toe_sm.JPG" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Tic-Tac-Toe
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Tic-Tac-Toe game made in Java with AI players.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          See Details
                        </Button>
                        <Button size="small" color="primary" href="https://github.com/MichaelMauriceLee/Tic-Tac-Toe">
                          View Code
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card>
                      <CardActionArea>
                        <CardMedia component="img" image="/images/student_rep_app_sm.JPG" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Student Registration App
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Student registration app for registering courses. Made in Java.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          See Details
                        </Button>
                        <Button size="small" color="primary" href="https://github.com/MichaelMauriceLee/Student-Registration-App">
                          View Code
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card>
                      <CardActionArea>
                        <CardMedia component="img" image="/images/inventory_management_sm.JPG" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Inventory Management App
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Retail store inventory management app. Made in Java.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          See Details
                        </Button>
                        <Button size="small" color="primary" href="https://github.com/MichaelMauriceLee/Inventory-Management-App">
                          View Code
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>

              <Typography variant="body1">
                Master of Engineering in Software Engineering.
                Proficient in web development using Python, Java, JavaScript, C# as well as working with Microsoft Azure cloud services.
                Demonstrates leadership, organization, good teamwork skills, persistence, and accountability through work experience and extracurricular activities.
                Has previous work experience in the oil and gas industry as a Facilities Engineering Intern and as a Relief Field Operator.
              </Typography>
            </div>
          </StyledPage>
        </StyledApp>
      </main>
    </div>
  );
};

export default About;
