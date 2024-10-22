// MUI Imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import Form from '@/components/Form';

// Component Imports

const FormLayoutsWithIcon = () => {
  return (
    <Card>
      <CardHeader title='Basic with Icons' />
      <CardContent>
        <Form>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Name'
                placeholder='John Doe'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-user-3-line' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='email'
                label='Email'
                placeholder='johndoe@gmail.com'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-mail-line' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Phone No.'
                placeholder='123-456-7890'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-phone-fill' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                rows={4}
                multiline
                label='Message'
                placeholder='Bio...'
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-message-2-line' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' type='submit'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormLayoutsWithIcon;
