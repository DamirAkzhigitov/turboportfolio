'use client';

import IDownload from '@/components/icons/download';
import { PDFDownloadLink } from '@react-pdf/renderer';
import type { JSX } from 'react';
import classes from '../page.module.scss';

export default function PdfDownload({
  document,
  fileName,
}: { document: JSX.Element; fileName: string }) {
  return (
    <PDFDownloadLink document={document} fileName={fileName}>
      <button
        className={classes.header__button}
        type="button"
        data-testid="download-resume-cta"
      >
        <IDownload className={classes['header__button-icon']} />
        <span className={classes['header__button-text']}>Download as PDF</span>
      </button>
    </PDFDownloadLink>
  );
}
