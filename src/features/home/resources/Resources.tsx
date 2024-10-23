import { Box } from '@mui/material';

import { Button } from '@/components/buttons/Button.style';
import SectionHeading from '@/components/section-heading/SectionHeading';
import {
  ResourcesWrapper,
  ResourcesHeading,
  ResourceGrid,
  ResourceCard,
  ResourcesCardHeading,
  ResourcesImageContainer,
  ResourcesImage,
  ResourcesImageOverlay,
  ResourcesCardSubHeading
} from '@/features/home/resources/Resources.style';

const cardsData = [
  {
    subTitle: 'AQA, AQA, EDEXCEL, OCR, & CIE',
    title: 'Alevel Maths Resources',
    image: '/home/Resources1.webp',
    buttonText: 'Get Started'
  },
  {
    subTitle: 'AQA, EDEXCEL, OCR, & CIE',
    title: 'GCSE/IGCSE Maths Resources',
    image: '/home/Resources2.webp',
    buttonText: 'Get Started'
  },
  {
    subTitle: 'AQA, EDEXCEL, OCR, & CIE',
    title: 'GCSE/IGCSE Science Resources',
    image: '/home/Resources3.webp',
    buttonText: 'Get Started'
  },
  {
    subTitle: 'Math & Science',
    title: 'Entrance & scholarship Exams Resources',
    image: '/home/Resources3.webp',
    buttonText: 'Get Started'
  }
];

const Resources: React.FC = () => {
  return (
    <ResourcesWrapper>
      <SectionHeading
        text='Start Resources'
        align='center'
        showLeftLine={true}
        color='#DA9694'
        textWidth='160px'
        gradientType="second"
      />
      <ResourcesHeading variant='h2'>
        The Key to Your Academic Success
      </ResourcesHeading>

      <ResourceGrid container columns={24} spacing={'17px'}>
        {cardsData.map((card, index) => (
          <ResourceGrid key={index} size={{ xs: 24, md: 12 }}>
            <ResourceCard key={index}>
              <ResourcesImageContainer>
                <ResourcesImage
                  src={card.image}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt='Resources background'
                />
                <ResourcesImageOverlay />
              </ResourcesImageContainer>
              <ResourcesCardSubHeading className='resources-subtitle'>{card.subTitle}</ResourcesCardSubHeading>
              <ResourcesCardHeading>{card.title}</ResourcesCardHeading>
              <Box>
                <Button
                  special
                  fontSize='16px'
                  borderRadius='50px'
                  width='212px'
                  height='60px'
                >
                  {card.buttonText}
                </Button>
              </Box>
            </ResourceCard>
          </ResourceGrid>
        ))}
      </ResourceGrid>
    </ResourcesWrapper>
  );
};

export default Resources;
