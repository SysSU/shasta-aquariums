'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageIllustration from '@/components/PageIllustration';
import HeroHome from '@/components/HeroHome';
import FeaturesBlocks from '@/components/FeaturesBlocks';
import FeaturesZigZag from '@/components/FeaturesZigzag';
import Testimonials from '@/components/Testimonials';
import ConsultBlock from '@/components/ConsultBlock';
import Banner from '@/components/Banner';

export default function Home() {
  const location = usePathname();
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.style.scrollBehavior = 'auto';
      window.scroll({ top: 0 });
      htmlElement.style.scrollBehavior = '';
    }
  }, [location]); // triggered on route change

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesZigZag />
        {/* <Testimonials /> */}
        <ConsultBlock />
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
