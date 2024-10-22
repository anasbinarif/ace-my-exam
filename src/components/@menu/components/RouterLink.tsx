'use client';
import Link from 'next/link';
import type { LinkProps } from 'next/link';
import { forwardRef } from 'react';

import type { ChildrenType } from '../types';

type RouterLinkProps = LinkProps &
  Partial<ChildrenType> & {
    className?: string;
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RouterLink = forwardRef((props: RouterLinkProps, ref: any) => {
  // Props
  const { href, className, ...other } = props;

  return (
    <Link ref={ref} href={href} className={className} {...other}>
      {props.children}
    </Link>
  );
});

RouterLink.displayName = 'RouterLink';
