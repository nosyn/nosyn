import { getSession } from '@/actions/auth.action';
import { SignOutForm } from '@/components/forms/sign-out-form';

export default async function DashboardPage() {
  const session = await getSession();

  return (
    <div className='p-10 space-y-2'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SignOutForm />
    </div>
  );
}
