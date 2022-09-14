import { createMovieCard } from '../cardTemplates';
import refs from '../refs';
import { save, load, remove } from './storageServise';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';
const 
const watchedRef = document.querySelector('[data-action="watched"]');

async function renderWatchedList() {
  refs.mainList.innerHTML = '';

  const movieData = await load(WATCHED_KEY);
  console.log(movieData);
}

watchedRef.addEventListener('click', renderWatchedList);
