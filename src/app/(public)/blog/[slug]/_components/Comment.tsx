import { getSession } from '@/actions/auth.action';

export async function Comment() {
  const session = await getSession();

  console.log('session', session);

  if (!session) {
    return <div>Sign in to comment</div>;
  }

  return <div className='flex flex-col gap-4'>Comment</div>;
}
