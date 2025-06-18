'use client';

import { conditionalTranslateY } from '@/lib/motion';
import * as motion from 'motion/react-client';
import sharedClasses from '../shared.module.scss';
import type { ResumeIItem } from '../types';

function CardBlock({ item }: { item: ResumeIItem }) {
  if (typeof item === 'string') {
    return <span>{item}</span>;
  }

  return <span className={sharedClasses['block--bold']}>{item.text}</span>;
}

export default function CardBlocks({ items = [] }: { items: ResumeIItem[][] }) {
  return (
    <ul className={sharedClasses['card-content__blocks']}>
      {items.map((item, index) => (
        <motion.li
          custom={index}
          variants={conditionalTranslateY}
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
