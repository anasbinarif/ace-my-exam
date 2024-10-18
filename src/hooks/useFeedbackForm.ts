import { useMutation } from 'react-query';

import { IFeedback } from '@/types/feedback';

export const useSubmitFeedbackForm = () => {
  return useMutation({
    mutationFn: async (formData: IFeedback) => {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return response.json();
    },
    onSuccess: () => {},
    onError: () => {},
  });
};
