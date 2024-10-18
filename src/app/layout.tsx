'use client';
import './globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import { SnackbarProvider } from '@/contexts/SnackbarContext';

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
          <SnackbarProvider>
            {children}
          </SnackbarProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
