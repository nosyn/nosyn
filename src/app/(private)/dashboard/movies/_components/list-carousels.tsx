import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { waitFor } from '@/lib/utils';
import { mockMovies } from './sample-data';
import Image from 'next/image';

const getMovies = async () => {
  //   const queryParams = new URLSearchParams();

  //   queryParams.append('api_key', process.env.TMDB_API_KEY as string);

  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/trending/movie/week?${queryParams.toString()}`
  //   );

  //   if (response.status !== 200) {
  //     throw new Error('Failed to fetch movies');
  //   }

  //   const data = await response.json();

  //   return data;

  await waitFor(300);

  return mockMovies;
};

export async function ListCarousels() {
  const { results } = await getMovies();

  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className='group'>
        {results.map((result, index) => (
          <CarouselItem
            key={index}
            className='md:basis-1/4 lg:basis-1/5 relative hover:transform hover:scale-105 transition-transform'
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
              alt={result.title}
              height={200}
              width={480}
            />
            <div className='absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-center'>
              {result.title}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute h-full right-0 rounded-none left-0' />
      <CarouselNext className='absolute h-full border-none right-0 rounded-none bg-slate-500 hover:bg-slate-700 opacity-60' />
    </Carousel>
  );
}
