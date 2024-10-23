'use client';

import { Box } from '@mui/material';

import FadeIn from '@/components/animations/FadeIn';
import FadeInOpacity from '@/components/animations/FadeInOpacity';
import { AppContentWrapper } from '@/components/common/Global.style';
import About from '@/features/home/about/About';
import Hero from '@/features/home/hero/Hero';
import Institutes from '@/features/home/Institutes/Institutes';
import Process from '@/features/home/process/Process';
import Resources from '@/features/home/resources/Resources';
import Stats from '@/features/home/stats/Stats';
import Support from '@/features/home/support/Support';
import Testimonials from '@/features/home/testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      <AppContentWrapper>
        <FadeInOpacity duration={1.5}>
          <FadeIn direction="up" distance={100} duration={1.5}>
            <About />
          </FadeIn>
        </FadeInOpacity>
      </AppContentWrapper>

      <FadeInOpacity duration={1.5}>
        <FadeIn direction="up" distance={100} duration={1.5}>
          <Process />
        </FadeIn>
      </FadeInOpacity>

      <FadeInOpacity duration={1.5}>
        <Institutes />
      </FadeInOpacity>

      <AppContentWrapper>
        <FadeInOpacity duration={1.5}>
          <FadeIn direction="up" distance={100} duration={1.5}>
            <Resources />
          </FadeIn>
        </FadeInOpacity>
      </AppContentWrapper>

      <FadeInOpacity duration={1.5}>
        <FadeIn direction="up" distance={100} duration={1.5}>
          <Support />
        </FadeIn>
      </FadeInOpacity>

      <AppContentWrapper>
        <Box sx={{ overflow: 'hidden' }}>
          <FadeInOpacity duration={1.5}>
            <FadeIn direction="up" distance={100} duration={1.5}>
              <Testimonials />
            </FadeIn>
          </FadeInOpacity>
        </Box>
      </AppContentWrapper>
    </>
  );
}
