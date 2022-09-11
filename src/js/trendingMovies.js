import NewApiServise from './api-servise';
import refs from './refs';
import { createMovieCard } from './cardTemplates';

const newsApiServise = new NewApiServise();
function trendingMovies() {
  newsApiServise
    .getTrendingMovies()
    .then(data => {
      const movieCard = createMovieCard(data.results);
      return movieCard;
    })
    .then(data => {
      refs.mainList.insertAdjacentHTML('beforeend', data);
    });
}

trendingMovies();
