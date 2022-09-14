import refs from './refs';
import NewApiServise from './api-servise';
import { save, load, remove } from './storageServise';

import { filmId, filmData } from './movieModal';
const key = 'watched';
refs.mainList.addEventListener('click', onModalClick); // слухаєм клік по списку фільмів

function onModalClick(e) {
  const modalEl = e.target.nodeName; // знаходжу на який елемент клікнули (нас цікавить img і p бо при клікі по ним відкривається модалка)
  if (modalEl === 'IMG' || modalEl === 'P') {
    console.log('open modal'); // перевіряю чи відкрилась модалка
    refs.modalFilmInfoRef.addEventListener('click', onWatchedBtnClick);
    // refs.modalFilmInfoRef.addEventListener('click', onQueueBtnClick);
  }
  return;
}

function onWatchedBtnClick(e) {
  if (e.target.className === 'modal-btn modal-film_btn-watched') {
    controlReapet(filmData, key);
  }
}

function controlReapet(film, key) {
  let filmid = film.map(e => e.id);

  const filterfilm = [...new Set(filmid)];
  let uniqFilm = [];

  for (let i = 0; i < filterfilm.length; i += 1) {
    let uniqFilmId = filterfilm[i];
    let searchUniqFilm = film.find(option => option.id === uniqFilmId);
    uniqFilm.push(searchUniqFilm);
  }
  save(key, uniqFilm);
}

// function onWatchedSavedCheck() {
//   const savedFilm = [...load(key)];
//   let savedFilmID = savedFilm.map(e => e.id);
//   console.log('savedfilm', savedFilmID);
// }

// onWatchedSavedCheck();

// function inList(id, list) {
//   let arrList = [];
//   let localListJson = list;
//   if (localListJson) {
//     arrList = [...localListJson];
//   }
//   const listSet = new Set(arrList);
//   return listSet;
//   //   return listSet.has(id);
// }
