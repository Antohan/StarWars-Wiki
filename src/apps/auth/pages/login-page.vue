<template>
  <div :class="$style.auth">
    <router-link :to="{name: 'home'}" :class="[$style.link, $style.back]">x</router-link>

    Sing In

    <form-wrapper :validator="$v.form" :class="$style.form">
      <form @submit.prevent="submit" :model="form" ref="form">
        <core-input v-model="form.email" name="email" label="Email" />
        <core-input v-model="form.password" type="password" name="password" label="Password" />
        <button type="submit">Submit</button>
      </form>
    </form-wrapper>

    <router-link :to="{name: 'registration'}" :class="$style.link">
      Registration
    </router-link>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),
  methods: {
    submit() {
      this.$v.$touch();

      if (this.$v.form.$pending || this.$v.form.$error) {
        return;
      }

      console.log('Form is valid!');
    },
  },
};
</script>

<style lang="scss" module>
.auth {
  position: relative;
  width: 300px;
  height: 300px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
              0px 2px 2px 0px rgba(0,0,0,0.14),
              0px 1px 5px 0px rgba(0,0,0,0.12);
}

.form {
  width: 100%;
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
