import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/app/auth/store';
import films from '@/app/films/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    films,
  },
});
