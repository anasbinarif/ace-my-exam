'use client';
import type { Content } from "@/entities";
import { CollapseContainer, InnerCollapse } from "@/features/resources/resources-tables/ResourceTables.style";
import { useGetResources } from "@/hooks/resources/useResources";
import { ResourceType } from "@/types/resources";
import { AccordionSummary, Box, IconButton, styled } from "@mui/material";
import React, { useEffect } from "react";

import ReplayIcon from "@mui/icons-material/Replay";

interface ContentSelectionFormProps {
  subject: string;
  resourceType: ResourceType;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<string>>;
}

const ContentSelectionForm: React.FC<ContentSelectionFormProps> = ({ subject, resourceType, setSelectedSubtopic }) => {
  const { data, isLoading, refetch } = useGetResources(parseInt(subject));

  useEffect(() => {
    refetch();
  }, [subject, resourceType]);

  if (!data || isLoading) return <div>Loading...</div>;

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", top: "-10px", right: "10px", zIndex: 10 }}>
        <IconButton onClick={() => refetch()}>
          <ReplayIcon />
        </IconButton>
      </Box>
      {data.chapters?.map((child) => <RecursiveContentRender setSelectedSubtopic={setSelectedSubtopic} data={child} />)}
    </Box>
  );
};

export default ContentSelectionForm;

type RecursiveContentRenderProps = {
  data: Content;
  setSelectedSubtopic: React.Dispatch<React.SetStateAction<string>>;
};
const RecursiveContentRender = ({ data, setSelectedSubtopic }: RecursiveContentRenderProps) => {
  if (data.level === 3) return <ResourceItem onClick={() => setSelectedSubtopic(data.id.toString())}>{data.name}</ResourceItem>;

  return (
    <CollapseContainer>
      <ResourceHeading>{data.name}</ResourceHeading>

      <InnerCollapse>
        {data.children?.map((child) => <RecursiveContentRender data={child} setSelectedSubtopic={setSelectedSubtopic} />)}
      </InnerCollapse>
    </CollapseContainer>
  );
};

export const ResourceHeading = styled(AccordionSummary)(() => ({
  color: "#000",
  fontSize: "1.4rem",
  fontWeight: 600,
  border: "none",
}));

export const ResourceItem = styled(AccordionSummary)(() => ({
  color: "#333",
  fontSize: "1.2rem",
  fontWeight: 400,
  border: "none",
}));
