import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledLogo = styled.div`
  color: white;
  width: 100%;
  margin: auto;
`;

const TopText = styled(Typography)`
  text-align: left;
  font-size: 150%;
`;

const MiddleText = styled(Typography)`
  text-align: center;
  font-size: 425%;
`;

const BottomText = styled(Typography)`
  text-align: right;
  font-size: 150%;
`;

const Logo: React.FC = () => (
  <StyledLogo>
    <TopText variant="h6">
      Software Engineer
    </TopText>
    <MiddleText variant="h1">
      Michael Lee
    </MiddleText>
    <BottomText variant="h6">
      Web Development
    </BottomText>
  </StyledLogo>
);

export default Logo;
