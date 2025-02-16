import { Suspense } from 'react';
import {
  TrendingMoviesCarousel,
  MoviesCarouselSkeleton,
  PopularMoviesCarousel,
  TopRatedMoviesCarousel,
} from './_components/movies-carousel';

export default async function MoviesPage() {
  return (
    <div className='p-4 space-y-4'>
      <TrendingMovies />
      <PopularMovies />
      <TopRatedMovies />
    </div>
  );
}

async function TrendingMovies() {
  return (
    <div className='space-y-2'>
      <div className='text-lg font-semibold text-muted-foreground'>
        Trending Movies
      </div>
      <Suspense fallback={<MoviesCarouselSkeleton />}>
        <TrendingMoviesCarousel />
      </Suspense>
    </div>
  );
}

async function PopularMovies() {
  return (
    <div className='space-y-2'>
      <div className='text-lg font-semibold text-muted-foreground'>
        Popular Movies
      </div>
      <Suspense fallback={<MoviesCarouselSkeleton />}>
        <PopularMoviesCarousel />
      </Suspense>
    </div>
  );
}

async function TopRatedMovies() {
  return (
    <div className='space-y-2'>
      <div className='text-lg font-semibold text-muted-foreground'>
        Top Rated Movies
      </div>
      <Suspense fallback={<MoviesCarouselSkeleton />}>
        <TopRatedMoviesCarousel />
      </Suspense>
    </div>
  );
}
