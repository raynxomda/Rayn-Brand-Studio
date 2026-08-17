import { useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useCallback, useRef } from 'react';

type PointerHandlers = {
  onPointerMove: (event: React.PointerEvent<HTMLElement>) => void;
  onPointerLeave: () => void;
};

export function useMagnetic(strength = 0.16): {
  ref: React.RefObject<HTMLDivElement | null>;
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
  handlers: PointerHandlers;
} {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 280, damping: 22, mass: 0.35 });
  const y = useSpring(0, { stiffness: 280, damping: 22, mass: 0.35 });

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (reduceMotion || event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover)').matches || !ref.current) {
        return;
      }

      const bounds = ref.current.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);
      x.set(offsetX * strength);
      y.set(offsetY * strength);
    },
    [reduceMotion, strength, x, y],
  );

  const onPointerLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, x, y, handlers: { onPointerMove, onPointerLeave } };
}