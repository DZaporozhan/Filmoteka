import refs from './refs';
import { save, load, remove } from './storageServise';

import { filmData } from './movieModal';
const KEYWATCH = 'watched';
const KEYQUEUE = 'queue';

refs.mainList.addEventListener('click', onModalClick); // слухаєм клік по списку фільмів

function onModalClick(e) {
  const modalEl = e.target.nodeName; // знаходжу на який елемент клікнули (нас цікавить img і p бо при клікі по ним відкривається модалка)

  if (modalEl === 'IMG' || modalEl === 'P') {
    refs.modalFilmInfoRef.addEventListener('click', onWatchedBtnClick);
    refs.modalFilmInfoRef.addEventListener('click', onQueueBtnClick);
  }
}

function onQueueBtnClick(e) {
  if (e.target.className === 'modal-btn modal-film_btn-queue') {
    savedCheck(filmData, KEYQUEUE);
  }
}

function onWatchedBtnClick(e) {
  if (e.target.className === 'modal-btn modal-film_btn-watched') {
    savedCheck(filmData, KEYWATCH);
  }
}

function savedCheck(film, key) {
  const filmId = film.map(e => e.id);
  let fullFilm = [...filmId];
  if (load(key)) {
    const savedFilmId = load(key);
    let saveToNew = savedFilmId.map(e => e.id);
    console.log('this code');
    savedFilmId.push(...film);
    fullFilm = [...new Set([...filmId, ...saveToNew])];
    film.push(...savedFilmId);
  }
  controlReapet(fullFilm, film, key);
}

function controlReapet(fullFilm, film, key) {
  let uniqFilm = [];
  for (let i = 0; i < fullFilm.length; i += 1) {
    let uniqFilmId = fullFilm[i];
    let searchUniqFilm = film.find(option => option.id === uniqFilmId);
    uniqFilm.push(searchUniqFilm);
  }
  save(key, uniqFilm);
}
