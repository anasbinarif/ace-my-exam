import Grid from '@mui/material/Grid2';
import Image from 'next/image';

import FadeIn from '@/components/animations/FadeIn';
import SectionHeading from '@/components/section-heading/SectionHeading';

import {
  FounderContent,
  FounderContentContainer,
  FounderHeading,
  FounderSubHeading,
  FounderWrapper,
  FounderList,
  FounderListItem,
  FounderImgHead,
  FounderCard,
  FounderCardInnerHead,
  FounderCardDivider,
  FounderCardHeading,
  FounderCardListText
} from './Founder.style';

const AboutFounder: React.FC = () => {
  const educationList = [
    {
      degree: 'PhD',
      subject: 'Image Processing/Computer Vision',
      institution: 'University College London',
    },
    {
      degree: 'MSc',
      subject: 'Computing Science',
      institution: 'Imperial College London',
    },
    {
      degree: 'BSc',
      subject: 'Physics (First Class Honours)',
      institution: 'Imperial College London',
    },
    {
      degree: 'A-levels',
      institution: 'All A grades: Chemistry, Physics, Maths, Urdu',
    },
    {
      degree: 'O-levels',
      institution: "9 A's and 2 B's",
    },
  ];

  const stats = [
    '99% of students improved by 2 to 5 grades.',
    'Many gained admission to top schools.',
    'Focus on both grades and intellectual growth.',
    'Track record of long-term academic success.',
  ];

  const philosophy = [
    'Unlock your full potential with personalized support.',
    'Lessons are customized to fit individual learning styles.',
    'Builds confidence while nurturing curiosity.',
    'Tailored approach leads to meaningful results.',
  ];

  const subjectsOffered = [
    'Maths: KS2 to A-level',
    'Science (Physics, Chemistry, Biology): KS2 to GCSE',
    'Independent School Exams: Scholarship, Common',
    'Entrance, 16+ exams',
  ];

  return (
    <FounderWrapper>
      <FounderContentContainer>
        <Grid container justifyContent={'center'} columns={24}>
          <Grid size={{ xs: 24, lg: 14 }} sx={{ px: {xs: '0', md: '15px'} }}>
            <FadeIn direction="up" distance={100} duration={1}>
              <SectionHeading
                text="Our Founder"
                align="start"
                showLeftLine={false}
                color="#000000"
                gradientType="second"
              />
              <FounderHeading>Dr. Asma Chaudhri</FounderHeading>
              <FounderSubHeading sx={{ mb: { xs: '20px', md: '30px' } }}>An Educator Driven by Passion</FounderSubHeading>
              <FounderContent>
                Meet Dr. Asma Chaudhri, our founder. She&apos;s been helping students reach their full potential for over 16 years!
                She&apos;s got a passion for helping students succeed and her background in both academia and high-stakes finance gives her a unique perspective.
              </FounderContent>

              <FounderList>
                {educationList.map((edu, index) => (
                  <FounderListItem key={index}>
                    <Image
                      src={'/icons/check.svg'}
                      width={23}
                      height={23}
                      alt="icon"
                      style={{ marginRight: '8px' }}
                    />
                    <FounderSubHeading>
                      <strong>{edu.degree}</strong> {edu.subject && `in ${edu.subject}`} {edu.institution && <strong>{`– ${edu.institution}`}</strong>}
                    </FounderSubHeading>
                  </FounderListItem>
                ))}
              </FounderList>
            </FadeIn>
          </Grid>

          <Grid size={{ xs: 24, lg: 10 }} sx={{ px: {xs: '0', md: '15px'} }}>
            <FadeIn direction="up" distance={500} duration={1.5} delay={0.6}>
              <FounderImgHead>
                <Image src="/about/founder.webp" alt="founder" layout="fill" objectFit="cover" />
              </FounderImgHead>
            </FadeIn>
          </Grid>

          <Grid size={24} sx={{ px: {xs: '0', md: '15px'} }}>
            <FadeIn direction="up" distance={100} duration={1} delay={0.2}>
              <FounderCard>
                <FounderCardInnerHead>
                  <FounderCardHeading>About Acemyexam</FounderCardHeading>
                  <FounderList>
                    {stats.map((stat, index) => (
                      <FounderListItem key={index}>
                        <Image
                          src={'/icons/check.svg'}
                          width={13}
                          height={13}
                          alt="icon"
                          style={{ marginRight: '8px' }}
                        />
                        <FounderCardListText>{stat}</FounderCardListText>
                      </FounderListItem>
                    ))}
                  </FounderList>
                </FounderCardInnerHead>

                <FounderCardDivider orientation="vertical" variant="middle" flexItem />

                <FounderCardInnerHead>
                  <FounderCardHeading>Teaching Philosophy</FounderCardHeading>
                  <FounderList>
                    {philosophy.map((item, index) => (
                      <FounderListItem key={index}>
                        <Image
                          src={'/icons/check.svg'}
                          width={13}
                          height={13}
                          alt="icon"
                          style={{ marginRight: '8px' }}
                        />
                        <FounderCardListText>{item}</FounderCardListText>
                      </FounderListItem>
                    ))}
                  </FounderList>
                </FounderCardInnerHead>

                <FounderCardDivider orientation="vertical" variant="middle" flexItem />

                <FounderCardInnerHead>
                  <FounderCardHeading>Subjects Offered</FounderCardHeading>
                  <FounderList>
                    {subjectsOffered.map((subject, index) => (
                      <FounderListItem key={index}>
                        <Image
                          src={'/icons/check.svg'}
                          width={13}
                          height={13}
                          alt="icon"
                          style={{ marginRight: '8px' }}
                        />
                        <FounderCardListText>{subject}</FounderCardListText>
                      </FounderListItem>
                    ))}
                  </FounderList>
                </FounderCardInnerHead>
              </FounderCard>
            </FadeIn>
          </Grid>
        </Grid>
      </FounderContentContainer>
    </FounderWrapper>
  );
};

export default AboutFounder;
