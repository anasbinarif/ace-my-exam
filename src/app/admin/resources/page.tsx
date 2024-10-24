import { AdminContentBox } from "@/components/admin/Content.style";
import { AdminContentHeading, AdminPageHeading } from "@/components/admin/Headings.style";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { AddResourceButton } from "./Resources.style";


const Page = () => {
  return (
    <>
      <AdminPageHeading>Resources</AdminPageHeading>
      <AdminContentBox>
        <AddResourceButton
          href="/admin/resources/new"
          passHref
        >
          <AddIcon fontSize="large" />
        </AddResourceButton>

        <AdminContentHeading>Add New Resource</AdminContentHeading>
      </AdminContentBox>
    </>
  );
};

export default Page;
