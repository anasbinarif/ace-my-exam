'use client';

// React Imports

// MUI Imports
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import type { SyntheticEvent, ReactElement } from 'react';
import { useState } from 'react';

const AccountSettings = ({ tabContentList }: { tabContentList: { [key: string]: ReactElement } }) => {
  // States
  const [activeTab, setActiveTab] = useState('account');

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value);
  };

  return (
    <TabContext value={activeTab}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TabList onChange={handleChange} variant='scrollable'>
            <Tab label='Account' icon={<i className='ri-user-3-line' />} iconPosition='start' value='account' />
            <Tab
              label='Notifications'
              icon={<i className='ri-notification-3-line' />}
              iconPosition='start'
              value='notifications'
            />
            <Tab label='Connections' icon={<i className='ri-link' />} iconPosition='start' value='connections' />
          </TabList>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={activeTab} className='p-0'>
            {tabContentList[activeTab]}
          </TabPanel>
        </Grid>
      </Grid>
    </TabContext>
  );
};

export default AccountSettings;
