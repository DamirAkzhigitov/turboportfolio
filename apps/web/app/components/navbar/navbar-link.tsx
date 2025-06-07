'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './navbar-link.module.css';

export default function NavbarLink({
  link,
}: { link: { to: string; label: string } }) {
  const pathname = usePathname();

  const isActive = (pathname.match(link.to) && classes['is-active']) || '';

  return (
    <>
      <NextLink href={link.to} className={isActive}>
        {link.label}
      </NextLink>
    </>
  );
}
