'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarLink({
  link,
}: { link: { to: string; label: string } }) {
  const pathname = usePathname();

  const isActive = pathname.match(link.to) ? { color: 'white' } : {};

  return (
    <>
      <NextLink href={link.to} style={isActive}>
        {link.label}
      </NextLink>
    </>
  );
}
