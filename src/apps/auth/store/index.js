const state = {
  token: null,
  user: {},
};

const getters = {
  isAuth: state => !!state.token,
};

export default {
  namespaced: true,
  state,
  getters,
};
