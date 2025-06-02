import { useTranslation } from 'react-i18next';
import classes from './Hero.module.css';

export default function Hero() {
  const { t } = useTranslation();
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
