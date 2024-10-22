// MUI Imports
import Grid from '@mui/material/Grid';

import CardStatVertical from '@/components/card-statistics/Vertical';
import Award from '@/features/admin/dashboard/Award';
import DepositWithdraw from '@/features/admin/dashboard/DepositWithdraw';
import DistributedColumnChart from '@/features/admin/dashboard/DistributedColumnChart';
import LineChart from '@/features/admin/dashboard/LineChart';
import SalesByCountries from '@/features/admin/dashboard/SalesByCountries';
import Table from '@/features/admin/dashboard/Table';
import TotalEarning from '@/features/admin/dashboard/TotalEarning';
import Transactions from '@/features/admin/dashboard/Transactions';
import WeeklyOverview from '@/features/admin/dashboard/WeeklyOverview';

// Components Imports

const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <WeeklyOverview />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TotalEarning />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title='Total Profit'
              stats='$25.6k'
              avatarIcon='ri-pie-chart-2-line'
              avatarColor='secondary'
              subtitle='Weekly Profit'
              trendNumber='42%'
              trend='positive'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              stats='862'
              trend='negative'
              trendNumber='18%'
              title='New Project'
              subtitle='Yearly Project'
              avatarColor='primary'
              avatarIcon='ri-file-word-2-line'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DistributedColumnChart />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesByCountries />
      </Grid>
      <Grid item xs={12} lg={8}>
        <DepositWithdraw />
      </Grid>
      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  );
};

export default DashboardAnalytics;
