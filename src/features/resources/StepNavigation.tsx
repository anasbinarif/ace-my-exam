'use client';

import { Box } from '@mui/material';
import React from 'react';

import { PaginationHead } from '../../app/(main)/resources/Resources.style';
import { Button } from '../../components/buttons/Button.style';
import { StyledPagination } from '../../components/pagination/Pagination.style';
import useMultiStepForm from '../../hooks/useMultiStepper';

const StepNavigation: React.FC = () => {
  const { handleBack, handleNext, currentStep, isNextDisabled, page, setPage } = useMultiStepForm();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '35px',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          order: { xs: 2, md: 1 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Button fontSize="16px" borderRadius="50px" width="212px" height="60px" onClick={handleBack} disabled={currentStep === 1}>
          Previous
        </Button>
        {currentStep <= 3 && (
          <Button
            special
            fontSize="16px"
            borderRadius="50px"
            width="212px"
            height="60px"
            onClick={() => handleNext()}
            disabled={isNextDisabled}
          >
            Next
          </Button>
        )}
      </Box>
      {currentStep === 5 && (
        <PaginationHead
          sx={{
            order: { xs: 1, md: 2 },
            mb: { xs: '20px', md: '0' },
            width: { xs: '100%', md: 'unset' },
          }}
        >
          <StyledPagination page={page} count={10} onChange={(_, value) => setPage(value)} />
        </PaginationHead>
      )}
    </Box>
  );
};

export default StepNavigation;
