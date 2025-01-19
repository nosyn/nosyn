'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSignIn } from '@/hooks/auth/use-sign-in';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { PasswordInput } from '../inputs/password-input';

export const signInFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z.string().min(8, { message: 'Be at least 8 characters long' }),
});

export type TSignInForm = z.infer<typeof signInFormSchema>;

export function SignInForm() {
  const router = useRouter();

  const form = useForm<TSignInForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { mutate: signIn, isPending } = useSignIn();

  const onSubmit = useCallback(
    (values: TSignInForm) => {
      signIn(values, {
        onSuccess: () => {
          router.back();
        },
      });
    },
    [signIn, router]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
        <Card className='mx-auto max-w-sm'>
          <CardHeader>
            <CardTitle className='text-2xl'>Sign In</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id='email'
                        type='email'
                        placeholder='m@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput id='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' disabled={isPending}>
                Sign In {isPending && <Loader2Icon className='animate-spin' />}
              </Button>
              <Button variant='outline' className='w-full' disabled={isPending}>
                Sign In with Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
