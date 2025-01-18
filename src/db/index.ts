import { drizzle } from 'drizzle-orm/vercel-postgres';
import 'dotenv/config';
import * as schema from './schemas';

export const db = drizzle({
  schema,
});
