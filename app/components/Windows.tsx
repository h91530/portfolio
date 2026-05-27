'use client';

import { useEffect, useRef } from 'react';

export default function Windows({ 
  setIsLoading,
  onComplete,
}: { 
  setIsLoading: (value: boolean) => void;
  onComplete?: () => void;
}) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="windows-loader">
      <div className="windows-content">
        <img src="/windows.png" alt="Windows Loading" className="windows-logo" />
        <svg className="gear-spinner" viewBox="0 0 100 100" width="45" height="45">
          {/* Gear teeth only */}
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const x = 50 + Math.cos(angle) * 42;
            const y = 50 + Math.sin(angle) * 42;
            return <rect key={i} x={x - 4} y={y - 6} width="8" height="12" fill="white" transform={`rotate(${(i / 8) * 360} ${x} ${y})`}/>;
          })}
        </svg>
      </div>
    </div>
  );
}
