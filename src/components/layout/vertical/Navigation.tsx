'use client';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { useRef } from 'react';

import navigationCustomStyles from '@/components/@core/styles/vertical/navigationCustomStyles';
import useVerticalNav from '@/components/@menu/hooks/useVerticalNav';
import VerticalNav, { NavHeader } from '@/components/@menu/vertical-menu';
import Logo from '@/components/layout/shared/Logo';

import VerticalMenu from './VerticalMenu';

const StyledBoxForShadow = styled('div')(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  transition: 'opacity .15s ease-in-out',
  background: `linear-gradient(var(--mui-palette-background-default) 5%, rgb(0,0,0) / 0.85) 30%, rgb(0,0,0) / 0.5) 65%, rgb(0,0,0) / 0.3) 75%, transparent)`,
  '&.scrolled': {
    opacity: 1
  }
}));

const Navigation = () => {
  // Hooks
  const theme = useTheme();
  const { isBreakpointReached, toggleVerticalNav } = useVerticalNav();

  // Refs
  const shadowRef = useRef(null);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollMenu = (container: any, isPerfectScrollbar: boolean) => {
    container = isBreakpointReached || !isPerfectScrollbar ? container.target : container;

    if (shadowRef && container.scrollTop > 0) {
      // @ts-expect-error dom
      if (!shadowRef.current.classList.contains('scrolled')) {
        // @ts-expect-error dom
        shadowRef.current.classList.add('scrolled');
      }
    } else {
      // @ts-expect-error dom
      shadowRef.current.classList.remove('scrolled');
    }
  };

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav customStyles={navigationCustomStyles(theme)}>
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        <Link href='/'>
          <Logo />
        </Link>
        {isBreakpointReached && <i className='ri-close-line text-xl' onClick={() => toggleVerticalNav(false)} />}
      </NavHeader>
      <StyledBoxForShadow ref={shadowRef} />
      <VerticalMenu scrollMenu={scrollMenu} />
    </VerticalNav>
  );
};

export default Navigation;
