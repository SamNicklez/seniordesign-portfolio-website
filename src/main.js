import './assets/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'

import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
//import router from './router'
import Home from '/src/views/Home.vue'
import Cole from '/src/views/Colea.vue'
import SamL from '/src/views/Saml.vue'
import SamN from '/src/views/Samn.vue'
import LukeF from '/src/views/Lukef.vue'
import Login from '/src/views/Login.vue'
import { globalCookiesConfig } from "vue3-cookies";

globalCookiesConfig({
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
});

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{path:'/',component: Home},{path:'/colea',component: Cole},{path:'/saml',component: SamL},{path:'/samn',component: SamN},{path:'/lukef',component: LukeF},{path:'/login',component: Login}]
  })
  
const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).use(router).mount('#app')