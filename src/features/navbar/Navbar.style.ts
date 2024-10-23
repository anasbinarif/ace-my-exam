import { AppBar, Box, Drawer, List, ListItem, Menu, styled, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const CommonNavbarBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',

});

export const CommonMenu = styled(Menu)({
  '& .MuiPaper-root': {
    borderRadius: '0 0 15px 15px',
    boxShadow: '0px 30px 20.5px 0 rgba(0,0,0,0.17)',
    background: '#FCFDFF',
    padding: '10px',
    paddingTop: '20px',
  },
  '& .MuiMenuItem-root': {
    color: '#000',
    fontWeight: 400,
    fontSize: '10px',
    textTransform: 'capitalize',
    fontFamily: 'Lato, sans-serif',
    borderRadius: '4px',
    padding: '8px',
    justifyContent: 'center'
  },
});

export const NavbarContainer = styled(AppBar)({
  width: '100%',
  marginTop: '20px !important',
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

export const NavbarContentWrapper = styled(Toolbar)({
  backgroundColor: '#FCFDFF',
  margin: '0 auto',
  width: '100%',
  borderRadius: '20px',
  boxShadow: '0 4px 37.5px 0 rgba(0,0,0,0.17)',
  height: '69px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
});

export const NavbarLinksContainer = styled(CommonNavbarBox)({});

export const NavbarButtonsContainer = styled(CommonNavbarBox)({
  justifyContent: 'space-between',
  gap: '11px',
  // width: '203px',
});

export const NavbarLogoHead = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    width: '203px',
  },
}));

export const NavbarDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    padding: '20px',
    borderRadius: '20px 0 0 20px',
    boxShadow: '0px 4px 39.5px 0px rgba(0, 0, 0, 0.10)',
  },
  '& .MuiBackdrop-root':{
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    backdropFilter: 'blur(14px)',
  }
});

export const NavbarLinkWrapper = styled(ListItem)<{ smallSR?: boolean }>(
  ({ theme, smallSR }) => ({
    margin: smallSR ? '12px 0' : '0 36px',
    textAlign: smallSR ? 'start' : 'center',
    padding: '0',
    [theme.breakpoints.down(1400)]: {
      margin: smallSR ? '12px 0' : '0 24px', 
    },
    [theme.breakpoints.down('xl')]: {
      margin: smallSR ? '12px 0' : '0 18px', 
    },
    [theme.breakpoints.down('lg')]: {
      margin: smallSR ? '12px 0' : '0 10px', 
    },

  })
);

export const NavbarLink = styled(Link)({
  color: '#000',
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontFamily: 'Lato, sans-serif',
  '&:hover':{
    color: '#DA5077',
    transition: 'all 0.3s ease',
  },
});

export const NavTypography = styled(Typography)({
  color: '#000',
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontFamily: 'Lato, sans-serif',
  marginBottom: '28px',
});

export const SmallScreenList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
});

export const DropdownMenuWrapper = styled(Box)({});

export const IconHeadBlack = styled(Image)({
  filter: 'brightness(0) saturate(100%) invert(0%) sepia(5%) saturate(7500%) hue-rotate(228deg) brightness(106%) contrast(106%)',
});

export const DropdownIcon = styled(Image)<{ open?: boolean }>(({ open }) => ({
  marginLeft: '8px',
  transition: 'transform 0.3s ease-in-out',
  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export const AvatarDropdownMenuWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});
