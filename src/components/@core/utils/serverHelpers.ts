import 'server-only';
import { cookies } from 'next/headers';

import type { Settings } from '@/components/@core/contexts/settingsContext';
import type { SystemMode } from '@/components/@core/types';
import themeConfig from '@/utils/configs/themeConfig';

export const getSettingsFromCookie = (): Settings => {
  const cookieStore = cookies();

  const cookieName = themeConfig.settingsCookieName;

  return JSON.parse(cookieStore.get(cookieName)?.value || '{}');
};

export const getMode = () => {
  const settingsCookie = getSettingsFromCookie();

  // Get mode from cookie or fallback to theme config
  const _mode = settingsCookie.mode || themeConfig.mode;

  return _mode;
};

export const getSystemMode = (): SystemMode => {
  const mode = getMode();

  return mode;
};

export const getServerMode = () => {
  const mode = getMode();

  return mode;
};
