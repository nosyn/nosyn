'use client';

import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '../ui/tooltip';
import { TanstackQueryProvider } from './tanstack-query-client.provider';
import { ThemeProvider } from './theme-provider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <TanstackQueryProvider>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        <Toaster richColors position='top-center' />
      </ThemeProvider>
    </TanstackQueryProvider>
  );
}
