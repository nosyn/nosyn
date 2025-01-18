import { getSession } from '@/actions/auth.action';
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
    <main className='flex justify-center items-center h-screen bg-red-50'>
      {children}
    </main>
  );
}
