'use client';

import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

import { Button as StyledButton } from '@/components/buttons/Button.style';
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
  NavbarLinkWrapper,
  NavbarLinksContainer,
  NavbarLogoHead,
  NavTypography,
  SmallScreenList,
  NavbarDrawer,
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
  const pathname = usePathname();
  const session = useSession();

  const isHomeOrAbout = pathname === '/' || pathname === '/about';
  const isContactOrPricing = pathname === '/contact' || pathname === '/pricing' || pathname === '/feedback';

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

  // Toggle Drawer
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Toolbar disableGutters>
      <NavbarContainer position="fixed">
        <NavbarContentWrapper>
          <NavbarLogoHead href="/">
            {isHomeOrAbout && <Image src={isMobile ? '/white-logo.png' : '/logo.png'} width={52} height={49} alt="Logo" />}

            {isContactOrPricing && <Image src={'/logo.png'} width={52} height={49} alt="Logo" />}
          </NavbarLogoHead>

          <NavbarLinksContainer sx={{ display: { xs: 'none', md: 'flex' } }}>
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

          <NavbarButtonsContainer sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {session?.data ? (
              <NavbarUserMenu />
            ) : (
              <>
                <StyledButton onClick={handleOpenLogin}>Login</StyledButton>
                <StyledButton special onClick={handleOpenSignUp}>
                  Sign Up
                </StyledButton>
              </>
            )}
          </NavbarButtonsContainer>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <Image
              src="/icons/menu.svg"
              alt="menu icon"
              width={24}
              height={24}
              style={{
                filter: isContactOrPricing
                  ? 'brightness(0) saturate(100%) invert(0%) sepia(5%) saturate(7500%) hue-rotate(228deg) brightness(106%) contrast(106%)'
                  : 'none',
              }}
            />
          </IconButton>

          <NavbarDrawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{ display: { xs: 'block', md: 'none' } }}
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
              <NavbarButtonsContainer sx={{ display: { xs: 'flex', md: 'none' }, mt: '20px' }}>
                <StyledButton onClick={handleOpenLogin}>Login</StyledButton>
                <StyledButton special onClick={handleOpenSignUp}>
                  Sign Up
                </StyledButton>
              </NavbarButtonsContainer>
            </Box>
          </NavbarDrawer>
        </NavbarContentWrapper>
      </NavbarContainer>

      <LoginModal open={openLogin} handleClose={handleCloseLogin} onSwitchToSignUp={handleOpenSignUp} />
      <SignUpModal open={openSignUp} handleClose={handleCloseSignUp} onSwitchToLogin={handleOpenLogin} />
    </Toolbar>
  );
};

export default Navbar;

export const NavbarAvatar = styled(Avatar)({
  width: 30,
  height: 30,
  marginRight: '1.5rem',
});

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavbarUserMenu = () => {
  const { data: session } = useSession();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <NavbarAvatar alt={session?.user?.name || ''} src={session?.user?.image || '/icons/avatar.svg'} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
