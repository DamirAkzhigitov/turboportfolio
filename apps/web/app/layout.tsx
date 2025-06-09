import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Navbar from './components/navbar/navbar';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
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
    <html lang="en">
      <body className={`${raleway.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
