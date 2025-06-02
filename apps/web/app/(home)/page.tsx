import Hero from '../components/Hero';
import classes from './page.module.css';

export default function HomePage() {
  return (
    <div className={classes.container}>
      <Hero />
    </div>
  );
}
