import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ofdview from 'ofdview-vue3';
import 'ofdview-vue3/viewer.css'
const setupAll = async () => {
    const app = createApp(App)
    app.use(ofdview);
    app.mount('#app')
}

setupAll()
