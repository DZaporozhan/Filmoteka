import refs from './refs';
import { save, load, remove } from './storageServise';
import NewApiServise from './api-servise';
// import { filmData } from './movieModal';

const newsApiServise = new NewApiServise();
const KEYWATCH = 'watched';
const KEYQUEUE = 'queue';

refs.mainList.addEventListener('click', onModalClick); // слухаєм клік по списку фільмів

function onModalClick(e) {
  const modalEl = e.target.nodeName; // знаходжу на який елемент клікнули (нас цікавить img і p бо при клікі по ним відкривається модалка)
  const isCard = e.target.closest('.movieCard');
  const movieId = Number(isCard.getAttribute('data'));
  onTakeId(movieId);
  if (modalEl === 'IMG' || modalEl === 'P') {
    refs.modalFilmInfoRef.addEventListener('click', onWatchedBtnClick);
    refs.modalFilmInfoRef.addEventListener('click', onQueueBtnClick);
  }
}
const filmData = [];

function onTakeId(id) {
  newsApiServise.getMoviesByID(id).then(data => {
    filmData.push(data);
    console.log('onmodalclick', filmData);
  });
}

function onWatchedBtnClick(e) {
  if (e.target.className === 'modal-btn modal-film_btn-watched') {
    savedCheck(filmData, KEYWATCH);
    console.log('click on button ', filmData);
  }
}

function onQueueBtnClick(e) {
  if (e.target.className === 'modal-btn modal-film_btn-queue') {
    savedCheck(filmData, KEYQUEUE);
    console.log(filmData);
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
