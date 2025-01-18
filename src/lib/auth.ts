import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db'; // your drizzle instance
import { nextCookies } from 'better-auth/next-js';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg', // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()], // make sure `nextCookies` is the last plugin in the array,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000', // the base url of your auth server
  trustedOrigins: [process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'], // the base url of your app
});
