'use client';
import { Box, List, ListItem, styled, Typography } from '@mui/material';

export const PricingCardWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  boxShadow: ' 0px 4px 40.1px 0px rgba(0, 0, 0, 0.13)',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    maxWidth:'358px',
    margin: '0 auto'
  },
}));

export const PricingCardImageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '290px',
  position: 'relative',
  borderRadius: '20px 20px 0 0',
  overflow: 'hidden',
  [theme.breakpoints.down('xl')]: {
    minHeight: '250px',
  },
  [theme.breakpoints.down('lg')]: {
    minHeight: '284px',
  },
}));

export const PricingCardContentWrapper = styled(Box)(({ theme }) => ({
  padding: '20px 39px 27px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  [theme.breakpoints.down('xl')]: {
    padding: '15px',
  },
}));

export const PricingCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '28px',
  backgroundColor: '#DA9694',
  color: '#fff',
  width: '200px',
  height: '57px',
  borderRadius: '12px',
  textTransform:'capitalize',
  position: 'absolute',
  right: '15px',
  top: '208px',
  display: 'flex',
  alignItems: 'center',
  justifyContent:' center',
  lineHeight: 'none',
  zIndex: '2',
  boxShadow: ' 0px 4px 40.1px 0px rgba(0, 0, 0, 0.13)',
  [theme.breakpoints.down('xl')]: {
    fontSize: '24px',
    width: '150px',
    height: '50px',
    top: '170px',
  },
  [theme.breakpoints.down('lg')]: {
    top: '208px',
    fontSize: '20px',
    width: '120px',
    height: '40px',
  },
}));

export const PricingCardList = styled(List)(({ theme }) => ({
  padding: 0,
  width: '100%',
  marginBottom: '20px',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '10px',
  },
}));

export const PricingCardListItem = styled(ListItem)({
  color: '#000',
  display: 'flex',
  alignItems:'center',
  padding: '4px 0',
});

export const PricingCardTextHead = styled(Box)({
  display: 'flex',
  alignItems:'center',
  flex: 1,
});

export const PricingCardListItemText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 400,
  color: '#000000',
  fontFamily: 'Lato, sans-serif',
  textTransform:'capitalize',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
  },
}));

export const PricingCardListItemTextPricing = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 700,
  color: '#DA9694',
  fontFamily: 'Lato, sans-serif',
  textTransform:'capitalize',
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
  },
}));