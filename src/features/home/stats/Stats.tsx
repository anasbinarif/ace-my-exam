'use client';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import FadeIn from '@/components/animations/FadeIn';
import { useDynamicBorderRadius } from '@/components/animations/useDynamicBorderRadius'; // Import the hook
import { AppContentWrapper } from '@/components/common/Global.style';
import {
  StatCardHeading,
  StatCardValue,
  StatsCard,
  StatsCardHead,
  StatsContentWrapper,
} from '@/features/home/stats/Stats.style';

interface StatItem {
  name: string;
  value: string;
  subTitle: string;
  showPlus?: boolean;
}

const stats: StatItem[] = [
  {
    name: 'Backed by',
    value: '15',
    subTitle: 'Years of Experience',
    showPlus: true,
  },
  {
    name: 'Expertise in',
    value: '49',
    subTitle: 'Entrance and Scholarships Exams',
    showPlus: true,
  },
  {
    name: 'With Over',
    value: '3000',
    subTitle: 'Students Tutored',
    showPlus: true,
  },
];

const Stats: React.FC = () => {
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const statsWrapperRef = useRef<HTMLDivElement | null>(null);

  // Apply dynamic border radius animation
  useDynamicBorderRadius(statsWrapperRef, 100, 5);

  useEffect(() => {
    statRefs.current.forEach((stat, index) => {
      const finalValue = parseInt(stats[index].value);
      const showPlus = stats[index].showPlus;

      if (stat) {
        gsap.fromTo(
          stat,
          { innerHTML: 0 },
          {
            innerHTML: finalValue,
            duration: 2,
            ease: 'power1.out',
            snap: { innerHTML: 1 },
            onUpdate: function () {
              stat.innerHTML = Math.ceil(parseFloat(stat.innerHTML)).toString();
            },
            onComplete: function () {
              if (showPlus) {
                stat.innerHTML += '+';
              }
            },
          }
        );
      }
    });
  }, []);

  return (
    <Box ref={statsWrapperRef} sx={{ position: 'relative' }}>
      <StatsContentWrapper>
        <AppContentWrapper>
          <StatsCardHead>
            <FadeIn direction="up" distance={100} duration={1.5}>
              <Grid container columnSpacing={{ xs: '4px', md: '10px', lg: '22px' }} columns={24}>
                {stats.map((stat, index) => (
                  <Grid size={{ xs: 8 }} key={index}>
                    <StatsCard>
                      <StatCardHeading variant="h4">{stat.name}</StatCardHeading>
                      <StatCardValue
                        variant="h2"
                        ref={(el) => {
                          statRefs.current[index] = el;
                        }}
                      >
                        0
                      </StatCardValue>
                      <StatCardHeading variant="h4">{stat.subTitle}</StatCardHeading>
                    </StatsCard>
                  </Grid>
                ))}
              </Grid>
            </FadeIn>
          </StatsCardHead>
        </AppContentWrapper>
      </StatsContentWrapper>
    </Box>
  );
};

export default Stats;
