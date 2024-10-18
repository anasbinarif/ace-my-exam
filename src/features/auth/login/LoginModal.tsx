'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CircularProgress } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm, FieldError, Merge, FieldErrorsImpl, SubmitHandler } from 'react-hook-form';

import { StyledTextField } from '@/components/form/Form.style';
import { useSnackbar } from '@/contexts/SnackbarContext';
import { loginSchema } from '@/features/auth/login/LoginSchema';

import {
  AuthButton,
  AuthModalContainer,
  AuthModalContent,
  AuthHeadingTypography,
  AuthParaTypography,
  AuthBackdrop,
  AuthStyledLinkOne,
  AuthStyledLinkTwo,
} from '../AuthModals.style';

interface LoginFormInputs {
  email: string;
  password: string;
}

const getErrorMessage = (
  error: FieldError | Merge<FieldError, FieldErrorsImpl<LoginFormInputs>> | undefined
): string | undefined => {
  return error?.message || undefined;
};

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
  onSwitchToSignUp: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose, onSwitchToSignUp }) => {
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useSnackbar();

  const { register, reset, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    try {
      const login = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: '/',
      });

      if (!login?.ok) {
        throw new Error('Login failed');
      }

      showSnackbar('Login successful');
      reset();
      handleClose();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      showSnackbar('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthModalContainer open={open} onClose={handleClose} BackdropComponent={AuthBackdrop}>
        <AuthModalContent>
          <AuthHeadingTypography variant="h6">Login</AuthHeadingTypography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledTextField
              label="Email"
              variant="standard"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={getErrorMessage(errors.email)}
              {...register('email')}
            />
            <StyledTextField
              label="Password"
              type="password"
              variant="standard"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={getErrorMessage(errors.password)}
              {...register('password')}
            />
            <AuthStyledLinkOne href="#">Forgot Password?</AuthStyledLinkOne>
            <AuthButton type="submit" sx={{ mb: '12px' }}>
              {loading ? <CircularProgress size={20} /> : 'Login'}
            </AuthButton>
          </form>
          <AuthParaTypography variant="h6">
            Don’t have an account?{' '}
            <AuthStyledLinkTwo href="#" onClick={onSwitchToSignUp}>
              Sign Up
            </AuthStyledLinkTwo>
          </AuthParaTypography>
        </AuthModalContent>
      </AuthModalContainer>
    </>
  );
};

export default LoginModal;
