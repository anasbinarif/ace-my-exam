'use client';

// Next Imports
import classnames from 'classnames';
import Link from 'next/link';

// Third-party Imports

// Hook Imports
import { verticalLayoutClasses } from '@/components/@layouts/utils/layoutClasses';
import useVerticalNav from '@/components/@menu/hooks/useVerticalNav';

// Util Imports

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav();

  return (
    <div
      className={classnames(verticalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p>
        <span>{`© ${new Date().getFullYear()}, Made with `}</span>
        <span>{`❤️`}</span>
        <span>{` by `}</span>
        <Link href='https://themeselection.com' target='_blank' className='text-primary'>
          ThemeSelection
        </Link>
      </p>
      {!isBreakpointReached && (
        <div className='flex items-center gap-4'>
          <Link href='https://themeselection.com/license' target='_blank' className='text-primary'>
            License
          </Link>
          <Link href='https://themeselection.com' target='_blank' className='text-primary'>
            More Themes
          </Link>
          <Link href={process.env.NEXT_PUBLIC_DOCS_URL as string || ''} target='_blank' className='text-primary'>
            Documentation
          </Link>
          <Link
            href={`https://github.com/themeselection/${process.env.NEXT_PUBLIC_REPO_NAME}/issues`}
            target='_blank'
            className='text-primary'
          >
            Support
          </Link>
        </div>
      )}
    </div>
  );
};

export default FooterContent;
