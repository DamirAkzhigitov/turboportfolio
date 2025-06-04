import classes from './navbar.module.css';
import NavbarLink from './navbarLink';

export default function Navbar() {
  const links = [
    {
      to: '/',
      label: 'Home',
    },
    {
      to: '/resume',
      label: 'Resume',
    },
    {
      to: '/contact',
      label: 'Contact',
    },
    {
      to: '/work',
      label: 'Work',
    },
  ];

  return (
    <nav className={classes.navbar} aria-label="Main navigation">
      <ul className={classes.navList}>
        {links.map((link) => (
          <li className={classes.navListItem} key={link.label}>
            <NavbarLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
