import NewApiServise from './js/api-servise';
import { createMovieCard } from './js/cardTemplates';
import { theme } from './js/theme';
const refs = {
  searchForm: document.querySelector('#search-form'),
  mainList: document.querySelector('.movieList'),
};

refs.searchForm.addEventListener('submit', onSearch);

const newsApiServise = new NewApiServise();

function onSearch(e) {
  e.preventDefault();

  const {
    elements: { searchQuery: keys },
  } = e.currentTarget;

  if (!keys.value) {
    return;
  }
  const uri = keys.value;
  const encoded = encodeURI(uri);
  console.log(encoded);

  newsApiServise.query = encoded;

  SearchMovies();
}

function trendingMovies() {
  newsApiServise
    .getTrendingMovies()
    .then(data => {
      const movieCard = createMovieCard(data.results);
      return movieCard;
    })
    .then(data => {
      refs.mainList.insertAdjacentHTML('beforeend', data);
    });
}
trendingMovies();

function SearchMovies() {
  newsApiServise
    .getSearchMovies()
    .then(data => {
      const movieCard = createMovieCard(data.results);
      return movieCard;
    })
    .then(data => {
      refs.mainList.innerHTML = '';
      refs.mainList.insertAdjacentHTML('beforeend', data);
    });
}

let movieID = '616037';
function MoviesByID(movieID) {
  newsApiServise.getMoviesByID(movieID).then(data => console.log(data));
}
MoviesByID(movieID);


