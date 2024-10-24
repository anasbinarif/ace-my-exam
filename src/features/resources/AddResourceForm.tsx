"use client";
import React from 'react'
import { CustomFormControl, StyledSelectField, StyledTextField } from '@/components/form/Form.style'
import { LoginInput } from '@/types/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FieldError, FieldErrorsImpl, Merge, useForm } from 'react-hook-form'
import { Box, FormHelperText, InputLabel, MenuItem } from '@mui/material'
import { CreateResourceInput, createResourceSchema } from "@/types/resources";
import Image from 'next/image';

const getErrorMessage = (
  error: FieldError | Merge<FieldError, FieldErrorsImpl<CreateResourceInput>> | undefined
): string | undefined => {
  return error?.message || undefined;
};

const AddResourceForm = () => {

  const { control, register, reset, handleSubmit, formState: { errors } } = useForm<any>({
    resolver: zodResolver(createResourceSchema),
    defaultValues: {},
  });

  return (
    <Box sx={{
      maxWidth: '600px',
      backgroundColor: 'background.white',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
    }}>

      <form action="">
        <StyledTextField
          label="Title"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.title}
          helperText={getErrorMessage(errors.title)}
          {...register('title')}
        />
        <StyledTextField
          label="Description"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.description}
          helperText={getErrorMessage(errors.description)}
          {...register('description')}
        />

        <CustomFormControl
          fullWidth
          variant='standard'
          labelfontsize='14px'
          error={!!errors.resource_type}
        >
          <InputLabel id='course'>Resource Type</InputLabel>
          <Controller
            name='resource_type'
            control={control}
            render={({ field }) => (
              <StyledSelectField
                label='resource_type'
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
          {errors.resource_type && (
            <FormHelperText error>
              {getErrorMessage(errors.resource_type)}
            </FormHelperText>
          )}
        </CustomFormControl>

        <StyledTextField
          label="Subject ID"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.subject_id}
          helperText={getErrorMessage(errors.subject_id)}
          {...register('subject_id')}
        />
        <StyledTextField
          label="Board ID"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.board_id}
          helperText={getErrorMessage(errors.board_id)}
          {...register('board_id')}
        />
        <StyledTextField
          label="Year"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.year}
          helperText={getErrorMessage(errors.year)}
          {...register('year')}
        />

        <CustomFormControl
          fullWidth
          variant='standard'
          labelfontsize='14px'
          error={!!errors.education_level}
        >
          <InputLabel id='education_level'>Education Level</InputLabel>
          <Controller
            name='education_level'
            control={control}
            render={({ field }) => (
              <StyledSelectField
                label='education_level'
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
          {errors.education_level && (
            <FormHelperText error>
              {getErrorMessage(errors.education_level)}
            </FormHelperText>
          )}
        </CustomFormControl>

        <StyledTextField
          label="Is this public?"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.is_public}
          helperText={getErrorMessage(errors.is_public)}
          {...register('is_public')}
        />

        <StyledTextField
          label="Tags"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.tags}
          helperText={getErrorMessage(errors.tags)}
          {...register('tags')}
          inputfontsize="20px"
          labelfontsize="14px"
        />

      </form>
    </Box>
  )
}

export default AddResourceForm

