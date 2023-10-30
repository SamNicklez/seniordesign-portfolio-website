import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
//import router from './router'
import Home from '/src/views/Home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{path:'/',component: Home}]
  })
  

createApp(App).use(createPinia()).use(router).mount('#app')