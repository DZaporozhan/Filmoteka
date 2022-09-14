import { createMovieCardFromLocalStorage } from '../cardTemplates';
import refs from '../refs';
import { save, load, remove } from '../storageServise';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';
// const
const watchedRef = document.querySelector('[data-action="watched"]');

const pagination = {
  start: 0,
  end: 10,
  rendered: function () {
    this.start = this.end;
    this.end += 10;
  },
};

async function renderWatchedList() {
  try {
    refs.mainList.innerHTML = '';
    const movieData = await load(WATCHED_KEY);
    console.log(movieData);
    const nextRenderList = movieData.splice(pagination.start, pagination.end);
    const list = createMovieCardFromLocalStorage(nextRenderList);
    pagination.rendered();
    refs.mainList.insertAdjacentHTML('beforeend', list);
  } catch (error) {
    console.log(error.message);
  }
}

watchedRef.addEventListener('click', renderWatchedList);

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  console.log('scroll');
  if (clientHeight + scrollTop >= scrollHeight) {
    const nextRenderList = movieData.splice(pagination.start, pagination.end);
    pagination.rendered();
    createMovieCardFromLocalStorage(nextRenderList);
  }
});
