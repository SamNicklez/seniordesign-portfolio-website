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
<body>
    <div class="center-container">
        <div class="button-container">
            <v-btn v-on:click="this.$router.push('/cole')">Cole's page</v-btn>
        </div>
        <div class="button-container">
            <v-btn v-on:click="this.$router.push('/saml')">Sam Loecke's page</v-btn>
        </div>
        <div class="button-container">
            <v-btn v-on:click="this.$router.push('/samn')">Sam Nicklaus's page</v-btn>
        </div>
        <div class="button-container">
            <v-btn v-on:click="this.$router.push('/lukef')">Luke's page</v-btn>
        </div>
    </div>
</body>
</template>

<style>

</style>
