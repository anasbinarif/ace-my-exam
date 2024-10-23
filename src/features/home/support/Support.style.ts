'use client';

import { styled, Typography, Box, Divider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const SupportWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '110px 0 150px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '100px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.down(576)]: {
    padding: '60px 0',
  },
}));

export const SupportContentHead = styled(Box)({
  width: '100%',
});

export const SupportImageContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
});

export const SupportImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const SupportImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(84deg, rgb(218 150 148 / 80%) 0%, rgb(0 0 0 / 50%) 100%)',
});

export const SupportHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '49px',
  color: '#fff',
  fontFamily: 'Jost, sans-serif',
  fontStyle: 'normal',
  maxWidth: '825px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
  },
}));

export const SupportPara = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '16px',
  color: '#fff',
  fontFamily: 'Lato, sans-serif',
  fontStyle: 'normal',
  marginBottom: '69px',
  maxWidth: '779px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: 'normal',
    marginBottom: '30px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  }
}));

export const SupportCardDivider = styled(Divider)(({ theme }) => ({
  background: 'linear-gradient(to left, #FFFFFF 0%, #666666 46%, #FFFFFF 100%)',
  border: 'unset',
  width: '1px',
  [theme.breakpoints.down(576)]: {
    height: '1px',
    width: '100%',
  },
}));

export const SupportCardInnerHead = styled(Box)(({ theme }) => ({
  padding: '33px 48px',
  flex: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  textAlign: 'start',
  [theme.breakpoints.down('xl')]: {
    padding: '30px',
  },
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap'
  },
  [theme.breakpoints.down(576)]: {
    width: '100%',
    flex: 'unset',
    padding: '20px',
  },
}));

export const SupportCardBtnHead = styled(Box)(({ theme }) => ({
  background: '#DA9694',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '394px',
  [theme.breakpoints.down('xl')]: {
    width: '270px',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '20px 0'
  }
}));

export const SupportCard = styled(Box)(({ theme }) =>  ({
  borderRadius: '20px',
  backgroundColor: '#fff',
  boxShadow: '0px 10px 21.2px 0px rgba(0, 0, 0, 0.13)',
  height: '174px',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  position: 'absolute',
  bottom: '-37px',
  maxWidth: '1148px',
  opacity: 1,
  [theme.breakpoints.down('xl')]: {
    maxWidth: '95%',
  },
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    height: 'auto',
    maxWidth: '100%',
    position: 'unset',
  }
}));

export const SupportCardPara = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '14px',
  color: '#787878',
  fontFamily: 'Lato, sans-serif',
  fontStyle: 'normal',
  lineHeight: '22px',
  maxWidth: '315px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down(576)]: {
    maxWidth: '100%',
  }
}));

export const SupportButton = styled(Link)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 900,
  backgroundColor: '#DA9694',
  fontFamily: 'Lato, sans-serif',
  border: 'none',
  color: '#fff',
  textTransform: 'capitalize',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease, color 0.3s ease', 
  height: '100%',
  width: '100%',
  '& img': {
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    backgroundColor: '#DA5077',
    color: '#ffffff',
    '& img': {
      transform: 'translateX(10px)',
    },
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down(576)]: {
    display: 'flex',
    alignItems: 'center',
  },
}));