import { useColorScheme } from '@mui/material';
import { useMemo } from 'react';

import type { Mode } from '@/components/@core/types';

export const useImageVariant = (mode: Mode, imgLight: string, imgDark: string): string => {
  // Hooks
  const { mode: muiMode } = useColorScheme();

  return useMemo(() => {
    const isServer = typeof window === 'undefined';

    const currentMode = (() => {
      if (isServer) return mode;

      return muiMode;
    })();

    const isDarkMode = currentMode === 'dark';

    return isDarkMode ? imgDark : imgLight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, muiMode]);
};
