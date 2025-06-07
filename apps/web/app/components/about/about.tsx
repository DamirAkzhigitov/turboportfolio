import IReact from '../icons/react';
import ITs from '../icons/typescript';
import IVue from '../icons/vue';
import classes from './about.module.css';

export default function About() {
  return (
    <section className={classes.container}>
      <h3 className={classes.subtitle}>About me</h3>
      <h2 className={classes.title}>Hi there!</h2>
      <p className={classes.description}>
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
      </p>
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
    </section>
  );
}
