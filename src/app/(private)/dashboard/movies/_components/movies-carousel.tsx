'use client';

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
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CAROUSEL_RESPONSIVE_STYLE =
  'basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6';

export type Movie = {
  title: string;
  poster_path: string;
  vote_average: number;
  id: number;
};

export type MoviesCarouselProps = {
  movies: Movie[];
};

export function MoviesCarousel({ movies }: MoviesCarouselProps) {
  const router = useRouter();

  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start',
      }}
      className='group'
    >
      <CarouselContent>
        {movies.map((result, index) => (
          <CarouselItem
            key={index}
            className={`${CAROUSEL_RESPONSIVE_STYLE} space-y-2 h-fit rounded-md`}
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
              alt={result.title ?? 'Movie Title'}
              width={750}
              height={1200}
              className='border-foreground/30 border cursor-pointer rounded-md'
              onClick={() => {
                router.push(`/dashboard/movies/${result.id}`);
              }}
            />

            <div>
              <Link href={`/dashboard/movies/${result.id}`} className='block'>
                {result.title}
              </Link>
              <Badge>{result.vote_average.toPrecision(2)}</Badge>
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
        <ErrorImage
          key={index}
          className={`${CAROUSEL_RESPONSIVE_STYLE} w-full h-48`}
        />
      ))}
    </div>
  );
}

export function MoviesCarouselSkeleton() {
  return (
    <div className='flex gap-2'>
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton
          key={index}
          className={`${CAROUSEL_RESPONSIVE_STYLE} w-full h-[436px] animate-pulse`}
        />
      ))}
    </div>
  );
}

export function MoviesCarouselPreviousButton() {
  return (
    <CarouselPrevious className='absolute left-2 invisible group-hover:visible top-2/5 border-foreground/30' />
  );
}

export function MoviesCarouselNextButton() {
  return (
    <CarouselNext className='absolute right-2 invisible group-hover:visible top-2/5 border-foreground/30' />
  );
}
