import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { useMagnetic } from '@/hooks/use-magnetic';

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className, strength }: MagneticProps) {
  const { ref, x, y, handlers } = useMagnetic(strength);

  return (
    <motion.div ref={ref} className={className} style={{ x, y }} {...handlers}>
      {children}
    </motion.div>
  );
}