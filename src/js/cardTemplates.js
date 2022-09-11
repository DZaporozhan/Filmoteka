import { genreList } from './retrieveGenreList';
import NewApiServise from './api-servise';
import refs from './refs';

const basePosterUrl = 'https://image.tmdb.org/t/p/';
const fileSize = `w500`;

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

function createMovieCard(filmInfo) {
  return filmInfo
    .map(
      ({
        id,
        title,
        poster_path,
        genre_ids,
        release_date,
      }) => `<li class="movieCard" data="${id}">
        <img src="${basePosterUrl}${fileSize}${poster_path}" alt="${title} movie poster" class="movieCard__img">
        <p class="movieCard__title">${title.toUpperCase()}</p>
        <p class="movieCard__info">${genre_ids
          .map(id => genreList[id])
          .join(', ')} | ${new Date(release_date).getFullYear()}</p>
      </li>
`
    )
    .join('');
}

export { createMovieCard };