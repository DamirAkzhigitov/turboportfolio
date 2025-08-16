import type { Variants } from 'motion/react';

export const conditionalTranslateY: Variants = {
  hidden: { opacity: 0, transform: 'translateY(100px)' },
  visible: (index: number) => ({
    transform: 'translateY(0px)',
    opacity: 1,
    transition: { ease: 'easeInOut', delay: index * 0.3 },
  }),
};
