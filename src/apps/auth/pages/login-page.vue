<template>
  <div :class="$style.auth">
    <router-link :to="{name: 'home'}" :class="[$style.link, $style.back]">x</router-link>

    <router-link :to="{name: 'registration'}" :class="$style.link">
      Registration
    </router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" module>
.auth {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
              0px 2px 2px 0px rgba(0,0,0,0.14),
              0px 1px 5px 0px rgba(0,0,0,0.12);
}

.link {
  margin-bottom: 5px;
  text-decoration: none;
  color: #3387cc;
  font-size: .9rem;
}

.back {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
