import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageIllustration from '@/components/PageIllustration';
import AOS from '@/components/AOS';

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
        <PageIllustration />
        <div className="flex flex-col min-h-screen overflow-hidden">
          <AOS />

          <Header />
          <div>
            <main className="grow pt-32 md:pt-40">
              {/*  Page illustration */}
              <div
                className="relative max-w-6xl mx-auto h-0 pointer-events-none"
                aria-hidden="true"
              ></div>

              {children}
            </main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
