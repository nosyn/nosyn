'use server';

import { db } from '@/db';
import {
  signUpFormSchema,
  SignUpFormState,
  signInFormSchema,
  SignInFormState,
} from '@/lib/actions/definitions';
import { createSession, deleteSession } from '@/lib/actions/session.action';
import { redirect } from 'next/navigation';
import { hash, compare } from 'bcryptjs';
import { userTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

const SALT_ROUNDS = 10;

export const signUp = async (state: SignUpFormState, formData: FormData) => {
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

  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data;
  // e.g. Hash the user's password before storing it
  const hashedPassword = await _hashPassword(password);

  // 3. Insert the user into the database or call an Auth Library's API
  const data = await db
    .insert(userTable)
    .values({
      name,
      email,
      hashedPassword,
    })
    .returning({ id: userTable.id });

  const user = data[0];

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    };
  }

  // 4. Create user session
  await createSession(String(user.id));

  // 5. Redirect user
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

  // 3. Look up user in the database with email
  const user = await db.query.userTable.findFirst({
    where: eq(userTable.email, email),
  });

  if (!user) {
    return {
      message: 'Invalid credentials.',
    };
  }

  // e.g. Hash the user's password before storing it
  const isValidPassword = await _comparePasswords(
    password,
    user.hashedPassword
  );

  if (!isValidPassword) {
    return {
      message: 'Invalid credentials.',
    };
  }
  console.log('isValidPassword: ', isValidPassword);

  // 4. Create user session
  await createSession(String(user.id));

  // 5. Redirect user
  redirect('/');
};

export async function signOut() {
  await deleteSession();
  redirect('/sign-in');
}

async function _hashPassword(password: string) {
  return hash(password, SALT_ROUNDS);
}

async function _comparePasswords(
  plainTextPassword: string,
  hashedPassword: string
) {
  return compare(plainTextPassword, hashedPassword);
}
