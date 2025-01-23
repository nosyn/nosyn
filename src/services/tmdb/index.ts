import 'server-only';
import createClient from 'openapi-fetch';
import { paths } from './schema';
import { waitFor } from '@/lib/utils';

class TMDBServices {
  private client: ReturnType<typeof createClient<paths>>;

  constructor() {
    if (!process.env.TMDB_API_KEY) {
      throw new Error('TMDB_API_KEY is required');
    }

    this.client = createClient<paths>({
      baseUrl: 'https://api.themoviedb.org',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    });
  }

  async trendingMovies({
    time_window = 'day',
    language = 'en-US',
  }: {
    time_window?: 'day' | 'week';
    language?: string;
  } = {}) {
    const { data } = await this.client.GET('/3/trending/movie/{time_window}', {
      params: {
        path: {
          time_window,
        },
        query: {
          language,
        },
      },
    });

    await waitFor(3000);

    return data;
  }
}

export const tmdbServices = new TMDBServices();
