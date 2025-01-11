import { SignOutForm } from '@/components/auth-form';
import { getSession } from '@/lib/session';

export default async function DashboardPage() {
  const session = await getSession();

  return (
    <div className='p-10 space-y-2'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SignOutForm />
    </div>
  );
}
