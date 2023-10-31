<script>
import { useCookies } from "vue3-cookies";
// JAVASCRIPT STUFF GOES HERE, examples below
export default {
    data() {
        return {
            globalVariable: true, //Access the variables in methods by calling this.globalVariable
        }
    },
    methods: {
        doStuff() {
            console.log(this.globalVariable) //prints a global variable
        }
    },
}
</script>

<template>
    <!-- HTML STUFF GOES HERE -->
    <div>
        Hello World
    </div>
</template>

<style>
/* CSS STUFF GOES HERE */
</style>
