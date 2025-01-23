import { cn } from '@/lib/utils';
import { ImageOffIcon } from 'lucide-react';
import React from 'react';
import { Skeleton } from './ui/skeleton';

export const ErrorImage = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        'flex items-center justify-center flex-col gap-2 rounded-md bg-primary/10',
        className
      )}
    >
      <ImageOffIcon size={48} className='stroke-muted-foreground' />
      <div className='text-base text-muted-foreground'>
        Something went wrong
      </div>
    </div>
  );
};
