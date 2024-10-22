import styled from '@emotion/styled';

import type { MenuProps } from '../../components/vertical-menu/Menu';
import { menuClasses } from '../../utils/menuClasses';

const StyledVerticalMenu = styled.nav<Pick<MenuProps, 'rootStyles'>>`
  & > ul > :first-of-type {
    margin-block-start: 0;
  }
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`;

export default StyledVerticalMenu;
