import classes from './page.module.css';

export default function ResumePage() {
  const list = [
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
            Download as PDF
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
            <ul className={classes['card-content__blocks']}>
              {list.map((item, index) => (
                <li
                  className={classes['card-content__blocks-item']}
                  key={index}
                >
                  {item.map((block, i) =>
                    typeof block === 'string' ? (
                      <span key={i}>{block}</span>
                    ) : (
                      <span key={i} className={classes['block--bold']}>
                        {block.text}
                      </span>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
