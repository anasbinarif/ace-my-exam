'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CircularProgress } from '@mui/material';
import { useForm, FieldError, Merge, FieldErrorsImpl, SubmitHandler } from 'react-hook-form';

import { StyledTextField } from '@/components/form/Form.style';
import { useSnackbar } from '@/contexts/SnackbarContext';
import { signUpSchema } from '@/features/auth/sign-up/SignUpSchema';
import { useRegister } from '@/hooks/useRegister';
import { RegisterInput } from '@/types/auth';

import {
  AuthButton,
  AuthModalContainer,
  AuthModalContent,
  AuthHeadingTypography,
  AuthParaTypography,
  AuthBackdrop,
  AuthStyledLinkTwo,
} from '../AuthModals.style';

const getErrorMessage = (
  error: FieldError | Merge<FieldError, FieldErrorsImpl<RegisterInput>> | undefined
): string | undefined => {
  return error?.message || undefined;
};

const defaultValues: RegisterInput = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

interface SignUpModalProps {
  open: boolean;
  handleClose: () => void;
  onSwitchToLogin: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ open, handleClose, onSwitchToLogin }) => {
  const { showSnackbar } = useSnackbar();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues
  });

  const { mutate: submitForm, isLoading } = useRegister();
  const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
    submitForm(data, {
      onSuccess: () => {
        showSnackbar('Please check your email to verify your account!');
        reset();
        handleClose();

      },
      onError: () => {
        showSnackbar('Failed to Register. Please try again later!');
      }
    });
  };

  return (
    <>
      <AuthModalContainer open={open} onClose={handleClose} BackdropComponent={AuthBackdrop}>
        <AuthModalContent>
          <AuthHeadingTypography variant="h6">SIGNUP</AuthHeadingTypography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledTextField
              label="Name*"
              variant="standard"
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={getErrorMessage(errors.name)}
              {...register('name')}
            />
            <StyledTextField
              label="Email*"
              variant="standard"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={getErrorMessage(errors.email)}
              {...register('email')}
            />
            <StyledTextField
              label="Password*"
              type="password"
              variant="standard"
              fullWidth
              autoComplete='new-password'
              margin="normal"
              error={!!errors.password}
              helperText={getErrorMessage(errors.password)}
              {...register('password')}
            />
            <StyledTextField
              label="Confirm Password*"
              type="password"
              variant="standard"
              autoComplete='new-password'
              fullWidth
              margin="normal"
              error={!!errors.confirmPassword}
              helperText={getErrorMessage(errors.confirmPassword)}
              {...register('confirmPassword')}
            />
            <AuthButton type="submit" sx={{ mb: '12px' }}>
              {isLoading ? <CircularProgress size={20} /> : 'SIGNUP'}
            </AuthButton>
          </form>
          <AuthParaTypography variant="h6">
            Already have an account?{' '}
            <AuthStyledLinkTwo href="#" onClick={onSwitchToLogin}>
              Login
            </AuthStyledLinkTwo>
          </AuthParaTypography>
        </AuthModalContent>
      </AuthModalContainer>
    </>
  );
};

export default SignUpModal;
