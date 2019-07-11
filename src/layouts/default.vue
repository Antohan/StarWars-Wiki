<template>
  <el-container style="height:100%;">
    <el-header :class="$style.header">
      <el-button v-on:click="show = !show" type="text" :class="$style.menuBtn">
        <fa-icon icon="bars" />
      </el-button>

      <el-dropdown v-if="isAuth" trigger="click">
        <span :class="$style.accountLink">
          <fa-icon icon="user-circle" />
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>My Account</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <router-link v-else :to="{name: 'login'}" :class="$style.login">Log in</router-link>
    </el-header>

    <el-container>
      <transition name="left-slide">
        <el-aside v-show="show" :class="$style.aside">
          <el-menu>
            <router-link :to="{name: 'login'}" :class="$style.login">
              <el-menu-item index="1">Log in</el-menu-item>
            </router-link>
          </el-menu>
        </el-aside>
      </transition>

      <el-main :classe="$style.content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
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
  z-index: 80;
  box-shadow: 2px 2px 5px 0 rgba(0,0,0,.095);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menuBtn {
  font-size: 24px;
  color: $base-color;

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
