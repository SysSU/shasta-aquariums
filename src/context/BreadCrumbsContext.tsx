'use client';
import { createContext, useState } from 'react';
import React from 'react';

type BreadCrumbType = {
  name: string;
  href: string;
};

type BreadCrumbContext = {
  breadCrumbs?: BreadCrumbType[];
  setBreadCrumbs?: any;
};

const BreadcrumbDataContext = createContext<BreadCrumbContext>({});

function BreadcrumbDataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [breadCrumbs, setBreadCrumbs] = useState([{ name: 'Home', href: '/' }]);
  return (
    <BreadcrumbDataContext.Provider value={{ breadCrumbs, setBreadCrumbs }}>
      {children}
    </BreadcrumbDataContext.Provider>
  );
}

function SetBreadCrumbComponent({
  newBreadCrumbs,
}: {
  newBreadCrumbs: BreadCrumbType[];
}) {
  const { setBreadCrumbs } = React.useContext(BreadcrumbDataContext);
  setBreadCrumbs(newBreadCrumbs);
  return null;
}

export {
  BreadcrumbDataContext,
  BreadcrumbDataContextProvider,
  SetBreadCrumbComponent,
};
