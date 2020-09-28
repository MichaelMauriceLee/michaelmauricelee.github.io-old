import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Link from '../components/Link';
import ContactForm from '../components/ContactForm';
import fadeInUp from '../animations/fadeInUp';

const StyledApp = styled(motion.div)`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Verdana', 'san serif';
  display: flex;
  flex-direction: column;
  background-color: #6c757d;
`;

const StyledPage = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex: 1;
`;

const StyledMenuIcon = styled.div`
  position: fixed;
  top: 50%;
  left: 0.5%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledContainer = styled(Paper)`
  && {
    background-color: #343a40;
  }
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const StyledContact = styled(motion.div)`
  padding: 2em;
`;

const Contact: React.FC = () => (
  <div className="container">
    <Head>
      <title>Contact | Michael Lee</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <StyledApp
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <NavBar />
        <StyledMenuIcon>
          <IconButton component={Link} href="/">
            <CancelIcon style={{ fill: 'white' }} />
          </IconButton>
        </StyledMenuIcon>
        <StyledPage>
          <StyledContainer>
            <StyledContact variants={fadeInUp}>
              <ContactForm />
            </StyledContact>
          </StyledContainer>
        </StyledPage>
      </StyledApp>
    </main>
  </div>
);
export default Contact;
