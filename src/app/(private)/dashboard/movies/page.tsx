import { Suspense } from 'react';
import { MoviesCarouselSkeleton } from './_components/movies-carousel';
import {
  PopularMoviesCarousel,
  TopRatedMoviesCarousel,
  TrendingMoviesCarousel,
} from './_components/movies-carousel-genres';

export default async function MoviesPage() {
  return (
    <div className='space-y-2'>
      <div className='space-y-2'>
        <div className='text-lg font-semibold text-muted-foreground'>
          Trending Movies
        </div>
        <Suspense fallback={<MoviesCarouselSkeleton />}>
          <TrendingMoviesCarousel />
        </Suspense>
      </div>

      <div className='space-y-2'>
        <div className='text-lg font-semibold text-muted-foreground'>
          Popular Movies
        </div>
        <Suspense fallback={<MoviesCarouselSkeleton />}>
          <PopularMoviesCarousel />
        </Suspense>
      </div>

      <div className='space-y-2'>
        <div className='text-lg font-semibold text-muted-foreground'>
          Top Rated Movies
        </div>
        <Suspense fallback={<MoviesCarouselSkeleton />}>
          <TopRatedMoviesCarousel />
        </Suspense>
      </div>
    </div>
  );
}
