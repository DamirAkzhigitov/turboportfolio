import IReact from '../icons/react';
import classes from './about.module.css';

export default function About() {
  return (
    <section className={classes.container}>
      <h3 className={classes.subtitle}>About me</h3>
      <h2 className={classes.title}>Hi there!</h2>
      <p className={classes.description}>
        I’m <strong>Damir Akzhigitov</strong>, a passionate frontend developer
        with a strong eye for user experience and clean, scalable code. Since
        2018, I’ve been building responsive and accessible web applications
        using modern frameworks like <IReact />
        <strong className={classes.react}>React</strong> and{' '}
        <strong>Vue</strong>, and writing robust, type-safe code with{' '}
        <strong>TypeScript</strong>. I focus on performance, usability, and
        maintainability, always staying current with the latest frontend
        technologies and best practices.
      </p>
      <p>Want to know more about me?</p>
      <div>
        <span>Let's Connect</span> | <span>Blog</span>
      </div>
    </section>
  );
}
