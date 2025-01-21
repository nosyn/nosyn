import { Separator } from '@/components/ui/separator';
import { Comment } from './_components/Comment';

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col gap-4'>
      {children}
      <Separator />
      <Comment />
    </div>
  );
}
