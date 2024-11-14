import { getSession } from '@/lib/actions/session.action';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  if (session) {
    redirect('/');
  }

  return (
    <main className='flex h-screen w-full items-center justify-center px-4'>
      {children}
    </main>
  );
}
