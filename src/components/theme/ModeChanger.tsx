// React Imports
import { useColorScheme } from '@mui/material/styles';
import { useEffect } from 'react';

// MUI Imports

// Hook Imports
import { useSettings } from '@/components/@core/hooks/useSettings';

const ModeChanger = () => {
  // Hooks
  const { setMode } = useColorScheme();
  const { settings } = useSettings();

  useEffect(() => {
    if (settings.mode) {
      setMode(settings.mode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.mode]);

  return null;
};

export default ModeChanger;
