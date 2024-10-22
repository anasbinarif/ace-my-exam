import IconButton from '@mui/material/IconButton';
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { verticalLayoutClasses } from '@/components/@layouts/utils/layoutClasses';
import ModeDropdown from '@/components/layout/shared/ModeDropdown';
import NavSearch from '@/components/layout/shared/search';
import UserDropdown from '@/components/layout/shared/UserDropdown';

import NavToggle from './NavToggle';

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-2 sm:gap-4'>
        <NavToggle />
        <NavSearch />
      </div>
      <div className='flex items-center'>
        <Link
          className='flex mie-2'
          href={`https://github.com/themeselection/${process.env.NEXT_PUBLIC_REPO_NAME}`}
          target='_blank'
        >
          <Image
            src={`https://img.shields.io/github/stars/themeselection/${process.env.NEXT_PUBLIC_REPO_NAME}`}
            alt='GitHub Repo stars'
            height={24}
          />
        </Link>
        <ModeDropdown />
        <IconButton className='text-textPrimary'>
          <i className='ri-notification-2-line' />
        </IconButton>
        <UserDropdown />
      </div>
    </div>
  );
};

export default NavbarContent;
