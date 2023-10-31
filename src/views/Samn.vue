<script>
import { useCookies } from "vue3-cookies";
// JAVASCRIPT STUFF GOES HERE, examples below
export default {
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
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
    /**
     * Checks if cookie is valid, if it is and user is admin, load the page
     */
    created() {
        if (!this.cookies.isKey("isAdmin") || (this.cookies.isKey("isAdmin") && this.cookies.get("isAdmin"))) {
            this.cookies.set("fail", true)
            this.$router.push('/')
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
