import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './style/style.scss'

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
