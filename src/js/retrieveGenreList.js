import axios from 'axios';

const KEY = `api_key=7bdc810ad124afd40c6daedecd43d00a`;
const genreList = {};

async function retrieveGenreList() {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?${KEY}&language=en-US`
  );
  data.genres.forEach(genre => (genreList[genre['id']] = genre['name']));
}
retrieveGenreList();
export { genreList };
