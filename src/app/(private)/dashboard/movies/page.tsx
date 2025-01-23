import { Suspense } from 'react';
import {
  TrendingMoviesCarousel,
  MoviesCarouselSkeleton,
} from './_components/movies-carousel';

export default async function MoviesPage() {
  return (
    <div className='p-4'>
      <div className='space-y-2'>
        <div className='text-lg font-semibold text-muted-foreground'>
          Trending Movies
        </div>
        <Suspense fallback={<MoviesCarouselSkeleton />}>
          <TrendingMoviesCarousel />
        </Suspense>
      </div>
    </div>
  );
}
