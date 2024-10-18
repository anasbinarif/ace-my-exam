import { FeedbackRepository } from '@/repositories/feedback';
import { IFeedback } from '@/types/feedback';

export async function createFeedback(data: IFeedback) {
  const feedback = await FeedbackRepository.createFeedback(data);

  sendAcknowledgementEmail(data);

  return feedback;
}

async function sendAcknowledgementEmail(_data: IFeedback) {
  // TODO: Send an email to the user acknowledging the receipt of the message
}
