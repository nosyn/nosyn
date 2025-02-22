'use server';

import { tmdbServices } from '@/services/tmdb';
import { ErrorMoviesCarousel, Movie, MoviesCarousel } from './movies-carousel';

export async function PopularMoviesCarousel() {
  const popularMovies = await tmdbServices.popularMovies();

  if (!popularMovies) {
    return <ErrorMoviesCarousel />;
  }

  return (
    <MoviesCarousel
      movies={popularMovies?.results ? (popularMovies.results as Movie[]) : []}
    />
  );
}

export async function TopRatedMoviesCarousel() {
  const topRatedMovies = await tmdbServices.topRatedMovies();

  if (!topRatedMovies) {
    return <ErrorMoviesCarousel />;
  }

  return (
    <MoviesCarousel
      movies={
        topRatedMovies?.results ? (topRatedMovies.results as Movie[]) : []
      }
    />
  );
}

export async function TrendingMoviesCarousel() {
  const trendingMovies = await tmdbServices.trendingMovies();

  if (!trendingMovies) {
    return <ErrorMoviesCarousel />;
  }

  return (
    <MoviesCarousel
      movies={
        trendingMovies?.results ? (trendingMovies.results as Movie[]) : []
      }
    />
  );
}
