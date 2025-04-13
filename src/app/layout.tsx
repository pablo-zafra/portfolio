import { NavBar } from '../components';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pablo Zafra',
  description: 'Frontend developer, UI/UX designer, Motion Designer'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-gray">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
