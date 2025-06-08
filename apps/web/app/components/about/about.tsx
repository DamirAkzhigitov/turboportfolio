'use client';

import { useScroll, useSpring } from 'motion/react';
import IReact from '../icons/react';
import ITs from '../icons/typescript';
import IVue from '../icons/vue';
import classes from './about.module.css';

import * as motion from 'motion/react-client';

const transition = (delay: number) => ({
  duration: 2,
  delay,
});

export default function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <section className={classes.container}>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={transition(0)}
        className={classes.subtitle}
      >
        About me
      </motion.h3>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={transition(0.5)}
        className={classes.title}
      >
        Hi there!
      </motion.h2>
      <motion.p
        className={classes.description}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={transition(1)}
      >
        I’m <strong>Frontend developer</strong> with a passion for user
        experience and clean, scalable code. Since 2018, I’ve been building
        responsive, accessible web applications using modern frameworks like{' '}
        <IReact className={classes.icon} />
        <strong>React</strong> and <IVue className={classes.icon} />
        <strong className={classes.vue}>Vue.js</strong>, with a strong focus on
        performance, usability, and maintainability. I write robust, type-safe
        code with <ITs className={classes.icon} />
        <strong>TypeScript</strong> and stay current with the latest frontend
        technologies and best practices.
      </motion.p>
      <p>Want to know more about me?</p>
      <div>
        <a
          className={classes.connect}
          href="https://www.linkedin.com/in/damir-akzhigitov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Connect
        </a>
      </div>
      <motion.div
        className={classes['container-overlay']}
        style={{ opacity: scaleX }}
      />
    </section>
  );
}
