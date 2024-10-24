import { AdminContentBox, AdminContentWrapper } from '@/components/admin/Content.style'
import { AdminPageHeading } from '@/components/admin/Headings.style'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <>
      <AdminPageHeading>Dashboard</AdminPageHeading>
      <AdminContentBox>
        Dashboard
      </AdminContentBox>
    </>
  )
}

export default page