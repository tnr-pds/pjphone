import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyBCRTB-ybmHIagHAmVtW68o7IjDZcbNKvA",
      authDomain: "updatefbpj.firebaseapp.com",
      projectId: "updatefbpj",
      storageBucket: "updatefbpj.appspot.com",
      messagingSenderId: "844155242037",
      appId: "1:844155242037:web:c7ed82efcbfe4b3af6d37c",
      measurementId: "G-CXDSCBN20V"
        }
    firebase.initializeApp(firebaseConfig)
}

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')