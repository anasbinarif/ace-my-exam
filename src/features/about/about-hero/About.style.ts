'use client';

import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
});

export const AboutHeroHeading = styled(CommonHeroTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '49px',
  marginTop: '25px',
  marginBottom: '10px',
  lineHeight: '53px',
  fontFamily: 'Jost, sans-serif',
  maxWidth: '600px',
  textTransform: 'capitalize',
  color: '#fff',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    maxWidth: '450px',
    lineHeight: 'normal',
    marginTop: '20px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
    marginTop: '10px',
  },
}));

export const AboutHeroContent = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '18px',
  marginBottom: '20px',
  fontFamily: 'Lato, sans-serif',
  maxWidth: '779px',
  color: '#fff',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  }
}));

export const AboutHeroWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    width: '100%',
    height: '150px',
    backgroundColor: '#fffbfb',
    borderRadius: 'var(--dynamic-border-radius)', 
    zIndex: '0',
    [theme.breakpoints.down('lg')]: {
      borderRadius: '50px 50px 0 0',
    },
  },
}));

export const AboutHeroImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'top',
});

export const AboutHeroImageContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
});

export const AboutHeroImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(106deg, rgba(0, 0, 0, 0.29) 0.91%, rgba(218, 150, 148, 0.45) 99.09%)',
});

export const AboutHeroContentContainer = styled(Box)(({ theme }) => ({
  padding: '265px 0 244px',
  [theme.breakpoints.down('lg')]: {
    padding: '180px 0 300px',
    flexWrap: 'wrap'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '160px 0 280px',
  },
  [theme.breakpoints.down(400)]: {
    padding: '100px 0 240px',
  },
}));