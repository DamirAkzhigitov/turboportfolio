import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.container} data-testid="hero-container">
      <div className={classes.hero}>
        <h3 className={classes.subtitle}>Senior Frontend Engineer</h3>
        <h1 className={classes.title}>Damir Akzhigitov</h1>
        <p className={classes.description}>
          This portfolio showcases my frontend development experience, technical
          expertise, and project outcomes in building exceptional user
          interfaces and web applications.
        </p>
      </div>
    </section>
  );
}
