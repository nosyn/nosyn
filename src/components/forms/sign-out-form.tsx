'use client';

import { signOutAction } from '@/actions/auth.action';
import { useMutation } from '@tanstack/react-query';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';

export const SignOutForm = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['sign-out'],
    mutationFn: signOutAction,
    onError: (error) => {
      toast.error(error.message, { id: 'sign-out' });
    },
  });

  return (
    <Button
      onClick={() => {
        mutate();
      }}
      disabled={isPending}
    >
      Sign Out {isPending && <Loader2Icon className='animate-spin' />}
    </Button>
  );
};
