import { getSession } from '@/actions/auth.action';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  if (session) {
    redirect('/dashboard');
  }

  return <main>{children}</main>;
}
