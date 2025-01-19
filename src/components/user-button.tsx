'use client';

import { Button } from '@/components/ui/button';
import { useSignOut } from '@/hooks/auth/use-sign-out';
import { authClient } from '@/lib/auth-client';
import { useQuery } from '@tanstack/react-query';
import { Loader2Icon, LogInIcon, LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function UserButton() {
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => authClient.getSession(),
  });
  const { mutate: signOut, isPending: isSigningOut } = useSignOut();

  const router = useRouter();

  const user = data?.data?.user;

  if (isLoading) {
    return <Loader2Icon size={24} className='animate-spin' />;
  }

  if (!user) {
    return (
      <Button
        variant={'ghost'}
        size={'icon'}
        className={'px-2'}
        onClick={() => router.push('/sign-in')}
      >
        <LogInIcon size={24} />
      </Button>
    );
  }

  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      className={'px-2'}
      onClick={() => {
        signOut();
      }}
      disabled={isSigningOut}
    >
      <LogOutIcon size={24} />
    </Button>
  );
}
