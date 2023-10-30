<script>
import { useCookies } from "vue3-cookies";

export default{
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  mounted() {
    let my_cookie_value = this.cookies.get("myCoookie")
    console.log(my_cookie_value)
  },
}
</script>

<template>
Hello World
</template>

<style>

</style>
