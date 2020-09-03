import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  position: relative;
`;

const About: React.FC = () => (
  <div>
    <StyledPage>
      <h2>About</h2>
    </StyledPage>
  </div>
);

export default About;
