'use client';

import React from 'react';
import Link from 'next/link';
import { BreadcrumbDataContext } from '@/context/BreadCrumbsContext';

export default function BreadCrumbs() {
  const { breadCrumbs } = React.useContext(BreadcrumbDataContext);

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {breadCrumbs &&
          breadCrumbs.map((breadCrumb, index) => (
            <li key={index}>
              <Link href={breadCrumb.href}>{breadCrumb.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
