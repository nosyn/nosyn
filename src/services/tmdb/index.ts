import 'server-only';

export class TMDBServices {
  constructor() {
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.image = 'https://image.tmdb.org/t/p/';
  }

  imageResize(src, dimension = 'w200') {
    return `${this.image}${dimension}${src}`;
  }
}
