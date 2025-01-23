import { ErrorImage } from '@/components/error-image';
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
    return (
      <div className='flex gap-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <ErrorImage key={index} className='basis-1/5 w-full h-48' />
        ))}
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className='group'>
        {trendingMovies.results?.map((result, index) => (
          <CarouselItem key={index} className='basis-1/5 relative pl-0 ml-2'>
            <Image
              src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
              alt={result.title ? result.title : 'Movie Title'}
              width={240}
              height={192}
              className='w-full h-48 rounded-md'
              objectFit='fill'
            />
            <div className='absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-center'>
              {result.title}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute left-0' />
      <CarouselNext className='absolute right-0' />
    </Carousel>
  );
}

export async function MoviesCarouselSkeleton() {
  return (
    <div className='flex gap-2'>
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className='basis-1/5 w-full h-48 animate-pulse' />
      ))}
    </div>
  );
}
