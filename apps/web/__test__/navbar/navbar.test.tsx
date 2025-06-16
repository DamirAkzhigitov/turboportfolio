import Navbar from '@/components/navbar/navbar';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

jest.mock('@/components/navbar/navbar-link', () => {
  return ({ link }: { link: { label: string } }) => {
    return <span>{link.label}</span>;
  };
});

describe('Navbar Component', () => {
  it('renders nav links correctly', () => {
    const doc = render(<Navbar />);

    const heading = doc.getByRole('navigation', {});
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Home');
  });
});
