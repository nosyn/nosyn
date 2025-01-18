'use client';

import { TooltipProvider } from '../ui/tooltip';
import { TanstackQueryProvider } from './tanstack-query-client.provider';
import { ThemeProvider } from './theme-provider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <TanstackQueryProvider>
      <ThemeProvider>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </ThemeProvider>
    </TanstackQueryProvider>
  );
}
