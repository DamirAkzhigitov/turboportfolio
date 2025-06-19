import CardBlocks from '@/app/resume/components/CardBlocks';
import PdfDownload from '@/app/resume/components/PdfDownload';
import ResumeDocument from '@/app/resume/components/ResumeDocument';
import WorkPlaces from '@/app/resume/components/WorkPlaces';
import classes from './page.module.scss';
import sharedClasses from './shared.module.scss';
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
  const workHistory = [
    {
      title: 'Senior Associate, Frontend Engineer',
      company: 'MUFG Fund Services (Cyprus) Limited',
      location: 'Limassol, Cyprus',
      start_date: '2022-03',
      end_date: 'Present',
      description: [
        'Worked on architecture and development of micro-frontend modules, driving improvements across the frontend chapter. Contributed to shared tooling, frontend standards, and CI/CD processes. Led the refactoring core libraries for better performance and maintainability. Proposed and implemented practical solutions to improve code quality, developer experience, and team workflows.',
        'Built micro-frontend modules using DDD and TDD principles. Worked extensively with TypeScript, GraphQL, Apollo, REST APIs, and modern tooling such as Vite. Used Playwright for end-to-end testing and Jest for unit tests. Set up CI/CD pipelines and integrated with AWS services to support automation and scalability across teams.',
        'Migrated a large-scale SPA from Vue 2 (Options API) to Vue 3 (Composition API + TypeScript), including core library refactoring and performance improvements. Contributed to UI development for multiple platforms and participated in mentoring, code reviews, and onboarding processes.',
      ],
    },
    {
      title: 'Banking Application Web Developer',
      company: 'Savings and Loan Services Bank',
      location: 'Moscow, Russia',
      start_date: '2021-04',
      end_date: '2022-05',
      description: [
        'Worked on a banking sales tool that streamlined customer onboarding, product selection, and document verification.\n\nFocused on building responsive and maintainable interfaces using Vue 3, TypeScript, Quasar, SCSS, and ES6.',
        'Enhanced user experience by optimizing form flows and integrating secure document signing mechanisms, reducing user friction and support requests.',
      ],
    },
    {
      title: 'Middle Frontend Developer',
      company: 'Payterra Processing Company, LLC',
      location: 'Moscow, Russia',
      start_date: '2020-10',
      end_date: '2021-04',
      description: [
        'Developed and maintained React components with modern features like hooks, using Flexbox for responsive layouts.\n\nImproved UI interactivity with smooth animations and intuitive behaviors for payment interfaces.',
        'Collaborated closely with backend teams to ensure seamless API integration and consistent UX across the platform.',
      ],
    },
    {
      title: 'Frontend Developer (A/B Testing)',
      company: 'Kameleoon',
      location: 'Moscow, Russia',
      start_date: '2019-07',
      end_date: '2020-10',
      description: [
        'Built custom A/B testing components to help e-commerce clients improve conversion rates based on experiment data.',
        'Maintained high code quality using Babel, ESLint, and Prettier, which helped enforce team-wide standards and reduce tech debt.',
      ],
    },
  ];
  const fileName = 'Akzhigitov Damir Resume';

  function IndustriesCard() {
    return (
      <div className={sharedClasses.card}>
        <h3 className={sharedClasses.card__title}>
          I’ve been in various industries and domains working with development:
        </h3>
        <div className={sharedClasses['card-content']}>
          <CardBlocks items={list} />
        </div>
      </div>
    );
  }

  function ExperienceCard() {
    return (
      <div className={sharedClasses.card}>
        <h3 className={sharedClasses.card__title}>
          I’ve worked as a senior Frontend engineer for:
        </h3>
        <div className={sharedClasses['card-content']}>
          <WorkPlaces items={workHistory} />
        </div>
      </div>
    );
  }

  return (
    <section>
      <header className={classes.header}>
        <div className={classes.header__wrapper}>
          <h1 className={classes.header__title}>Resume</h1>
          <PdfDownload document={<ResumeDocument />} fileName={fileName} />
        </div>
      </header>
      <div className={classes.content}>
        <IndustriesCard />
        <ExperienceCard />
      </div>
    </section>
  );
}
