import Navbar from '@/components/navbar/navbar';
import { Providers } from '@/components/providers';
import type { Metadata } from 'next';
import { Raleway, Roboto_Mono } from 'next/font/google';
import '@repo/ui/globals.css';
import './globals.css';

const ralewaySans = Raleway({
  subsets: ['latin'],
  variable: '--font-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Damir Akzhigitov — Frontend Developer',
  description:
    'Experienced frontend developer building clean, accessible, and performant web applications with React, TypeScript, and modern tools.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ralewaySans.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
