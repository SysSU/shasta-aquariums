import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';

import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShastaAquariums.com - Redding, CA Aquarium Service',
  description:
    'Redding, CA Aquarium Cleaning Service. Crystal clear water & healthy fish. Professional aquarium maintenance for a stress-free experience.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        {children}
      </body>
    </html>
  );
}
