<template>
  <core-section
    route-name="films"
    title="Films"
    description="Movies">
    <div v-if="isFilmListEmpty">
      Loading...
    </div>
    <div
      v-else
      :class="$style.container">
      <div :class="$style.controls">
        <button
          :class="[$style.button, $style.prev]"
          :disabled="activeSlide === 1"
          @click="prevSlide" />
        <button
          :class="[$style.button, $style.next]"
          :disabled="activeSlide === slideCount"
          @click="nextSlide" />
      </div>
      <films-nameplate
        v-for="(film, index) in films"
        :key="index"
        :active="isActive(film.id)"
        :title="film.title"
        :director="film.director"
        :release-date="film.releaseDate"
        :class="$style['film-list']"
        :style="{left: slideOffsetLeft + 'px'}"
        @click="handleFilmClick(film.id)" />
    </div>
  </core-section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import FilmsNameplate from './films-nameplate';

import { FETCH_FILM_LIST } from '../store';

export default {
  components: {
    FilmsNameplate,
  },
  data: () => ({
    slideCount: 0,
    activeSlide: 1,
    slideOffsetLeft: 0,
    slideOffsetStep: 0,
  }),
  computed: {
    ...mapState('films', {
      active: ({ showFilmInfoId }) => showFilmInfoId,
      films: state => state.films,
    }),
    ...mapGetters('films', ['isFilmListEmpty']),
  },
  watch: {
    isFilmListEmpty(val) {
      if (!val) {
        this.initSlider();
      }
    },
  },
  mounted() {
    if (this.isFilmListEmpty) {
      this.getFilmList();
    }

    window.addEventListener('resize', () => {
      this.initSlider();
    });
  },
  methods: {
    ...mapActions({ getFilmList: `films/${FETCH_FILM_LIST}` }),
    isActive(filmId) {
      return this.active === filmId;
    },
    handleFilmClick(filmId) {
      this.$emit('show-info', filmId);
    },
    initSlider() {
      this.slideOffsetStep = 210;
      this.slideCount = this.films.length - 3;
    },
    openSlide(id) {
      if (id > 0 && id <= this.slideCount) {
        this.activeSlide = id;
        this.slideOffsetLeft = -(this.activeSlide * this.slideOffsetStep - this.slideOffsetStep);
      }
    },
    prevSlide() {
      if (this.activeSlide > 1) {
        this.activeSlide -= 1;
        this.openSlide(this.activeSlide);
      }
    },
    nextSlide() {
      if (this.activeSlide < this.slideCount) {
        this.activeSlide += 1;
        this.openSlide(this.activeSlide);
      }
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/_variables.scss";

.container {
  height: 280px;
  width: 840px;
  overflow: hidden;
  display: flex;
}

.controls {
  position: absolute;
  height: inherit;
  width: 840px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .prev {
    left: -40px;

    &::before {
      content: '';
      position: absolute;
      top: 87px;
      left: 0;
      height: 7px;
      width: 60%;
      background: $base-text-color;
      transform: skew(0deg, -75deg);
      transition: all 0.2s linear;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 100px;
      left: 0;
      height: 7px;
      width: 60%;
      background: $base-text-color;
      transform: skew(0deg, 75deg);
      transition: all 0.2s linear;
    }
  }

  .next {
    right: -40px;

    &::before {
      content: '';
      position: absolute;
      top: 87px;
      right: 0;
      height: 7px;
      width: 60%;
      background: $base-text-color;
      transform: skew(0deg, 75deg);
      transition: all 0.2s linear;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 100px;
      right: 0;
      height: 7px;
      width: 60%;
      background: $base-text-color;
      transform: skew(0deg, -75deg);
      transition: all 0.2s linear;
    }
  }

  .button {
    position: relative;
    height: 100%;
    z-index: 10;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      &.prev::before,
      &.prev::after {
        left: -5px;
      }

      &.next::before,
      &.next::after {
        right: -5px;
      }
    }

    &:disabled {
      cursor: default;

      &.prev::before,
      &.prev::after,
      &.next::before,
      &.next::after {
        background: $default-color;
      }

      &:hover {
        &.prev::before,
        &.prev::after {
          left: 0;
        }

        &.next::before,
        &.next::after {
          right: 0;
        }
      }
    }
  }
}

.film-list {
  display: flex;
  position: relative;
  align-items: stretch;
  transition: all .5s ease;
}
</style>
