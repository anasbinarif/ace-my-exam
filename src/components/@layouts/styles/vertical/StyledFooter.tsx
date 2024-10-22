// Third-party Imports
import styled from '@emotion/styled';
import type { CSSObject } from '@emotion/styled';

// Config Imports
import { verticalLayoutClasses } from '@/components/@layouts/utils/layoutClasses';
import themeConfig from '@/utils/configs/themeConfig';

// Util Imports

type StyledFooterProps = {
  overrideStyles?: CSSObject
}

const StyledFooter = styled.footer<StyledFooterProps>`
  margin-inline: auto;
  max-inline-size: ${themeConfig.compactContentWidth}px;

  & .${verticalLayoutClasses.footerContentWrapper} {
    padding-block: 15px;
    padding-inline: ${themeConfig.layoutPadding}px;
  }

  ${({ overrideStyles }) => overrideStyles}
`;

export default StyledFooter;
