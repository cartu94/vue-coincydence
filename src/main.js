import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import firebase from './firebase'

const app = createApp(App)

app.use(firebase)
app.use(router)

app.mount('#app')
