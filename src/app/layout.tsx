import './globals.css';

// import { Jost, Lato } from 'next/font/google';

// const jost = Jost({
//   subsets: ['latin'],
//   weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'], 
//   variable: '--font-jost',
// });

// const lato = Lato({
//   subsets: ['latin'],
//   weight: ['100', '300', '400','700','900'],
//   variable: '--font-lato',
// });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
