import Vue from 'vue';
import App from './App.vue';
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

Vue.component('server-header', Header);
Vue.component('server-footer', Footer);
Vue.component('server-details', ServerDetails);

new Vue({
  el: '#app',
  render: h => h(App)
});
