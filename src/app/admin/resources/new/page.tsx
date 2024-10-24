import { AdminContentBox } from '@/components/admin/Content.style'
import { AdminContentHeading } from '@/components/admin/Headings.style'
import AddResourceForm from '@/features/resources/AddResourceForm'

import React from 'react'

const Page = () => {


  return (
    <AdminContentBox>
      <AdminContentHeading>Add New Resource</AdminContentHeading>
      <AddResourceForm />
    </AdminContentBox>
  )
}

export default Page 