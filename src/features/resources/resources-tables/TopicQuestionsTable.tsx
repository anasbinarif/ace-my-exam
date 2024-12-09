'use client';

import { Box } from '@mui/material';
import { TopicalQuestionResourceType } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

import { useSnackbar } from 'contexts/SnackbarContext';
import useMultiStepForm from 'hooks/useMultiStepper';
import { handleDownload } from 'utils/handleDownload';

import {
  ChapterHeading,
  CollapseContainer,
  DownloadIconButton,
  InnerCollapse,
  RessourcesTableHeading,
  SubtopicHeading,
  ExpandIconHead,
} from './ResourceTables.style';
import { PaginationHead, ResourcesPara, ResourcesSubHeading } from '../../../app/(main)/resources/Resources.style';
import { StyledPagination } from '../../../components/pagination/Pagination.style';
import { ContentWithChildren } from '../../../types/content';

const TopicQuestionsTable: React.FC<{ data: ContentWithChildren[]; isLoading: boolean }> = ({ data }) => {
  const { showSnackbar } = useSnackbar();
  const { page, setPage } = useMultiStepForm();
  
  const getDownloadUrl = (data: ContentWithChildren, resourceType: TopicalQuestionResourceType) => {
    if (data.topicalQuestions && data.topicalQuestions[0]?.resources)
      return data.topicalQuestions[0].resources.find((resource) => resource.resource_type === resourceType)?.resource.url || '';

    return '';
  };

  return (
    <Box>
      <Box sx={{ mt: { xs: '20px', sm: '30px' } }}>
        <ResourcesSubHeading>Topical Questions</ResourcesSubHeading>
        <ResourcesPara variant="body1" sx={{ textAlign: 'start' }}>
          Select the Content
        </ResourcesPara>
      </Box>
      <Box sx={{ overflow: { xs: 'auto', lg: 'hidden' }, width: '100%' }}>
        <Box sx={{ minWidth: 700 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <RessourcesTableHeading sx={{ flex: '0 0 calc(50%)' }}>Name</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 19%', textAlign: 'center' }}>Download</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 19%' }}>Marking Scheme</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 19%' }}>Answer</RessourcesTableHeading>
            </Box>
          </Box>
          <Box>
            {data.map((topic, index) => (
              <CollapseContainer key={index}>
                <ChapterHeading
                  expandIcon={
                    <ExpandIconHead>
                      <Image src="/icons/down.svg" alt="Collapse" width={10} height={10} />
                    </ExpandIconHead>
                  }
                  sx={{ maxWidth: '352px' }}
                >
                  {index + 1}. {topic.name}
                </ChapterHeading>

                <InnerCollapse sx={{ py: 0, px: '0', mt: '11px' }}>
                  {topic.children?.map((subtopic, index2) => (
                    <Box
                      key={subtopic.id}
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '4px', py: '2px' }}
                    >
                      <SubtopicHeading sx={{ flex: '0 0 50%' }}>{index + 1}.{index2 + 1}. {subtopic.name}</SubtopicHeading>
                      {getDownloadUrl(subtopic, TopicalQuestionResourceType.QUESTION_PAPER) !== '' ? (
                        <DownloadIconButton
                          sx={{ flex: '0 0 16.67%' }}
                          onClick={() => handleDownload(getDownloadUrl(subtopic, TopicalQuestionResourceType.QUESTION_PAPER), `${subtopic.subject_id}_${subtopic.name}_${subtopic.type}`, showSnackbar)}
                        >
                          <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                        </DownloadIconButton>
                      ) : (
                        <Box></Box>
                      )}
                      {getDownloadUrl(subtopic, TopicalQuestionResourceType.MARKING_SCHEME) !== '' ? (
                        <DownloadIconButton
                          sx={{ flex: '0 0 16.67%' }}
                          onClick={() => handleDownload(getDownloadUrl(subtopic, TopicalQuestionResourceType.MARKING_SCHEME), `${subtopic.subject_id}_${subtopic.name}_${subtopic.type}`, showSnackbar)}
                        >
                          <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                        </DownloadIconButton>
                      ) : (
                        <Box></Box>
                      )}
                      {getDownloadUrl(subtopic, TopicalQuestionResourceType.SOLUTION_BOOKLET) !== '' ? (
                        <DownloadIconButton
                          sx={{ flex: '0 0 16.67%' }}
                          onClick={() => handleDownload(getDownloadUrl(subtopic, TopicalQuestionResourceType.SOLUTION_BOOKLET), `${subtopic.subject_id}_${subtopic.name}_${subtopic.type}`, showSnackbar)}
                        >
                          <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                        </DownloadIconButton>
                      ) : (
                        <Box></Box>
                      )}
                    </Box>
                  ))}
                </InnerCollapse>
              </CollapseContainer>
            ))}
          </Box>
        </Box>
      </Box>
      <PaginationHead
        sx={{
          maxWidth: '485px',
          marginLeft: 'auto',
          mt: '30px',
        }}
      >
        <StyledPagination count={data.length / 2} page={page} onChange={(_, value) => setPage(value)} />
      </PaginationHead>
    </Box>
  );
};

export default TopicQuestionsTable;
