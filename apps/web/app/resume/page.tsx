import IDownload from '../components/icons/download';
import CardBlocks from './card-blocks';
import classes from './page.module.css';
import type { ResumeIItem } from './types';

export default function ResumePage() {
  const list: ResumeIItem[][] = [
    [
      { text: 'Fintech', type: 'bold' },
      'payments, invoicing, investing, and saving in enterprise-level',
      { text: 'financial services.', type: 'bold' },
    ],
    [
      { text: 'Media platforms:', type: 'bold' },
      'streaming, audio, and ebook subscriptions.',
    ],
    [{ text: 'Retail:', type: 'bold' }, 'in-store and web payment services.'],
    [
      { text: 'Open banking:', type: 'bold' },
      'direct A2A payments and banking integrations.',
    ],
    [
      { text: 'Internal platforms:', type: 'bold' },
      'complex internal tools, CI/CD pipelines, and',
      { text: 'developer productivity solutions.', type: 'bold' },
    ],
    [
      { text: 'AI tools:', type: 'bold' },
      'dev-focused LLM-powered bots, automation of tasks and PRs.',
    ],
  ];

  return (
    <section>
      <header className={classes['header-wrapper']}>
        <div className={classes.header}>
          <h1 className={classes['header-title']}>Resume</h1>
          <button className={classes['header-button']} type="button">
            <IDownload className={classes['header-button__icon']} />
            <span className={classes['header-button__text']}>
              Download as PDF
            </span>
          </button>
        </div>
      </header>
      <div className={classes.content}>
        <div className={classes.card}>
          <h3 className={classes['card-title']}>
            I’ve been in various industries and domains working with
            development:
          </h3>
          <div className={classes['card-content']}>
            <CardBlocks list={list} />
          </div>
        </div>
      </div>
    </section>
  );
}
