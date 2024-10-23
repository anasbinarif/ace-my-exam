'use client';

import { useRef } from 'react';

import FadeIn from '@/components/animations/FadeIn';
import { useDynamicBorderRadius } from '@/components/animations/useDynamicBorderRadius';
import { AppContentWrapper } from '@/components/common/Global.style';
import SectionHeading from '@/components/section-heading/SectionHeading';

import {
  AboutHeroContent,
  AboutHeroContentContainer,
  AboutHeroHeading,
  AboutHeroImage,
  AboutHeroImageContainer,
  AboutHeroImageOverlay,
  AboutHeroWrapper,
} from './About.style';

const AboutHero: React.FC = () => {
  const aboutHeroWrapperRef = useRef<HTMLDivElement | null>(null);

  useDynamicBorderRadius(aboutHeroWrapperRef, 100, 5);
  
  return (
    <AboutHeroWrapper ref={aboutHeroWrapperRef}>
      <AboutHeroImageContainer>
        <AboutHeroImage
          src={'/home/hero-bg.png'}
          width={1197}
          height={100}
          alt='Hero background'
        />
        <AboutHeroImageOverlay />
      </AboutHeroImageContainer>
      <AppContentWrapper  width="1450px">
        <AboutHeroContentContainer>
          <FadeIn direction="left" distance={200} duration={1.5}>
            <SectionHeading
              text='About Us'
              align='start'
              showLeftLine={false}
              color='#fff'
              gradientType='first'
            />
            <AboutHeroHeading>About Acemyexam</AboutHeroHeading>
            <AboutHeroContent>
              Shaping Futures Through Personalized Education
            </AboutHeroContent>
            <AboutHeroContent>Lprem Ipsum</AboutHeroContent>
          </FadeIn>
          <FadeIn direction="left" distance={200} duration={1.5}>
            <SectionHeading
              text='About Us'
              align='start'
              showLeftLine={false}
              color='#fff'
              gradientType='first'
            />
            <AboutHeroHeading>About Acemyexam</AboutHeroHeading>
            <AboutHeroContent>
              Shaping Futures Through Personalized Education
            </AboutHeroContent>
            <AboutHeroContent>Lprem Ipsum</AboutHeroContent>
          </FadeIn>
        </AboutHeroContentContainer>
      </AppContentWrapper>
    </AboutHeroWrapper>
  );
};

export default AboutHero;
