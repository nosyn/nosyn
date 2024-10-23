import { drizzle } from 'drizzle-orm/vercel-postgres';
import 'dotenv/config';
import * as schema from './schema';

export const db = drizzle({
  schema,
});
