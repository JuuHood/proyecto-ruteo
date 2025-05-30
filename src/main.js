import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// 1) Creamos la aplicación
const app = createApp(App)

// 2) Registramos axios como $http
app.config.globalProperties.$http = axios

// 3) Instalamos el router
app.use(router)

// 4) Montamos la app
app.mount('#app')
