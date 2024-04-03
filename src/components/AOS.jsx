'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import { usePathname } from 'next/navigation';

export default function AOSComp() {
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

  return null;
}
