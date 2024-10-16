'use client';

import { Box, } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types'; 

import testimonialsData from '@/components/swiper/testimonials-swiper/testimonialsData.json';
import {
  TestimonialsAvatarNameWrapper,
  TestimonialsCard,
  TestimonialsCardHeading,
  TestimonialsCardPara,
  TestimonialsOccupationPara,
  TestimonialsSwiperWrapper,
  TestimonialsParaTwo,
  TestimonialsNavigationWrapper,
  TestimonialsInfoHead,
  TestimonialAvatar,
  TestimonialsStarsHead,
  TestimonialsDateHead
} from '@/components/swiper/testimonials-swiper/TestimonialsSwiper.style';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

interface Testimonial {
  name: string;
  subject: string;
  feedback: string;
  date: string; 
  feedbackDate: string;
  stars: number;
}

const AboutTestimonialsSwiper: FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [swiperRef.current]);

  const renderStars = (starCount: number) => {
    return Array.from({ length: starCount }, (_, index) => (
      <Image
        key={index}
        src="/icons/Star.svg"
        width={16}
        height={15}
        alt="Star-icon"
        style={{ marginRight: '5px' }}
      />
    ));
  };

  return (
    <TestimonialsSwiperWrapper  withPadding={true}>
      <TestimonialsNavigationWrapper  positionLeft="27.5%" width="45%">
        <Box className="swiper-button-prev">
          <Image src="/icons/prev.svg" alt="Prev" width={14} height={11} />
        </Box>
        <Box className="swiper-button-next">
          <Image src="/icons/next.svg" alt="Next" width={14} height={11} />
        </Box>
      </TestimonialsNavigationWrapper >

      <Swiper
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
        observer={true}
        observeParents={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[EffectCoverflow, Pagination, Navigation]} 
      >
        {testimonialsData?.map((testimonial: Testimonial, index: number) => (
          <SwiperSlide key={index}>
            <TestimonialsCard>
              <Box>
                <TestimonialsInfoHead
                >
                  <TestimonialsAvatarNameWrapper>
                    <TestimonialAvatar
                      alt={testimonial.name}
                      src={testimonial.name}
                    />
                    <Box>
                      <TestimonialsCardHeading variant="h6">
                        {testimonial.name}
                      </TestimonialsCardHeading>
                      <TestimonialsOccupationPara variant="subtitle2">
                        {testimonial.subject}
                      </TestimonialsOccupationPara>
                      <TestimonialsParaTwo variant="subtitle2">
                        {testimonial.date}
                      </TestimonialsParaTwo>
                    </Box>
                  </TestimonialsAvatarNameWrapper>
                  <Box>
                    <Image
                      src="/icons/quotation.svg"
                      width={79}
                      height={60}
                      alt="quotation-icon"
                    />
                  </Box>
                </TestimonialsInfoHead>
                <TestimonialsStarsHead>
                  {renderStars(testimonial.stars)}
                </TestimonialsStarsHead>
                <TestimonialsCardPara variant="body1" sx={{ mb: '16px' }}>
                  {testimonial.feedback}
                </TestimonialsCardPara>
              </Box>
              <TestimonialsDateHead>
                <TestimonialsParaTwo variant="subtitle2">
                Feedback given: {testimonial.feedbackDate}
                </TestimonialsParaTwo>
                <Image
                  src="/home/trustpilot.svg"
                  width={140}
                  height={34}
                  alt="trustpilot-icon"
                />
              </TestimonialsDateHead>
            
            </TestimonialsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsSwiperWrapper>
  );
};

export default AboutTestimonialsSwiper;
