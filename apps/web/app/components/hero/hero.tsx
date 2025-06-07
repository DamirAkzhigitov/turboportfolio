import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.container} data-testid="hero-container">
      <div className={classes.hero}>
        <h3 className={classes.subtitle}>Senior Frontend Engineer</h3>
        <h1 className={classes.title}>Damir Akzhigitov</h1>
        <p className={classes.description}>
          This portfolio showcases my design experience, methods, and outcomes
          in crafting exceptional user experiences.
        </p>
      </div>
    </section>
  );
}
