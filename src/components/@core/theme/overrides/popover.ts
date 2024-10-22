// MUI Imports
import type { Theme } from '@mui/material/styles';

import type { Skin } from '@/components/@core/types';

// Type Imports

const popover = (skin: Skin): Theme['components'] => ({
  MuiPopover: {
    styleOverrides: {
      paper: {
        ...(skin === 'bordered'
          ? { boxShadow: 'none', border: '1px solid var(--mui-palette-divider)' }
          : {
            boxShadow: 'var(--mui-customShadows-sm)'
          })
      }
    }
  }
});

export default popover;
