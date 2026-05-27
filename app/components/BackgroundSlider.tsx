'use client';

import { useState, useEffect } from 'react';

export default function BackgroundSlider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    '/main_bg1.png',
    '/main_bg3.png',
    '/main_bg4.png',
    '/main_bg5.png',
  ];

  useEffect(() => {
    backgrounds.forEach(bg => {
      const img = new Image();
      img.src = bg;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'scroll';
    }
  }, [backgroundIndex]);

  return (
    <div
      className="desktop"
      style={{
        backgroundImage: `url('${backgrounds[backgroundIndex]}'), url('${backgrounds[(backgroundIndex + 1) % backgrounds.length]}')`,
      }}
    >
      {children}
    </div>
  );
}
