'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import type { CSSProperties } from 'react';

type LogoTextProps = {
  color?: CSSProperties['color']
}

const LogoText = styled.span<LogoTextProps>`
  color: ${({ color }) => color ?? 'var(--mui-palette-text-primary)'};
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  margin-inline-start: 10px;
`;

const Logo = ({ color: _color }: { color?: CSSProperties['color'] }) => {
  return (
    <div className='flex items-center min-bs-[24px]'>
      <Image src={'/logo.png'} width={32} height={32} alt={'Logo'} style={{
        filter: 'brightness(0) invert(1)'
      }} />
      <LogoText color={'white'}>Ace my exams</LogoText>
    </div>
  );
};

export default Logo;
