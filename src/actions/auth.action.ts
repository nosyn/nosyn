'use server';

import { auth } from '@/lib/auth';
import { TSignInForm, TSignUpForm } from '@/schemas/auth.schema';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const signUpAction = async (formData: TSignUpForm) => {
  const { name, email, password } = formData;

  await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });

  redirect('/');
};

export const signInAction = async (formData: TSignInForm) => {
  // 1. Prepare data for insertion into database
  const { email, password } = formData;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch {
    throw new Error('Invalid email or password');
  }
};

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect('/sign-in');
}

export async function getSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}
