import { Suspense } from 'react';
import { ListCarousels } from './_components/list-carousels';

export default async function MoviesPage() {
  return (
    <div className='p-4'>
      <div className='space-y-2'>
        <div className='text-lg font-semibold text-muted-foreground'>
          Trending Movies
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ListCarousels />
        </Suspense>
      </div>
    </div>
  );
}
