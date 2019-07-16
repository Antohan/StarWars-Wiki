<template>
  <section style="height:100%;">
    <header :class="$style.header">
      <button v-on:click="show = !show" type="text" :class="$style.menuBtn">
        <fa-icon icon="bars" />
      </button>

      <router-link :to="{name: 'login'}" :class="$style.login">Log in</router-link>
    </header>

    <div>
      <transition name="left-slide">
        <aside v-show="show" :class="$style.aside">
          <div>
            <router-link :to="{name: 'login'}" :class="$style.login">
              <div index="1">Log in</div>
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
  name: 'defaultLayout',
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
  height: 60px;
  z-index: 80;
  box-shadow: 2px 2px 5px 0 rgba(0,0,0,.095);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menuBtn {
  font-size: 24px;
  color: $base-color;
  margin: 0 10px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    color: $base-color;
  }
}

.accountLink {
  font-size: 24px;
  cursor: pointer;
}

.login {
  text-decoration: none;
  color: $base-color;
  margin: 0 10px;
}

.aside {
  position: absolute;
  left: 0;
  background-color: #f9f9f9;
  width: 300px;
  height: calc(100% - 60px);
  z-index: 70;
  box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
}

.content {
  height: 100%;
}
</style>
