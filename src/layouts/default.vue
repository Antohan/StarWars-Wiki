<template>
  <section :class="$style.host">
    <header :class="$style.header">
      <router-link :to="{ name: 'home' }">
        <logo style="width:100px;height:60px;" />
      </router-link>

      <router-link
        :to="{name: 'login'}"
        :class="$style.login">
        log in
      </router-link>
    </header>

    <div :class="$style.content">
      <router-view />
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
</style>
