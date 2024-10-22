// MUI Imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const AccountDelete = () => {
  return (
    <Card>
      <CardHeader title='Delete Account' />
      <CardContent className='flex flex-col items-start gap-6'>
        <FormControlLabel control={<Checkbox />} label='I confirm my account deactivation' />
        <Button variant='contained' color='error' type='submit'>
          Deactivate Account
        </Button>
      </CardContent>
    </Card>
  );
};

export default AccountDelete;
