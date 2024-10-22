'use client';
import type { CSSObject } from '@emotion/styled';
import classnames from 'classnames';
import { ReactNode } from 'react';

import StyledHeader from '@/components/@layouts/styles/vertical/StyledHeader';
import { verticalLayoutClasses } from '@/components/@layouts/utils/layoutClasses';

type Props =  { 
  children?: ReactNode
  overrideStyles?: CSSObject
}

const Navbar = (props: Props) => {
  // Props
  const { overrideStyles } = props;

  return (
    <StyledHeader
      overrideStyles={overrideStyles}
      className={classnames(
        verticalLayoutClasses.header,
        verticalLayoutClasses.headerContentCompact,
        verticalLayoutClasses.headerStatic,
        verticalLayoutClasses.headerDetached
      )}
    >
      <div className={classnames(verticalLayoutClasses.navbar, 'flex bs-full')}></div>
    </StyledHeader>
  );
};

export default Navbar;
