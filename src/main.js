import Vue from 'vue';
import App from './App.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import ServerDetails from './ServerDetails.vue';

Vue.component('server-header', Header);
Vue.component('server-footer', Footer);
Vue.component('server-details', ServerDetails);

new Vue({
  el: '#app',
  render: h => h(App)
});
