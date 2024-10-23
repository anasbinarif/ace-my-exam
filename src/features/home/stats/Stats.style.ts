'use client';

import { Box, styled, Typography, Card } from '@mui/material';

const CommonStatTypography = styled(Typography)({
  fontStyle: 'normal',
  fontFamily: 'Lato, sans-serif',
});

export const StatsContentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  transform: 'translateY(-290px)',
  padding: '39px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '50%',
    backgroundColor: '#fffbfb',
    borderRadius: 'var(--dynamic-border-radius, 0 0 0 0)', 
    zIndex: '-1',
    transition: 'border-radius 0.5s ease-in-out',
    [theme.breakpoints.down('md')]: {
      borderRadius: '30px 30px 0 0',
    },
  },
  [theme.breakpoints.down('lg')]: {
    transform: 'translateY(-280px)',
  },
  [theme.breakpoints.down('md')]: {
    transform: 'none',
    position: 'absolute',
    top: '-250px',
  },
  [theme.breakpoints.down('sm')]: {
    top: '-230px',
  },
  [theme.breakpoints.down(576)]: {
    top: '-190px',
  },
}));

export const StatsCardHead = styled(Box)({
  maxWidth: '1040px',
  margin: '0 auto',
});

export const StatsCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  background: '#FFF',
  boxShadow: '0px 4px 39.5px 0px rgba(0, 0, 0, 0.10)',
  padding: '56px 37px',
  textAlign: 'center',
  cursor: 'pointer',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '40px 20px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 15px',
  },
  [theme.breakpoints.down(576)]: {
    padding: '20px 7px',
  },
}));

export const StatCardHeading = styled(CommonStatTypography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '16px',
  color: '#111826',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '10px',
  },
}));

export const StatCardValue = styled(CommonStatTypography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '49px',
  color: '#DA9694',
  fontFamily: 'Jost, sans-serif',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)',
  margin: '14px 0',
  [theme.breakpoints.down('lg')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    margin: '8px 0',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '24px',
  },
}));
