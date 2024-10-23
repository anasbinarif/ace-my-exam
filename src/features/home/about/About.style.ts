'use client';

import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const AboutWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    paddingTop: '80px'
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '60px'
  },
  [theme.breakpoints.down(576)]: {
    paddingTop: '40px'
  },
}));

export const AboutImgHead = styled(Box)({
  width: '100%',
});

export const AboutOverlayHead = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: '52px',
  width: '300px',
  [theme.breakpoints.down(576)]: {
    right: '0px',
    top: '10px',
    width: '80%',
  },
}));

export const AboutCardTwoHead = styled(Box)({
  transform: 'translateX(-49px)'
});

export const AboutImage = styled(Image)(({ theme }) => ({
  width: '90%',
  height: '100%',
  objectFit: 'cover',
  boxShadow: '0px 4px 37.5px 0px rgba(0, 0, 0, 0.33)',
  borderRadius: '28px',
  [theme.breakpoints.down('lg')]: {
    width: '95%',
  },
}));

export const AboutContentHead = styled(Box)({
  width: '100%',
});

const CommonHeroTypography = styled(Typography)({
  fontWeight: 400,
  fontStyle: 'normal',
});

export const AboutHeading = styled(CommonHeroTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '49px',
  margin: '23px 0',
  fontFamily: 'Jost, sans-serif',
  maxWidth: '600px',
  color: '#000',
  [theme.breakpoints.down('xl')]: {
    fontSize: '30px',
    margin: '15px 0',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    lineHeight: 'normal',
    margin: '10px 0',
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

export const AboutPara = styled(CommonHeroTypography)(({ theme }) => ({
  fontSize: '16px',
  fontFamily: 'Lato, sans-serif',
  color: '#000',
  fontWeight: 400,
  marginBottom: '20px',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '10px'
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

export const AboutCardHeading = styled(CommonHeroTypography)<{ textColor: string }>(({ textColor }) => ({
  fontSize: '12px',
  fontFamily: 'Lato, sans-serif',
  color: textColor || '#000',
  fontWeight: 700,
  marginLeft: '12px'
}));

export const AboutCardContainer = styled(Box)<{ bgColor: string, alignment:string}>(({ theme, bgColor ,alignment}) => ({
  backgroundColor: bgColor,
  justifyContent: alignment,
  padding: '17px 14px',
  borderRadius: '20px',
  boxShadow: '0px 4px 13.6px 0px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  marginBottom: '8px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '4px',
    padding: '17px 10px',
  },
  [theme.breakpoints.down(576)]: {
    padding: '10px 10px',
    borderRadius: '12px',
  },
}));

export const AboutLink = styled(Link)({
  fontSize: '18px',
  marginBottom: '10px',
  fontFamily: 'Lato, sans-serif',
  color: '#DA9694',
  display: 'flex',
  alignItems: 'center',
  marginTop: '23px',
  '& img': {
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    color: '#DA5077',
    '& img': {
      transform: 'translateX(10px)',
      filter: 'brightness(0) saturate(100%) invert(58%) sepia(56%) saturate(5477%) hue-rotate(314deg) brightness(91%) contrast(86%)',
    },
  },
});