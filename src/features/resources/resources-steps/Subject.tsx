'use client';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { ResourcesCardTypography } from '@/app/(main)/resources/Resources.style';
import { useGetUniqueSubjects } from '@/hooks/resources/useReferenceData';
import useMultiStepForm from '@/hooks/useMultiStepper';

import { ResourcesCardSmall } from '../ResourcesSteps.style';
import { StepsDisabled, StepsLoader } from './StepsLoader';

const Subject: React.FC = () => {
  const { selectOption, selectedOptions } = useMultiStepForm();
  const educationLevel = selectedOptions.educationalResources;
  const examBoard = selectedOptions.examBoard;

  const { data: subjectOptions, isLoading, refetch } = useGetUniqueSubjects(educationLevel?.value, examBoard?.value);

  useEffect(() => {
    refetch();
  }, [educationLevel, examBoard]);

  if (!examBoard) return <StepsDisabled />;

  const selectedSubject = selectedOptions.subject;

  if (isLoading || !subjectOptions) return <StepsLoader />;

  return (
    <Grid
      container
      spacing={'20px'}
      sx={{ mb: '40px' }}
      columns={{
        sm: 6,
        md: 12,
      }}
    >
      {subjectOptions.map((subject) => (
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
          key={subject.value}
        >
          <ResourcesCardSmall
            onClick={() => selectOption('subject', subject)}
            sx={{
              outline: selectedSubject?.value === subject.value ? '2px solid #DA9694' : 'unset',
            }}
          >
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}>
              <Image
                src={subject.icon}
                alt={subject.name ?? ''}
                width={22}
                height={22}
              />

              <ResourcesCardTypography variant="body1" sx={{ ml: '1px', textWrap: 'nowrap' }}>
                {subject.name}
              </ResourcesCardTypography>
            </Box>
          </ResourcesCardSmall>
        </Grid>
      ))}
    </Grid>
  );
};

export default Subject;
