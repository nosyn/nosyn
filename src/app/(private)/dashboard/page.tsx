import { getSession } from '@/actions/auth';
import { SignOutForm } from '@/components/auth-form';

export default async function DashboardPage() {
  const session = await getSession();

  return (
    <div className='p-10 space-y-2'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SignOutForm />
    </div>
  );
}
