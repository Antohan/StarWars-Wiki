import { getFilmList } from '../services';

export const SET_SHOWING_FILM = 'SET_SHOWING_FILM';
export const FETCH_FILM_LIST = 'FETCH_FILM_LIST';

const state = {
  showFilmInfoId: null,
  films: [],
};

const mutations = {
  [SET_SHOWING_FILM]: (state, filmId) => {
    state.showFilmInfoId = filmId;
  },

  [FETCH_FILM_LIST]: (state, filmList) => {
    state.films = filmList;
  },
};

const actions = {
  [SET_SHOWING_FILM]: ({ commit }, filmId) => {
    commit(SET_SHOWING_FILM, filmId);
  },

  [FETCH_FILM_LIST]: async ({ commit }) => {
    const filmList = await getFilmList();

    commit(FETCH_FILM_LIST, filmList);
  },
};

const getters = {
  isFilmListEmpty(state) {
    return state.films.length === 0;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
