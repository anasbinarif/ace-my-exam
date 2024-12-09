'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useState } from 'react';

import { EducationLevel } from '../types/resources';

type StepKey = 1 | 1.5 | 2 | 3 | 4 | 5;

interface MultiStepFormContextProps {
  currentStep: StepKey;
  selectedOptions: Record<string, IStepOption>;
  isNextDisabled: boolean;
  handleNext: () => void;
  handleBack: () => void;
  selectOption: (stepName: string, option: IStepOption) => void;
  selectOptionNavbar: (stepName: string, option: IStepOption) => void;
  setSelectedOptions: React.Dispatch<React.SetStateAction<Record<string, IStepOption>>>;
  setCurrentStep: (step: StepKey) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  breadcrumbs: {
    key: number;
    title: string;
  }[];
  setBreadcrumbs: React.Dispatch<
    React.SetStateAction<
      {
        key: number;
        title: string;
      }[]
    >
  >;
}

const MultiStepFormContext = createContext<MultiStepFormContextProps | undefined>(undefined);

export interface IStepOption {
  name: string;
  value: string;
  icon: string;
}

export const MultiStepFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<StepKey>(1);
  const [page, setPage] = useState<number>(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, IStepOption>>({});
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [breadcrumbs, setBreadcrumbs] = useState<{ key: number; title: string }[]>([]);

  const router = useRouter();

  const handleNext = () => {
    let nextStep: StepKey = currentStep;

    if (currentStep === 3) {
      const queryParams = breadcrumbs.map((step) => step.title).join(';');

      router.push(
        `/resources/${selectedOptions.subjectSubtype?.value}/${selectedOptions.resourceType?.value}?breadcrumbs=${queryParams}`
      );
    } else if (currentStep === 1) {
      nextStep = selectedOptions.educationalResources?.value === EducationLevel.ENTRANCE_EXAMS ? 1.5 : 2;
    } else if (currentStep === 1.5) {
      nextStep = 2;
    } else {
      nextStep = (currentStep + 1) as StepKey;
    }

    setCurrentStep(nextStep);
    setIsNextDisabled(true);
  };

  const handleBack = () => {
    setSelectedOptions((prev) => {
      const updatedOptions = { ...prev };

      delete updatedOptions[currentStep];

      return updatedOptions;
    });

    setCurrentStep((prev) => {
      if (prev === 2 && selectedOptions.educationLevel?.value === EducationLevel.ENTRANCE_EXAMS) {
        return 1.5;
      }

      return Math.max(prev - 1, 1) as StepKey;
    });

    setIsNextDisabled(false);
  };

  const selectOption = (stepName: string, option: IStepOption) => {
    if (stepName === 'educationalResources' || stepName === 'subject' || stepName === 'resourceType') {
      setIsNextDisabled(false);
    } else {
      setIsNextDisabled(true);
    }

    if (stepName === 'educationalResources') {
      setSelectedOptions({ educationalResources: option });
    } else if (stepName === 'examBoard') {
      setSelectedOptions({ educationalResources: selectedOptions.educationalResources, examBoard: option });
    } else if (stepName === 'subject') {
      setSelectedOptions({
        educationalResources: selectedOptions.educationalResources,
        examBoard: selectedOptions.examBoard,
        subject: option,
      });
    } else if (stepName === 'subjectSubtype') {
      setSelectedOptions({
        educationalResources: selectedOptions.educationalResources,
        examBoard: selectedOptions.examBoard,
        subject: selectedOptions.subject,
        subjectSubtype: option,
      });
    }

    setSelectedOptions((prev) => ({ ...prev, [stepName]: option }));
  };

  const selectOptionNavbar = (stepName: string, option: IStepOption) => {
    setSelectedOptions({ [stepName]: option });
    setIsNextDisabled(false);
  };

  return (
    <MultiStepFormContext.Provider
      value={{
        currentStep,
        selectedOptions,
        isNextDisabled,
        handleNext,
        handleBack,
        selectOption,
        selectOptionNavbar,
        setCurrentStep,
        setSelectedOptions,
        page,
        setPage,
        breadcrumbs,
        setBreadcrumbs,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};

export { MultiStepFormContext };
