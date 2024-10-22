import { forwardRef, useEffect, useState } from 'react';
import type { ForwardRefRenderFunction, HTMLAttributes, MutableRefObject } from 'react';

import type { VerticalMenuContextProps } from './Menu';
import StyledSubMenuContent from '../../styles/StyledSubMenuContent';
import styles from '../../styles/styles.module.css';
import type { ChildrenType, RootStylesType } from '../../types';

export type SubMenuContentProps = HTMLAttributes<HTMLDivElement> &
  RootStylesType &
  Partial<ChildrenType> & {
    open?: boolean
    transitionDuration?: VerticalMenuContextProps['transitionDuration']
    level?: number
  }

const SubMenuContent: ForwardRefRenderFunction<HTMLDivElement, SubMenuContentProps> = (props, ref) => {
  // Props
  const { children, open, level, transitionDuration, ...rest } = props;

  // States
  const [mounted, setMounted] = useState(false);

  // Refs
  const SubMenuContentRef = ref as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (mounted) {
      if (open) {
        const target = SubMenuContentRef?.current;

        if (target) {
          target.style.display = 'block';
          target.style.overflow = 'hidden';
          target.style.blockSize = 'auto';
          const height = target.offsetHeight;

          target.style.blockSize = '0px';

          target.style.blockSize = `${height}px`;

          setTimeout(() => {
            target.style.overflow = 'auto';
            target.style.blockSize = 'auto';
          }, transitionDuration);
        }
      } else {
        const target = SubMenuContentRef?.current;

        if (target) {
          target.style.overflow = 'hidden';
          target.style.blockSize = `${target.offsetHeight}px`;
          target.style.blockSize = '0px';

          setTimeout(() => {
            target.style.overflow = 'auto';
            target.style.display = 'none';
          }, transitionDuration);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, mounted, SubMenuContentRef]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <StyledSubMenuContent ref={ref} level={level} open={open} transitionDuration={transitionDuration} {...rest}>
      <ul className={styles.ul}>{children}</ul>
    </StyledSubMenuContent>
  );
};

export default forwardRef(SubMenuContent);
