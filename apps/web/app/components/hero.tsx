import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.container}>
      <div className={classes.hero}>
        <h1 className={classes.title}>Damir Akzhigitov</h1>
        <h3>Senior Frontend Engineer</h3>
        <p>
          This portfolio showcases my design experience, methods, and outcomes
          in crafting exceptional user experiences.
        </p>
      </div>
    </section>
  );
}
