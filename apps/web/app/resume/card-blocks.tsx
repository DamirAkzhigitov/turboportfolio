'use client';

import type { Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import sharedClasses from './shared.module.scss';
import type { ResumeIItem } from './types';

export default function CardBlocks({ list }: { list: ResumeIItem[][] }) {
  const variants: Variants = {
    hidden: { opacity: 0, transform: 'translateY(100px)' },
    visible: (index: number) => ({
      transform: 'translateY(0px)',
      opacity: 1,
      transition: { ease: 'easeOut', delay: index * 0.3 },
    }),
  };

  return (
    <ul className={sharedClasses['card-content__blocks']}>
      {list.map((item, index) => (
        <motion.li
          custom={index}
          variants={variants}
          initial="hidden"
          animate="visible"
          className={sharedClasses['card-content__blocks-item']}
          key={index}
        >
          {item.map((block, i) =>
            typeof block === 'string' ? (
              <span key={i}>{block}</span>
            ) : (
              <span key={i} className={sharedClasses['block--bold']}>
                {block.text}
              </span>
            )
          )}
        </motion.li>
      ))}
    </ul>
  );
}
