'use client';

import { Box, Breadcrumbs } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import { Button } from '@/components/buttons/Button.style';
import { AppContentWrapper } from '@/components/common/Global.style';
import SectionHeading from '@/components/section-heading/SectionHeading';
import DownloadMaterialStep from '@/features/resources/DownloadMaterial';
import Step1_EducationalResources from '@/features/resources/EducationalResources';
import ExaminationBoardStep from '@/features/resources/ExaminationBoard';
import ResourcesTypeStep from '@/features/resources/ResourceType';

import { ResourcesContainer, ResourcesHeading, ResourcesPara, Resourceswrapper, BreadcrumbsHeading } from './Resources.style';

const steps = [
  'Resources',
  'Examination Board',
  'Resource Type',
  'Download Material',
];

const Resources: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTitles, setSelectedTitles] = useState<string[]>(['Resources']);

  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Handlers for selecting items at each step
  const handleResourceSelection = (resourceName: string) => {
    setSelectedResource(resourceName);
  };

  const handleBoardSelection = (boardName: string) => {
    setSelectedBoard(boardName);
  };

  const handleTypeSelection = (typeName: string) => {
    setSelectedType(typeName);
  };

  // Update the breadcrumbs based on current selections
  const updateBreadcrumbs = (step: number) => {
    const newTitles = ['Resources'];

    if (step > 0 && selectedResource) newTitles.push(selectedResource);
    if (step > 1 && selectedBoard) newTitles.push(selectedBoard);
    if (step > 2 && selectedType) newTitles.push(selectedType);
    setSelectedTitles(newTitles);
  };

  // Navigation handlers
  const handleNext = () => {
    const nextStep = activeStep + 1;

    setActiveStep(nextStep);
    updateBreadcrumbs(nextStep);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;

    setActiveStep(prevStep);
    updateBreadcrumbs(prevStep);
  };

  // Render content based on the active step
  const renderStepContent = (stepIndex: number) => {
    switch (stepIndex) {
    case 0:
      return <Step1_EducationalResources selectedResource={selectedResource} onSelectResource={handleResourceSelection} />;
    case 1:
      return <ExaminationBoardStep selectedBoard={selectedBoard} onSelectBoard={handleBoardSelection} />;
    case 2:
      return <ResourcesTypeStep selectedType={selectedType} onSelectType={handleTypeSelection} />;
    case 3:
      return <DownloadMaterialStep />;
    default:
      return <>.......................</>;
    }
  };

  return (
    <Resourceswrapper>
      <AppContentWrapper>
        <ResourcesContainer>
          <Box>
            <SectionHeading
              text="Start Practicing"
              align="center"
              showLeftLine={true}
              color="#DA9694"
              textWidth="150px"
              gradientType="second"
            />
            <ResourcesHeading variant="h2">
              {steps[activeStep]}
            </ResourcesHeading>
            {activeStep === 0 && (
              <ResourcesPara variant="body1" sx={{ mb: '23px' }}>
                Choose Your Resource
              </ResourcesPara>
            )}
          </Box>
          <Box sx={{ mt: '40px', mb: '10px', display: {xs: 'none', sm: 'flex'}, alignItems: 'center' }}>
            <Breadcrumbs aria-label="breadcrumb" separator={
              <Image
                src={'/icons/right-arrow.svg'}
                alt={'icon'}
                width={9}
                height={9}
              />}>
              {selectedTitles.map((title, index) => (
                <BreadcrumbsHeading key={index} variant="body2">
                  {title}
                </BreadcrumbsHeading>
              ))}
            </Breadcrumbs>
          </Box>
          <Box>{renderStepContent(activeStep)}</Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '35px',
            }}
          >
            <Button
              fontSize="16px"
              borderRadius="50px"
              width="212px"
              height="60px"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Previous
            </Button>
            <Button
              special
              fontSize="16px"
              borderRadius="50px"
              width="212px"
              height="60px"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </ResourcesContainer>
      </AppContentWrapper>
    </Resourceswrapper>
  );
};

export default Resources;