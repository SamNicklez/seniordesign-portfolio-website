<template>
  <v-app>
    <div style="min-width: 100vw;">
      <v-app-bar app>
        <v-toolbar-title>ECE:4880 Senior Design
          <v-chip variant="elevated" :color="this.color" style="margin-left: 5vw;">
            <div v-if="this.loginHandle()">
              Status: Logged In
            </div>
            <div v-else>
              Status: Not Logged In
            </div>
          </v-chip>
        </v-toolbar-title>
        <v-btn text to="/" style="margin-left: 1vw;">Home</v-btn>
        <v-btn style="margin-left: 1vw;" @click="goLogin()">Login</v-btn>
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
      <v-main>
        <v-alert v-if="errorEnable" :type="this.errorType" class="mx-auto" dense>
        {{ this.errorText }}
      </v-alert>
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
        ["Luke Farmer", "/lukef"],
        ["Cole Arduser", "/colea"]
      ]),
      color: "red",
      errorEnable: false,
      errorText: "",
      errorType: "error"
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
    if (!this.cookies.isKey("fail")) {
      this.cookies.set("fail", 'f')
    }
    if (this.cookies.get("fail") == 't') {
      console.log("failure")
    }
  },
  methods: {
    handleItemClick(title) {
      this.$router.push(this.names.get(title)).then(() => {
        if (this.cookies.get("fail") == 't') {
          this.errorText = "Please login before accessing user pages!"
          this.errorType = "info"
          this.errorEnable = true
          this.cookies.set("fail", "f")
        }
        else{
          this.errorEnable = false
        }
      })
    },
    loginHandle() {
      let login = this.cookies.get("isAdmin");
      if (login == 't') {
        this.color = 'green'
        return true
      }
      else {
        this.color = 'red'
        return false
      }
    },
    goLogin(){
      this.errorEnable = false
      this.$router.push('/login')
    }
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
