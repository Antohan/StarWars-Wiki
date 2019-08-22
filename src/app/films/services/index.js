import axios from 'axios';

const FILMS_URL = 'https://sw-wiki.firebaseio.com/swapi/films.json';

// eslint-disable-next-line import/prefer-default-export
export async function getFilmList() {
  try {
    const { data } = await axios.get(FILMS_URL);

    const mapData = data.map((film, index) => ({
      id: index + 1,
      title: film.fields.title,
      releaseDate: film.fields.release_date,
      director: film.fields.director,
      episodeId: film.fields.episode_id,
      description: film.fields.opening_crawl,
    }));

    return mapData;
  } catch (error) {
    throw error.error;
  }
}
