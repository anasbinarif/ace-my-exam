'use client';

import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInOpacityProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  ease?: string;
  triggerStart?: string;
  triggerEnd?: string;
}

const FadeInOpacity: React.FC<FadeInOpacityProps> = ({
  children,
  duration = 1,
  delay = 0,
  ease = 'power3.out',
  triggerStart = 'top 80%',
  triggerEnd = 'bottom 80%',
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    gsap.set(element, { opacity: 0 });

    gsap.to(element, {
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        end: triggerEnd,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [duration, delay, ease, triggerStart, triggerEnd]);

  return <Box ref={elementRef}>{children}</Box>;
};

export default FadeInOpacity;
