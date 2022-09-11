import NewApiServise from './api-servise';
import { createMovieCard } from './cardTemplates';
import refs from './refs';

refs.searchForm.addEventListener('submit', onSearch);

const newsApiServise = new NewApiServise();

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
      return movieCard;
    })
    .then(data => {
      if (!data) {
        refs.warningOnSearch.textContent = `Sorry, there are no results found. Try searching for something else!`;
        refs.searchForm.reset();
      } else {
        refs.mainList.innerHTML = '';
        refs.mainList.insertAdjacentHTML('beforeend', data);
        refs.warningOnSearch.textContent = '';
        refs.searchForm.reset();
      }
    });
}
