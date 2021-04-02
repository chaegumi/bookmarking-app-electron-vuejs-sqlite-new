import { createApp } from 'vue'
import App from './App.vue'
import Store from '@/store/index'

createApp(App).use(Store).mount('#mountwrap')
