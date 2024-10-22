'use client';

// Third-party Imports
import classnames from 'classnames';

import type { ChildrenType } from '@/components/@core/types';

// Type Imports

// Util Imports
import { blankLayoutClasses } from './utils/layoutClasses';

const BlankLayout = ({ children }: ChildrenType) => {
  return <div className={classnames(blankLayoutClasses.root, 'is-full bs-full')}>{children}</div>;
};

export default BlankLayout;
