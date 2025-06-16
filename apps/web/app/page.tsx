import About from '@/components/about/about';
import Hero from '@/components/hero/hero';
import classes from './page.module.css';

export default function HomePage() {
  return (
    <div className={classes.container}>
      <Hero />
      <About />
    </div>
  );
}
