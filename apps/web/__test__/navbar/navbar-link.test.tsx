import { render, screen } from '@testing-library/react';
import NavbarLink from '../../app/components/navbar/navbar-link';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('NavbarLink', () => {
  it('Should have a label', () => {
    mockUsePathname.mockImplementation(() => '/');

    const link = {
      label: 'Home',
      to: '/',
    };

    render(<NavbarLink link={link} />);

    const navbarLink = screen.getByRole('link');

    expect(navbarLink).toBeInTheDocument();
    expect(navbarLink).toHaveTextContent(link.label);
  });
  it('Should be active if current pathname is match', () => {
    mockUsePathname.mockImplementation(() => '/about');

    const link = {
      label: 'Home',
      to: '/about',
    };

    render(<NavbarLink link={link} />);

    const navbarLink = screen.getByRole('link');

    expect(navbarLink).toBeInTheDocument();
    expect(navbarLink).toHaveClass('is-active');
  });
});
