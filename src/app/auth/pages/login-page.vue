<template>
  <div :class="$style.host">
    Sing In

    <form-wrapper
      :validator="$v.form"
      :class="$style.form">
      <form
        ref="form"
        :model="form"
        @submit.prevent="submit">
        <core-input
          v-model="form.email"
          :v="$v.form.email"
          :server-errors="serverErrors.email"
          name="email"
          label="Email" />
        <core-input
          v-model="form.password"
          :v="$v.form.password"
          :server-errors="serverErrors.password"
          type="password"
          name="password"
          label="Password" />
        <div :class="$style.controls">
          <button
            class="primary"
            type="submit">
            Submit
          </button>
          <button
            class="secondary"
            type="button"
            @click="$router.push({ name: 'welcome' })">
            back
          </button>
        </div>
      </form>
    </form-wrapper>

    <router-link
      :to="{name: 'registration'}"
      :class="$style.link">
      Registration
    </router-link>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

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
    serverErrors: {},
  }),
  watch: {
    'form.email': {
      handler() {
        if ('email' in this.serverErrors) {
          delete this.serverErrors.email;
        }
      },
    },
    'form.password': {
      handler() {
        if ('password' in this.serverErrors) {
          delete this.serverErrors.password;
        }
      },
    },
  },
  methods: {
    ...mapActions({ signIn: 'auth/SIGN_IN' }),
    handleServerErrors(error) {
      if (error.message === 'INVALID_PASSWORD') {
        this.serverErrors = {
          password: ['Invalid password'],
        };
      }
      if (error.message === 'EMAIL_NOT_FOUND') {
        this.serverErrors = {
          email: ['Email not found'],
        };
      }
    },
    submit() {
      this.$v.$touch();

      if (this.$v.form.$pending || this.$v.form.$error) {
        return;
      }

      this.signIn(this.form)
        .then(() => this.$router.push({ name: 'welcome' }))
        .catch(this.handleServerErrors);
    },
  },
};
</script>

<style lang="scss" module>
.host {
  position: relative;
  width: 300px;
  height: 300px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0px 1px 1px -2px rgba(255, 255, 255, 0.2),
              0px 0px 5px 1px rgba(255, 255, 255, 0.14)
}

.form {
  width: 100%;
}

.controls {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.link {
  margin-bottom: 5px;
  text-decoration: none;
  color: #777;
  font-size: .9rem;

  &:hover {
    color: #fff;
  }
}
</style>
