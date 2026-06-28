'use client';

import { motion } from 'framer-motion';

// Reveal-on-scroll wrapper. Respects reduced-motion automatically because
// Framer Motion reads the user preference, and our CSS also clamps durations.
const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  className = '',
  amount = 0.3,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
