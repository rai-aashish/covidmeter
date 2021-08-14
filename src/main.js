
import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'
import router from './router'
import axios from 'axios';

axios.defaults.baseURL = 'https://disease.sh/v3/covid-19/'
createApp(App).use(router).mount('#app')

