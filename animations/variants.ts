// eslint-disable-next-line no-unused-vars
import { Variants } from 'framer-motion';

const pageVariants: Variants = {
  intial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 0.8,
  },
};

export default pageVariants;
