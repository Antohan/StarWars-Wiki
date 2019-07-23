<template>
  <section :class="$style.host">
    <header :class="$style.header">
      <router-link :to="{ name: 'home' }">
        <logo style="width:100px;height:60px;" />
      </router-link>
      <button
        type="text"
        :class="$style.menuBtn"
        @click="show = !show">
        <fa-icon icon="bars" />
      </button>

      <router-link
        :to="{name: 'login'}"
        :class="$style.login">
        log in
      </router-link>
    </header>

    <div :class="$style.content">
      <transition name="left-slide">
        <aside
          v-show="show"
          :class="$style.aside">
          <div>
            <router-link
              :to="{name: 'login'}"
              :class="$style.login">
              <div index="1">
                log in
              </div>
            </router-link>
          </div>
        </aside>
      </transition>

      <div style="height:100%;">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import Logo from '@/assets/svg/logo';

export default {
  name: 'DefaultLayout',
  components: {
    Logo,
  },
  data: () => ({
    show: false,
  }),
  computed: {
    ...mapGetters({ isAuth: 'auth/isAuth' }),
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/app.scss";

.host {
  height: 100%;
  min-width: 840px;
  max-width: 1440px;
  margin: 0 auto;
}

.header {
  width: 100%;
  height: 59px;
  padding: 0 30px;
  box-sizing: border-box;
  z-index: 80;
  border-bottom: 1px solid $base-border-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menuBtn {
  font-size: 24px;
  color: $default-color;
  margin: 0 10px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    color: $default-color;
  }
}

.accountLink {
  font-size: 24px;
  cursor: pointer;
}

.login {
  text-decoration: none;
  color: $default-color;
  margin: 0 10px;

  &:hover {
    color: #fff;
  }
}

.content {
  height: calc(100% - 60px);
}

.aside {
  position: absolute;
  left: 0;
  width: 300px;
  height: calc(100% - 60px);
  z-index: 70;
  border-right: 1px solid $base-border-color;
  box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
}
</style>
