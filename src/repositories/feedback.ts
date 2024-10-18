import Feedback from '@/entities/feedback';
import AppDataSource from '@/utils/typeorm';

export const FeedbackRepository = AppDataSource.getRepository(Feedback).extend({
  async createFeedback(feedbackData: Omit<Feedback, 'id' | 'createdAt'>) {
    const feedback = this.create(feedbackData);

    await this.save(feedback);

    return feedback;
  },

  async findAllFeedbacks(): Promise<Feedback[]> {
    const feedbacks = await this.find();

    return feedbacks;
  },
});
