import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';
import { motionTransition, reducedTransition, revealVariants, revealViewport, staggerVariants } from '@/lib/motion';

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  group?: boolean;
};

export function MotionReveal({ children, className, delay = 0, group = false }: MotionRevealProps) {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? reducedTransition : { ...motionTransition, delay };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={group ? staggerVariants : revealVariants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}