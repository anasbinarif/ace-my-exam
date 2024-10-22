import { SettingsProvider } from '@/components/@core/contexts/settingsContext';
import type { ChildrenType, Direction } from '@/components/@core/types';
import { getMode, getSettingsFromCookie } from '@/components/@core/utils/serverHelpers';
import { VerticalNavProvider } from '@/components/@menu/contexts/verticalNavContext';
import ThemeProvider from '@/components/theme';
import UpgradeToProButton from '@/components/upgrade-to-pro-button';

type Props = ChildrenType & {
  direction: Direction
}

const Providers = (props: Props) => {
  // Props
  const { children, direction } = props;

  // Vars
  const mode = getMode();
  const settingsCookie = getSettingsFromCookie();

  return (
    <VerticalNavProvider>
      <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
        <ThemeProvider direction={direction}>
          {children}
          <UpgradeToProButton />
        </ThemeProvider>
      </SettingsProvider>
    </VerticalNavProvider>
  );
};

export default Providers;
