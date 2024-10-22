import styled from '@emotion/styled';
import type { CSSObject } from '@emotion/styled';

import type { MenuSectionProps } from '../../components/vertical-menu/MenuSection';
import { menuClasses } from '../../utils/menuClasses';

type StyledVerticalMenuSectionProps = Pick<MenuSectionProps, 'rootStyles' | 'children'> & {
  menuSectionStyles?: CSSObject
}

const StyledVerticalMenuSection = styled.li<StyledVerticalMenuSectionProps>`
  display: flex;
  inline-size: 100%;
  position: relative;
  overflow: hidden;
  margin-block-start: 15px;

  & .${menuClasses.menuSectionContent} {
    font-size: 14px;
    color: #aaaaaa;
  }

  ${({ menuSectionStyles }) => menuSectionStyles};
  ${({ rootStyles }) => rootStyles};
`;

export default StyledVerticalMenuSection;
