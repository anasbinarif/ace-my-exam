'use client';

import Grid from '@mui/material/Grid';

import { PricingWrapper, PricingHeading, PricingPara } from '@/app/(main)/pricing/Pricing.style';
import FadeInOpacity from '@/components/animations/FadeInOpacity'; 
import { AppContentWrapper } from '@/components/common/Global.style';
import PricingCard from '@/components/pricing/pricing-card/PricingCard';
import SectionHeading from '@/components/section-heading/SectionHeading';

const pricingData = {
  individualRates: [
    {
      imageSrc: '/home/math.webp',
      title: 'Math',
      prices: [
        { level: 'Primary', price: '£70' },
        { level: 'Secondary', price: '£75' },
        { level: 'GCSE', price: '£75' },
        { level: 'A-Level', price: '£80' },
      ],
    },
    {
      imageSrc: '/home/physic.webp',
      title: 'Physics',
      prices: [
        { level: 'Primary', price: '£70' },
        { level: 'Secondary', price: '£75' },
        { level: 'GCSE', price: '£75' },
      ],
    },
    {
      imageSrc: '/home/chemistry.webp',
      title: 'Chemistry',
      prices: [
        { level: 'Primary', price: '£70' },
        { level: 'Secondary', price: '£75' },
        { level: 'GCSE', price: '£75' },
      ],
    },
    {
      imageSrc: '/home/biology.webp',
      title: 'Biology',
      prices: [
        { level: 'Primary', price: '£70' },
        { level: 'Secondary', price: '£75' },
        { level: 'GCSE', price: '£75' },
      ],
    },
  ],
  groupRates: [
    {
      imageSrc: '/home/13plus.webp',
      title: '13 +',
      prices: [
        { level: '2 Students', price: '£55' },
        { level: '3 Students', price: '£50' },
        { level: '4 Students', price: '£45' },
      ],
    },
    {
      imageSrc: '/home/gcse.webp',
      title: 'GCSE',
      prices: [
        { level: '2 Students', price: '£55' },
        { level: '3 Students', price: '£50' },
        { level: '4 Students', price: '£45' },
      ],
    },
    {
      imageSrc: '/home/alevels.webp',
      title: 'A-Levels',
      prices: [
        { level: '2-3 Students', price: '£40' },
        { level: '4-6 Students', price: '£35' },
      ],
    },
  ],
};

const Pricing: React.FC = () => {
  const { individualRates, groupRates } = pricingData;

  return (
    <PricingWrapper>
      <AppContentWrapper>
        <SectionHeading
          text='Our Pricing'
          align='center'
          showLeftLine={true}
          color='#DA9694'
          textWidth='115px'
          gradientType='second'
        />
        <PricingHeading>Find the plan that’s right for you</PricingHeading>
        <PricingPara>Individual Rates</PricingPara>
        <FadeInOpacity duration={2}>
          <Grid container justifyContent={'center'} rowSpacing={'30px'}>
            {individualRates.map((card, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                xl={3}
                key={index}
                sx={{ px: { xs: '5px', lg: '10px', xl: '15px' } }}
              >

                <PricingCard imageSrc={card.imageSrc} title={card.title} prices={card.prices} />

              </Grid>
            ))}
          </Grid>
        </FadeInOpacity>
        <PricingPara sx={{ mt: '100px' }}>Group Rates</PricingPara>
        <FadeInOpacity duration={2}>
          <Grid container justifyContent={'center'} rowSpacing={'30px'}>
            {groupRates.map((card, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                xl={3}
                key={index}
                sx={{ px: { xs: '5px', lg: '10px', xl: '15px' } }}
              >
                <PricingCard imageSrc={card.imageSrc} title={card.title} prices={card.prices} />
              </Grid>
            ))}
          </Grid>
        </FadeInOpacity>
      </AppContentWrapper>
    </PricingWrapper>
  );
};

export default Pricing;
