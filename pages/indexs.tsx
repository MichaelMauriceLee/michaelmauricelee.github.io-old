import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import SideNavBar from '../components/SideNavBar';

const StyledApp = styled.div`
  text-align: center;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

// const StyledPage = styled.div`
//   overflow-x: hidden;
//   position: relative
// `;

const StyledBackgroundVideo = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    right: 50%;
    top: 50%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: "-1";
`;

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Michael Lee</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <StyledApp>
        <SideNavBar />
        <StyledBackgroundVideo loop autoPlay muted>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </StyledBackgroundVideo>
      </StyledApp>
    </main>
  </div>
);

export default Home;
