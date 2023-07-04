import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

const app = createApp(App)
window.Kakao.init("4b7991d1b71a33ee1f7a5060a96aed62");
app.use(store)
app.use(router)
app.config.globalProperties.$axios = axios
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app")

