'use client';

import { Box } from '@mui/material';
import { PastPaperResourceType } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

import { PastPaperWithResource } from 'app/api/resources/route';
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

const PastPapersTable: React.FC<{ data: PastPaperWithResource[]; isLoading: boolean }> = ({ data }) => {
  const { showSnackbar } = useSnackbar();
  const { page, setPage } = useMultiStepForm();

  const papersByYear = data.reduce((acc, paper) => {
    if (!acc[paper.year]) {
      acc[paper.year] = [];
    }
    acc[paper.year].push(paper);

    return acc;
  }, {} as Record<string, PastPaperWithResource[]>);

  const getDownloadUrl = (data: PastPaperWithResource, resourceType: PastPaperResourceType) => {
    return data.resources.find((resource) => resource.resource_type === resourceType)?.resource.url || '';
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
              <RessourcesTableHeading sx={{ flex: '0 0 calc(50%)' }}>Exam</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 19%', textAlign: 'center' }}>Download</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 19%' }}>Marking Scheme</RessourcesTableHeading>
              <RessourcesTableHeading sx={{ flex: '0 0 19%' }}>Answer</RessourcesTableHeading>
            </Box>
          </Box>
          <Box></Box>
          {Object.keys(papersByYear)
            .slice((page - 1) * 2, page * 2)
            .map((year: string, index: number) => (
              <CollapseContainer key={index}>
                <ChapterHeading
                  expandIcon={
                    <ExpandIconHead>
                      <Image src="/icons/down.svg" alt="Collapse" width={10} height={10} />
                    </ExpandIconHead>
                  }
                  sx={{ maxWidth: '352px' }}
                >
                  {year}
                </ChapterHeading>

                <InnerCollapse sx={{ py: 0, px: '15px', mt: '11px' }}>
                  {papersByYear[year].map((paper) => (
                    <Box
                      key={paper.id}
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '4px', py: '2px' }}
                    >
                      <SubtopicHeading sx={{ flex: '0 0 50%' }}>{paper.title}</SubtopicHeading>
                      {getDownloadUrl(paper, PastPaperResourceType.QUESTION_PAPER) !== '' ? (
                        <DownloadIconButton
                          sx={{ flex: '0 0 16.67%' }}
                          onClick={() =>
                            handleDownload(
                              getDownloadUrl(paper, PastPaperResourceType.QUESTION_PAPER),
                              `${paper.title}_${paper.year}_${PastPaperResourceType.QUESTION_PAPER}`,
                              showSnackbar
                            )
                          }
                        >
                          <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                        </DownloadIconButton>
                      ) : (
                        <Box></Box>
                      )}
                      {getDownloadUrl(paper, PastPaperResourceType.MARKING_SCHEME) !== '' ? (
                        <DownloadIconButton
                          sx={{ flex: '0 0 16.67%' }}
                          onClick={() =>
                            handleDownload(
                              getDownloadUrl(paper, PastPaperResourceType.MARKING_SCHEME),
                              `${paper.title}_${paper.year}_${PastPaperResourceType.MARKING_SCHEME}`,
                              showSnackbar
                            )
                          }
                        >
                          <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                        </DownloadIconButton>
                      ) : (
                        <Box></Box>
                      )}
                      {getDownloadUrl(paper, PastPaperResourceType.SOLUTION_BOOKLET) !== '' ? (
                        <DownloadIconButton
                          sx={{ flex: '0 0 16.67%' }}
                          onClick={() =>
                            handleDownload(
                              getDownloadUrl(paper, PastPaperResourceType.SOLUTION_BOOKLET),
                              `${paper.title}_${paper.year}_${PastPaperResourceType.SOLUTION_BOOKLET}`,
                              showSnackbar
                            )
                          }
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
      <PaginationHead
        sx={{
          maxWidth: '485px',
          marginLeft: 'auto',
          mt: '30px',
        }}
      >
        <StyledPagination count={(Object.values(papersByYear).length / 2)} page={page} onChange={(_, value) => setPage(value)} />
      </PaginationHead>
    </Box>
  );
};

export default PastPapersTable;
