'use client';

import { useSignOut } from '@/hooks/auth/use-sign-out';
import { Loader2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export const SignOutForm = () => {
  const router = useRouter();
  const { mutate, isPending } = useSignOut();

  return (
    <Button
      onClick={() => {
        mutate(undefined, {
          onSuccess: () => {
            router.push('/sign-in');
          },
        });
      }}
      disabled={isPending}
      variant={'ghost'}
    >
      Sign Out {isPending && <Loader2Icon className='animate-spin' />}
    </Button>
  );
};
