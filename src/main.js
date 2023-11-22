import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import db from './firebase'


const app = createApp(App)

app.use(db)
app.use(router)

app.mount('#app')
