import NewApiServise from './api-servise';
import { getWatchedList } from './getWatchedList';
import { getQueueList } from './getQueueList';

const modalFilmInfoRef = document.querySelector('.modal-film');

const noPosterImg =
  'https://freedesignfile.com/upload/2014/07/Movie-time-design-elements-vector-backgrounds-01.jpg';

export async function renderModalFilmInfoMarkup(movie) {
  const response = await getTrendingMovies();
  const modalFilmInfoMarkup = createModalFilmInfoMarkup(movie);
  modalFilmInfoRef.insertAdjacentHTML('beforeend', modalFilmInfoMarkup);
}

function createModalFilmInfoMarkup({
  title,
  popularity,
  original_title,
  vote_average,
  genres,
  poster_path,
  overview,
  vote_count,
  id,
}) {
  const movieGenres = genres.map(genre => {
    return genre.name;
  });
  const queueList = getQueueList();
  let btnWatched = 'add to watched';
  let buttonQueue = 'add to queue';
  buttonQueue = queueList.some(item => item[id])
    ? 'remove queue'
    : 'add to queue';
  const watchedList = getWatchedList();

  if (watchedList.some(item => item[id])) {
    btnWatched = 'Remove watched';
  }
  return ` <div class="modal-film__img">
      <picture class="modal-film__poster">
      <source
          srcset="${poster_path} === null ? noPosterImg :
            https://image.tmdb.org/t/p/original/${poster_path} 1x,
            https://image.tmdb.org/t/p/original/${poster_path} 2x
          "
          media="(min-width: 1024px)"
        />
      <source
          srcset="${poster_path} === null ? noPosterImg :
            https://image.tmdb.org/t/p/w780/${poster_path} 1x,
            https://image.tmdb.org/t/p/w780/${poster_path} 2x
          "
          media="(min-width: 768px)"
        />
      <source
          srcset="${poster_path} === null ? noPosterImg :
            https://image.tmdb.org/t/p/w342/${poster_path} 1x,
            https://image.tmdb.org/t/p/w342/${poster_path} 2x
          "
          media="(min-width: 320px)"
        />

      <img
        src="${poster_path} === null ? noPosterImg : https://image.tmdb.org/t/p/w500/${poster_path}"
        alt="${title}"
        loading="lazy"
        class="modal-film__poster"
      />
      </picture>
    </div>
    <div class="modal-film__description">
    <h2 class="modal-film__title">${title}</h2>
    <table class="modal-film__table">
      <tr class="modal-film__table-row">
        <td class="modal-film__table-description">Vote / Votes</td>
        <td class="modal-film__table-value">
          <span class="modal-film__table-vote">${vote_average}</span
          ><span class="modal-film__table-slash"> / </span
          ><span class="modal-film__table-votes">${vote_count}</span>
        </td>
      </tr>
      <tr class="modal-film__table-row">
        <td class="modal-film__table-description">Popularity</td>
        <td class="modal-film__table-value popularity-value">${popularity}</td>
      </tr>
      <tr class="modal-film__table-row">
        <td class="modal-film__table-description">Original Title</td>
        <td class="modal-film__table-value">${original_title}</td>
      </tr>
      <tr class="modal-film__table-row">
        <td class="modal-film__table-description">Genre</td>
        <td class="modal-film__table-value">${movieGenres}</td>
      </tr>
    </table>
    <h3 class="modal-film__about">About</h3>
    <p class="modal-film__abot-text">${overview}
    </p>
    <ul class="modal-film__container-btn">
      <li>
        <button class="modal-btn modal-film_btn-watched" type="submit">
         ${btnWatched}
        </button>
      </li>
      <li>
        <button class="modal-btn modal-film_btn-queue" type="submit">
         ${buttonQueue}
        </button>
      </li>
    </ul>
    </div>
</div>
</div>`;
}
