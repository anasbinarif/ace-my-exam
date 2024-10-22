'use client';

// MUI Imports
import IconButton from '@mui/material/IconButton';

import useVerticalNav from '@/components/@menu/hooks/useVerticalNav';

// Hook Imports

const NavSearch = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav();

  return isBreakpointReached ? (
    <IconButton className='text-textPrimary'>
      <i className='ri-search-line' />
    </IconButton>
  ) : (
    <div className='flex items-center cursor-pointer gap-2'>
      <IconButton className='text-textPrimary'>
        <i className='ri-search-line' />
      </IconButton>
      <div className='whitespace-nowrap select-none text-textDisabled'>Search ⌘K</div>
    </div>
  );
};

export default NavSearch;
