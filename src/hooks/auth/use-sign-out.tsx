import { authClient } from '@/lib/auth-client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useSignOut = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ['sign-out'],
    mutationFn: async () => {
      await authClient.signOut();
    },
    onSuccess: () => {
      toast.success('Signed out ✌️', { id: 'sign-out' });
      router.push('/sign-in');
    },
    onError: (error) => {
      toast.error(error.message, { id: 'sign-out' });
    },
  });
};
