'use client';
import type { CSSObject } from '@emotion/styled';
import classnames from 'classnames';

import type { ChildrenType } from '@/components/@core/types';
import StyledFooter from '@/components/@layouts/styles/vertical/StyledFooter';
import { verticalLayoutClasses } from '@/components/@layouts/utils/layoutClasses';

type Props = ChildrenType & {
  overrideStyles?: CSSObject
}

const Footer = (props: Props) => {
  // Props
  const { children, overrideStyles } = props;

  return (
    <StyledFooter
      overrideStyles={overrideStyles}
      className={classnames(
        verticalLayoutClasses.footer,
        verticalLayoutClasses.footerContentCompact,
        verticalLayoutClasses.footerStatic,
        verticalLayoutClasses.footerDetached,
        'is-full'
      )}
    >
      <div className={verticalLayoutClasses.footerContentWrapper}>{children}</div>
    </StyledFooter>
  );
};

export default Footer;
