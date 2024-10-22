/*
 * We recommend using the merged theme if you want to override our core theme.
 * This means you can use our core theme and override it with your own customizations.
 * Write your overrides in the userTheme object in this file.
 * The userTheme object is merged with the coreTheme object within this file.
 * Export this file and import it in the `@components/theme/index.tsx` file to use the merged theme.
 */
import type { Theme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import type { Settings } from '@/components/@core/contexts/settingsContext';
import coreTheme from '@/components/@core/theme';
import type { SystemMode } from '@/components/@core/types';

const mergedTheme = (settings: Settings, mode: SystemMode, direction: Theme['direction']) => {
  // Vars
  const userTheme = {
    // Write your overrides here.
  } as Theme;

  return deepmerge(coreTheme(mode, direction), userTheme);
};

export default mergedTheme;
