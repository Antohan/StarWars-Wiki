<template>
  <core-section
    route-name="films"
    title="Films"
    description="Movies">
    <films-nameplate
      v-for="(film, index) in films"
      :key="index"
      :active="isActive(film.id)"
      :title="film.title"
      :director="film.director"
      :release-date="film.releaseDate"
      @click="handleFilmClick(film.id)" />
  </core-section>
</template>

<script>
import { mapState } from 'vuex';

import FilmsNameplate from './films-nameplate';

export default {
  components: {
    FilmsNameplate,
  },
  data: () => ({
    films: [
      {
        id: 1,
        title: 'A New Hope',
        director: 'George Lucas',
        releaseDate: '1977-05-25',
      },
      {
        id: 2,
        title: 'The Empire Strikes Back',
        director: 'Irvin Kershner',
        releaseDate: '1980-05-17',
      },
      {
        id: 3,
        title: 'Return of the Jedi',
        director: 'Richard Marquand',
        releaseDate: '1983-05-25',
      },
      {
        id: 4,
        title: 'The Phantom Menace',
        director: 'George Lucas',
        releaseDate: '1999-05-19',
      },
    ],
  }),
  computed: {
    ...mapState('films', { active: ({ showFilmInfoId }) => showFilmInfoId }),
  },
  methods: {
    isActive(filmId) {
      return this.active === filmId;
    },
    handleFilmClick(filmId) {
      this.$emit('show-info', filmId);
    },
  },
};
</script>
