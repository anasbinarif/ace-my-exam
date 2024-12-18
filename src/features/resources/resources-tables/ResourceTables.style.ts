'use client';

import { Accordion, AccordionDetails, AccordionSummary, IconButton, styled, Typography } from '@mui/material';

export const ChapterHeading = styled(AccordionSummary)(() => ({
  color: '#000',
  fontSize: '1.8rem',
  fontWeight: 700,
  fontFamily: 'Jost, sans-serif',
  padding: 0,
  margin: 0,
  width: 'max-content',
}));

export const RessourcesTableHeading = styled(Typography)(() => ({
  color: '#000',
  fontSize: '20px',
  fontWeight: 600,
  fontFamily: 'Jost, sans-serif',
  padding: '11px 0',
}));

export const TopicHeading = styled(AccordionSummary)(() => ({
  color: '#000',
  fontSize: '1.6rem',
  fontWeight: 500,
  fontFamily: 'Jost, sans-serif',
  width: 'max-content',
}));

export const CollapseContainer = styled(Accordion)(() => ({
  boxShadow: 'none',
  backgroundColor: 'transparent',
  borderBottom: 'none !important',
  '& .MuiPaper-root':{
  },
  '& .MuiAccordionSummary-content':{
    margin: '0 !important',
    height: 'unset',
    minHeight: 'unset',
  },
  '& .MuiAccordionSummary-root.Mui-expanded':{
    margin: '0 !important',
    height: 'unset',
    minHeight: 'unset',
  }
}));

export const InnerCollapse = styled(AccordionDetails)(() => ({
  marginLeft: '1.5rem',
}));

export const SubtopicHeading = styled(Typography)(() => ({
  color: '#58595B',
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: 'Jost, sans-serif',
  border: 'none',
}));

export const DownloadIconButton = styled(IconButton)(() => ({
  color: '#CCC',
  fontSize: '20px',
  fontWeight: 400,
  fontFamily: 'Jost, sans-serif',
  border: 'none',
  padding: '0'
}));

export const ExpandIconHead = styled(IconButton)({
  borderRadius: '50%',
  width: '15px',
  height: '15px',
  margin: '0 2rem',
  background: 'rgba(255, 221, 220, 0.48)',
  position: 'relative',
  'img':{
    filter: 'brightness(0) saturate(100%)',
    position: 'absolute',
    top: '1.5px',
    left: '3px'
  },
  '&:hover':{
    background: 'rgba(255, 221, 220, 0.48)',
  }
  
});
