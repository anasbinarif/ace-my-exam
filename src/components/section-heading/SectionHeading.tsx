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
  return (
    <CommonHeadingContainer align={align}>
      {showLeftLine && (
        <CommonHeadingLeftLine hasLeftLine={showLeftLine} />
      )}
      <CommonHeadingTypography variant="h6" textColor={color} textSize={textWidth || 'fit-content'}>
        {text}
      </CommonHeadingTypography>
      <CommonHeadingRightLine gradientType={gradientType} hasLeftLine={true} />
    </CommonHeadingContainer>
  );
};

export default SectionHeading;
