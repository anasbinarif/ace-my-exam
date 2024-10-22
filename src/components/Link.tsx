'use client';

// React Imports
import NextLink from 'next/link';
import { forwardRef } from 'react';
import type { ComponentProps, ForwardedRef, MouseEvent } from 'react';

// Next Imports

type Props = Omit<ComponentProps<typeof NextLink>, 'href' | 'onClick'> & {
  href?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

const Link = (props: Props, ref: ForwardedRef<HTMLAnchorElement>) => {
  // Props
  const { href, onClick, ...rest } = props;

  return (
    <NextLink
      ref={ref}
      {...rest}
      href={'/'}
      onClick={onClick ? e => onClick(e) : !href ? e => e.preventDefault() : undefined}
    />
  );
};

export default forwardRef(Link);
