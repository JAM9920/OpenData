import Vue from 'vue'
import router from './router'
import store from "./store";

import BootstrapVue from "bootstrap-vue"

import App from './App'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';
import vSelect from 'vue-select'

import "vue-select/src/scss/vue-select.scss";


Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component('v-select', vSelect)
Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

// router.beforeEach(async (to, _, next) => {
//   // console.log(store.state.access_level, to.meta.access_level)
//   await store.dispatch('checkAuthorization');
//   if (!store.state.Authenticated) {
//     if (to.path !== "/login" && to.path !== '/register' ) {
//       console.log(to.path, 1)
//       next("/login")
//     } else {
//       console.log(to.path, 2)
//       next();
//     }
//   } else {
//     if (to.path === ("/login" || '/register')) {
//       console.log(to.path, 3)
//       next("/directory");
//     } else {
//       console.log(to.path, 4)
//       // if (
//       //   to.meta &&
//       //   !(to.meta.access_level || []).includes(store.state.access_level) &&
//       //   to.path !== "/"
//       // ) {
//         next();
//       // } else {
//       //   next();
//       // }
//     }
//   }
//   // next()
// });

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
