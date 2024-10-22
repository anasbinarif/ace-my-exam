// Next Imports
import type { Theme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

import type { SystemMode } from '@/components/@core/types';

// MUI Imports

// Type Imports

// Theme Options Imports
import colorSchemes from './colorSchemes';
import customShadows from './customShadows';
import overrides from './overrides';
import shadows from './shadows';
import spacing from './spacing';
import typography from './typography';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] });

const theme = (mode: SystemMode, direction: Theme['direction']): Theme => {
  return {
    direction,
    components: overrides(),
    colorSchemes: colorSchemes(),
    ...spacing,
    shape: {
      borderRadius: 6,
      customBorderRadius: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10
      }
    },
    shadows: shadows(mode),
    typography: typography(inter.style.fontFamily),
    customShadows: customShadows(mode),
    mainColorChannels: {
      light: '46 38 61',
      dark: '46 38 61',
      lightShadow: '46 38 61',
      darkShadow: '46 38 61',
    }
  } as Theme;
};

export default theme;
