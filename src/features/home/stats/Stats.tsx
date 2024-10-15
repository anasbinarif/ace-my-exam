import { Grid } from '@mui/material';

import { AppContentWrapper } from '@/components/common/Global.style';
import {StatCardHeading, StatsContentWrapper, StatCardValue, StatsCard, StatsCardHeah } from '@/features/home/stats/Stats.style';

const stats = [
  {
    name: 'Backed by',
    value: '15+',
    subTitle: 'Years of Experience'
  },
  {
    name: 'Expertise in',
    value: '49+',
    subTitle: 'Entrance and Scholarships Exmas'
  },
  {
    name: 'With Over',
    value: '3000+',
    subTitle: 'Students Tutored'
  },
];

const Stats = () => {
  return (
    <StatsContentWrapper>
      <AppContentWrapper>
        <StatsCardHeah>
          <Grid container columnSpacing={'22px'} columns={24}>
            {stats.map((stat, index) => (
              <>
                <Grid item xs={12} md={8} key={index}>
                  <StatsCard>
                    <StatCardHeading variant='h4'>{stat.name}</StatCardHeading>
                    <StatCardValue variant='h2'>{stat.value}</StatCardValue>
                    <StatCardHeading variant='h4'>{stat.subTitle}</StatCardHeading>
                  </StatsCard>
                </Grid>
              </>
            ))}
          </Grid>
        </StatsCardHeah>
      </AppContentWrapper>
    </StatsContentWrapper>
  );
};

export default Stats;