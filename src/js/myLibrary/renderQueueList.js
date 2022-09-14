import { createMovieCardFromLocalStorage } from '../cardTemplates';
import refs from '../refs';
import { load } from '../storageServise';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';
// const
const queueRef = document.querySelector('[data-action="queue"]');

async function renderWatchedList() {
  try {
    refs.mainList.innerHTML = '';
    const movieData = await load(QUEUE_KEY);
    console.log(movieData);
    const list = await createMovieCardFromLocalStorage(movieData);
    refs.mainList.insertAdjacentHTML('beforeend', list);
  } catch (error) {
    console.log(error.message);
  }
}

queueRef.addEventListener('click', renderWatchedList);
