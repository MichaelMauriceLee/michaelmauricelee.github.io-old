import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import pageVariants from '../animations/variants';
import pageTransition from '../animations/transitions';
import SideNavBar from '../components/SideNavBar';

const About: React.FC = () => (
  <div>
    <SideNavBar />
    <h2>About</h2>
  </div>
);

export default About;
