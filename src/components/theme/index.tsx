'use client';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  extendTheme,
  lighten,
  darken
} from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { deepmerge } from '@mui/utils';
import { useMemo } from 'react';

// MUI Imports
import type { } from '@mui/material/themeCssVarsAugmentation'; //! Do not remove this import otherwise you will get type errors while making a production build
import type { } from '@mui/lab/themeAugmentation'; //! Do not remove this import otherwise you will get type errors while making a production build
import { useSettings } from '@/components/@core/hooks/useSettings';
import defaultCoreTheme from '@/components/@core/theme';
import type { ChildrenType, Direction } from '@/components/@core/types';
import primaryColorConfig from '@/utils/configs/primaryColorConfig';
import themeConfig from '@/utils/configs/themeConfig';

import ModeChanger from './ModeChanger';

type Props = ChildrenType & {
  direction: Direction
}

const ThemeProvider = (props: Props) => {
  // Props
  const { children, direction } = props;

  // Hooks
  const { settings } = useSettings();

  // Merge the primary color scheme override with the core theme
  const theme = useMemo(() => {
    const newColorScheme = {
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: primaryColorConfig[0].main,
              light: lighten(primaryColorConfig[0].main as string, 0.2),
              dark: darken(primaryColorConfig[0].main as string, 0.1)
            }
          }
        },
        dark: {
          palette: {
            primary: {
              main: primaryColorConfig[0].main,
              light: lighten(primaryColorConfig[0].main as string, 0.2),
              dark: darken(primaryColorConfig[0].main as string, 0.1)
            }
          }
        }
      }
    };

    const coreTheme = deepmerge(defaultCoreTheme('light', direction), newColorScheme);

    return extendTheme(coreTheme);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.mode]);

  return (
    <AppRouterCacheProvider options={{ prepend: true }}>
      <CssVarsProvider
        theme={theme}
        defaultMode={settings.mode}
        modeStorageKey={`${themeConfig.templateName.toLowerCase().split(' ').join('-')}-mui-template-mode`}
      >
        <>
          <ModeChanger />
          <CssBaseline />
          {children}
        </>
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeProvider;
