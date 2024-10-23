'use client';

import { Box, List, ListItem, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const FooterMain = styled(Box)({
  backgroundColor: '#DA9694',
});

const FooterContainer = styled(Box)({
  maxWidth: '1740px',
  width: '100%',
  margin: '0 auto',
  borderRadius: '20px 20px 0 0',
  padding: '22px 20px',
});

const FooterWrapper = styled(Box)(({ theme }) =>({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'start',
    flexWrap: 'wrap',
  },
}));

const FooterLinksContainer = styled(List)(({ theme }) =>({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '50%',
    flexDirection: 'column',
    alignItems: 'end',
  },
}));

const FooterLogoHead = styled(Link)(({ theme }) =>({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '50%'
  },
}));

const FooterMediaIcons = styled(List)(({ theme }) =>({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '150px',
    justifyContent: 'center',
    transform: 'translateY(-46px)'
  },
}));

const FooterMediaItem = styled(ListItem)(({ theme }) => ({
  padding: '0',
  paddingLeft: '18px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, filter 0.3s ease',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '6px',
  },
  '&:hover': {
    filter: 'brightness(0) saturate(100%) invert(61%) sepia(68%) saturate(5764%) hue-rotate(316deg) brightness(93%) contrast(82%)',
    transform: 'scale(1.2)' 

  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  fontWeight: 400,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontStyle: 'normal',
  fontFamily: 'Lato, sans-serif',
  margin: '0 36px',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('md')]: {
    margin: '0 10px',
    fontSize: '13px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px 0',
    textAlign: 'end',
    width: '100%',
    fontSize: '15px',
  },
  '&:hover':{
    color: '#DA5077',
    transition: 'all 0.3s ease',
  },
}));

const FooterHeading = styled(Typography)({
  color: '#fff',
  fontWeight: 400,
  fontSize: '15px',
  textTransform: 'capitalize',
  fontStyle: 'normal',
  fontFamily: 'Lato, sans-serif',
  marginLeft: '6.5px',
  whiteSpace: 'nowrap',
});

const Footer: FC = () => {
  const pages = ['Home', 'Resources', 'About', 'Contact Us'];

  return (
    <>
      <FooterMain>
        <FooterContainer>
          <FooterWrapper>
            <FooterLogoHead href={'/'}>
              <Image src={'/white-logo.png'} width={52} height={49} alt='Logo' />
              <FooterHeading variant="h2">Acemyexam</FooterHeading>
            </FooterLogoHead>

            <FooterLinksContainer>
              {pages.map((page, index) => (
                <ListItem key={index} sx={{ p: 0 }}>
                  <FooterLink href={page === 'Contact' ? '/contact' : '/'}>
                    {page}
                  </FooterLink>
                </ListItem>
              ))}
            </FooterLinksContainer>

            <FooterMediaIcons>
              <FooterMediaItem>
                <Image src={'/footer/Youtube.svg'} width={24} height={24} alt='youtube' />
              </FooterMediaItem>
              <FooterMediaItem>
                <Image src={'/footer/Facebook.svg'} width={19} height={19} alt='facebook' />
              </FooterMediaItem>
              <FooterMediaItem>
                <Image src={'/footer/Instagram.svg'} width={19} height={19} alt='instagram' />
              </FooterMediaItem>
            </FooterMediaIcons>
          </FooterWrapper>
        </FooterContainer>
      </FooterMain>
    </>
  );
};

export default Footer;
