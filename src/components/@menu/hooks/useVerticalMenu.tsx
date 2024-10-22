import { useContext } from 'react';

import type { VerticalMenuContextProps } from '../components/vertical-menu/Menu';
import { VerticalMenuContext } from '../components/vertical-menu/Menu';

const useVerticalMenu = (): VerticalMenuContextProps => {
  // Hooks
  const context = useContext(VerticalMenuContext);

  if (context === undefined) {
    //TODO: set better error message
    throw new Error('Menu Component is required!');
  }

  return context;
};

export default useVerticalMenu;
