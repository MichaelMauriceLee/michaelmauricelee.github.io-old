import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import Link from '../components/Link';

// TODO refactor
const StyledApp = styled(motion.div)`
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
  width: 80%;
  margin: auto;
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

const StyledMenuIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.5%;

  @media (max-width: 768px) {
    display: none;
  }
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
        <StyledMenuIcon>
          <IconButton component={Link} href="/about">
            <MenuIcon style={{ fill: 'white' }} />
          </IconButton>
        </StyledMenuIcon>
        <StyledPage>
          <Logo />
        </StyledPage>
      </StyledApp>
    </main>
  </div>
);

export default Home;
