<script>
import { useCookies } from "vue3-cookies";

export default{
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  mounted() {
    // let my_cookie_value = this.cookies.get("myCoookie")
    // console.log(my_cookie_value)
    // this.cookies.set("myCoookie", "abcdefg")
  },
}
</script>

<template>
<div id="mainContainer">
    <div class="mainDiv" style="margin-top: 10vh;">
        <v-btn v-on:click="this.$router.push('/cole')">Cole's page</v-btn>
    </div>
    <div class="mainDiv">
        <v-btn v-on:click="this.$router.push('/saml')">Sam Loecke's page</v-btn>
    </div>
    <div class="mainDiv">
        <v-btn v-on:click="this.$router.push('/samn')">Sam Nicklaus's page</v-btn>
    </div>
    <div class="mainDiv">
        <v-btn v-on:click="this.$router.push('/lukef')">Luke's page</v-btn>
    </div>
</div>
</template>

<style>
.mainDiv{
    margin-bottom: 2.5vh;
}
#mainContainer{
    min-width: 100vw;
    min-height: 100vh;
}
</style>
