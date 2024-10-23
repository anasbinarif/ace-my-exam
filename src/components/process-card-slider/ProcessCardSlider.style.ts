import { Box, Card, styled, Typography } from '@mui/material';

interface ProcessCardProps {
  active: boolean;
  index: number;
}

export const ProcessSliderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  position: 'relative',
  overflow: 'hidden',
  padding: '80px 30px',
  width: 'fit-content',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    padding: '60px 30px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '40px 30px 60px',
  },
}));

export const ProcessContent = styled(Box)({
  textAlign: 'start',
});

export const BaseTypography = styled(Typography)({
  fontFamily: 'Lato, sans-serif',
  textAlign: 'start',
});

export const ProcessCard = styled(Card)<ProcessCardProps>(({ theme, active, index }) => ({
  position: 'relative',
  marginLeft: active ? '0px' : index === 0 ? '0px': '-149px',
  width: '236px',
  height: '292px',
  cursor: 'pointer',
  padding: '17px 24px',
  boxShadow: '0px 4px 61.5px 0px rgba(0, 0, 0, 0.09)',
  backgroundColor: '#fff',
  borderRadius: '20px',
  overflow: 'hidden',
  transition: 'margin-left 0.4s ease, z-index 0.4s ease',
  zIndex: 10 - index,
  [theme.breakpoints.down(576)]: {
    width: '200px',
    padding: '15px 18px',
    marginLeft: active ? '0px' : index === 0 ? '0px': '-139px',
  },
}));

export const ProcessCardNumber = styled(BaseTypography)({
  color: '#DA9694',
  fontSize: '96px',
  fontWeight: 700,
  textAlign: 'end',
  background: 'linear-gradient(180deg, #DA9694 28.5%, rgba(218, 150, 148, 0.28) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const ProcessCardTitle = styled(BaseTypography)(({ theme }) => ({
  color: '#DA9694',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '22px',
  marginBottom: '3px',
  [theme.breakpoints.down(576)]: {
    fontSize: '14px',
  },
}));

export const ProcessCardDescription = styled(BaseTypography)(({ theme }) => ({
  color: '#929292',
  fontSize: '14px',
  fontWeight: 400,
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
  },
}));
