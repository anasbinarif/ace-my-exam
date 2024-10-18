import { useQuery } from 'react-query';

import { ITestimonials } from '@/types/testimonials';

const fetchTestimonials = async (): Promise<ITestimonials[]> => {
  const response = await fetch('/api/testimonials');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return data.testimonials;
};

export const useTestimonials = () => {
  return useQuery<ITestimonials[], Error>({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
  });
};
