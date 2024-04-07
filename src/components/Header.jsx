'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LogoImg from '@/public/logo.png';
const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'Setup Consultation', link: '/consultation' },
  {
    name: 'Special Services',
    subMenu: [
      { name: 'Fish-Less Cycle', link: '/fishless-cycle' },
      { name: 'Neptune Apex Setup', link: '/apex-setup' },
    ],
  },
];

function MenuItems() {
  const pathname = usePathname();

  const defaultClasses = 'block ml-1 auto-cols-auto';

  function MenuItem({ item, index, isSubMenu }) {
    return (
      <li key={item.link || index}>
        {item.subMenu ? (
          <details className="menuDetails ml-1">
            <summary className="w-max">{item.name}</summary>
            <ul className="p-2">
              {item.subMenu.map((subItem, subIndex) => (
                <MenuItem
                  key={subItem.link || subIndex}
                  item={subItem}
                  isSubMenu={true}
                />
              ))}
            </ul>
          </details>
        ) : (
          <Link
            href={item.link}
            className={`${pathname === item.link ? 'active' : ''} ${isSubMenu ? 'w-max' : ''} ${defaultClasses}`}
            aria-label="ShastaAquariums.com"
          >
            {item.name}
          </Link>
        )}
      </li>
    );
  }

  return (
    <>
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </>
  );
}

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const prevY = useRef(0); // Store previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const hideShowOffset = 100; // Offset value to hide/show element

      // Hide element only when scrolled down past x amount of pixels
      if (currentY >= hideShowOffset) {
        setIsVisible(false);
        // Show element again when scrolled up to top of x amount of pixels
      } else if (currentY <= hideShowOffset) {
        setIsVisible(true);
      }

      prevY.current = currentY; // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <header
      className={`${!isVisible ? 'invisible' : ''} navbar max-w-6xl mx-auto fixed top-0 z-50`}
    >
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <MenuItems />
          </ul>
        </div>
        <Link href="/" className="block" aria-label="ShastaAquariums.com">
          <Image src={LogoImg} alt="ShastaAquariums.com" width="150" priority />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          tabIndex="0"
          className="menu menu-horizontal bg-base-200 rounded-box dropdown-content"
        >
          <MenuItems />
        </ul>
      </div>
    </header>
  );
}

export default Header;
