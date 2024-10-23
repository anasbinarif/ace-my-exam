'use client';

import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  triggerStart?: string;
  triggerEnd?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  distance = 50,
  duration = 1,
  delay = 0,
  ease = 'power3.out',
  triggerStart = 'top 80%',
  triggerEnd = 'bottom 20%',
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    const initialProps: { opacity?: number; x?: number; y?: number } = {
      opacity: 0,
    };

    switch (direction) {
    case 'left':
      initialProps.x = -distance;
      break;
    case 'right':
      initialProps.x = distance;
      break;
    case 'up':
      initialProps.y = distance;
      break;
    case 'down':
      initialProps.y = -distance;
      break;
    default:
      initialProps.y = distance;
    }

    gsap.set(element, initialProps);

    gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        end: triggerEnd,
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [direction, distance, duration, delay, ease, triggerStart, triggerEnd]);

  return <Box ref={elementRef}>{children}</Box>;
};

export default FadeIn;
