<template>
  <section style="height:100%;">
    <header :class="$style.header">
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

    <div>
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

      <div :classe="$style.content">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DefaultLayout',
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

.header {
  width: 100%;
  height: 59px;
  z-index: 80;
  border-bottom: 1px solid rgba(255,255,255,0.2);
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

.aside {
  position: absolute;
  left: 0;
  width: 300px;
  height: calc(100% - 60px);
  z-index: 70;
  border-right: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
}

.content {
  height: 100%;
}
</style>
