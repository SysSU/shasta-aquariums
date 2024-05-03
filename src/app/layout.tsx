import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageIllustration from '@/components/PageIllustration';
import AOS from '@/components/AOS';
import BreadCrumbs from '@/components/BreadCrumbs';
import { BreadcrumbDataContextProvider } from '@/context/BreadCrumbsContext';

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
        <BreadcrumbDataContextProvider>
          <PageIllustration />
          <div className="flex flex-col min-h-screen overflow-hidden">
            <AOS />

            <div>
              <main className="grow pt-20 md:pt-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
                  <Header />
                  <BreadCrumbs />
                </div>

                {children}
              </main>
            </div>

            <Footer />
          </div>
        </BreadcrumbDataContextProvider>
        <Script
          defer
          data-domain="shastaaquariums.com"
          src="https://plausible.syssu.com/js/script.js"
        />
      </body>
    </html>
  );
}
