import { useMutation } from 'react-query';

import { RegisterInput } from '@/types/auth';

export const useRegister = () => {
  return useMutation({
    mutationFn: async (formData: RegisterInput) => {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      return response.json();
    },
    onSuccess: () => {},
    onError: () => {},
  });
};
