import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
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

const Projects: React.FC = () => (
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
          <h2 color="white">
            Project
          </h2>
        </StyledPage>
      </StyledApp>
    </main>
  </div>
);

export default Projects;
