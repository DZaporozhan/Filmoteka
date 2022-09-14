import { createMovieCardFromLocalStorage } from '../cardTemplates';
import refs from '../refs';
import { save, load, remove } from '../storageServise';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';
// const
const watchedRef = document.querySelector('[data-action="watched"]');

async function renderWatchedList() {
  try {
    refs.mainList.innerHTML = '';
    const movieData = await load(WATCHED_KEY);
    console.log(movieData);
    const list = await createMovieCardFromLocalStorage(movieData);
    refs.mainList.insertAdjacentHTML('beforeend', list);
  } catch (error) {
    console.log(error.message);
  }
}

watchedRef.addEventListener('click', renderWatchedList);
