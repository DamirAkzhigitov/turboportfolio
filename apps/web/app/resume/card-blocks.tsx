'use client';

import * as motion from 'motion/react-client';
import classes from './page.module.css';
import type { ResumeIItem } from './types';

export default function CardBlocks({ list }: { list: ResumeIItem[][] }) {
  const variants = {
    hidden: { opacity: 0, transform: 'translateY(100px)' },
    visible: (index: number) => ({
      transform: 'translateY(0px)',
      opacity: 1,
      transition: { ease: 'easeOut', delay: index * 0.3 },
    }),
  };

  return (
    <ul className={classes['card-content__blocks']}>
      {list.map((item, index) => (
        <motion.li
          custom={index}
          variants={variants}
          initial="hidden"
          animate="visible"
          className={classes['card-content__blocks-item']}
          key={index}
        >
          {item.map((block, i) =>
            typeof block === 'string' ? (
              <span key={i}>{block}</span>
            ) : (
              <span key={i} className={classes['block--bold']}>
                {block.text}
              </span>
            )
          )}
        </motion.li>
      ))}
    </ul>
  );
}
