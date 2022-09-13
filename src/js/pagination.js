import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import refs from './refs';
import NewApiServise from './api-servise';

import { createMovieCard } from './cardTemplates';

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
};

const container = document.querySelector('#pagination');
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();
const newsApiServise = new NewApiServise();
newsApiServise
  .getTrendingMovies()
  .then(({ total_results }) => {
    pagination.reset(total_results);
  })
  .catch(error => console.log(error.message));

pagination.on('afterMove', updatePagination);

function updatePagination(e) {
  newsApiServise.setPage(e.page);
  console.log(newsApiServise.page);
  newsApiServise
    .getTrendingMovies()
    .then(data => {
      const movieCard = createMovieCard(data.results);
      return movieCard;
    })
    .then(data => {
      refs.mainList.innerHTML = data;
    });
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
