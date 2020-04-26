import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('greet', {
  inserted(el) {
    el.addEventListener('click', () => console.log('Hello'))
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
})