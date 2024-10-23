'use client';

import { styled, Typography, Box,  } from '@mui/material';
import Link from 'next/link';

export const TestimonialsWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '150px 0 120px',
  textAlign: 'center',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    padding: '100px 0 ',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '80px 0 ',
  },
  [theme.breakpoints.down(400)]: {
    padding: '60px 0 ',
  },
}));

export const TestimonialsHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '49px',
  color: '#000000',
  fontFamily: 'Jost, sans-serif',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
  },
}));

export const TestimonialsPara = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '16px',
  color: '#686868',
  [theme.breakpoints.down(576)]: {
    fontSize: '14px',
  },
}));

export const TestimonialsLink = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '16px',
  color: '#DA9694 ',
  fontFamily: 'Lato, sans-serif',
  transition: 'all 0.3s ease',
  '&:hover':{
    color: '#DA5077',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '14px',
  },
}));