// MUI Imports
import Grid from '@mui/material/Grid';

// Component Imports
import AccountDelete from './AccountDelete';
import AccountDetails from './AccountDetails';

const Account = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AccountDetails />
      </Grid>
      <Grid item xs={12}>
        <AccountDelete />
      </Grid>
    </Grid>
  );
};

export default Account;
