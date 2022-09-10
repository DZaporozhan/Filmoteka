import NewApiServise from './js/api-servise';

const refs = {
  searchForm: document.querySelector('#search-form'),
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

function TrendingMovies() {
  newsApiServise.getTrendingMovies().then(data => console.log(data));
}
TrendingMovies();

function SearchMovies() {
  newsApiServise.getSearchMovies().then(data => console.log(data));
}

let movieID = '616037';
function MoviesByID(movieID) {
  newsApiServise.getMoviesByID(movieID).then(data => console.log(data));
}
MoviesByID(movieID);
