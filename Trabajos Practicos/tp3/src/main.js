import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap'
import router from '../node_modules/router'
import axiosInstance from '../node_modules/axios'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axiosInstance
app.mount('#app')

