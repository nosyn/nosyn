'use client';

import { useMutation } from '@tanstack/react-query';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export const SignOutForm = () => {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey: ['sign-out'],
    mutationFn: async () => {
      await authClient.signOut();
    },
    onSuccess: () => {
      router.push('/sign-in');
    },
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
