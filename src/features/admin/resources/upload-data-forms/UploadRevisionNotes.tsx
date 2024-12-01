import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, styled, Typography } from '@mui/material';
import { Content } from '@prisma/client';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useSnackbar } from '../../../../contexts/SnackbarContext';
import { useUploadRevisionNotes } from '../../../../hooks/resources/useUploadResources';
import { IRevisionNoteData, revisionNoteSchema } from '../../../../types/revision-note';
import FileUpload, { DropZoneLabel } from '../FileUpload';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

interface UploadRevisionNotesProps {
  selectedSubtopic: Content;
}

const UploadRevisionNotes = ({ selectedSubtopic }: UploadRevisionNotesProps) => {
  const { showSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
  } = useForm<IRevisionNoteData>({
    resolver: zodResolver(revisionNoteSchema),
    defaultValues: {
      title: selectedSubtopic.name,
      subtopicId: selectedSubtopic.id,
      noteUrl: '',
    },
  });

  const { mutate: submitForm, isLoading } = useUploadRevisionNotes();
  const onSubmitForm: SubmitHandler<IRevisionNoteData> = async (data: IRevisionNoteData) => {
    submitForm(data, {
      onSuccess: () => {
        showSnackbar('Form submitted successfully!');
        reset();
      },
      onError: () => {
        showSnackbar('Failed to submit Contact Form. Please try again later!');
      },
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <FormContainer>
          <Controller
            name="noteUrl"
            control={control}
            render={() => (
              <Box>
                <DropZoneLabel htmlFor="noteUrl">Upload file:</DropZoneLabel>
                <FileUpload
                  hoist={(file: string) => {
                    setValue('noteUrl', file);
                    trigger('noteUrl');
                  }}
                  maxFileSize={5 * 1024 * 1024}
                  maxFiles={3}
                />
                {errors.noteUrl && (
                  <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                    {errors.noteUrl.message}
                  </Typography>
                )}
              </Box>
            )}
          />

          <Button type="submit" disabled={isLoading} variant="contained" color="primary" fullWidth>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </FormContainer>
      </form>
    </Box>
  );
};

export default UploadRevisionNotes;
