'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const signUp = async (formData: FormData) => {
  // 1. Validate form fields
  const validatedFields = signUpFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });

  redirect('/');
};

export const signIn = async (state: SignInFormState, formData: FormData) => {
  // 1. Validate form fields
  const validatedFields = signInFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { email, password } = validatedFields.data;

  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  // 5. Redirect user
  redirect('/');
};

export async function signOut() {
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
