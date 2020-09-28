import React from 'react';
import styled from 'styled-components';
import { AppBar, Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from './Link';

const StyledNavBar = styled(AppBar)`
  && {
  position: sticky;
  background: transparent;
  box-shadow: none;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  padding: 1em;
  z-index: 1;
  }
`;

const StyledButtonsRow = styled.div`
  justify-content: flex-start;
`;

const StyledButtonText = styled.div`
  color: white;
`;

const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <StyledNavBar>
      <StyledButtonsRow>
        {router.pathname === '/'
          ? (
            <Button component={Link} href="/about">
              <StyledButtonText>
                About
              </StyledButtonText>
            </Button>
          )
          : (
            <Button component={Link} href="/">
              <StyledButtonText>
                Home
              </StyledButtonText>
            </Button>
          )}
      </StyledButtonsRow>
      <StyledButtonsRow>
        <Button href="https://www.linkedin.com/in/michael-lee-8967b614a/">
          <StyledButtonText>
            LinkedIn
          </StyledButtonText>
        </Button>
        <Button href="https://github.com/MichaelMauriceLee">
          <StyledButtonText>
            GitHub
          </StyledButtonText>
        </Button>
        <Button component={Link} href="/contact">
          <StyledButtonText>
            Contact
          </StyledButtonText>
        </Button>
      </StyledButtonsRow>
    </StyledNavBar>
  );
};

export default NavBar;
