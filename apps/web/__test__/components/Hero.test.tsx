import { render, screen } from '@testing-library/react';
import Hero from '../../app/components/Hero';
import '@testing-library/jest-dom';

describe('Hero Component', () => {
  it('renders hero heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Damir Akzhigitov');
  });
});
