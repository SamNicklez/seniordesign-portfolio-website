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
            <v-btn v-on:click="this.$router.push('/colea')">Cole's page</v-btn>
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
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    overflow: hidden; /* To ensure no scrollbars appear */
}

.center-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75vh; /* 100% of the viewport height */
    width: 100vw;  /* 100% of the viewport width */
}

.button-container {
    margin: 1vh 0; /* Using viewport height units for spacing */
}

</style>
