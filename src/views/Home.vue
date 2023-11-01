<script>
import { useCookies } from "vue3-cookies";
import { db } from '@/main.js';
import { collection, getDocs } from 'firebase/firestore';
export default {
    data() {
        return {
            items: [],
        }
    },
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    mounted() {
        // let my_cookie_value = this.cookies.get("myCoookie")
        // console.log(my_cookie_value)
        // this.cookies.set("myCoookie", "abcdefg")
    },
    async created(){
        const querySnapshot = await getDocs(collection(db, 'User'));
        this.items = querySnapshot.docs.map(doc => doc.data());
    },
    methods: {
        doStuff() {
            console.log(this.items)
        }
    },
}
</script>

<template>
    <body>
        <v-btn @click="doStuff()">click me</v-btn>
    </body>
</template>

<style>
body,
html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    overflow: hidden;
    /* To ensure no scrollbars appear */
}

.center-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75vh;
    /* 100% of the viewport height */
    width: 100vw;
    /* 100% of the viewport width */
}

.button-container {
    margin: 1vh 0;
    /* Using viewport height units for spacing */
}
</style>
