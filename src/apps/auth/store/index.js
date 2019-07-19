import { authentication } from '../services/auth-service';

export const SIGN_IN = 'SIGN_IN';

const state = {
  token: null,
  user: {},
};

const getters = {
  isAuth: state => !!state.token,
};

const mutations = {
  [SIGN_IN]: (state, userData) => {
    state.token = userData.idToken;
    state.user = {
      id: userData.localId,
      email: userData.email,
    };
  },
};

const actions = {
  [SIGN_IN]: async ({ commit }, credentials) => {
    try {
      const response = await authentication(credentials);

      commit(SIGN_IN, response);

      return;
    } catch (e) {
      throw e;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
