import React from 'react';
import type { Metadata } from 'next';
import AOS from '@/components/AOS';
import VideoPlayer from '@/components/VideoPlayer';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'ShastaAquariums.com - Redding, CA Fish-Less Tank Cycling',
  description:
    'Redding, CA Aquarium Fish-less cycling. Fish-less cycling is the process of establishing a beneficial bacteria colony in your aquarium filter media before adding fish. This process is essential for a healthy aquarium.',
};

export default function Page() {
  const HeroTitle = 'Fish-Less Tank Cycling';
  const HeroDescription =
    'Fish-less cycling is the process of establishing a beneficial bacteria colony in your aquarium filter media before adding fish. This process is essential for a healthy aquarium.';

  return (
    <>
      <PageHero title={HeroTitle} description={HeroDescription} />
      <AOS />
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
                  <h3 className="h3 mb-3">Why is it important?</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Fish produce waste, and a key component of a healthy
                    aquarium is having the right bacteria to break down this
                    waste. These bacteria are crucial because they convert
                    harmful ammonia, a byproduct of fish waste, into less
                    harmful nitrates.
                  </p>
                  <h3 className="h3 mb-3">Benefits</h3>

                  <ul className="text-lg text-gray-400 mb-3 list-disc">
                    <li className="mb-2">
                      <strong>Prevents New Tank Syndrome&#58;</strong> This
                      avoids exposing new fish to harmful ammonia spikes that
                      can occur in an uncycled tank.
                    </li>
                    <li className="mb-2">
                      <strong>Less Stress on Fish&#58;</strong> Fish experience
                      less stress and are less susceptible to diseases when
                      introduced to an already cycled tank.
                    </li>
                    <li className="mb-2">
                      <strong>Safer Environment&#58;</strong> Established
                      bacteria ensure a healthier and more stable environment
                      for your fish.
                    </li>
                  </ul>

                  <h3 className="h3 mb-3">What are the drawbacks?</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    While there may be some potential drawbacks to fish-less
                    cycling, such as the time it takes to establish the
                    bacteria, and the consistent monitoring and maintaining of
                    ammonia levels, the benefits far outweigh the drawbacks, and
                    with our help, we can guide you through the process or even
                    do it for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center mt-2">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <VideoPlayer url="https://www.youtube.com/watch?v=yNZq8WcScn4" />
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">The Nitrogen Cycle Explained</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    The nitrogen cycle is fundamental to life on Earth,
                    especially for organisms that rely on nitrogen to build
                    essential biological molecules.
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
