'use client';

import {
  IconButton,
  Box,
} from '@mui/material';
import { RevisionNoteResourceType } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

import { useSnackbar } from 'contexts/SnackbarContext';
import useMultiStepForm from 'hooks/useMultiStepper';
import { handleDownload } from 'utils/handleDownload';

import {
  ChapterHeading,
  CollapseContainer,
  InnerCollapse,
  RessourcesTableHeading,
  SubtopicHeading,
  TopicHeading,
  ExpandIconHead
} from './ResourceTables.style';
import { PaginationHead, ResourcesPara, ResourcesSubHeading } from '../../../app/(main)/resources/Resources.style';
import { StyledPagination } from '../../../components/pagination/Pagination.style';
import { ContentWithChildren } from '../../../types/content';

const RevisionNotesTable: React.FC<{ data: ContentWithChildren[]; isLoading: boolean }> = ({ data }) => {
  const { showSnackbar } = useSnackbar();
  const { page, setPage } = useMultiStepForm();
  
  const getDownloadUrl = (data: ContentWithChildren, resourceType: RevisionNoteResourceType) => {
    if (data.revisionNotes && data.revisionNotes[0]?.resources)
      return data.revisionNotes[0].resources.find((resource) => resource.resource_type === resourceType)?.resource.url || '';

    return '';
  };

  return (
    <Box>
      <Box sx={{ mt: { xs: '20px', sm: '30px' } }}>
        <ResourcesSubHeading>Revision Notes</ResourcesSubHeading>
        <ResourcesPara variant="body1" sx={{ textAlign: 'start' }}>
          Select the Content
        </ResourcesPara>
      </Box>
      <Box sx={{ overflow: { xs: 'auto', lg: 'hidden' }, width: '100%' }}>
        <Box sx={{ minWidth: 700 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0 }}>
            <RessourcesTableHeading>Name</RessourcesTableHeading>
            <RessourcesTableHeading>Download</RessourcesTableHeading>
          </Box>
          <Box>
            {data.map((chapter, index) => (
              <CollapseContainer key={index}>
                <ChapterHeading 
                  expandIcon={
                    <ExpandIconHead>
                      <Image
                        src="/icons/down.svg" 
                        alt="Collapse"
                        width={10}
                        height={10}
                      />
                    </ExpandIconHead>
                  }
                  sx={{maxWidth: '515px'}}
                >
                  {index + 1}. {chapter.name}
                </ChapterHeading>

                <InnerCollapse sx={{p:0, mt: '11px'}}>
                  {chapter.children?.map((topic, index2) => (
                    <CollapseContainer key={index2}>
                      <TopicHeading 
                        expandIcon={
                          <ExpandIconHead>
                            <Image
                              src="/icons/down.svg" 
                              alt="Collapse"
                              width={10}
                              height={10}
                            />
                          </ExpandIconHead>
                        }
                        sx={{maxWidth: '530px'}}>
                        {index + 1}.{index2 + 1}. {topic.name}
                      </TopicHeading>

                      <InnerCollapse sx={{py: 0, px: '30px'}}>
                        {topic.children?.map((subtopic, index3) => (
                          <Box key={subtopic.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '4px',py: '2px' }}>
                            <SubtopicHeading sx={{color: '#808080'}}>{index + 1}.{index2 + 1}.{index3 + 1}. {subtopic.name}</SubtopicHeading>
                            {getDownloadUrl(subtopic, RevisionNoteResourceType.NOTE) !== '' ? (
                              <IconButton
                                onClick={() => handleDownload(getDownloadUrl(subtopic, RevisionNoteResourceType.NOTE), `${subtopic.subject_id}_${subtopic.name}_${subtopic.type}`, showSnackbar)}
                                sx={{
                                  color: '#CCC',
                                  fontSize: '20px',
                                  fontWeight: 400,
                                  fontFamily: 'Jost, sans-serif',
                                  border: 'none',
                                  padding: 0,
                                }}
                              >
                                <Image src="/icons/downloadIcon.svg" alt="download" width={20} height={20} />
                              </IconButton>
                            ) : (
                              <Box></Box>
                            )}
                          </Box>
                        ))}
                      </InnerCollapse>
                    </CollapseContainer>
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
          mt: '30px'
        }}
      >
        <StyledPagination count={data.length / 2} page={page} onChange={(_, value) => setPage(value)} />
      </PaginationHead>
    </Box>
  );
};

export default RevisionNotesTable;
