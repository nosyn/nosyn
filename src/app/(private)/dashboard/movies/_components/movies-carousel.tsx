import { ErrorImage } from '@/components/error-image';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { tmdbServices } from '@/services/tmdb';
import Image from 'next/image';

export async function TrendingMoviesCarousel() {
  const trendingMovies = await tmdbServices.trendingMovies();

  if (!trendingMovies) {
    return <ErrorMoviesCarousel />;
  }

  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start',
      }}
      className='group'
    >
      <CarouselContent>
        {trendingMovies.results?.map((result, index) => (
          <CarouselItem key={index} className='basis-1/5 border-red-500'>
            <Image
              src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
              alt={result.title ? result.title : 'Movie Title'}
              width={750}
              height={1125}
              className='border-primary-foreground border'
            />

            <div>
              <div className='text-muted-foreground'>{result.title}</div>
              <Badge variant='secondary'>{result.vote_average}</Badge>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <MoviesCarouselPreviousButton />
      <MoviesCarouselNextButton />
    </Carousel>
  );
}

export async function PopularMoviesCarousel() {
  const popularMovies = await tmdbServices.popularMovies();

  if (!popularMovies) {
    return <ErrorMoviesCarousel />;
  }

  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start',
      }}
      className='group'
    >
      <CarouselContent>
        {popularMovies.results?.map((result, index) => (
          <CarouselItem key={index} className='basis-1/5 border-red-500'>
            <Image
              src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
              alt={result.title ? result.title : 'Movie Title'}
              width={750}
              height={1125}
              className='border-primary-foreground border'
            />

            <div>
              <div className='text-muted-foreground'>{result.title}</div>
              <Badge variant='secondary'>{result.vote_average}</Badge>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <MoviesCarouselPreviousButton />
      <MoviesCarouselNextButton />
    </Carousel>
  );
}

export async function TopRatedMoviesCarousel() {
  const topRatedMovies = await tmdbServices.topRatedMovies();

  if (!topRatedMovies) {
    return <ErrorMoviesCarousel />;
  }

  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start',
      }}
      className='group'
    >
      <CarouselContent>
        {topRatedMovies.results?.map((result, index) => (
          <CarouselItem key={index} className='basis-1/5'>
            <Image
              src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
              alt={result.title ? result.title : 'Movie Title'}
              width={750}
              height={1125}
              className='border-primary-foreground border'
            />

            <div>
              <div className='text-muted-foreground'>{result.title}</div>
              <Badge variant='secondary'>{result.vote_average}</Badge>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <MoviesCarouselPreviousButton />
      <MoviesCarouselNextButton />
    </Carousel>
  );
}

export function ErrorMoviesCarousel() {
  return (
    <div className='flex gap-2'>
      {Array.from({ length: 5 }).map((_, index) => (
        <ErrorImage key={index} className='basis-1/5 w-full h-48' />
      ))}
    </div>
  );
}

export async function MoviesCarouselSkeleton() {
  return (
    <div className='flex gap-2'>
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton
          key={index}
          className='basis-1/5 w-full h-[436px] animate-pulse'
        />
      ))}
    </div>
  );
}

export function MoviesCarouselPreviousButton() {
  return (
    <CarouselPrevious className='absolute left-2 invisible group-hover:visible' />
  );
}

export function MoviesCarouselNextButton() {
  return (
    <CarouselNext className='absolute right-2 invisible group-hover:visible' />
  );
}
