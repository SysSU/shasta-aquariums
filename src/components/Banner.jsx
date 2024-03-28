import React, { useRef, useEffect, useState } from 'react';

function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const bannerRef = useRef(null);

  const handleClick = () => {
    setBannerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementRect = bannerRef.current.getBoundingClientRect();
      const isScrolledToBottom =
        elementRect.bottom + window.scrollY + 50 > document.body.offsetHeight;
      // Adjust the offset value as needed

      if (isScrolledToBottom) {
        setBannerOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bannerOpen]);

  return (
    <>
      <div
        ref={bannerRef}
        className={`${!bannerOpen ? 'invisible' : ''} fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60`}
      >
        <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
          <div className="text-slate-500 inline-flex">
            <a
              className="font-medium hover:underline text-emerald-400"
              href="#consult"
              rel="noreferrer"
            >
              Setup a Consultation
            </a>
          </div>
          <button
            className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700"
            onClick={() => handleClick()}
          >
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
