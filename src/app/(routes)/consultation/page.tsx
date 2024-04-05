import React from 'react';
import { Metadata } from 'next';
import ConsultBlock from '@/components/ConsultBlock';

export const metadata: Metadata = {
  title: 'ShastaAquariums.com - Redding, CA Aquarium Maintenance Consultation',
  description:
    'Redding, CA Aquarium Cleaning Service. Crystal clear water & healthy fish. Professional aquarium maintenance for a stress-free experience.',
};

export default function Page() {
  return (
    <>
      <ConsultBlock />
    </>
  );
}
