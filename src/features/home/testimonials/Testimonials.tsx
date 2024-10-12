'use client';

import { Avatar, Box } from '@mui/material';
import Image from 'next/image';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SectionHeading from '@/components/section-heading/SectionHeading';
import {
  TestimonialsAvatarNameWrapper,
  TestimonialsCard,
  TestimonialsCardHeading,
  TestimonialsCardPara,
  TestimonialsHeading,
  TestimonialsOccupationPara,
  TestimonialsWrapper,
} from '@/features/home/testimonials/Testimonials.style';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    name: 'Frederic Dupas',
    feedback: 'Asma is teaching physics to my son George. She is very proactive and my son makes significant progress thanks to her.',
    subject: 'GCSE or National 3-5 Physics tuition',
  },
  {
    name: 'Shree Ghandinesen',
    feedback: `Asma has been an excellent tutor for my daughter, who was initially struggling with her confidence in GCSE Maths. 
      Asma is meticulous in her teaching and she is always well prepared for her lessons. She explains the concepts clearly in 
      a way that is easy to follow and understand. Additional practice questions and guidance is always provided upon request 
      and she has supported my daughter towards a very good grade at her recent mock examination. I would like to thank Asma 
      for her guidance and support, and I highly recommend her as a tutor.`,
    subject: 'GCSE or National 3-5 Maths tuition',
  },
  {
    name: 'Esther Iyekekpolor',
    feedback: `Due to Pandemic, homeschooling has been a struggle. My daughter needed help in Science. 
      Finding you on First Tutors has now made Danielle begin to enjoy science. She tells me that you really explain things 
      very well and she is now understanding science more. Keep up your dedication and hard work. Thank you, Asma. Asma has 
      been brilliant. Danielle is doing very well in science. Excellent feedback from her teachers. Give Asma all the credit 
      for her hard work and patience. I know you will help Danielle to achieve the best in her GCSE next year. Thank you.`,
    subject: 'Secondary (11 to 14 years) Chemistry tuition',
  },
  {
    name: 'Jane Ross',
    feedback: `Asma is an excellent tutor and I highly recommend her to anyone struggling in Physics, Chemistry and Maths. 
      She helped my daughter gain a newfound enjoyment and confidence in the subjects that Asma tutored her on.`,
    subject: 'GCSE or National 3-5 Chemistry tuition',
  },
  {
    name: 'Rizwan Ahmad',
    feedback: `Asma has been brilliant for my daughter. When we started tuition for physics, my daughter had lots of 
      difficulties and at the end, she scored 9 in GCSE, which tells all about Asma. I would definitely recommend Asma. 
      Thanks for your hard work.`,
    subject: 'GCSE or National 3-5 Physics tuition',
  },
  {
    name: 'Lawunmi Adekunte',
    feedback: `If you are looking for a tutor who will guide, teach, and challenge you, look no further! Asma is an 
      excellent tutor because she is patient and tailored the learning to my needs. I joined Asma when I was not confident in 
      maths and not getting good marks. Now, I have achieved a grade 9 in my GCSE maths and I will be taking A level maths. 
      I’m so grateful for all the hard work and effort Asma put into each of our lessons. Thank you so much Asma!`,
    subject: 'Secondary (11 to 14 years) Maths tuition',
  },
  {
    name: 'Maureen Macmillan',
    feedback: 'Asma is an excellent tutor. She makes maths and physics easy to understand.',
    subject: 'Secondary (11 to 14 years) Physics tuition',
  },
  {
    name: 'Elizabeth Stone',
    feedback: `I am extremely happy, grateful and honoured that my child was taught by Asma. Despite Asma not having a 
      dyslexic teaching background, my child was able to develop confidence, interest, and high grades in all three sciences 
      thanks to Asma's tailored and detailed teaching. I highly recommend her.`,
    subject: 'GCSE or National 3-5 Chemistry tuition',
  },
  {
    name: 'Jing Han',
    feedback: `Very good one, my boy likes the lessons. Asma worked with our son in preparation for his GCSE Maths exam. 
      Asma provided excellent weekly support, our son enjoyed the sessions and completed additional homework set by Asma. 
      We were all delighted by his recent mock exam results which he reached with Asma's excellent tutoring.`,
    subject: 'Secondary (11 to 14 years) Chemistry tuition',
  },
  {
    name: 'Eddy Yang',
    feedback: `We are delighted that we found Asma. She is very organised and kind, and we have seen marked progress for our 
      son. His confidence in maths has increased along with his marks. He scored significantly higher in his GCSE mocks 
      after just six months of tuition with Asma.`,
    subject: 'A-Level, IB or Highers Maths tuition',
  }
];

const Testimonials = () => {
  return (
    <TestimonialsWrapper className="testimonials-swiper">
      <SectionHeading text="Testimonials" />
      <TestimonialsHeading variant="h2" sx={{mt: '20px'}}>Here&apos;s What Our Students Say</TestimonialsHeading>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialsCard>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <TestimonialsAvatarNameWrapper>
                  <Avatar
                    alt={testimonial?.name}
                    src={testimonial?.name}
                    sx={{ width: 61, height: 61, mr: '15px' }}
                  />
                  <Box>
                    <TestimonialsCardHeading variant="h6">
                      {testimonial.name}
                    </TestimonialsCardHeading>
                    <TestimonialsOccupationPara variant="subtitle2">
                      {testimonial.subject}
                    </TestimonialsOccupationPara>
                  </Box>
                </TestimonialsAvatarNameWrapper>
                <Box>
                  <Image src={'/home/quotation.svg'} width={80} height={60} alt="icon" />
                </Box>
              </Box>
              <TestimonialsCardPara variant="body1">{testimonial.feedback}</TestimonialsCardPara>
            </TestimonialsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
