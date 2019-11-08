import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './style/style.scss'
import SocialSharing from  'vue-social-sharing'

Vue.use(SocialSharing);
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
