import { Box } from '@mui/material';

import FadeIn from '@/components/animations/FadeIn';
import FadeInOpacity from '@/components/animations/FadeInOpacity';
import { AppContentWrapper } from '@/components/common/Global.style';
import AboutHero from '@/features/about/about-hero/AboutHero';
import AboutTestimonials from '@/features/about/about-testimonials/AboutTestimonials';
import AboutApproach from '@/features/about/approach/Approach';
import AboutChoose from '@/features/about/choose/Choose';
import AboutFounder from '@/features/about/founder/Founder';

export default function About() {
  return (
    <>
      <AboutHero />
      <AppContentWrapper width="1450px">
        <AboutFounder />

        <FadeInOpacity duration={1.5}>
          <FadeIn direction="up" distance={100} duration={1.5}>
            <AboutChoose />
          </FadeIn>
        </FadeInOpacity>
        <FadeInOpacity duration={1.5}>
          <FadeIn direction="up" distance={100} duration={1.5}>
            <AboutApproach />
          </FadeIn>
        </FadeInOpacity>
        <Box sx={{ overflow: 'hidden' }}>
          <FadeInOpacity duration={1.5}>
            <FadeIn direction="up" distance={100} duration={1.5}>
              <AboutTestimonials />
            </FadeIn>
          </FadeInOpacity>
        </Box>
      </AppContentWrapper>
    </>
  );
}
