'use client';

import type { Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import type { ReactNode } from 'react';
import sharedClasses from '../shared.module.scss';
import type { ResumeIItem } from '../types';

function CardBlock({ item }: { item: ResumeIItem }) {
  if (typeof item === 'string') {
    return <span>{item}</span>;
  }

  return <span className={sharedClasses['block--bold']}>{item.text}</span>;
}

export default function CardBlocks({
  items = [],
}: { items: ResumeIItem[][]; cardItem?: (item: ResumeIItem) => ReactNode }) {
  const variants: Variants = {
    hidden: { opacity: 0, transform: 'translateY(100px)' },
    visible: (index: number) => ({
      transform: 'translateY(0px)',
      opacity: 1,
      transition: { ease: 'easeInOut', delay: index * 0.3 },
    }),
  };

  return (
    <ul className={sharedClasses['card-content__blocks']}>
      {items.map((item, index) => (
        <motion.li
          custom={index}
          variants={variants}
          initial="hidden"
          animate="visible"
          className={sharedClasses['card-content__blocks-item']}
          key={index}
        >
          {item.map((block, i) => (
            <CardBlock key={i} item={block} />
          ))}
        </motion.li>
      ))}
    </ul>
  );
}
