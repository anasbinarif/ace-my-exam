import styled from '@emotion/styled';
import type { CSSObject } from '@emotion/styled';

import { menuButtonStyles } from '../../components/vertical-menu/MenuButton';
import type { MenuItemProps } from '../../components/vertical-menu/MenuItem';
import { menuClasses } from '../../utils/menuClasses';

type StyledVerticalMenuItemProps = Pick<MenuItemProps, 'rootStyles' | 'disabled'> & {
  level: number
  menuItemStyles?: CSSObject
  buttonStyles?: CSSObject
}

const StyledVerticalMenuItem = styled.li<StyledVerticalMenuItemProps>`
  position: relative;
  margin-block-start: 4px;
  ${({ menuItemStyles }) => menuItemStyles};
  ${({ rootStyles }) => rootStyles};

  > .${menuClasses.button} {
    ${({ level, disabled }) =>
    menuButtonStyles({
      level,
      disabled
    })};
    ${({ buttonStyles }) => buttonStyles};
  }
`;

export default StyledVerticalMenuItem;
