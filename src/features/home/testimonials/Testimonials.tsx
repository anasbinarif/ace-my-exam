import SectionHeading from '@/components/section-heading/SectionHeading';
import TestimonialsSwiper from '@/components/swiper/testimonials-swiper/TestimonialsSwiper';
import { TestimonialsHeading, TestimonialsLink, TestimonialsPara, TestimonialsWrapper } from '@/features/home/testimonials/Testimonials.style';

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <SectionHeading text="Testimonials"
        align='center'
        showLeftLine={true}
        color='#DA9694'
        textWidth='160px'
        gradientType="second" />
      <TestimonialsHeading variant="h2" sx={{ mt: '20px' }}>Here&apos;s What Our Students Say</TestimonialsHeading>
      <TestimonialsPara variant='body1' sx={{ mt: '23px' }} > Want to write a Feedback?  <TestimonialsLink href={'/feedback'}> Click Here</TestimonialsLink></TestimonialsPara>
      <TestimonialsSwiper />
    </TestimonialsWrapper>
  );
};

export default Testimonials;
