import refs from './refs';
// import NewApiServise from './api-servise';
import { save, load, remove } from './storageServise';
import { movieId, filmData } from './markupModalMovie';

refs.mainList.addEventListener('click', onModalClick); // слухаєм клік по списку фільмів

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

function onModalClick(e) {
  const modalEl = e.target.nodeName; // знаходжу на який елемент клікнули (нас цікавить img і p бо при клікі по ним відкривається модалка)
  if (modalEl === 'IMG' || modalEl === 'P') {
    console.log('open modal'); // перевіряю чи відкрилась модалка
    refs.modalFilmInfoRef.addEventListener('click', onWatchedBtnClick);
    refs.modalFilmInfoRef.addEventListener('click', onQueueBtnClick);
    // console.log('Айдішка фільму', movieId);
    // console.log('Дата фільму', filmData)
  }
  return;
}

function onWatchedBtnClick(e) {
  if (e.target.className === 'modal-btn modal-film_btn-watched') {
    const watchedFilms = load(WATCHED_KEY);

    inStorageCheck(watchedFilms, WATCHED_KEY);

    // console.log('click watched');
    // console.log(WATCHED_KEY, filmData);
    // save(WATCHED_KEY, filmData);

    // console.log(watchedFilms);

    // watchedFilms.forEach(element => {
    //   // console.log(element.id);
    //   if (element.id !== movieId) {s
    //     save(WATCHED_KEY, filmData);
    //   }
    //   return ;
    // });

    // if (movieId) {
    //   filmData.forEach(element => {
    //     console.log(element.id);
    //     const movieId = element.id;
    //   });

    // load(WATCHED_KEY);
    // }

    // save(WATCHED_KEY, filmData);
  }
}

function inStorageCheck(film, storageKey) {
  if (!inList(movieId, film)) {
    save(storageKey, filmData);
  }
}

function onQueueBtnClick(e) {
  if (e.target.className === 'modal-btn modal-film_btn-queue') {
    const queueFilms = load(QUEUE_KEY);

    inStorageCheck(queueFilms, QUEUE_KEY);
  }
}

function inList(id, list) {
  let arrList = [];
  let localListJson = load(list);
  if (localListJson) {
    arrList = [...localListJson];
  }
  const listSet = new Set(arrList);
  console.log(listSet.has(id));
  return listSet.has(id);
}
