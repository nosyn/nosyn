import { getSession } from '@/actions/auth';
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

  return <main>{children}</main>;
}
