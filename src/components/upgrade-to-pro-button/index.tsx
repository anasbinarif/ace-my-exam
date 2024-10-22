// MUI Imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import Image from 'next/image';

import themeConfig from '@/utils/configs/themeConfig';

import styles from './styles.module.css';

const TooltipContent = () => {
  return (
    <Card>
      <a href='https://themeselection.com/item/materio-mui-nextjs-admin-template' target='_blank' className='flex' rel="noreferrer">
        <Image
          src='https://cdn.themeselection.com/ts-assets/materio/materio-mui-nextjs-admin-template/banner/banner.png'
          alt='Upgrade to Pro'
          className='w-full'
          width={600}
        />
      </a>
      <CardHeader title={`${themeConfig.templateName} - MUI Next.js Admin Template`} />
      <CardContent>
        <Typography color='textSecondary' className='mbe-4'>
          {`${themeConfig.templateName} Admin is the most developer friendly & highly customizable Admin Dashboard Template based on MUI and Next.js.`}
        </Typography>
        <Typography color='textSecondary'>Click on below button to explore the PRO version.</Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' href={process.env.NEXT_PUBLIC_PRO_URL as string} target='_blank'>
          Demo
        </Button>
        <Button
          variant='outlined'
          href='https://themeselection.com/item/materio-mui-nextjs-admin-template'
          target='_blank'
          className='mis-4'
        >
          Download
        </Button>
      </CardActions>
    </Card>
  );
};

const UpgradeToProButton = () => {
  return (
    <div className={classnames(styles.wrapper, 'mui-fixed')}>
      <Tooltip
        title={<TooltipContent />}
        placement='top-end'
        slotProps={{ tooltip: { style: { padding: 0, backgroundColor: 'transparent', maxInlineSize: 400 } } }}
      >
        <a
          className={styles.button}
          role='button'
          href='https://themeselection.com/item/materio-mui-nextjs-admin-template'
          target='_blank' rel="noreferrer"
        >
          Upgrade to Pro
          <span className={styles.buttonInner} />
        </a>
      </Tooltip>
    </div>
  );
};

export default UpgradeToProButton;
