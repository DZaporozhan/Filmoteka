import { genreList } from './retrieveGenreList';

const basePosterUrl = 'https://image.tmdb.org/t/p/';
const fileSize = `w500`;

function createMovieCard(filmInfo) {
  return filmInfo
    .map(
      ({
        title,
        poster_path,
        genre_ids,
        release_date,
      }) => `<li class="movieCard">
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
