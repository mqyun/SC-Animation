import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import audio1 from '../public/btn1.mp3'
import audio2 from '../public/btn2.mp3'

Vue.config.productionTip = false

Vue.prototype.playAudio = (type) => {
  let buttonAudio = document.getElementById('eventAudio')
  if (type === 1) {
    buttonAudio.setAttribute('src', audio1)
  } else if (type === 2) {
    buttonAudio.setAttribute('src', audio2)
  }
  buttonAudio.play()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
