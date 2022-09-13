import refs from './refs';
import NewApiServise from './api-servise';
import { save, load, remove } from './storageServise';

import { filmId, filmData } from './movieModal';

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
    let watchedFilms = load('watched');
    let numFilmId = Number(filmId);

    if (watchedFilms === null) {
      localStorage.setItem('watched', JSON.stringify(filmData));
      watchedFilms = filmData;
      return console.log(watchedFilms);
    }
    checkByID(watchedFilms, numFilmId);
  }
}

function checkByID(data, id) {
  let objID = 0;
  data.filter(eleme => {
    return (objID = eleme.id);
  });
  console.log('objID', objID);
  console.log(id);
  if (objID !== id) {
    console.log('new film');
    console.log(data);
  }
}
// function onQueueBtnClick(e) {
//   if (e.target.className === 'modal-btn modal-film_btn-queue') {
//     console.log('click queue');
//     console.log('queue', filmData.id);
//   }
// }

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
