'use client';
import classnames from 'classnames';

import type { ChildrenType } from '@/components/@core/types';
import StyledMain from '@/components/@layouts/styles/shared/StyledMain';
import { verticalLayoutClasses } from '@/components/@layouts/utils/layoutClasses';

const LayoutContent = ({ children }: ChildrenType) => {
  return (
    <StyledMain
      isContentCompact={true}
      className={classnames(verticalLayoutClasses.content, verticalLayoutClasses.contentCompact, 'flex-auto is-full')}
    >
      {children}
    </StyledMain>
  );
};

export default LayoutContent;
