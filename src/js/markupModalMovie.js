import NewApiServise from './api-servise';
import refs from './refs';

import { createMovieCard } from './cardTemplates';

const noPosterImg =
  'https://freedesignfile.com/upload/2014/07/Movie-time-design-elements-vector-backgrounds-01.jpg';

refs.mainList.addEventListener('click', onMovieCLick);

const newsApiServise = new NewApiServise();

function moviesByID(movieID) {
  newsApiServise.getMoviesByID(movieID).then(data => {
    createModalFilmInfoMarkup(data);
  });
}

function onMovieCLick(event) {
  refs.modalFilmInfoRef.innerHTML = '';
  const isCard = event.target.closest('.movieCard');
  if (!isCard) {
    return;
  }
  const movieId = isCard.getAttribute('data');
  console.log(movieId);
  openModal();

  moviesByID(movieId);

  document.addEventListener('keydown', onEscClose);
  document.addEventListener('click', onClickClose);
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
}) {
  const genresList = genres.map(genre => genre.name).join(', ');
  refs.modalFilmInfoRef.innerHTML = `<button class="modal__btn-close">
      <svg class="modal__icon-close" width="14" height="14">
        <use href="/src/images/icon.svg#icon-close"></use>
      </svg>
    </button>
  <div class="modal-film__img">
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
        <td class="modal-film__table-value">${genresList}</td>
      </tr>
    </table>
    <h3 class="modal-film__about">About</h3>
    <p class="modal-film__abot-text">${overview}
    </p>
    <ul class="modal-film__container-btn">
      <li>
        <button class="modal-btn modal-film_btn-watched" type="submit">add to watched</button>
      </li>
      <li>
        <button class="modal-btn modal-film_btn-queue" type="submit">add to queue</button>
      </li>
    </ul>
    </div>
</div>
</div>`;
}

function onEscClose(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function onClickClose(event) {
  if (
    event.target === 'modal-film__backdrop' ||
    event.target.id === 'modal__btn-close' ||
    event.target.id === 'modal__icon-close'
  ) {
    closeModal();
  }
}

function openModal() {
  refs.backdropFilmRef.classList.remove('is-hidden');
  refs.modalFilmInfoRef.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
}

function closeModal() {
  refs.backdropFilmRef.classList.add('is-hidden');
  refs.modalFilmInfoRef.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
  document.removeEventListener('click', onClickClose);
  document.removeEventListener('keydown', onEscClose);
}

const body = document.querySelector('body');

body.addEventListener('scroll', vfr);

function vfr() {
  const logo = document.querySelector('.header__logo');
  logo.classList.add('is-hidden');
}
