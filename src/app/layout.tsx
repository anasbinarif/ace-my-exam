'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

import { SnackbarProvider } from '@/contexts/SnackbarContext';
import theme from '@/theme/theme';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>{children}</SnackbarProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
