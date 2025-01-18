import { getSession } from '@/actions/auth.action';
import { redirect } from 'next/navigation';

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  if (!session) {
    redirect('/sign-in');
  }

  return <main>{children}</main>;
}
