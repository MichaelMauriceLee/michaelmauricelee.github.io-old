import React from 'react';
import styled from 'styled-components';
import { AppBar, Button } from '@material-ui/core';
import Link from './Link';

interface IStyledButtonsRow {
  justifyContent: string;
}

interface IStyledButton {
  component: any;
  href: string;
}

const StyledNavBar = styled(AppBar)`
  && {
  position: sticky;
  background: transparent;
  box-shadow: none;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  }
`;

const StyledButtonsRow = styled.div`
  justify-content: ${(props: IStyledButtonsRow) => props.justifyContent};
`;

const StyledButton: any = styled(Button)`
  && {
      color: white;
  }
`;

const NavBar: React.FC = () => (
  <StyledNavBar>
    <StyledButtonsRow justifyContent="flex-start">
      <StyledButton component={Link} href="/about">
        About
      </StyledButton>
    </StyledButtonsRow>
    <StyledButtonsRow justifyContent="flex-end">
      <StyledButton href="https://www.linkedin.com/in/michael-lee-8967b614a/">
        LinkedIn
      </StyledButton>
      <StyledButton href="https://github.com/MichaelMauriceLee">
        GitHub
      </StyledButton>
      <StyledButton component={Link} href="/contact">
        Contact
      </StyledButton>
    </StyledButtonsRow>
  </StyledNavBar>
);

export default NavBar;
