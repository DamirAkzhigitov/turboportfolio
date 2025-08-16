'use client';

import { conditionalTranslateY } from '@/lib/motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/ui/components/accordion';
import clsx from 'clsx';
import { formatDistance, isValid, parse } from 'date-fns';
import * as motion from 'motion/react-client';
import { useState } from 'react';
import sharedClasses from '../shared.module.scss';
import type { WorkPlace } from '../types';

function CardBlock({ item }: { item: WorkPlace }) {
  const [isExpanded, setExpanded] = useState(false);
  const onValueChange = (val: string) => {
    setExpanded(!!val);
  };
  const startDate = parse(item.start_date, 'yyyy-MM', new Date());
  const endDate = parse(item.end_date, 'yyyy-MM', new Date());

  const distance = formatDistance(
    isValid(endDate) ? endDate : new Date(),
    startDate
  );

  return (
    <div className="">
      <h3 className="mb-6 font-bold text-2xl text-gray-900">{item.company}</h3>
      <h4 className="mb-1 font-semibold text-gray-700 text-xl">{item.title}</h4>
      <p className="font-mono text-gray-500 text-sm">
        {item.start_date} - {item.end_date} ({distance})
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        onValueChange={onValueChange}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="mt-1 flex items-center gap-2 font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800">
            <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {item.description.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default function WorkPlaces({ items = [] }: { items: WorkPlace[] }) {
  return (
    <ul
      className={clsx(
        sharedClasses['card-content__blocks'],
        sharedClasses['card-content__blocks--list']
      )}
    >
      {items.map((item, index) => (
        <motion.li
          custom={index}
          variants={conditionalTranslateY}
          initial="hidden"
          animate="visible"
          className={clsx(
            sharedClasses['card-content__blocks-item'],
            sharedClasses['card-content__blocks-item--full-width']
          )}
          key={index}
        >
          <CardBlock key={index} item={item} />
        </motion.li>
      ))}
    </ul>
  );
}
