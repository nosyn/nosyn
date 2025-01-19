import { TSignInForm } from '@/components/forms/sign-in-form';
import { authClient } from '@/lib/auth-client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSignIn = () => {
  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: async ({ email, password }: TSignInForm) => {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      toast.success('Signed in successfully. Moving to dashboard', {
        id: 'sign-in',
      });
    },
    onError: (error) => {
      toast.error(error.message, { id: 'sign-in' });
    },
  });
};
