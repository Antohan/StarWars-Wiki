export const SIGN_IN = 'SIGN_IN';

export const SET_SHOWING_FILM = 'SET_SHOWING_FILM';

const state = {
  showFilmInfoId: null,
};

const mutations = {
  [SET_SHOWING_FILM]: (state, filmId) => {
    state.showFilmInfoId = filmId;
  },
};

const actions = {
  [SET_SHOWING_FILM]: ({ commit }, filmId) => {
    commit(SET_SHOWING_FILM, filmId);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
