import Feedback from '@/entities/feedback';
import { FeedbackRepository } from '@/repositories/feedback';
import { ITestimonials } from '@/types/testimonials';

export async function getTestimonials() {
  const feedbacks = await FeedbackRepository.findAllFeedbacks();

  const testimonials = feedbacks.map(transformFeedback);

  return testimonials;
}

function transformFeedback(feedback: Feedback): ITestimonials {
  let experience = parseInt(feedback.experience);

  if (!isNaN(experience)) experience = 5;

  return {
    name: `${feedback.name} ${feedback.lastName}`,
    date: new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    feedback: feedback.feedback,
    subject: feedback.course,
    feedbackDate: feedback.createdAt.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    stars: experience,
  };
}
