import Page from '@/app/resume/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Resume page', () => {
  it('contains download pdf button', () => {
    render(<Page />);

    const downloadButton = screen.getByTestId('download-resume-cta');
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveTextContent('Download as PDF');
  });
});
