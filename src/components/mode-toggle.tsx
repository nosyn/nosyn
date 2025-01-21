'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import React from 'react';

export const ModeToggle = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    const { theme, setTheme } = useTheme();

    return (
      <Button
        ref={ref}
        {...props}
        variant='ghost'
        type='button'
        size='icon'
        className={cn('size-8', className)}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <SunIcon className='h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200' />
        <MoonIcon className='hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200' />
      </Button>
    );
  }
);

ModeToggle.displayName = 'ModeToggle';
