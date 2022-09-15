import refs from '../refs';
import { load } from '../storageServise';
import imgPlaceholder from '/src/images/movie-time.jpg';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

// const
const queueRef = document.querySelector('[data-action="queue"]');

refs.mainList.addEventListener('click', onMovieCLick);

async function onMovieCLick(e) {
  try {
    const isCard = e.target.closest('.movieCard');
    if (!isCard) {
      return;
    }
    const filmId = isCard.getAttribute('data');
    console.log(Number(filmId));

    const movieData = await load(QUEUE_KEY);
    console.log(load(QUEUE_KEY));

    const movieId = movieData.find(movie => movie.id === Number(filmId));
    console.log(movieId);
    if (movieId) {
      openModal();
    }

    const modal = createModalFilmMarkup(movieId);

    refs.modalFilmInfoRef.innerHTML = modal;

    document.addEventListener('keydown', onEscClose);
    document.addEventListener('click', onClickClose);
  } catch (error) {
    console.log(error.message);
  }
}

function openModal() {
  refs.backdropFilmRef.classList.remove('is-hidden');
  refs.modalFilmInfoRef.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
}

function createModalFilmMarkup({
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
  const base_url = 'https://image.tmdb.org/t/p/';
  const size = 'w500';
  const genresList = genres.map(genre => genre.name).join(', ');
  return `<button class="modal__btn-close">
     <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        class="modal__icon-close"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
        />
      </svg>
    </button>
  <div div class="modal-film__img">
    <div class="modal-film__wrapper">
    <img
      src="${poster_path ? `${base_url}${size}${poster_path}` : imgPlaceholder}"
      alt="${title}"
      class="modal-film__poster"
      loading="lazy"
    />
    </div>
   
  </div>
  <div class="modal-film__description">
  <h2 class="modal-film__title">${title}</h2>
  <ul class="modal-film__table">
    <li class="modal-film__table-row">
      <p class="modal-film__table-description">Vote / Votes</p>
      <p class="modal-film__table-value">
        <span class="modal-film__table-vote">${vote_average.toFixed(1)}</span
        ><span class="modal-film__table-slash"> / </span
        ><span class="modal-film__table-votes">${vote_count}</span>
      </p>
    </li>
    <li class="modal-film__table-row">
      <p class="modal-film__table-description">Popularity</p>
      <p class="modal-film__table-value popularity-value">${popularity}</p>
    </li>
    <li class="modal-film__table-row">
      <p class="modal-film__table-description">Original Title</p>
      <p class="modal-film__table-value">${original_title}</p>
    </li>
    <li class="modal-film__table-row">
      <p class="modal-film__table-description">Genre</p>
      <p class="modal-film__table-value">${genresList}</p>
    </li>
  </ul>
  <h3 class="modal-film__about">About</h3>
  <p class="modal-film__abot-text">${overview}
  </p>
  
  </div>`;
}

function onEscClose(event) {
  if (event.key === 'Escape') {
    closeModal();
    // onCloseTrailer();
  }
}

function onClickClose(event) {
  if (
    event.target.classList.contains('modal-film__backdrop') ||
    event.target.classList.contains('modal__btn-close') ||
    event.target.classList.contains('modal__icon-close')
  ) {
    closeModal();
  }
}

function closeModal() {
  refs.backdropFilmRef.classList.add('is-hidden');
  refs.modalFilmInfoRef.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
  document.removeEventListener('click', onClickClose);
  document.removeEventListener('keydown', onEscClose);
}

// function getMovieTrailerByIdName(e) {
//   const id = e.target.dataset.id;
//   const name = e.target.dataset.name;
//   new watchTrailer(id, name).showTrailer();
// }

// function onCloseTrailer() {
//   const watchTrailerLightbox = document.querySelector('.basicLightbox');
//   watchTrailerLightbox.remove();
// }

// <div class='modal__trailer-wrapper'>
//   <button class='modal__trailer-btn js-trailer-btn'
//   type='button'
//   data-id='${id}'
//   data-name='${original_title}'>
//   watch trailer
//   </button>
// </div>
