import { Variants } from 'framer-motion';

const easing: Array<number> = [0.6, -0.05, 0.01, 0.99];

const fadeInUp: Variants = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export default fadeInUp;
