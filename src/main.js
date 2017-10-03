import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'; 
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost/api-php/';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes, //ou apenas router
  mode: 'history'
});

new Vue({
  el: '#app',
  router, //o mesmo que: {router: router}
  render: h => h(App)
})
