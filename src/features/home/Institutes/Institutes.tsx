'use client';

import { gsap } from 'gsap';
import { FC, useEffect, useRef } from 'react';

import { InstituteWrapper, InstituteTrack } from './Institutes.style';

const instituteImages = [
  '/home/pearson.svg',
  '/home/warwick.svg',
  '/home/UOC.svg',
  '/home/aqa.svg',
  '/home/UWM.svg',
  '/home/UCL.svg',
  '/home/imperial.svg',
  '/home/SPC.svg',
];

const Institutes: FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;

    const setImageSize = (img: HTMLImageElement) => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth < 576) {
        img.style.height = '40px';
        img.style.padding = '0 20px'; 
      } else if (viewportWidth < 768) {
        img.style.height = '60px'; 
        img.style.padding = '0 30px';
      } else {
        img.style.height = '100px'; 
        img.style.padding = '0 40px';
      }
    };

    if (track) {
      const totalImages = [...instituteImages, ...instituteImages];

      track.innerHTML = '';
      totalImages.forEach((src, index) => {
        const img = document.createElement('img');

        img.src = src;
        img.alt = `Institute ${index + 1}`;
        img.style.width = 'auto';
        setImageSize(img); 
        track.appendChild(img);
      });

      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;

      if (trackWidth < viewportWidth * 2) {
        const additionalDuplicates = Array(Math.ceil(viewportWidth / trackWidth))
          .fill(totalImages)
          .flat();

        additionalDuplicates.forEach((src, index) => {
          const img = document.createElement('img');

          img.src = src;
          img.alt = `Institute extra duplicate ${index + 1}`;
          img.style.width = 'auto';
          setImageSize(img); 
          track.appendChild(img);
        });
      }

      const updatedTrackWidth = track.scrollWidth;

      const tl = gsap.timeline({ repeat: -1, ease: 'none' });

      tl.to(track, {
        x: -updatedTrackWidth / 2,
        duration: 20,
        ease: 'linear',
      });

      track.addEventListener('mouseenter', () => {
        tl.pause();
      });

      track.addEventListener('mouseleave', () => {
        tl.resume();
      });

      window.addEventListener('resize', () => {
        const imgs = Array.from(track.getElementsByTagName('img')) as HTMLImageElement[];

        imgs.forEach(setImageSize); 
      });
    }
  }, []);

  return (
    <InstituteWrapper>
      <InstituteTrack ref={trackRef}></InstituteTrack>
    </InstituteWrapper>
  );
};

export default Institutes;
