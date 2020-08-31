import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import pageVariants from '../animations/variants';
import pageTransition from '../animations/transitions';

const StyledPage = styled.div`
  position: absolute
`;

const Projects: React.FC = () => (
  <StyledPage>
    <motion.div
      initial="intial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h2>Projects</h2>
    </motion.div>
  </StyledPage>
);

export default Projects;
