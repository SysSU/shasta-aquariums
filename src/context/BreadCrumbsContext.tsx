'use client';
import { createContext, useEffect, useState } from 'react';
import React from 'react';

type BreadCrumbType = {
  name: string;
  href: string;
};

type BreadCrumbContext = {
  breadCrumbs?: BreadCrumbType[] | null;
  setBreadCrumbs?: any;
};

const BreadcrumbDataContext = createContext<BreadCrumbContext>({});

function BreadcrumbDataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [breadCrumbs, setBreadCrumbs] = useState(null);
  return (
    <BreadcrumbDataContext.Provider value={{ breadCrumbs, setBreadCrumbs }}>
      {children}
    </BreadcrumbDataContext.Provider>
  );
}

function SetBreadCrumbComponent({
  newBreadCrumbs,
}: {
  newBreadCrumbs: BreadCrumbType[] | null;
}) {
  const { setBreadCrumbs } = React.useContext(BreadcrumbDataContext);

  useEffect(() => {
    setBreadCrumbs(newBreadCrumbs);
    return () => {
      setBreadCrumbs(null);
    };
  });

  return <></>;
}

export {
  BreadcrumbDataContext,
  BreadcrumbDataContextProvider,
  SetBreadCrumbComponent,
};
