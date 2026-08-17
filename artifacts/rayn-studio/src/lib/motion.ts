import type { Transition, Variants } from 'framer-motion';

export const revealViewport = {
  once: true,
  margin: '-12% 0px -10%',
} as const;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const motionTransition: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

export const reducedTransition: Transition = {
  duration: 0.01,
};