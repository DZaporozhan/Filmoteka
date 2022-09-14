import NewApiServise from './api-servise';
import { createMovieCard } from './cardTemplates';
import refs from './refs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import '/src/sass/components/_pagination.scss';

refs.searchForm.addEventListener('submit', onSearch);

const newsApiServise = new NewApiServise();
const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
};

const container = document.querySelector('#pagination');
const paginationSearch = new Pagination(container, options);

function onSearch(e) {
  e.preventDefault();

  const {
    elements: { searchQuery: keys },
  } = e.currentTarget;

  if (!keys.value) {
    refs.warningOnSearch.textContent = `Please enter a valid movie name!`;
    return;
  }
  const uri = keys.value;
  const encoded = encodeURI(uri);
  console.log(encoded);

  newsApiServise.query = encoded;

  SearchMovies();
}

function SearchMovies() {
  newsApiServise
    .getSearchMovies()
    .then(data => {
      const movieCard = createMovieCard(data.results);
      paginationSearch.reset(data.total_results);
      return movieCard;
    })
    .then(data => {
      if (!data) {
        refs.warningOnSearch.textContent = `Sorry, there are no results found. Try searching for something else!`;
        refs.searchForm.reset();
      } else {
        refs.mainList.innerHTML = '';
        refs.mainList.insertAdjacentHTML('beforeend', data);
        paginationSearch.on('afterMove', updatePagination);
        refs.warningOnSearch.textContent = '';
        refs.searchForm.reset();
      }
    });
}

function updatePagination(e) {
  newsApiServise.setPage(e.page);
  console.log(newsApiServise.page);
  console.log(newsApiServise.query);
  newsApiServise
    .getSearchMovies()
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
