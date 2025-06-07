import { render, screen } from '@testing-library/react';
import Page from '../app/page';
import '@testing-library/jest-dom';

import { MotionGlobalConfig } from 'motion';

MotionGlobalConfig.skipAnimations = true;

describe('Home page', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('renders container', () => {
    render(<Page />);

    const heading = screen.getByTestId('hero-container');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Damir Akzhigitov');
  });
});
