'use client';

import {
  Avatar,
  Box,
  IconButton,
  MenuItem,
  styled,
} from '@mui/material';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

import { Button as StyledButton } from '@/components/buttons/Button.style';
import { AppContentWrapper } from '@/components/common/Global.style';
import LoginModal from '@/features/auth/login/LoginModal';
import SignUpModal from '@/features/auth/sign-up/SignUpModal';

import {
  CommonMenu,
  DropdownMenuWrapper,
  IconHeadBlack,
  NavbarButtonsContainer,
  NavbarContainer,
  NavbarContentWrapper,
  NavbarLink,
  NavbarLinksContainer,
  NavbarLinkWrapper,
  NavbarLogoHead,
  NavTypography,
  SmallScreenList,
  NavbarDrawer,
  AvatarDropdownMenuWrapper,
  DropdownIcon,
} from './Navbar.style';

const pages = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Resources', link: '/' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Contact', link: '/contact' },
];

const resources = ['Alevel Maths', 'GCSE/IGCSE Maths', 'GCSE/IGCSE Science', 'Entrance & Scholarship Exams'];

const Navbar: React.FC = () => {
  const session = useSession();

  // const _isHomeOrAbout = pathname === '/' || pathname === '/about';
  // const _isContactOrPricing = pathname === '/contact' || pathname === '/pricing' || pathname === '/feedback';

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const open = Boolean(anchorEl);
  const avatarOpen = Boolean(avatarAnchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAvatarAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAvatarClose = () => {
    setAvatarAnchorEl(null);
  };

  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenSignUp(false);
  };

  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenSignUp = () => {
    setOpenSignUp(true);
    setOpenLogin(false);
  };

  const handleCloseSignUp = () => setOpenSignUp(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <NavbarContainer position="fixed">
        <AppContentWrapper>
          <NavbarContentWrapper>
            <NavbarLogoHead href="/">
              <Image src={'/logo.png'} width={52} height={49} alt="Logo" />
            </NavbarLogoHead>

            <NavbarLinksContainer sx={{ display: { xs: 'none', lg: 'flex' } }}>
              {pages.map((page, index) =>
                page.name === 'Resources' ? (
                  <DropdownMenuWrapper key={index}>
                    <NavbarLinkWrapper>
                      <NavbarLink
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        href=""
                      >
                        {page.name}
                        <DropdownIcon src="/icons/down-black.svg" alt="dropdown-icon" open={open} width={12} height={9} />
                      </NavbarLink>
                    </NavbarLinkWrapper>

                    <CommonMenu
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock={true}
                      transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    >
                      {resources.map((resource, idx) => (
                        <MenuItem key={idx} onClick={handleClose}>
                          {resource}
                        </MenuItem>
                      ))}
                    </CommonMenu>
                  </DropdownMenuWrapper>
                ) : (
                  <NavbarLinkWrapper key={index} smallSR={false}>
                    <NavbarLink href={page.link}>{page.name}</NavbarLink>
                  </NavbarLinkWrapper>
                )
              )}
            </NavbarLinksContainer>

            <NavbarButtonsContainer sx={{ display: { xs: 'none', lg: 'flex' } }}>
              {/* Avatar Dropdown for logged-in user, were going to use it in future */}
              {session.data ? (
                <AvatarDropdownMenuWrapper>
                  <IconButton onClick={handleAvatarClick}>
                    <Avatar src="" alt="User Avatar" />
                  </IconButton>
                  <CommonMenu
                    id="avatar-menu"
                    anchorEl={avatarAnchorEl}
                    open={avatarOpen}
                    onClose={handleAvatarClose}
                    disableScrollLock={true}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem>
                      <strong>John Doe</strong>
                    </MenuItem>
                    <MenuItem>john.doe@example.com</MenuItem>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={() => { signOut(); }}>Logout</MenuItem>
                  </CommonMenu>
                </AvatarDropdownMenuWrapper>
              ) : (
                <>
                  <StyledButton onClick={handleOpenLogin}>Login</StyledButton>
                  <StyledButton special onClick={handleOpenSignUp}>
                    Sign Up
                  </StyledButton>
                </>
              )}

              {/* Test Login/Sign Up buttons */}
            </NavbarButtonsContainer>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'block', lg: 'none' } }}
            >
              <Image src="/icons/menu.svg" alt="menu icon" width={24} height={24} style={{ filter: 'brightness(0%)' }} />
            </IconButton>

            <NavbarDrawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{ display: { xs: 'block', lg: 'none' } }}
            >
              <Box
                sx={{ maxWidth: 297, width: '90%', padding: '61px 58px' }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <SmallScreenList>
                  {pages?.map((page, index) => (
                    <NavbarLinkWrapper key={index} smallSR>
                      <NavbarLink href={page.link}>{page.name}</NavbarLink>
                    </NavbarLinkWrapper>
                  ))}
                </SmallScreenList>
                <Box sx={{ mt: 2 }}>
                  <NavTypography>Follow Us</NavTypography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <IconHeadBlack src="/icons/youtube.svg" alt="YouTube" width={17} height={12} />
                    <IconHeadBlack src="/icons/instagram.svg" alt="Instagram" width={14} height={14} />
                    <IconHeadBlack src="/icons/degree.svg" alt="degree" width={19} height={12} />
                  </Box>
                </Box>
                <NavbarButtonsContainer sx={{ display: { xs: 'flex', lg: 'none' }, mt: '20px' }}>
                  {session.data ? (
                    <StyledButton special sx={{
                      minWidth: '140px'
                    }} onClick={handleOpenSignUp}>
                      Your Account
                    </StyledButton>
                  ) : (
                    <>
                      <StyledButton onClick={handleOpenLogin}>Login</StyledButton>

                      <StyledButton special onClick={handleOpenSignUp}>
                          Sign Up
                      </StyledButton>
                    </>
                  )}
                </NavbarButtonsContainer>
              </Box>
            </NavbarDrawer>
          </NavbarContentWrapper>
        </AppContentWrapper>
      </NavbarContainer>

      <LoginModal open={openLogin} handleClose={handleCloseLogin} onSwitchToSignUp={handleOpenSignUp} />
      <SignUpModal open={openSignUp} handleClose={handleCloseSignUp} onSwitchToLogin={handleOpenLogin} />
    </>
  );
};

export default Navbar;

export const NavbarAvatar = styled(Avatar)({
  width: 30,
  height: 30,
  marginRight: '1.5rem',
});