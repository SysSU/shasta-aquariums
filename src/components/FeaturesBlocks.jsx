import React from 'react';

const itemsContainerCSS =
  'max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none';

function FeatureBlock({ iconData, title, description }) {
  return (
    <div
      className="relative flex flex-col items-center"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
    >
      <div className="w-16 h-16 mb-4 bg-purple-600 rounded-full text-lg text-white text-center flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={iconData} />
        </svg>
      </div>
      <h4 className="h4 mb-2">{title}</h4>
      <p className="text-lg text-gray-400 text-center">{description}</p>
    </div>
  );
}

function FeaturesBlocks() {
  return (
    <section id="featuresBlock">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Experience the beauty of a thriving underwater world without the
              hassle.
            </h2>
            {/* <p className="text-xl text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p> */}
          </div>

          {/* Items */}
          <div className={itemsContainerCSS} data-aos-id-blocks>
            <FeatureBlock
              title="Expertise"
              description="Take advantage of over 5 years of industry experience maintaining your tank and guiding you to a successful adventure!"
              iconData="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
            <FeatureBlock
              title="Stress-Free Service"
              description="We get our hands wet so you don't have to. We cover everything from setup to maintenance to introducing new critters."
              iconData="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
            <FeatureBlock
              title="Healthy & Happy Fish"
              description="Get a committed person maintaining a balanced healthy ecosystem for happy healthy tank inhabitants."
              iconData="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
