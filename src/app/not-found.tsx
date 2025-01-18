import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-dvh p-4'>
      <div className='text-center space-y-4'>
        <h1 className='text-6xl font-bold text-primary'>404</h1>
        <h2 className='text-2xl font-semibold '>Page not found</h2>
        <p className='text-lg text-muted-foreground max-w-md'>
          The page you are looking for does not exist.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            href={'/'}
            className='flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to home
          </Link>
        </div>
      </div>
      <footer className='mt-12 text-center text-sm text-muted-foreground'>
        If you think this is a mistake, please contact me at{' '}
        <a href='mailto:biem97@gmail.com' target='_blank'>
          biem97@gmail.com
        </a>
      </footer>
    </div>
  );
}
