import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import SideNavBar from '../components/SideNavBar';

// TODO refactor
const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Verdana', 'san serif';
  display: flex;
  flex-direction: column;
  height: 100vh;
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

const StyledBackgroundVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  right: 50%;
  top: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

// TODO fix this later
const StyledMenuIcon = styled(IconButton)`
  position: absolute;
  width: auto;
  top: 45%;
  right: 48%;
`;

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Michael Lee</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <StyledApp>
        <StyledBackgroundVideo loop autoPlay muted>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </StyledBackgroundVideo>
        <NavBar />
        <SideNavBar />
        {/* <StyledMenuIcon>
          <MenuIcon style={{ fill: 'white' }} />
        </StyledMenuIcon> */}
        <StyledPage>
          <Logo />
        </StyledPage>
      </StyledApp>
    </main>
  </div>
);

export default Home;
