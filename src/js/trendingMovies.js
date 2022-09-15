import NewApiServise from './api-servise';
import refs from './refs';
import { createMovieCard } from './cardTemplates';
import Pagination from 'tui-pagination';
import { onSpinnerDisabled, onSpinnerEnabled } from './spinner';
import 'tui-pagination/dist/tui-pagination.min.css';
import '/src/sass/components/_pagination.scss';

const newsApiServise = new NewApiServise();
const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
};

const container = document.querySelector('#pagination');
const pagination = new Pagination(container, options);
let currentPage = pagination.getCurrentPage();

function trendingMovies(currentPage) {
  newsApiServise.setPage(currentPage);
  onSpinnerEnabled();
  newsApiServise
    .getTrendingMovies()
    .then(data => {
      const movieCard = createMovieCard(data.results);
      pagination.reset(data.total_results);
      return movieCard;
    })
    .then(data => {
      onSpinnerDisabled();
      pagination.on('afterMove', updatePagination);
      refs.mainList.insertAdjacentHTML('beforeend', data);
    });
}

function updatePagination(e) {
  newsApiServise.setPage(e.page);
  currentPage = e.page;
  onSpinnerEnabled();
  newsApiServise
    .getTrendingMovies()
    .then(data => {
      const movieCard = createMovieCard(data.results);
      return movieCard;
    })
    .then(data => {
      onSpinnerDisabled();
      refs.mainList.innerHTML = data;
    });
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

trendingMovies(currentPage);
