import { createMovieCardFromLocalStorage } from '../cardTemplates';
import refs from '../refs';
import { load } from '../storageServise';
import { onSpinnerDisabled, onSpinnerEnabled } from '../spinner';
import onPageQueue from './settings';
import throttle from 'lodash.throttle';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

const watchedRef = document.querySelector('[data-action="watched"]');

const pagination = {
  start: 0,
  end: 6,
  rendered() {
    this.start = this.end;
    this.end += 6;
  },
  refresh() {
    this.start = 0;
    this.end = 6;
  },
};
let movieData = [];

async function renderWatchedList() {
  try {
    onPageQueue.booleinChange(false);
    refs.mainList.innerHTML = '';
    pagination.refresh();
    onSpinnerEnabled();
    movieData = await load(WATCHED_KEY);
    onSpinnerDisabled();
    const nextRenderList = movieData.slice(pagination.start, pagination.end);
    const list = createMovieCardFromLocalStorage(nextRenderList);
    pagination.rendered();
    refs.mainList.insertAdjacentHTML('beforeend', list);
  } catch (error) {
    console.log(error.message);
  }
}

watchedRef.addEventListener('click', renderWatchedList);

window.addEventListener(
  'scroll',
  throttle(() => {
    if (onPageQueue.get()) return;
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
      const nextRenderList = movieData.slice(pagination.start, pagination.end);
      pagination.rendered();
      const list = createMovieCardFromLocalStorage(nextRenderList);
      refs.mainList.insertAdjacentHTML('beforeend', list);
    }
  }, 300)
);
