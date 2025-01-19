import { authClient } from '@/lib/auth-client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSignOut = () => {
  return useMutation({
    mutationKey: ['sign-out'],
    mutationFn: async () => {
      await authClient.signOut();
    },
    onSuccess: () => {
      toast.success('Signed out ✌️', { id: 'sign-out' });
    },
    onError: (error) => {
      toast.error(error.message, { id: 'sign-out' });
    },
  });
};
