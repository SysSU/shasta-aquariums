import React from 'react';
import Link from 'next/link';

const socialLinkData = [
  {
    href: '#',
    comingSoon: true,
    iconData:
      'M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z',
    label: 'Twitter',
  },
  {
    href: '#',
    comingSoon: true,
    iconData:
      'M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z',
    label: 'Facebook',
  },
  {
    href: '#',
    comingSoon: true,
    iconData: [
      'M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z',
      'M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z',
    ],
    label: 'Instagram',
  },
];

function SocialLink({ href, iconData, label, comingSoon }) {
  const iconPaths = typeof iconData === 'string' ? [iconData] : iconData;
  const handleClick = (e) => {
    comingSoon && e.preventDefault();
  };
  return (
    <li className="ml-1">
      <div
        className={`${comingSoon ? 'tooltip' : ''}`}
        data-tip={`${comingSoon ? 'Coming Soon' : ''}`}
      >
        <Link
          href={href}
          className={`${comingSoon ? 'pointer-events-none' : ''} flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out`}
          aria-label={label}
          tabIndex={comingSoon ? -1 : 0}
          aria-disabled={comingSoon}
        >
          {comingSoon}
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            {iconPaths.map((path, index) => {
              return <path key={index} d={path} />;
            })}
          </svg>
        </Link>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {socialLinkData.map(({ label, href, iconData, comingSoon }) => {
                return (
                  <SocialLink
                    key={label}
                    href={href}
                    iconData={iconData}
                    label={label}
                    comingSoon={comingSoon}
                  />
                );
              })}
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; ShastaAquariums.com. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
