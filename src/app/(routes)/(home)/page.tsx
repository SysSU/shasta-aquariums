import React from 'react';
import FeaturesBlocks from './FeaturesBlocks';
import FeaturesZigZag from './FeaturesZigzag';
import ConsultBlock from '@/components/ConsultBlock';
import Banner from './Banner';
import PageHero from '@/components/PageHero';
import HeroImage from '@/public/hero-image.jpg';
import { SetBreadCrumbComponent } from '@/context/BreadCrumbsContext';

const breadCrumbs = [{ name: 'Home', href: '/' }];
const HeroTitle = 'Shasta Aquarium Services';
const HeroDescription = () => (
  <>
    Crystal Clear Views, Effortless Maintenance -{' '}
    <strong>Relax, We&apos;ve Got Your Aquarium Covered</strong>
  </>
);

export default function Home() {
  return (
    <>
      <SetBreadCrumbComponent newBreadCrumbs={breadCrumbs} />
      <PageHero
        title={HeroTitle}
        description={<HeroDescription />}
        heroImage={HeroImage}
      />
      <FeaturesBlocks />
      <FeaturesZigZag />
      <ConsultBlock />
      <Banner />
    </>
  );
}
