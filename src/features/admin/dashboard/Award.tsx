// MUI Imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const Award = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Congratulations John! 🎉</Typography>
          <Typography>Best seller of the month</Typography>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            $42.8k
          </Typography>
          <Typography>78% of target 🚀</Typography>
        </div>
        <Button size='small' variant='contained'>
          View Sales
        </Button>
        <Image
          src='/images/pages/trophy.png'
          alt='trophy image'
          width={-1}
          height={102}
          className='absolute inline-end-7 bottom-6'
        />
      </CardContent>
    </Card>
  );
};

export default Award;
