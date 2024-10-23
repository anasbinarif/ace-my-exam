'use client';

import { useEffect } from 'react';

export const useDynamicBorderRadius = (
  elementRef: React.RefObject<HTMLDivElement>,
  maxRadius: number = 100,
  scrollFactor: number = 5
) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = elementRef.current;

      if (element) {
        const calculatedRadius = Math.min(maxRadius, scrollPosition / scrollFactor);
        
        element.style.setProperty('--dynamic-border-radius', `${calculatedRadius}px ${calculatedRadius}px 0 0`);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef, maxRadius, scrollFactor]);
};
