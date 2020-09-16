import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import DomainIcon from '@material-ui/icons/Domain';
import GradeIcon from '@material-ui/icons/Grade';
import EmailIcon from '@material-ui/icons/Email';
import { Drawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import Link from './Link';

// TODO fix this later
const StyledMenuIcon = styled(IconButton)`
  position: absolute;
  width: auto;
  top: 45%;
  right: 48%;
`;

const SideNavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const listItems = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      href: '/',
    },
    {
      text: 'About',
      icon: <GradeIcon />,
      href: '/about',
    },
    {
      text: 'Projects',
      icon: <DomainIcon />,
      href: '/projects',
    },
    {
      text: 'Contact',
      icon: <EmailIcon />,
      href: '/contact',
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!open && (
        <StyledMenuIcon onClick={handleDrawerOpen}>
          <MenuIcon style={{ fill: 'white' }} />
        </StyledMenuIcon>
      )}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          <Divider />
          <List>
            {listItems.map((item) => (
              <ListItem button key={item.text} component={Link} href={item.href}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default SideNavBar;
