import { render, screen } from '@testing-library/react';
import Page from '../app/page';
import '@testing-library/jest-dom';

describe('Home page', () => {
  it('renders container', () => {
    render(<Page />);

    const heading = screen.getByTestId('hero-container');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Damir Akzhigitov');
  });
});
