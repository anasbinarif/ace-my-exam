import { z } from 'zod';

export const resetPasswordSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export const loginSchema = resetPasswordSchema.extend({
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});

export const registerSchema = resetPasswordSchema
  .extend({
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
