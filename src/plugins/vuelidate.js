import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor';

Vue.use(Vuelidate);
Vue.use(VuelidateErrorExtractor, {
  messages: {
    required: 'The {label} field is required',
    email: 'Should be a valid email',
  },
});

Vue.component('FormWrapper', templates.FormWrapper);
