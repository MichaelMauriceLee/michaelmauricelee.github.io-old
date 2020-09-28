import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  color: white;
  width: 100%;
  margin: auto;
`;

const TopText = styled.h6`
  text-align: left;
`;

const MiddleText = styled.h1`
  text-align: left;
`;

const BottomText = styled.h6`
  text-align: right;
`;

const Logo: React.FC = () => (
  <StyledLogo>
    <TopText>
      Software Engineer
    </TopText>
    <MiddleText>
      Michael Lee
    </MiddleText>
    <BottomText>
      Web Development
    </BottomText>
  </StyledLogo>
);

export default Logo;
