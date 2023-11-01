<script>
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
    <div class="bio">
        <!-- Display Picture -->
        <h1>Samuel Nicklaus</h1>
        <v-carousel style="max-width: 90vw;">
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>

        <!-- Bio Information -->
        <p>Major: Computer Science and Engineering</p>
        <p>Minor: Mathematics</p>

        <!-- External Links (You can fill these in later) -->
        <div class="external-links">
            <a href="#" target="_blank" rel="noopener">Link 1</a>
            <a href="#" target="_blank" rel="noopener">Link 2</a>
            <a href="#" target="_blank" rel="noopener">Link 3</a>
        </div>
    </div>
</template>

<style>
body,
html {
    height: 100%;
    margin: 0;
}

.bio {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Arial', sans-serif;
    text-align: center;
}

.profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
}

.external-links a {
    margin: 10px;
    text-decoration: none;
    color: #2196F3;
}

.external-links a:hover {
    text-decoration: underline;
}
</style>
