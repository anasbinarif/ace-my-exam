'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import { CommonHeadingContainer, CommonHeadingLeftLine, CommonHeadingRightLine, CommonHeadingTypography } from './SectionHeading.style';

interface SectionHeadingProps {
  text: string;
  align?: 'center' | 'start';  
  showLeftLine?: boolean;      
  color?: string;            
  textWidth?: string;   
  gradientType?: 'first' | 'second'; 
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  text, 
  align = 'center', 
  showLeftLine = true, 
  color = '#000', 
  textWidth, 
  gradientType = 'first' 
}) => {
  const rightLineRef = useRef<HTMLDivElement | null>(null); 
  const leftLineRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    if (rightLineRef.current) {
      gsap.fromTo(
        rightLineRef.current,
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1.5, ease: 'power3.out', transformOrigin: 'right' } 
      );
    }
    if (leftLineRef.current) {
      gsap.fromTo(
        leftLineRef.current,
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1.5, ease: 'power3.out', transformOrigin: 'left' } 
      );
    }
  }, []); 

  return (
    <CommonHeadingContainer align={align}>
      {showLeftLine && (
        <CommonHeadingLeftLine ref={leftLineRef} hasLeftLine={showLeftLine} />
      )}
      <CommonHeadingTypography variant="h6" textColor={color} textSize={textWidth || 'fit-content'}>
        {text}
      </CommonHeadingTypography>
      <CommonHeadingRightLine ref={rightLineRef} gradientType={gradientType} hasLeftLine={true} />
    </CommonHeadingContainer>
  );
};

export default SectionHeading;
