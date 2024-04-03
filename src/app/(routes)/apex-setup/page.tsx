import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AOS from '@/components/AOS';
import PageHero from '@/components/PageHero';
import HeroImage from '@/public/apex-hero-img.jpg';
import FeatImage01 from '@/public/apex-features-01.jpg';
import FeatImage02 from '@/public/apex-features-02.jpg';

export const metadata: Metadata = {
  title: 'ShastaAquariums.com - Redding, CA Fish-Less Tank Cycling',
  description:
    'Redding, CA Aquarium Cleaning Service. Crystal clear water & healthy fish. Professional aquarium maintenance for a stress-free experience.',
};

export default function Page() {
  const HeroTitle =
    'Conquer Aquarium Care with Neptune Apex - Stress-Free Management Starts with Expert Setup';
  const HeroDescription = () => (
    <>
      Conquer Aquarium Care with{' '}
      <Link
        href="https://www.neptunesystems.com/a3-apex-series/#"
        target="_blank"
      >
        Neptune Apex
      </Link>{' '}
      - Stress-Free Management Starts with Expert Setup
    </>
  );

  return (
    <>
      <AOS />
      <PageHero
        title={HeroTitle}
        description={<HeroDescription />}
        heroImage={HeroImage}
      />
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            {/* Items */}
            <div className="grid gap-20">
              {/* 1st item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src={FeatImage01}
                    width="540"
                    height="405"
                    alt="Features 01"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3">
                      Our Neptune Apex Setup Service includes
                    </h3>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>
                          <strong>Professional Installation</strong>: We
                          expertly connect your Apex unit, modules (probes,
                          etc.), and aquarium equipment.
                        </span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>
                          <strong>Seamless Network Configuration</strong>: We
                          ensure your Apex connects flawlessly to your Wi-Fi or
                          router for remote access.
                        </span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>
                          <strong>Customizable Programming</strong>: We help you
                          tailor settings, alarms, and automated routines for
                          your specific tank needs.
                        </span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>
                          <strong>Comprehensive Training</strong>: Learn how to
                          navigate the Apex dashboard, monitor water parameters,
                          and manage your aquarium remotely.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2nd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src={FeatImage02}
                    width="540"
                    height="405"
                    alt="Features 02"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-left"
                >
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <h3 className="h3 mb-3">Benefits of Our Service</h3>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>
                          <strong>Peace of Mind</strong>: Relax knowing your
                          aquarium is expertly monitored and automatically
                          controlled.
                        </span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>
                          <strong>Optimal Conditions</strong>: Precise settings
                          and automated routines ensure a stable and healthy
                          environment for your fish and corals.
                        </span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>
                          <strong>Remote Management</strong>: Control your
                          aquarium and monitor conditions from anywhere with an
                          internet connection.
                        </span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>
                          <strong>Time-Saving Convenience</strong>: Ditch the
                          manual adjustments and focus on enjoying the beauty of
                          your thriving aquarium.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="grid gap-20"></div>

            <div className="md:grid md:grid-cols-12 md:gap-6 items-center mt-2">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12"
                data-aos="fade-down"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">
                    Don&apos;t let setup complexity hold you back from the power
                    of Neptune Apex. Let our experts handle it!
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    <Link href="/consultation">Setup a consultation</Link> today
                    to learn more about our options for your aquarium.
                  </p>
                  <p className="text-xl text-gray-400 mb-4">
                    <strong>P.S.</strong> Ask about our ongoing maintenance
                    packages to keep your Apex running smoothly and your
                    aquarium flourishing!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
