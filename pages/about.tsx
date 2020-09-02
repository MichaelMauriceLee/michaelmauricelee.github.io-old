import React from 'react';
import styled from 'styled-components';
import SideNavBar from '../components/SideNavBar';

const StyledPage = styled.div`
  position: relative;
`;

const About: React.FC = () => (
  <div>
    <SideNavBar />
    <StyledPage>
      <h2>About</h2>
    </StyledPage>
  </div>
);

export default About;
