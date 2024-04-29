'use client';

import React from 'react';
import Link from 'next/link';
import { BreadcrumbDataContext } from '@/context/BreadCrumbsContext';

export default function BreadCrumbs() {
  const { breadCrumbs } = React.useContext(BreadcrumbDataContext);

  if (!breadCrumbs) return null;

  return (
    <div className="text-sm breadcrumbs content-center p-2 items-center">
      <ul className="bg-purple-500/50 w-fit p-2 rounded-md">
        {breadCrumbs &&
          breadCrumbs.map((breadCrumb, index) => (
            <li key={index} className="breadCrumbs">
              <Link href={breadCrumb.href}>{breadCrumb.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
