'use client';

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer({ url }: { url: string }) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  if (!hasWindow) {
    return null;
  }

  return (
    <>
      <ReactPlayer
        className="h-full w-full"
        url={url}
        width="auto"
        id="videoPlayer"
      />
    </>
  );
}
