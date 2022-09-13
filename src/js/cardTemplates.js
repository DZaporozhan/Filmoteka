// import { retrieveGenreList } from './retrieveGenreList';
// import NewApiServise from './api-servise';
// import refs from './refs';
import axios from 'axios';

const KEY = `api_key=6fe1e9d5fbaeb01db6cc1b91ad7172fe`;
const basePosterUrl = 'https://image.tmdb.org/t/p/';
const noPosterImg =
  'https://freedesignfile.com/upload/2014/07/Movie-time-design-elements-vector-backgrounds-01.jpg';
const fileSize = `w500`;
// const fileSizes = {
//   original: 'w780',
//   tablet: 'w500',
//   mobile: 'w342',
//   main: 'w500',
// };
const genreList = {};

async function retrieveGenreList() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?${KEY}&language=en-US`
    );
    data.genres.forEach(genre => (genreList[genre['id']] = genre['name']));
  } catch (error) {
    console.log(error.message);
  }
}

function generatePosterImgLink(poster_path) {
  if (poster_path === null) {
    return noPosterImg;
  }
  return `${basePosterUrl}${fileSize}${poster_path}`;
}

async function createMovieCard(filmInfo) {
  await retrieveGenreList();
  return filmInfo
    .map(
      ({
        id,
        title,
        poster_path,
        genre_ids,
        release_date,
        vote_average,
      }) => `<li class="movieCard" data="${id}">
      <div class="movieCard__img-wrapper">
      <img src="${generatePosterImgLink(poster_path)}"
        alt="${title} movie poster"
        loading="lazy"
        class="movieCard__img"
      />
      </div>
      <div class="movieCard__text">
        <h2 class="movieCard__title">${title.toUpperCase()}</h2>
        <p class="movieCard__info">${genre_ids
          .map(id => genreList[id])
          .join(', ')} | ${new Date(release_date).getFullYear()}
          <span class="movieCard__rate">${vote_average.toFixed(1)}</span></p>
      </div>
      </li>
`
    )
    .join('');
}

export { createMovieCard };
