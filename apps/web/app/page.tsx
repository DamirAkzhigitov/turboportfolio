import Hero from './components/hero';
import classes from './page.module.css';

export default function HomePage() {
  return (
    <div className={classes.container}>
      <Hero />
    </div>
  );
}
