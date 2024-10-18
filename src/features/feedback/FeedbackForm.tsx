'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, CircularProgress, FormHelperText, InputLabel, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';

import { Button } from '@/components/buttons/Button.style';
import { CustomFormControl, StyledSelectField, StyledTextField } from '@/components/form/Form.style';
import { useSnackbar } from '@/contexts/SnackbarContext';
import { useSubmitFeedbackForm } from '@/hooks/useFeedbackForm';
import { feedbackSchema, IFeedback } from '@/types/feedback';

import { FeedbackFormContainer } from './FeedbackFrom.style';

const defaultValues: IFeedback = {
  name: '',
  lastName: '',
  course: '',
  sessionDate: new Date(),
  link: '',
  experience: '',
  feedback: '',
};

export default function FeedbackForm() {
  const { showSnackbar } = useSnackbar();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFeedback>({
    resolver: zodResolver(feedbackSchema),
    defaultValues
  });

  const { mutate: submitForm, isLoading } = useSubmitFeedbackForm();
  const onSubmit: SubmitHandler<IFeedback> = async (data) => {
    submitForm(data, {
      onSuccess: () => {
        showSnackbar('Form submitted successfully!');
        reset();
      },
      onError: () => {
        showSnackbar('Failed to submit Contact Form. Please try again later!');
      }
    });
  };

  return (
    <>
      <FeedbackFormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            columns={24}
            columnSpacing={'40px'}
            rowSpacing={'40px'}
            alignItems={'end'}
            sx={{mb: '40px'}}
          >
            <Grid size={{ xs: 24, md: 12 }}>
              <StyledTextField
                label='Name'
                variant='standard'
                fullWidth
                margin='none'
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register('name')}
                inputfontsize='20px'
                labelfontsize='14px'
              />
            </Grid>
            <Grid size={{ xs: 24, md: 12 }}>
              <StyledTextField
                label='Last Name'
                variant='standard'
                fullWidth
                margin='none'
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                {...register('lastName')}
                inputfontsize='20px'
                labelfontsize='14px'
              />
            </Grid>

            <Grid size={{ xs: 24, md: 12 }}>
              <CustomFormControl
                fullWidth
                variant='standard'
                labelfontsize='14px'
                error={!!errors.course}
              >
                <InputLabel id='course'>Course/Subject</InputLabel>
                <Controller
                  name='course'
                  control={control}
                  render={({ field }) => (
                    <StyledSelectField
                      label='course'
                      value={field.value}
                      onChange={field.onChange}
                      variant='standard'
                      inputfontsize='20px'
                      fullWidth
                      IconComponent={() => (
                        <Image
                          src='/icons/down.svg'
                          alt='Custom Dropdown Icon'
                          width={7}
                          height={8}
                        />
                      )}
                      MenuProps={{
                        disableScrollLock: true,
                      }}
                    >
                      <MenuItem value='math'>Math</MenuItem>
                      <MenuItem value='physics'>Physics</MenuItem>
                      <MenuItem value='chemistry'>Chemistry</MenuItem>
                    </StyledSelectField>
                  )}
                />
                {errors.course && (
                  <FormHelperText error>
                    {errors.course?.message}
                  </FormHelperText>
                )}
              </CustomFormControl>
            </Grid>

            <Grid size={{ xs: 24, md: 12 }}>
              <Box sx={{ position: 'relative' }}>
                <Image
                  src={'/icons/calender.svg'}
                  width={10}
                  height={12}
                  alt='icon'
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '12px',
                    zIndex: 2,
                  }}
                />
                <Controller
                  name='sessionDate'
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      className='feedback-datepicker'
                      placeholderText='Date of Session'
                    />
                  )}
                />
                {errors.sessionDate && (
                  <FormHelperText error>
                    {errors.sessionDate?.message}
                  </FormHelperText>
                )}
              </Box>
            </Grid>

            <Grid size={{ xs: 24, md: 12 }}>
              <StyledTextField
                label='Link'
                variant='standard'
                fullWidth
                margin='none'
                error={!!errors.link}
                helperText={errors.link?.message}
                {...register('link')}
                inputfontsize='20px'
                labelfontsize='14px'
              />
            </Grid>

            <Grid size={{ xs: 24, md: 12 }}>
              <CustomFormControl
                fullWidth
                variant='standard'
                labelfontsize='14px'
                error={!!errors.experience}
              >
                <InputLabel id='experience'>Rate Your Experience</InputLabel>
                <Controller
                  name='experience'
                  control={control}
                  render={({ field }) => (
                    <StyledSelectField
                      label='Rate Your Experience'
                      labelId='experience'
                      value={field.value}
                      onChange={field.onChange}
                      variant='standard'
                      inputfontsize='20px'
                      fullWidth
                      IconComponent={() => (
                        <Image
                          src='/icons/down.svg'
                          alt='Custom Dropdown Icon'
                          width={7}
                          height={8}
                        />
                      )}
                      MenuProps={{
                        disableScrollLock: true,
                      }}
                    >
                      <MenuItem value='1'>1 - Poor</MenuItem>
                      <MenuItem value='2'>2 - Fair</MenuItem>
                      <MenuItem value='3'>3 - Good</MenuItem>
                      <MenuItem value='4'>4 - Very Good</MenuItem>
                      <MenuItem value='5'>5 - Excellent</MenuItem>
                    </StyledSelectField>
                  )}
                />
                {errors.experience && (
                  <FormHelperText error>
                    {errors.experience?.message}
                  </FormHelperText>
                )}
              </CustomFormControl>
            </Grid>

            <Grid size={{ xs: 24 }}>
              <StyledTextField
                label='Share Your Experience Here...'
                variant='standard'
                fullWidth
                multiline
                rows={2}
                margin='none'
                error={!!errors.feedback}
                helperText={errors.feedback?.message}
                {...register('feedback')}
                inputfontsize='20px'
                labelfontsize='14px'
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            special
            fontSize='14px'
            borderRadius='4px'
            width='170px'
            height='41px'
          >
            {isLoading ? <CircularProgress size={24} /> : 'Submit Feedback'}
          </Button>
        </form>
      </FeedbackFormContainer>
    </>
  );
}
