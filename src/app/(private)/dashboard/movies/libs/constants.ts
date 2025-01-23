export const TMDB_API = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE = 'https://image.tmdb.org/t/p/';

export const imageResize = (src: string, dimension: string = 'w200') =>
  `${TMDB_IMAGE}${dimension}${src}`;
export const imageOriginal = (src: string) => `${TMDB_IMAGE}original${src}`;
export const embedMovie = (id: number) => {
  return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
};
export const embedEpisode = (id: number, season: number, episode: number) => {
  return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
};
