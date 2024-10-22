'use client';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Tooltip from '@mui/material/Tooltip';
import classnames from 'classnames';
import Link from 'next/link';
import type { ReactElement, ReactNode, SyntheticEvent } from 'react';
import { useRef, useState } from 'react';

import type { OptionsMenuType, OptionType, OptionMenuItemType } from './types';

const IconButtonWrapper = (props: Pick<OptionsMenuType, 'tooltipProps'> & { children: ReactElement }) => {
  // Props
  const { tooltipProps, children } = props;

  return tooltipProps?.title ? <Tooltip {...tooltipProps}>{children}</Tooltip> : children;
};

const MenuItemWrapper = ({ children, option }: { children: ReactNode; option: OptionMenuItemType }) => {
  if (option.href) {
    return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Box component={Link as any} href={option.href} {...option.linkProps}>
        {children}
      </Box>
    );
  } else {
    return <>{children}</>;
  }
};

const OptionMenu = (props: OptionsMenuType) => {
  // Props
  const { tooltipProps, icon, iconClassName, options, leftAlignMenu, iconButtonProps } = props;

  // States
  const [open, setOpen] = useState(false);

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <IconButtonWrapper tooltipProps={tooltipProps}>
        <IconButton ref={anchorRef} size='small' onClick={handleToggle} {...iconButtonProps}>
          {typeof icon === 'string' ? (
            <i className={classnames(icon, iconClassName)} />
          ) : (icon as ReactNode) ? (
            icon
          ) : (
            <i className={classnames('ri-more-2-line', iconClassName)} />
          )}
        </IconButton>
      </IconButtonWrapper>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement={leftAlignMenu ? 'bottom-start' : 'bottom-end'}
        transition
        disablePortal
        sx={{ zIndex: 1 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper className='shadow-lg'>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  {options.map((option: OptionType, index: number) => {
                    if (typeof option === 'string') {
                      return (
                        <MenuItem key={index} onClick={handleClose}>
                          {option}
                        </MenuItem>
                      );
                    } else if ('divider' in option) {
                      return option.divider && <Divider key={index} {...option.dividerProps} />;
                    } else {
                      return (
                        <MenuItem
                          key={index}
                          {...option.menuItemProps}
                          {...(option.href && { className: 'p-0' })}
                          onClick={e => {
                            handleClose(e);
                            if (option.menuItemProps && option.menuItemProps.onClick)
                              option.menuItemProps.onClick(e);
                          }}
                        >
                          <MenuItemWrapper option={option}>
                            {(typeof option.icon === 'string' ? <i className={option.icon} /> : option.icon) || null}
                            {option.text}
                          </MenuItemWrapper>
                        </MenuItem>
                      );
                    }
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default OptionMenu;
