<template>
  <v-app>
    <div style="min-width: 100vw;">
      <!-- Toolbar -->
      <v-app-bar app>
        <v-toolbar-title>ECE:4880 Senior Design</v-toolbar-title>
        <v-btn text to="/" style="margin-left: 1vw;">Home</v-btn>
        <v-btn text to="/login" style="margin-left: 1vw;">Login</v-btn>
        <v-menu offset-y>
          <template #activator="{ props }">
            <v-btn color="primary" dark v-bind="props.attrs" @click="props.onClick">
              Student Pages
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in this.items" :key="index" @click="handleItemClick(item.title)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <!-- Main Content -->
      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import { useCookies } from "vue3-cookies";
export default {
  data() {
    return {
      items: [
        { title: 'Samuel Nicklaus' },
        { title: 'Sam Loecke' },
        { title: 'Luke Farmer' },
        { title: 'Cole Arduser' },
      ],
      names: new Map([
        ["Samuel Nicklaus", "/samn"],
        ["Sam Loecke", "/saml"],
        ["Luke Farmer", "lukef"],
        ["Cole Arduser", "colea"]
      ]),
    }
  },
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  mounted() {
    if (!this.cookies.isKey("isAdmin")) {
      this.cookies.set("isAdmin", 'f')
    }
    if(!this.cookies.isKey("fail")){
      this.cookies.set("fail", 'f')
    }
    if(this.cookies.get("fail") == 't'){
      console.log("failure")
      //notfiy user with alert
    }
  },
  methods: {
    handleItemClick(title) {
      console.log("Selected option:", title);
    },
  },
}
</script>

<style>
body,
html,
#app {
  margin: 0 !important;
  padding: 0;
}

.v-main {
  height: calc(100vh);
  overflow-y: auto;
}
</style>
