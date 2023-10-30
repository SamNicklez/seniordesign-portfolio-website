<script>
import { useCookies } from "vue3-cookies";

export default{
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
}
</script>

<template>
Hello World
</template>

<style>

</style>
