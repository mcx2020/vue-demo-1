import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('greet', {
  inserted(el) {
    el.addEventListener('click', () => console.log('Hello'))
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
