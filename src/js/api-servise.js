import axios from 'axios';

export default class NewApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.key = 'api_key=6fe1e9d5fbaeb01db6cc1b91ad7172fe';
  }

  async getTrendingMovies() {
    try {
      const url = `https://api.themoviedb.org/3/trending/movie/day?${this.key}`;

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async getSearchMovies() {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?${this.key}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async getMoviesByID(movieID) {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieID}?${this.key}&language=en-US`;

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  //   async retrieveGenreList() {
  //     const genreList = {};
  //     const { data } = await axios.get(
  //       `https://api.themoviedb.org/3/genre/movie/list?${this.key}&language=en-US`
  //     );
  //     data.genres.forEach(genre => (genreList[genre['id']] = genre['name']));
  //     return genreList;
  //   }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
