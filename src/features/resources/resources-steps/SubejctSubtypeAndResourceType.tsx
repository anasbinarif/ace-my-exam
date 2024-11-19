'use client';
import { Box, Grid } from '@mui/material';
import React from 'react';

import { ResourcesPara, ResourcesSubHeading } from '@/app/(main)/resources/Resources.style';
import useMultiStepForm from '@/hooks/useMultiStepper';

import ResourceType from './ResourceType';
import SubjectSubtype from './SubjectSubtype';

const SubejctSubtypeAndResourceType = () => {
  const { selectedOptions } = useMultiStepForm();
  const examBoard = selectedOptions.examBoard;
  const subject = selectedOptions.subject;

  return (
    <Grid
      sx={{
        width: '100%',
      }}
      gap={2}
      justifyContent="space-between"
      container
      columns={12}
    >
      <Grid xs={5}>
        <Box sx={{ my: { xs: '20px', sm: '30px' } }}>
          <ResourcesSubHeading>{examBoard?.name} {subject?.name}</ResourcesSubHeading>
          <ResourcesPara variant="body1" sx={{ textAlign: 'start' }}>
            Select the Subject
          </ResourcesPara>
        </Box>
        <SubjectSubtype />
      </Grid>
      <Grid xs={5}>
        <Box sx={{ my: { xs: '20px', sm: '30px' } }}>
          <ResourcesSubHeading>Resources</ResourcesSubHeading>
          <ResourcesPara variant="body1" sx={{ textAlign: 'start' }}>
            Select the Resource Type
          </ResourcesPara>
        </Box>
        <ResourceType />
      </Grid>
    </Grid>
  );
};

export default SubejctSubtypeAndResourceType;