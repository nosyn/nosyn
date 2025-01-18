'use client';

import Link from 'next/link';

import { signOut, signUp } from '@/actions/auth.action';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useActionState } from 'react';

export function SignUpForm() {
  const [state, action] = useActionState(signUp, undefined);

  return (
    <form action={action}>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Sign Up</CardTitle>
          <CardDescription>
            Enter your information to register your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                name='name'
                type='text'
                placeholder='John Doe'
                required
              />
              {state?.errors?.name && <p>{state.errors.name}</p>}
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='m@example.com'
                required
              />
              {state?.errors?.email && <p>{state.errors.email}</p>}
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' name='password' type='password' required />
              {state?.errors?.password && (
                <div>
                  <p>Password must:</p>
                  <ul>
                    {state.errors.password.map((error) => (
                      <li key={error}>- {error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {state?.message && <p>{state.message}</p>}
            <SubmitButton>Sign Up</SubmitButton>
          </div>
          <div className='mt-4 text-center text-sm'>
            Already have an account?{' '}
            <Link href='/sign-in' className='underline'>
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

export const SignOutForm = () => {
  const [_state, action] = useActionState(signOut, undefined);

  return (
    <form action={action}>
      <Button>Sign Out</Button>
    </form>
  );
};
